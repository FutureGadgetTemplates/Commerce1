---
title: "Example Product 4 - Multi-Category Demo"
price: 59.99
original_price: 89.99
category: category-2
subcategory: category-2-3
sku: "PROD-004"
stock_status: in-stock
description: "This product demonstrates appearing in MULTIPLE categories via tags."
tags:
  - on-sale
  - featured
  - new-arrival
# No image - will use default-product-image.jpg placeholder
---

## Multi-Category Product Example

This product demonstrates the full power of the tagging system.

### Where This Product Appears:

1. **Category 2 > Category 2-3** (Main category - always appears here)
2. **Featured > On Sale** (via "on-sale" tag)
3. **Featured > Featured Products** (via "featured" tag)
4. **Featured > New Arrivals** (via "new-arrival" tag)

### Visual Enhancements:

- **Badges:** Shows "SALE" and "FEATURED" badges
- **Pricing:** Displays ~~$89.99~~ $59.99 with strike-through
- **Same Product:** All category pages link to this same product page

### How to Use This Pattern:

```yaml
tags:
  - on-sale           # Adds to "On Sale" category
  - featured          # Adds to "Featured Products" category
  - new-arrival       # Adds to "New Arrivals" category
```

Add as many tags as needed - the product appears in its main category PLUS all tag-based categories.

## Key Benefits:

- **One Product, Multiple Locations:** Manage inventory in one place
- **Flexible Merchandising:** Easily add/remove from featured categories
- **Automatic Badges:** Tags trigger automatic styling
- **SEO Friendly:** Single product page with multiple entry points
