# Favicon Placeholders

## Quick Setup

This directory needs your favicon files. Follow these steps:

### 1. Generate Your Favicons

**Easiest method** - Use an online generator:
1. Go to https://realfavicongenerator.net/
2. Upload your logo (512x512px minimum, square)
3. Download the generated package
4. Extract files to this directory

### 2. Required Files

Place these files in this directory:

```
assets/favicons/
├── favicon.ico
├── favicon-16x16.png
├── favicon-32x32.png
├── favicon-96x96.png
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
├── mstile-150x150.png
├── safari-pinned-tab.svg (optional)
├── site.webmanifest (already exists - customize)
└── browserconfig.xml (already exists - customize)
```

### 3. Customize Configuration

**Edit `site.webmanifest`:**
```json
{
    "name": "Your Actual Store Name",
    "short_name": "Store",
    "theme_color": "#your-brand-color"
}
```

**Edit `browserconfig.xml`:**
```xml
<TileColor>#your-brand-color</TileColor>
```

### 4. Test

```bash
bundle exec jekyll serve
```

Check your browser tab for the favicon!

## File Sizes

- `favicon.ico` - 16x16, 32x32, 48x48
- `favicon-16x16.png` - 16x16
- `favicon-32x32.png` - 32x32
- `favicon-96x96.png` - 96x96
- `apple-touch-icon.png` - 180x180
- `android-chrome-192x192.png` - 192x192
- `android-chrome-512x512.png` - 512x512
- `mstile-150x150.png` - 150x150

## Complete Documentation

See `/FAVICON_GUIDE.md` for detailed instructions, troubleshooting, and advanced options.

## Current Status

✅ Favicon HTML includes configured
✅ Manifest and browserconfig files created
⏳ **Waiting for your favicon images**

Replace this README with your actual favicon files and you're all set!
