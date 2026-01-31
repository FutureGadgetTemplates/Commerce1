# Template Usage Guide

## Overview

This is a reusable Jekyll e-commerce template designed to be quickly customized for different online stores. The structure mirrors modern e-commerce sites with a clean navigation system featuring 7 main categories, each with subcategories.

## Template Structure

### 7 Main Categories (Generic Placeholders - CUSTOMIZE THESE!)

The template comes with generic placeholder categories (modify in `_data/categories.yml`):

1. **Category 1** (Tag-based) - New Arrivals, Category 1-2, Limited Edition, On Sale, Category 1-5
2. **Category 2** - Category 2-1, Category 2-2, Category 2-3, Category 2-4, Category 2-5
3. **Category 3** - Category 3-1, Category 3-2, Category 3-3, Category 3-4, Category 3-5
4. **Category 4** - Category 4-1, Category 4-2, Category 4-3, Category 4-4, Category 4-5
5. **Category 5** - Category 5-1, Category 5-2, Category 5-3, Category 5-4, Category 5-5, Category 5-6
6. **Category 6** - Category 6-1, Category 6-2, Category 6-3, Category 6-4
7. **Category 7** - Category 7-1, Category 7-2, Category 7-3, Category 7-4, Category 7-5

**IMPORTANT:**
- Category 1 is special - it uses tags for cross-category features (sales, new items, etc.)
- Replace "Category 2-7" names with your actual product categories!

## Adapting for Different Businesses

The template uses generic "Category 1", "Category 2", etc. Replace these with your actual categories.

### Example 1: Electronics Store

Replace `Category 1` through `Category 7` in `_data/categories.yml` with:

```yaml
- name: "Computers"
  slug: "computers"
  subcategories:
    - name: "Laptops"
      slug: "laptops"
    - name: "Desktops"
      slug: "desktops"
    - name: "Accessories"
      slug: "accessories"

- name: "Mobile Devices"
  slug: "mobile"
  subcategories:
    - name: "Smartphones"
      slug: "smartphones"
    - name: "Tablets"
      slug: "tablets"
    - name: "Cases"
      slug: "cases"
```

### Example 2: Bookstore

```yaml
- name: "Fiction"
  slug: "fiction"
  subcategories:
    - name: "Mystery"
      slug: "mystery"
    - name: "Romance"
      slug: "romance"
    - name: "Sci-Fi"
      slug: "sci-fi"

- name: "Non-Fiction"
  slug: "non-fiction"
  subcategories:
    - name: "Biography"
      slug: "biography"
    - name: "History"
      slug: "history"
```

### Example 3: Clothing Store

```yaml
- name: "Men's Clothing"
  slug: "mens"
  subcategories:
    - name: "Shirts"
      slug: "shirts"
    - name: "Pants"
      slug: "pants"
    - name: "Outerwear"
      slug: "outerwear"

- name: "Women's Clothing"
  slug: "womens"
  subcategories:
    - name: "Dresses"
      slug: "dresses"
    - name: "Tops"
      slug: "tops"
```

### Example 4: Gaming Store (like Forge and Fire Gaming)

```yaml
- name: "Pokemon"
  slug: "pokemon"
  subcategories:
    - name: "Booster Packs"
      slug: "booster-packs"
    - name: "Singles"
      slug: "singles"
    - name: "Graded Cards"
      slug: "graded-cards"

- name: "Magic: The Gathering"
  slug: "magic"
  subcategories:
    - name: "Commander Decks"
      slug: "commander-decks"
    - name: "Sealed Product"
      slug: "sealed-product"
    - name: "Singles"
      slug: "singles"
```

## Quick Customization Checklist

### For Each New Store:

- [ ] Update `_data/site.yml` with store name, tagline, contact info
- [ ] Modify `_data/categories.yml` with your 7 categories
- [ ] Create category pages in `category/` directory
- [ ] Add products to `_products/` directory
- [ ] Replace placeholder images in `assets/images/`
- [ ] Customize colors in `assets/css/style.css`
- [ ] Update social media links
- [ ] Test all navigation links
- [ ] Add your logo to header
- [ ] Configure payment integration
- [ ] Set up analytics

## File Reference

### Must Edit for Each Store:
- `_data/site.yml` - Store information
- `_data/categories.yml` - Category structure
- `assets/css/style.css` - Visual styling

### Products:
- `_products/*.md` - Individual product files

### Category Pages:
- `category/*.md` - Main category pages
- `category/[category]/*.md` - Subcategory pages

### Layouts (usually don't need to edit):
- `_layouts/default.html` - Base template
- `_layouts/category.html` - Category page layout
- `_layouts/product.html` - Product page layout

### Components (rarely need to edit):
- `_includes/header.html` - Site header
- `_includes/navigation.html` - Main navigation
- `_includes/footer.html` - Site footer

## Adding Products

Create a new file in `_products/`:

**Filename:** `product-name.md`

**Content:**
```yaml
---
title: "Your Product Name"
price: 29.99
category: category-slug
subcategory: subcategory-slug
sku: "SKU-001"
stock_status: in-stock
description: "Short product description"
image: /assets/images/product.jpg
---

Detailed product information in markdown format.

## Features
- Feature 1
- Feature 2
- Feature 3
```

## Styling Tips

### Colors
Edit `assets/css/style.css` and search for:
- `#007bff` - Primary blue
- `#2c3e50` - Dark blue/gray
- `#28a745` - Success green
- `#667eea` - Purple gradient

### Fonts
Change the font-family in the `body` selector:
```css
body {
  font-family: 'Your Font', sans-serif;
}
```

### Layout
Adjust grid columns:
```css
.products-grid {
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

## Best Practices

1. **Keep It Simple**: Only customize what's necessary
2. **Consistent Naming**: Use lowercase-with-hyphens for slugs
3. **Image Optimization**: Compress images before uploading
4. **Test Navigation**: Ensure all category links work
5. **Mobile First**: Test on mobile devices
6. **SEO**: Add meta descriptions to products and pages

## Support

For issues or questions:
1. Check SETUP.md for installation problems
2. Review this guide for customization help
3. Check Jekyll documentation: https://jekyllrb.com/docs/
