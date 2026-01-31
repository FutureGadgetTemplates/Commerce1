# Favicon Setup Guide

## Overview

Favicons are the small icons that appear in browser tabs, bookmarks, and mobile home screens. This template includes placeholders for all common favicon formats.

## Required Files

All favicon files should be placed in `assets/favicons/` directory.

### Standard Favicons

| File | Size | Purpose |
|------|------|---------|
| `favicon.ico` | 16x16, 32x32, 48x48 | Legacy browsers, address bar |
| `favicon-16x16.png` | 16x16 | Browser tab icon (small) |
| `favicon-32x32.png` | 32x32 | Browser tab icon (standard) |
| `favicon-96x96.png` | 96x96 | Desktop shortcut icon |

### Apple iOS

| File | Size | Purpose |
|------|------|---------|
| `apple-touch-icon.png` | 180x180 | iOS home screen icon |

### Android Chrome

| File | Size | Purpose |
|------|------|---------|
| `android-chrome-192x192.png` | 192x192 | Android home screen (standard) |
| `android-chrome-512x512.png` | 512x512 | Android splash screen, PWA |

### Windows

| File | Size | Purpose |
|------|------|---------|
| `mstile-150x150.png` | 150x150 | Windows Start menu tile |

### Optional

| File | Format | Purpose |
|------|--------|---------|
| `safari-pinned-tab.svg` | SVG (monochrome) | Safari pinned tabs |

## Configuration Files

### `site.webmanifest`
PWA (Progressive Web App) manifest file. Already configured in `assets/favicons/site.webmanifest`.

**Customize:**
```json
{
    "name": "Your Actual Store Name",
    "short_name": "Store",
    "theme_color": "#your-brand-color",
    "background_color": "#ffffff"
}
```

### `browserconfig.xml`
Windows tile configuration. Already configured in `assets/favicons/browserconfig.xml`.

**Customize:**
```xml
<TileColor>#your-brand-color</TileColor>
```

## How to Create Favicons

### Option 1: Online Generator (Easiest)

1. **Use a Favicon Generator:**
   - https://realfavicongenerator.net/ (Recommended)
   - https://favicon.io/
   - https://www.favicon-generator.org/

2. **Upload your logo** (ideally square, 512x512px minimum)

3. **Download the generated package**

4. **Extract files to** `assets/favicons/`

5. **Update colors** in `site.webmanifest` and `browserconfig.xml`

### Option 2: Manual Creation

#### Using Photoshop/GIMP/Figma

**Start with your logo:**
- Size: 512x512px minimum
- Format: Square
- Background: Transparent (PNG) or solid color

**Create each size:**

1. **favicon.ico** (Multi-size ICO file)
   - Export as 16x16, 32x32, 48x48
   - Use online converter: https://convertico.com/

2. **PNG files** (16x16, 32x32, 96x96, 192x192, 512x512)
   - Resize logo to each dimension
   - Export as PNG

3. **Apple Touch Icon** (180x180)
   - Resize to 180x180
   - Add padding if needed (iOS adds rounded corners)
   - Export as PNG

4. **Windows Tile** (150x150)
   - Resize to 150x150
   - Can use transparent background
   - Export as PNG

5. **Safari Pinned Tab** (Optional)
   - Monochrome SVG (single color)
   - Should be simplified version of logo
   - Export as SVG

## Installation Instructions

### Step 1: Generate Your Favicons

Use https://realfavicongenerator.net/:
1. Upload your logo (512x512px minimum)
2. Preview and adjust for each platform
3. Click "Generate your Favicons and HTML code"
4. Download the favicon package

### Step 2: Extract Files

Extract the downloaded package. You should have:
```
android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
browserconfig.xml
favicon.ico
favicon-16x16.png
favicon-32x32.png
mstile-150x150.png
safari-pinned-tab.svg (optional)
site.webmanifest
```

### Step 3: Replace Placeholders

1. **Copy all files to** `assets/favicons/` directory
2. **Overwrite existing placeholders**
3. **Update `site.webmanifest`:**
   - Change `"name"` to your store name
   - Change `"short_name"` to abbreviated name
   - Change `"theme_color"` to your brand color
4. **Update `browserconfig.xml`:**
   - Change `<TileColor>` to your brand color

### Step 4: Update Theme Colors (Optional)

In `_includes/favicons.html`, update theme colors:
```html
<link rel="mask-icon" ... color="#your-brand-color">
<meta name="theme-color" content="#your-brand-color">
```

Also in `assets/favicons/browserconfig.xml`:
```xml
<TileColor>#your-brand-color</TileColor>
```

## File Sizes Reference

### Minimum Requirements

For a professional setup, you **must have**:
- ✅ `favicon.ico` (16x16, 32x32, 48x48)
- ✅ `favicon-32x32.png`
- ✅ `apple-touch-icon.png` (180x180)
- ✅ `android-chrome-192x192.png`

### Full Setup (Recommended)

All files listed in the "Required Files" section above.

## Testing Your Favicons

### Local Testing
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000/` and check:
- **Browser tab** - Should show your favicon
- **Bookmarks** - Bookmark the page, should show favicon
- **View page source** - Check `<head>` section for favicon links

### Online Testing

After deployment, test with:
- https://realfavicongenerator.net/favicon_checker
- Enter your site URL
- Check all platforms

### Platform-Specific Testing

**Desktop:**
- Chrome: Check tab icon
- Firefox: Check tab icon
- Safari: Check tab icon and pinned tabs
- Edge: Check tab icon

**Mobile:**
- iOS Safari: Add to home screen
- Android Chrome: Add to home screen
- Check PWA installation

## Troubleshooting

### Favicon Not Showing

1. **Clear browser cache**
   - Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

2. **Check file paths**
   - Ensure files are in `assets/favicons/`
   - Check `_includes/favicons.html` paths

3. **Verify file names**
   - Must match exactly (case-sensitive)

4. **Check file formats**
   - ICO must be actual .ico format
   - PNGs should be properly formatted

### Wrong Icon Showing

- **Old cached icon**: Clear browser cache
- **Wrong file**: Check you replaced the correct file
- **Size mismatch**: Ensure files are correct dimensions

### Mobile Icon Issues

**iOS:**
- `apple-touch-icon.png` must be 180x180
- Add 20px padding for rounded corners effect

**Android:**
- Need both 192x192 and 512x512
- Check `site.webmanifest` paths are correct

## Current Setup

The template includes:

✅ **Favicon links** - In `_includes/favicons.html`
✅ **HTML integration** - Added to `_layouts/default.html`
✅ **Manifest file** - `assets/favicons/site.webmanifest`
✅ **Browser config** - `assets/favicons/browserconfig.xml`
✅ **Directory** - `assets/favicons/` ready for your files

## Quick Start Checklist

- [ ] Generate favicons using https://realfavicongenerator.net/
- [ ] Download the favicon package
- [ ] Extract all files to `assets/favicons/`
- [ ] Update `site.webmanifest` with your store name
- [ ] Update theme colors in manifest and browserconfig
- [ ] Test locally with `bundle exec jekyll serve`
- [ ] Clear browser cache and verify icons appear
- [ ] Test on mobile devices (add to home screen)

## Advanced: Custom Favicons Per Environment

If you want different favicons for development vs. production:

```html
{% if jekyll.environment == "production" %}
  <link rel="icon" href="/assets/favicons/favicon.ico">
{% else %}
  <link rel="icon" href="/assets/favicons/favicon-dev.ico">
{% endif %}
```

## Resources

**Favicon Generators:**
- https://realfavicongenerator.net/ (Best, comprehensive)
- https://favicon.io/ (Simple, multiple input types)
- https://www.favicon-generator.org/ (Quick)

**Favicon Checkers:**
- https://realfavicongenerator.net/favicon_checker

**Icon Guidelines:**
- iOS: https://developer.apple.com/design/human-interface-guidelines/app-icons
- Android: https://developer.android.com/develop/ui/views/launch/icon_design_adaptive

**ICO Converters:**
- https://convertico.com/
- https://icoconvert.com/

## Example Workflow

1. **Design your logo** (512x512px, square)
2. **Visit** https://realfavicongenerator.net/
3. **Upload** your 512x512 logo
4. **Customize** platform-specific previews
5. **Generate** and download package
6. **Extract** to `assets/favicons/`
7. **Edit** `site.webmanifest` (store name, colors)
8. **Edit** `browserconfig.xml` (tile color)
9. **Test** with `bundle exec jekyll serve`
10. **Verify** on all browsers and devices
11. **Deploy** to production

Done! Your site now has professional favicons across all platforms.
