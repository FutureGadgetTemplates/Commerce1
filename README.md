# E-Commerce Jekyll Template

A flexible, customizable e-commerce template built with Jekyll. Perfect for quickly deploying online stores with a clean, modern design.

**This is a fully generic template** - all categories use placeholder names like "Category 1", "Category 1-1", etc. Simply replace these with your actual product categories to create any type of e-commerce store.

**NEW:** Products can appear in multiple categories! See `MULTI_CATEGORY_SUMMARY.md` for the quick guide.

## Features

- **7 Main Categories** with subcategories (fully customizable with generic placeholders)
- **Multi-category products** using tags (products can appear in multiple categories)
- **Featured/Special categories** (On Sale, New Arrivals, Limited Edition, etc.)
- **Logo support** with automatic placeholder images (default-product-image.jpg)
- **Favicon setup** - Complete placeholder system for all devices and platforms
- **Image management** organized in assets/images/
- Responsive design
- Product pages with detailed views
- Category browsing system with dropdown navigation
- Automatic badges and sale pricing
- Easy customization through YAML data files
- Clean, modern UI
- Template-ready with generic "Category 1", "Category 2", etc. naming

## Quick Start

1. Install dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open your browser to `http://localhost:4000`

## Documentation

📚 **All guides are in the `/guides/` folder** - See [guides/README.md](guides/README.md) for a complete index.

**Quick Links:**
- [Setup & Installation](guides/SETUP.md)
- [Customization Guide](guides/CUSTOMIZATION_QUICK_START.md)
- [Multi-Category Products](guides/MULTI_CATEGORY_SUMMARY.md)
- [Images Guide](guides/IMAGES_GUIDE.md)
- [Favicon Setup](guides/FAVICON_GUIDE.md)
- [Project Structure](guides/STRUCTURE.md)

## Customization

### Site Information
Edit `_data/site.yml` to customize:
- Business name and tagline
- Contact information
- Social media links
- Footer links

### Categories
Edit `_data/categories.yml` to replace generic placeholders:
- Change "Category 1" to your actual category names (e.g., "Electronics", "Clothing", "Books")
- Replace "Category 1-1" subcategories with real names (e.g., "Laptops", "Desktops")
- Update category slugs to match your naming

### Adding Products
Create new files in `_products/` directory:

```yaml
---
title: "Product Name"
price: 29.99
original_price: 39.99        # Optional: for sale items
category: category-slug       # Main category
subcategory: subcategory-slug # Main subcategory
tags:                         # Optional: appear in multiple categories
  - on-sale
  - new-arrival
  - featured
sku: "PRD-001"
stock_status: in-stock
description: "Product description"
image: /assets/images/product.jpg
---

Additional product details in markdown format.
```

**See `MULTI_CATEGORY_GUIDE.md` for details on making products appear in multiple categories using tags.**

### Styling
- Main styles: `assets/css/style.css`
- Modify colors, fonts, and layout as needed

## Structure

```
.
├── _config.yml           # Jekyll configuration
├── _data/
│   ├── categories.yml    # Category structure
│   └── site.yml          # Site settings
├── _includes/
│   ├── header.html       # Site header
│   ├── navigation.html   # Main navigation
│   └── footer.html       # Site footer
├── _layouts/
│   ├── default.html      # Base layout
│   ├── category.html     # Category pages
│   └── product.html      # Product pages
├── _products/            # Product files
├── assets/
│   ├── css/
│   └── js/
├── category/             # Category pages
└── index.html            # Homepage
```

## Creating a New Store

1. Clone this repository
2. Run `bundle install` to install dependencies
3. Update `_data/site.yml` with your store information
4. Replace `assets/images/store-image.jpg` with your logo
5. **Generate and add favicons to `assets/favicons/`**
6. Modify `_data/categories.yml` for your product categories
7. Add your products to `_products/` (organize in folders by category)
8. Add product images to `assets/images/`
9. Customize colors/styles in `assets/css/style.css`

**See [guides/README.md](guides/README.md) for all documentation.**

## Deployment

This template can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any static hosting service

## License

See LICENSE file for details.
