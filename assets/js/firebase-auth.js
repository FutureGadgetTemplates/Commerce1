// Firebase Authentication System
window.FirebaseAuth = {
  currentUser: null,
  userDoc: null,

  // Initialize auth state listener
  init: function() {
    firebaseAuth.onAuthStateChanged((user) => {
      this.currentUser = user;
      this.updateUI();

      if (user) {
        this.loadUserDoc(user.uid);
      } else {
        this.userDoc = null;
      }
    });
  },

  // Sign in with Google
  signIn: async function() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await firebaseAuth.signInWithPopup(provider);
    } catch (error) {
      console.error('Sign in error:', error);
      alert('Sign in failed. Please try again.');
    }
  },

  // Sign out
  signOut: async function() {
    try {
      await firebaseAuth.signOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  },

  // Load user document from Firestore
  loadUserDoc: async function(uid) {
    try {
      const doc = await firebaseDb.collection('users').doc(uid).get();
      if (doc.exists) {
        this.userDoc = doc.data();
      } else {
        // Create user document if it doesn't exist
        await this.createUserDoc();
      }
    } catch (error) {
      console.error('Error loading user doc:', error);
    }
  },

  // Create user document in Firestore
  createUserDoc: async function() {
    if (!this.currentUser) return;

    const userData = {
      email: this.currentUser.email,
      displayName: this.currentUser.displayName,
      photoURL: this.currentUser.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };

    try {
      await firebaseDb.collection('users').doc(this.currentUser.uid).set(userData);
      this.userDoc = userData;
    } catch (error) {
      console.error('Error creating user doc:', error);
    }
  },

  // Update Stripe customer ID in Firestore
  setStripeCustomerId: async function(customerId) {
    if (!this.currentUser) return;

    try {
      await firebaseDb.collection('users').doc(this.currentUser.uid).update({
        stripeCustomerId: customerId
      });
      this.userDoc.stripeCustomerId = customerId;
    } catch (error) {
      console.error('Error updating Stripe customer ID:', error);
    }
  },

  // Get Stripe customer ID
  getStripeCustomerId: function() {
    return this.userDoc?.stripeCustomerId || null;
  },

  // Save order to Firestore
  saveOrder: async function(orderData) {
    if (!this.currentUser) return null;

    try {
      const order = {
        userId: this.currentUser.uid,
        userEmail: this.currentUser.email,
        ...orderData,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      const docRef = await firebaseDb.collection('orders').add(order);
      return docRef.id;
    } catch (error) {
      console.error('Error saving order:', error);
      return null;
    }
  },

  // Get user's orders
  getOrders: async function() {
    if (!this.currentUser) return [];

    try {
      const snapshot = await firebaseDb
        .collection('orders')
        .where('userId', '==', this.currentUser.uid)
        .orderBy('createdAt', 'desc')
        .get();

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('Error fetching orders:', error);
      return [];
    }
  },

  // Update UI based on auth state
  updateUI: function() {
    const authContainer = document.getElementById('auth-container');
    if (!authContainer) return;

    if (this.currentUser) {
      authContainer.innerHTML = `
        <div class="user-menu">
          <button class="user-menu-toggle" onclick="FirebaseAuth.toggleMenu()">
            <img src="${this.currentUser.photoURL || '/assets/images/default-avatar.jpg'}"
                 alt="${this.currentUser.displayName}"
                 class="user-avatar"
                 onerror="this.src='/assets/images/default-avatar.jpg'">
            <span class="user-name">${this.currentUser.displayName?.split(' ')[0] || 'Account'}</span>
          </button>
          <div class="user-dropdown" id="user-dropdown">
            <a href="/account/" class="dropdown-item">My Account</a>
            <a href="/account/#orders" class="dropdown-item">Order History</a>
            <button class="dropdown-item" onclick="FirebaseAuth.signOut()">Sign Out</button>
          </div>
        </div>
      `;
    } else {
      authContainer.innerHTML = `
        <button class="sign-in-btn" onclick="FirebaseAuth.signIn()">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          Sign In
        </button>
      `;
    }
  },

  // Toggle user dropdown menu
  toggleMenu: function() {
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
      dropdown.classList.toggle('show');
    }
  }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  FirebaseAuth.init();

  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('user-dropdown');
    if (userMenu && dropdown && !userMenu.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
});
