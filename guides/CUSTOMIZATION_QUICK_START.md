# Quick Start: Customizing Your Store

This template uses **generic placeholder names** that you should replace with your actual product categories.

## Step-by-Step Customization

### Step 1: Replace Generic Category Names

Open `_data/categories.yml` and replace the placeholder names:

**Current (Generic):**
```yaml
- name: "Category 1"
  slug: "category-1"
  subcategories:
    - name: "Category 1-1"
      slug: "category-1-1"
    - name: "Category 1-2"
      slug: "category-1-2"
```

**Replace with YOUR categories:**
```yaml
- name: "Electronics"
  slug: "electronics"
  subcategories:
    - name: "Laptops"
      slug: "laptops"
    - name: "Tablets"
      slug: "tablets"
```

### Step 2: Update Category Page Files

After changing categories in `_data/categories.yml`, you need to create matching category page files.

**Option A: Rename existing files**
```bash
# In the category/ folder, rename:
category-1.md → electronics.md
category-2.md → mobile-devices.md
# etc.
```

**Option B: Create new files**
Copy the structure from existing category files and update the front matter:

```yaml
---
layout: category
title: Electronics
category_slug: electronics
permalink: /category/electronics/
subcategory_list:
  - name: "Laptops"
    slug: "laptops"
  - name: "Tablets"
    slug: "tablets"
---
```

### Step 3: Update Store Information

Edit `_data/site.yml`:

```yaml
business_name: "Your Actual Store Name"
tagline: "Your actual tagline"
phone: "555-123-4567"
email: "support@yourstore.com"
```

### Step 4: Add Your Products

Create product files in `_products/` directory:

**Regular product (appears in one category only):**
```yaml
---
title: "Your Product Name"
price: 99.99
category: electronics        # Match your category slug
subcategory: laptops        # Match your subcategory slug
sku: "ELEC-001"
stock_status: in-stock
description: "Product description"
---

Detailed product information here.
```

**Featured product (appears in multiple categories):**
```yaml
---
title: "Gaming Laptop - ON SALE"
price: 799.99
original_price: 999.99      # Shows strike-through price
category: electronics
subcategory: laptops
tags:                        # Makes it appear in multiple categories!
  - on-sale                 # Shows in "On Sale" category
  - new-arrival             # Shows in "New Arrivals" category
  - featured                # Shows in "Featured" category
sku: "ELEC-002"
stock_status: in-stock
description: "Professional gaming laptop"
---

This laptop appears in its main category (Electronics > Laptops)
AND in special categories (On Sale, New Arrivals, Featured).
```

**See `MULTI_CATEGORY_GUIDE.md` for complete details on the tagging system.**

### Step 5: Customize Styling

Edit `assets/css/style.css` to change colors:

```css
/* Find and replace these colors: */
#007bff → Your primary color
#2c3e50 → Your header/footer color
#667eea → Your gradient color
```

## Complete Example Transformation

### Before (Generic Template):
- Category 1 → Category 1-1, Category 1-2
- Category 2 → Category 2-1, Category 2-2
- Category 3 → Category 3-1, Category 3-2

### After (Electronics Store):
- Computers → Laptops, Desktops, Accessories
- Mobile → Phones, Tablets, Smartwatches
- Audio → Headphones, Speakers, Earbuds

### After (Bookstore):
- Fiction → Mystery, Romance, Sci-Fi
- Non-Fiction → Biography, History, Science
- Children's → Picture Books, Young Adult, Middle Grade

### After (Gaming Store):
- Pokemon → Booster Packs, Singles, Graded
- Magic → Commander, Standard, Singles
- Lorcana → Booster Boxes, Singles, Decks

## Quick Reference: Files to Customize

| Priority | File | What to Change |
|----------|------|----------------|
| **HIGH** | `_data/categories.yml` | All category/subcategory names |
| **HIGH** | `_data/site.yml` | Store name, contact info |
| **HIGH** | `category/*.md` | Rename files and update content |
| **MEDIUM** | `_products/*.md` | Add your product catalog |
| **MEDIUM** | `assets/css/style.css` | Brand colors and fonts |
| **LOW** | `assets/images/` | Add logo and product images |

## Testing Your Changes

1. Save all your changes
2. Run: `bundle exec jekyll serve`
3. Visit: `http://localhost:4000`
4. Check navigation dropdowns
5. Click through categories
6. Verify products appear in correct categories

## Common Mistakes to Avoid

1. **Slug mismatch**: Category slug in `categories.yml` must match category page filename
2. **Inconsistent naming**: Product category must exactly match category slug
3. **Missing permalinks**: Every category page needs a permalink
4. **Forgetting subcategory pages**: Create subcategory .md files if you want dedicated pages

## Need Help?

- See `TEMPLATE_GUIDE.md` for detailed examples
- Check `STRUCTURE.md` to understand file organization
- Read `SETUP.md` for installation issues
