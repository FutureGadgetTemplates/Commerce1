# Multi-Category Products - Quick Summary

## What Problem Does This Solve?

You want products to appear in **multiple categories** at once. For example:
- A laptop should appear in "Electronics > Laptops" (its main category)
- BUT it's on sale, so it should ALSO appear in "On Sale"
- AND it's new, so it should ALSO appear in "New Arrivals"

The product is stored ONCE but appears in MULTIPLE category pages.

## How It Works

### Traditional Single-Category Product

```yaml
---
title: "Regular Laptop"
price: 999.99
category: category-2        # ONLY appears here
subcategory: category-2-1
---
```

**Appears in:** Category 2 > Category 2-1 only

### Multi-Category Product (Using Tags)

```yaml
---
title: "Gaming Laptop - ON SALE!"
price: 799.99
original_price: 999.99
category: category-2        # Main category
subcategory: category-2-1
tags:                       # ALSO appears in these categories!
  - on-sale
  - new-arrival
  - featured
---
```

**Appears in:**
1. Category 2 > Category 2-1 (main home)
2. Category 1 > On Sale (tag-based)
3. Category 1 > New Arrivals (tag-based)
4. Category 1 > Featured (tag-based)

**Displays with:**
- Red "SALE" badge
- Blue "NEW" badge
- Orange "FEATURED" badge
- Strike-through original price: ~~$999.99~~ **$799.99**

## Category 1 is Special

**Category 1** is designed for tag-based filtering:

```
Category 1
├── On Sale (shows all products with tag "on-sale")
├── New Arrivals (shows all products with tag "new-arrival")
├── Limited Edition (shows all products with tag "limited-edition")
└── Featured (shows all products with tag "featured")
```

**Categories 2-7** are traditional hierarchical categories:

```
Category 2
├── Category 2-1 (specific products assigned here)
├── Category 2-2
└── Category 2-3
```

## Complete Example

### 1. Create Tag-Based Category Page

**File:** `category/category-1/on-sale.md`

```yaml
---
layout: category
title: On Sale
category_slug: category-1
parent_category: category-1
parent_category_name: Category 1
permalink: /category/category-1/on-sale/
filter_by_tag: "on-sale"    # ← This is the magic line!
---
```

### 2. Tag Products

**File:** `_products/my-product.md`

```yaml
---
title: "Awesome Product"
price: 49.99
original_price: 79.99
category: category-3        # Main category
subcategory: category-3-2
tags:
  - on-sale                 # ← Product now appears in "On Sale" page!
---
```

### 3. Done!

The product now appears in:
- `/category/category-3/category-3-2/` (main category)
- `/category/category-1/on-sale/` (tag-based)

## Built-In Tags

These tags have automatic styling:

| Tag | Badge | Effect |
|-----|-------|--------|
| `on-sale` | 🔴 SALE | Red badge, strike-through original price |
| `new-arrival` | 🔵 NEW | Blue badge |
| `limited-edition` | 🟣 LIMITED EDITION | Purple badge |
| `featured` | 🟠 FEATURED | Orange badge |

## Custom Tags

Create any tag you want! Just:

1. Add tag to product: `tags: [my-custom-tag]`
2. Create category page with: `filter_by_tag: "my-custom-tag"`
3. Add to navigation in `_data/categories.yml`

## Common Use Cases

### E-Commerce Store
```yaml
tags:
  - on-sale
  - clearance
  - bundle-deal
  - flash-sale
```

### Gaming Store
```yaml
tags:
  - new-drop
  - pre-order
  - graded
  - on-sale
```

### Clothing Store
```yaml
tags:
  - new-arrival
  - seasonal
  - summer-collection
  - bestseller
```

## Benefits

✅ **One product, multiple locations** - Manage in one place
✅ **Easy merchandising** - Add/remove tags to change visibility
✅ **Automatic styling** - Badges and sale pricing handled automatically
✅ **SEO friendly** - One canonical product page
✅ **Flexible** - Create any tag-based category you need

## Files Involved

```
_data/categories.yml              # Define navigation structure
category/category-1/on-sale.md    # Tag-based category page
_products/product.md              # Tag products
_layouts/category.html            # Handles filtering (already done)
assets/css/style.css              # Badge styling (already done)
```

## Quick Recipe: Add "On Sale" Category

1. **Create category page:** `category/category-1/on-sale.md`
   ```yaml
   ---
   filter_by_tag: "on-sale"
   ---
   ```

2. **Update navigation:** Add to `_data/categories.yml`
   ```yaml
   subcategories:
     - name: "On Sale"
       slug: "on-sale"
   ```

3. **Tag products:**
   ```yaml
   price: 39.99
   original_price: 59.99
   tags:
     - on-sale
   ```

4. **Done!** Visit `/category/category-1/on-sale/` to see all sale items

## Documentation

- **Detailed guide:** `MULTI_CATEGORY_GUIDE.md`
- **Examples:** `TAGGING_EXAMPLES.md`
- **General setup:** `README.md`
- **Customization:** `CUSTOMIZATION_QUICK_START.md`

---

**TL;DR:** Add `tags: [on-sale, featured]` to your product front matter, and it appears in multiple category pages automatically!
