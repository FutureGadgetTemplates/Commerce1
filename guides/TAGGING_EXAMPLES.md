# Tagging System - Quick Examples

## Scenario: Gaming Store (like Forge and Fire Gaming)

### Setup Categories

**File: `_data/categories.yml`**

```yaml
- name: "Featured"
  slug: "featured"
  subcategories:
    - name: "On Sale"
      slug: "on-sale"
    - name: "New Drops"
      slug: "new-drops"
    - name: "Pre-Orders"
      slug: "pre-orders"

- name: "Pokemon"
  slug: "pokemon"
  subcategories:
    - name: "Booster Packs"
      slug: "booster-packs"
    - name: "Singles"
      slug: "singles"

- name: "Magic: The Gathering"
  slug: "magic"
  subcategories:
    - name: "Commander Decks"
      slug: "commander-decks"
```

### Create Tag-Based Category Pages

**File: `category/featured/on-sale.md`**
```yaml
---
layout: category
title: On Sale
category_slug: featured
parent_category: featured
parent_category_name: Featured
permalink: /category/featured/on-sale/
filter_by_tag: "on-sale"
---
```

**File: `category/featured/new-drops.md`**
```yaml
---
layout: category
title: New Drops
filter_by_tag: "new-drop"
# ... rest of front matter
---
```

### Add Products

**Product 1: Pokemon Booster Box (Regular - one category only)**

**File: `_products/pokemon-booster-box.md`**
```yaml
---
title: "Pokemon Scarlet & Violet Booster Box"
price: 129.99
category: pokemon
subcategory: booster-packs
sku: "PKM-BB-001"
stock_status: in-stock
description: "36 booster packs of Pokemon cards"
---
```

**Appears in:**
- Pokemon > Booster Packs ✓
- That's it!

---

**Product 2: Magic Commander Deck (ON SALE + NEW)**

**File: `_products/magic-commander-deck.md`**
```yaml
---
title: "Commander Deck - Special Edition"
price: 39.99
original_price: 49.99
category: magic
subcategory: commander-decks
tags:
  - on-sale
  - new-drop
sku: "MTG-CMD-001"
stock_status: in-stock
description: "Limited edition commander deck"
---
```

**Appears in:**
- Magic: The Gathering > Commander Decks ✓ (main category)
- Featured > On Sale ✓ (via "on-sale" tag)
- Featured > New Drops ✓ (via "new-drop" tag)

**Displays:**
- "SALE" badge (red)
- "NEW" badge (blue)
- ~~$49.99~~ **$39.99**

---

**Product 3: Pokemon Singles (PRE-ORDER)**

**File: `_products/pokemon-single-charizard.md`**
```yaml
---
title: "Charizard EX - Ultra Rare"
price: 199.99
category: pokemon
subcategory: singles
tags:
  - pre-order
sku: "PKM-SGL-001"
stock_status: pre-order
description: "Ultra rare Charizard card - pre-order now!"
---
```

**Appears in:**
- Pokemon > Singles ✓
- Featured > Pre-Orders ✓

---

## Scenario: Electronics Store

### Product: Laptop (SALE + FEATURED)

```yaml
---
title: "Gaming Laptop Pro 15"
price: 1299.99
original_price: 1799.99
category: computers
subcategory: laptops
tags:
  - on-sale
  - featured
  - gaming
sku: "COMP-LAP-001"
stock_status: in-stock
description: "High-performance gaming laptop"
image: /assets/images/laptop-pro-15.jpg
---
```

**Appears in:**
- Computers > Laptops
- Featured > On Sale
- Featured > Featured Items
- Gaming (if you create a gaming tag page)

---

## Scenario: Clothing Store

### Product: Summer Dress (NEW + SEASONAL)

```yaml
---
title: "Floral Summer Dress"
price: 79.99
category: womens
subcategory: dresses
tags:
  - new-arrival
  - seasonal
  - summer-collection
sku: "WMN-DRS-001"
stock_status: in-stock
description: "Light and breezy summer dress"
---
```

**Appears in:**
- Women's > Dresses
- Featured > New Arrivals
- Featured > Seasonal
- Featured > Summer Collection (if created)

---

## Common Tag Patterns

### Built-in (styled automatically):
- `on-sale` → Red "SALE" badge, requires `original_price` field
- `new-arrival` → Blue "NEW" badge
- `limited-edition` → Purple "LIMITED EDITION" badge
- `featured` → Orange "FEATURED" badge

### Custom (create your own):
- `pre-order`
- `bestseller`
- `clearance`
- `exclusive`
- `seasonal`
- `flash-sale`
- `bundle-deal`
- `[season]-collection` (summer-collection, winter-collection)
- `[event]-special` (holiday-special, anniversary-special)

---

## Key Points

1. **Every product MUST have a main category**
   ```yaml
   category: pokemon
   subcategory: booster-packs
   ```

2. **Tags are OPTIONAL and add extra visibility**
   ```yaml
   tags:
     - on-sale
     - featured
   ```

3. **Create a category page for each tag you use**
   - File: `category/featured/on-sale.md`
   - Set: `filter_by_tag: "on-sale"`

4. **Update `_data/categories.yml`** to show your tag-based subcategories in the navigation

5. **Sale pricing requires two prices**
   ```yaml
   price: 39.99
   original_price: 49.99
   ```

---

## Testing Checklist

After adding tags to a product:

- [ ] Product appears in its main category page
- [ ] Product appears in ALL tag-based category pages for its tags
- [ ] Badges display correctly
- [ ] Sale price shows strike-through if applicable
- [ ] Navigation dropdown shows tag-based categories
- [ ] Clicking product from any category goes to same product page

---

## Quick Add: Sale Item

1. Add `original_price` field
2. Lower the `price`
3. Add `tags: [on-sale]`
4. Create `category/featured/on-sale.md` with `filter_by_tag: "on-sale"`
5. Add "On Sale" to subcategories in `_data/categories.yml`

Done! Product now appears in its main category AND the sale category.
