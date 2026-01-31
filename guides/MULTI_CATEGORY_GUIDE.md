# Multi-Category Products Guide

This guide explains how to make products appear in multiple categories using the tagging system.

## Use Case

You want certain categories (like "On Sale", "Featured", "New Arrivals") where products can appear **in addition to** their main category.

**Example:**
- A laptop is in "Category 2 > Category 2-1" (its main category)
- BUT it's also on sale
- So it should ALSO appear in "Category 1 > On Sale"
- The product exists in ONE place but appears in MULTIPLE categories

## How It Works

### Traditional Categories (Category 2-7)
Products have a **primary category** and **subcategory**:

```yaml
---
title: "Laptop XYZ"
price: 999.99
category: category-2
subcategory: category-2-1
---
```

This product appears **ONLY** in Category 2 > Category 2-1.

### Tag-Based Categories (Category 1)
Products can have **tags** that make them appear in additional special categories:

```yaml
---
title: "Laptop XYZ"
price: 799.99
original_price: 999.99
category: category-2        # Main category
subcategory: category-2-1   # Main subcategory
tags:
  - on-sale              # ALSO appears in "On Sale" category
  - featured             # ALSO appears in "Featured" category
---
```

This product appears in:
1. Category 2 > Category 2-1 (main category)
2. Category 1 > On Sale (via tag)
3. Category 1 > Featured (via tag)

## Available Tags

### Built-in Tags (with automatic styling):

| Tag | Effect | Visual |
|-----|--------|--------|
| `on-sale` | Shows in "On Sale" category | Red "SALE" badge, strike-through original price |
| `new-arrival` | Shows in "New Arrivals" category | Blue "NEW" badge |
| `limited-edition` | Shows in "Limited Edition" category | Purple "LIMITED EDITION" badge |
| `featured` | Shows in "Featured" category | Orange "FEATURED" badge |

### Custom Tags:
You can create any tag name you want! Just add it to the `filter_by_tag` in a category page.

## Setting Up Tag-Based Categories

### Step 1: Create a Category Page with Tag Filter

Example: `category/category-1/on-sale.md`

```yaml
---
layout: category
title: On Sale
category_slug: category-1
parent_category: category-1
parent_category_name: Category 1
permalink: /category/category-1/on-sale/
filter_by_tag: "on-sale"    # This is the key line!
---
```

The `filter_by_tag` tells the page to show ALL products with that tag.

### Step 2: Tag Products

Add the tag to any product that should appear in this category:

```yaml
---
title: "Product Name"
price: 49.99
category: category-3        # Still has a main category
subcategory: category-3-2
tags:
  - on-sale                 # Now ALSO appears in "On Sale"
---
```

## Complete Example

### Product: Gaming Headset

**File:** `_products/gaming-headset.md`

```yaml
---
title: "Gaming Headset Pro"
price: 79.99
original_price: 129.99
category: category-5        # Main: Category 5 (Accessories)
subcategory: category-5-3   # Sub: Category 5-3 (Audio)
sku: "AUDIO-001"
stock_status: in-stock
description: "Professional gaming headset with surround sound"
tags:
  - on-sale           # Appears in "On Sale"
  - new-arrival       # Appears in "New Arrivals"
  - featured          # Appears in "Featured"
---

This headset appears in:
- Category 5 > Category 5-3 (main home)
- Category 1 > On Sale
- Category 1 > New Arrivals
- Category 1 > Featured
```

### Where It Appears

1. **Category 5 > Category 5-3** - Main category page
2. **Category 1 > On Sale** - Because of `on-sale` tag
3. **Category 1 > New Arrivals** - Because of `new-arrival` tag
4. **Category 1 > Featured** - Because of `featured` tag

### How It Displays

- Shows "SALE" badge (red)
- Shows "NEW" badge (blue)
- Shows "FEATURED" badge (orange)
- Price shows: ~~$129.99~~ **$79.99**

## Customizing Category 1

Replace the generic subcategories with your actual featured categories:

**Update `_data/categories.yml`:**

```yaml
- name: "Featured"          # Change from "Category 1"
  slug: "featured"
  subcategories:
    - name: "On Sale"       # Change from "Category 1-1"
      slug: "on-sale"
    - name: "New Arrivals"  # Change from "Category 1-2"
      slug: "new-arrivals"
    - name: "Featured Items"
      slug: "featured"
    - name: "Limited Edition"
      slug: "limited-edition"
```

**Create corresponding pages:**
- `category/featured/on-sale.md` with `filter_by_tag: "on-sale"`
- `category/featured/new-arrivals.md` with `filter_by_tag: "new-arrival"`
- etc.

## Common Patterns

### E-Commerce Store
```yaml
Category 1: "Special Offers"
  - On Sale (tag: on-sale)
  - Clearance (tag: clearance)
  - Bundle Deals (tag: bundle)
  - Flash Sale (tag: flash-sale)
```

### Gaming Store (like Forge and Fire)
```yaml
Category 1: "Featured"
  - New Drops (tag: new-drop)
  - Sale Items (tag: on-sale)
  - Graded Cards (tag: graded)
  - Pre-Orders (tag: pre-order)
```

### Clothing Store
```yaml
Category 1: "Collections"
  - New Arrivals (tag: new-arrival)
  - Sale (tag: on-sale)
  - Seasonal (tag: seasonal)
  - Best Sellers (tag: bestseller)
```

## Tips

1. **Keep main categories clean**: Use Category 2-7 for traditional product hierarchies (Electronics > Laptops)

2. **Use Category 1 for cross-cutting concerns**: Sales, new items, featured products, etc.

3. **Multiple tags are OK**: Products can have many tags and appear in many places

4. **Original price for sales**: When using `on-sale` tag, add `original_price` field to show strike-through

5. **Custom badges**: Add new badge styles in `assets/css/style.css` for custom tags

## Testing

After adding tags to products:

```bash
bundle exec jekyll serve
```

Visit:
- Product's main category page (should appear there)
- Tag-based category pages (should ALSO appear there)
- Product should show appropriate badges

## Removing Tags

To remove a product from a featured category, just remove the tag from its front matter. The product will still exist in its main category.
