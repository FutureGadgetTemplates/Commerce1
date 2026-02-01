// Stripe Cart System
window.StripeCart = {
  // Get unique cart key for this site
  getCartKey: function() {
    const siteId = window.StripeConfig?.siteId || 'default';
    return 'cart_' + siteId;
  },

  // Get cart from localStorage
  getCart: function() {
    const cart = localStorage.getItem(this.getCartKey());
    return cart ? JSON.parse(cart) : [];
  },

  // Save cart to localStorage
  saveCart: function(cart) {
    localStorage.setItem(this.getCartKey(), JSON.stringify(cart));
    this.updateCartUI();
  },

  // Clear cart
  clearCart: function() {
    localStorage.removeItem(this.getCartKey());
    this.updateCartUI();
  },

  // Add item to cart
  addToCart: function(productId, name, price, image) {
    const cart = this.getCart();
    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({
        productId: productId,
        name: name,
        price: parseFloat(price),
        image: image || '',
        quantity: 1
      });
    }

    this.saveCart(cart);
    this.showNotification(name + ' added to cart!');
  },

  // Remove item from cart
  removeFromCart: function(productId) {
    let cart = this.getCart();
    cart = cart.filter(item => item.productId !== productId);
    this.saveCart(cart);
  },

  // Update item quantity
  updateQuantity: function(productId, quantity) {
    const cart = this.getCart();
    const item = cart.find(item => item.productId === productId);

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveCart(cart);
      }
    }
  },

  // Get cart total
  getCartTotal: function() {
    const cart = this.getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  },

  // Get cart item count
  getCartCount: function() {
    const cart = this.getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
  },

  // Toggle cart dropdown
  toggleCart: function() {
    const dropdown = document.getElementById('cart-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('dn');
      dropdown.classList.toggle('db');
    }
  },

  // Update cart UI
  updateCartUI: function() {
    const cart = this.getCart();
    const count = this.getCartCount();
    const total = this.getCartTotal();

    // Update cart count badge
    const countElements = document.querySelectorAll('.cart-count');
    countElements.forEach(el => {
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });

    // Update cart total
    const totalElements = document.querySelectorAll('.cart-total');
    totalElements.forEach(el => {
      el.textContent = '$' + total.toFixed(2);
    });

    // Update cart items list
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
      if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart-message">Your cart is empty</p>';
      } else {
        cartItemsContainer.innerHTML = cart.map(item => `
          <div class="cart-item" data-product-id="${item.productId}">
            <div class="cart-item-info">
              ${item.image ? `<img src="${item.image}" alt="${item.name}" class="cart-item-image">` : ''}
              <div class="cart-item-details">
                <span class="cart-item-name">${item.name}</span>
                <span class="cart-item-price">$${item.price.toFixed(2)}</span>
              </div>
            </div>
            <div class="cart-item-actions">
              <button class="cart-qty-btn" onclick="StripeCart.updateQuantity('${item.productId}', ${item.quantity - 1})">-</button>
              <span class="cart-item-qty">${item.quantity}</span>
              <button class="cart-qty-btn" onclick="StripeCart.updateQuantity('${item.productId}', ${item.quantity + 1})">+</button>
              <button class="cart-remove-btn" onclick="StripeCart.removeFromCart('${item.productId}')">&times;</button>
            </div>
          </div>
        `).join('');
      }
    }

    // Update checkout button state
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.disabled = cart.length === 0;
    }
  },

  // Show notification
  showNotification: function(message) {
    // Remove existing notification
    const existing = document.querySelector('.cart-notification');
    if (existing) existing.remove();

    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 3000);
  },

  // Checkout - sends cart to Stripe
  checkout: async function() {
    const cart = this.getCart();
    if (cart.length === 0) return;

    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.disabled = true;
      checkoutBtn.textContent = 'Processing...';
    }

    try {
      // Build line items for Stripe
      const lineItems = cart.map(item => ({
        price: item.productId,  // This should be a Stripe Price ID (price_xxx)
        quantity: item.quantity
      }));

      // Debug: log what we're sending
      console.log('Cart contents:', cart);
      console.log('Line items being sent:', lineItems);

      const requestBody = {
        lineItems: lineItems,
        successUrl: window.location.origin + (window.StripeConfig.baseUrl || '') + '/checkout/success/',
        cancelUrl: window.location.origin + (window.StripeConfig.baseUrl || '') + '/checkout/cancel/'
      };
      console.log('Full request body:', requestBody);

      // Send to checkout endpoint
      const response = await fetch(window.StripeConfig.checkoutUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Checkout response error:', response.status, errorData);
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Checkout response:', data);

      if (data.url) {
        // Redirect to Stripe Checkout
        this.clearCart();
        window.location.href = data.url;
      } else if (data.error) {
        throw new Error(data.error);
      } else {
        throw new Error('No checkout URL returned');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      this.showNotification('Checkout failed: ' + error.message);

      if (checkoutBtn) {
        checkoutBtn.disabled = false;
        checkoutBtn.textContent = 'Checkout';
      }
    }
  },

  // Initialize cart on page load
  init: function() {
    this.updateCartUI();

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      const cart = document.querySelector('.stripe-cart');
      const dropdown = document.getElementById('cart-dropdown');
      if (cart && dropdown && !cart.contains(e.target)) {
        dropdown.classList.add('dn');
        dropdown.classList.remove('db');
      }
    });
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  StripeCart.init();
});
