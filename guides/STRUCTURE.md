# Project Structure

```
Commerce1/
│
├── _config.yml                 # Jekyll configuration
├── index.html                  # Homepage with featured products
├── Gemfile                     # Ruby dependencies
│
├── _data/                      # Data files (CUSTOMIZE THESE)
│   ├── categories.yml          # 7 categories with subcategories
│   └── site.yml                # Site info, contact, social links
│
├── _includes/                  # Reusable components
│   ├── header.html             # Logo, search, cart
│   ├── navigation.html         # Main nav with dropdowns
│   ├── footer.html             # Footer with links
│   └── favicons.html           # Favicon meta tags
│
├── _layouts/                   # Page templates
│   ├── default.html            # Base template
│   ├── category.html           # Category/subcategory pages
│   └── product.html            # Individual product pages
│
├── _products/                  # Product files (ADD YOUR PRODUCTS HERE)
│   ├── example-product-1.md    # Card sleeves example
│   ├── example-product-2.md    # Booster box example
│   └── example-product-3.md    # Figure example
│
├── category/                   # Category pages
│   ├── featured-sale.md        # Category 1
│   ├── trading-cards.md        # Category 2
│   │   └── booster-packs.md   # Subcategory example
│   ├── collectibles.md         # Category 3
│   ├── gaming.md               # Category 4
│   ├── accessories.md          # Category 5
│   │   └── sleeves.md         # Subcategory example
│   ├── apparel.md              # Category 6
│   └── more.md                 # Category 7
│
├── assets/
│   ├── css/
│   │   └── style.css          # All styling (CUSTOMIZE COLORS HERE)
│   ├── js/
│   │   └── main.js            # JavaScript functionality
│   ├── images/                # Images directory
│   │   ├── store-image.jpg   # Your logo (replace this)
│   │   ├── default-product-image.jpg          # Placeholder for products without images
│   │   └── [product-images]   # Add your product images here
│   └── favicons/              # Favicon files (ADD YOUR FAVICONS HERE)
│       ├── README.md          # Quick favicon setup guide
│       ├── site.webmanifest   # PWA manifest (customize)
│       ├── browserconfig.xml  # Windows tiles config (customize)
│       └── [favicon-files]    # Add generated favicons here
│
├── SETUP.md                   # Installation and setup guide
├── TEMPLATE_GUIDE.md          # How to use this template
├── README.md                  # Project overview
└── LICENSE                    # License file
```

## Navigation Structure

The site has **7 main categories** in the top navigation (all with generic placeholder names):

### 1. Category 1 (TAG-BASED / FEATURED CATEGORY)
**Special category where products can appear in ADDITION to their main categories**
- New Arrivals ✓ (tag: "new-arrival")
- Category 1-2 ✓ (tag: "category-1-2")
- Limited Edition ✓ (tag: "limited-edition")
- On Sale ✓ (tag: "on-sale")
- Category 1-5 (tag: "category-1-5")

Use this for: Featured items, sales, new products, seasonal collections, etc.

### 2. Category 2
- Category 2-1 ✓ (example page created)
- Category 2-2
- Category 2-3
- Category 2-4
- Category 2-5

### 3. Category 3
- Category 3-1
- Category 3-2
- Category 3-3
- Category 3-4
- Category 3-5

### 4. Category 4
- Category 4-1
- Category 4-2
- Category 4-3
- Category 4-4
- Category 4-5

### 5. Category 5
- Category 5-1
- Category 5-2
- Category 5-3
- Category 5-4
- Category 5-5
- Category 5-6

### 6. Category 6
- Category 6-1
- Category 6-2
- Category 6-3
- Category 6-4

### 7. Category 7
- Category 7-1
- Category 7-2
- Category 7-3
- Category 7-4
- Category 7-5

## Pages Created

### Main Pages
- `index.html` - Homepage with hero section, featured products, category grid

### Category Pages (7 total)
- `/category/category-1/`
- `/category/category-2/`
- `/category/category-3/`
- `/category/category-4/`
- `/category/category-5/`
- `/category/category-6/`
- `/category/category-7/`

### Example Subcategory Pages (2 samples)
- `/category/category-1/category-1-2/`
- `/category/category-2/category-2-1/`

### Product Pages (4 examples - all in Category 2 for organization)
- Example Product 1 (Category 2-1, tagged: category-1-2, new-arrival)
- Example Product 2 (Category 2-1, tagged: on-sale, limited-edition)
- Example Product 3 (Category 2-2, no tags)
- Example Product 4 (Category 2-3, tagged: on-sale, featured, category-1-2)

## How It Works

1. **Categories** are defined in `_data/categories.yml`
2. **Navigation** automatically generates from categories data
3. **Products** are markdown files in `_products/` with frontmatter
4. **Category pages** filter products by category and subcategory
5. **Tag-based categories** filter products by tags (multi-category support)
6. **Styling** is centralized in `assets/css/style.css`

### Multi-Category Products

Products can appear in multiple categories using tags:

```yaml
# Product appears in main category AND featured categories
category: category-2
subcategory: category-2-1
tags:
  - on-sale        # Also appears in "On Sale"
  - new-arrival    # Also appears in "New Arrivals"
```

See `MULTI_CATEGORY_GUIDE.md` for complete details.

## Customization Points

| File | What to Change |
|------|----------------|
| `_data/site.yml` | Store name, contact info, social links |
| `_data/categories.yml` | Category names and structure |
| `assets/images/store-image.jpg` | Replace with your logo |
| `assets/favicons/` | **Add your favicons** (see FAVICON_GUIDE.md) |
| `assets/images/default-product-image.jpg` | Replace with your placeholder image (optional) |
| `assets/css/style.css` | Colors, fonts, layout |
| `_products/*.md` | Add your product catalog |
| `assets/images/` | Add product images |

## Next Steps

1. Run `bundle install` to install dependencies
2. Run `bundle exec jekyll serve` to start development server
3. Visit `http://localhost:4000` to see the site
4. Customize categories in `_data/categories.yml`
5. Add products to `_products/` directory
6. Modify styling in `assets/css/style.css`
