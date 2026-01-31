# Images Guide

## Image Organization

All images are stored in the `assets/images/` directory for better organization.

### Current Images

1. **`store-image.jpg`** - Your store logo
   - Displayed in the header (top-left)
   - Displayed on the homepage hero section
   - Recommended size: 200px wide max

2. **`default-product-image.jpg`** - Default placeholder image
   - Automatically shown when products don't have images
   - Used on all product cards and product detail pages

## Adding Your Logo

Your logo (`store-image.jpg`) is already configured and will appear:
- **Header**: Top-left corner on all pages
- **Homepage**: Center of the hero section

To replace with a different logo:
1. Add your logo file to `assets/images/`
2. Update `_includes/header.html` - change the image src
3. Update `index.html` - change the hero-logo src

## Adding Product Images

### Option 1: Store Images Locally

1. Add your product images to `assets/images/`
2. In your product file, reference the image:

```yaml
---
title: "My Product"
price: 29.99
image: /assets/images/my-product.jpg
---
```

### Option 2: Use External URLs

```yaml
---
title: "My Product"
price: 29.99
image: https://example.com/product-image.jpg
---
```

### Option 3: No Image (Use Placeholder)

If you don't specify an image, `default-product-image.jpg` will automatically be used:

```yaml
---
title: "My Product"
price: 29.99
# No image field - default-product-image.jpg will be used
---
```

## Image Recommendations

### Logo (store-image.jpg)
- Format: JPG, PNG
- Recommended width: 150-200px
- Transparent background (PNG) works best
- Square or horizontal orientation

### Product Images
- Format: JPG, PNG
- Recommended size: 600x600px minimum
- Aspect ratio: Square (1:1) or 4:3
- File size: Keep under 500KB for fast loading

### Placeholder (default-product-image.jpg)
- Currently using default-product-image.jpg
- Can be replaced with any image
- Used automatically when products have no image

## Replacing the Placeholder Image

To use a different placeholder instead of default-product-image.jpg:

1. Add your new placeholder to `assets/images/` (e.g., `placeholder.jpg`)

2. Update these files:
   - `_layouts/category.html` - line with default-product-image.jpg
   - `index.html` - line with default-product-image.jpg
   - `_layouts/product.html` - line with default-product-image.jpg

3. Replace `/assets/images/default-product-image.jpg` with `/assets/images/your-placeholder.jpg`

## Image Optimization Tips

1. **Compress images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: Under 200KB for product images

2. **Use appropriate formats**
   - JPG: Photos and complex images
   - PNG: Logos and images needing transparency
   - WebP: Modern format (smaller file size)

3. **Consistent sizing**
   - Keep all product images the same dimensions
   - Makes your store look more professional

4. **Alt text**
   - Already handled automatically using product titles
   - Good for SEO and accessibility

## Directory Structure

```
assets/
└── images/
    ├── store-image.jpg    (Your logo)
    ├── default-product-image.jpg           (Placeholder)
    └── [your-product-images].jpg
```

## Examples

### Product with Image
```yaml
---
title: "Gaming Laptop"
price: 999.99
category: category-2
subcategory: category-2-1
image: /assets/images/gaming-laptop.jpg
---
```

### Product without Image (Uses Placeholder)
```yaml
---
title: "Wireless Mouse"
price: 29.99
category: category-2
subcategory: category-2-1
# No image - default-product-image.jpg will be used automatically
---
```

## Custom Styling

The logo and images can be customized in `assets/css/style.css`:

### Logo Styling
```css
.logo-image {
  height: 80px;        /* Adjust logo height */
  max-width: 200px;    /* Maximum logo width */
}

.hero-logo {
  max-width: 200px;    /* Homepage logo size */
  border-radius: 10px; /* Logo corners */
}
```

### Placeholder Styling
```css
.product-placeholder {
  opacity: 0.8;        /* Slightly transparent */
  background-color: #f8f9fa;
}
```

## Troubleshooting

**Logo not showing?**
- Check that `store-image.jpg` is in `assets/images/`
- Verify the path in `_includes/header.html` and `index.html`
- Clear your browser cache

**Placeholder not showing?**
- Check that `default-product-image.jpg` is in `assets/images/`
- Make sure products don't have an `image:` field (or leave it empty)

**Images look stretched?**
- Product images use `object-fit: cover` to maintain aspect ratio
- Consider using square images (600x600px) for best results
