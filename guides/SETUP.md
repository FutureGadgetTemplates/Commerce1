# Setup Guide

## Prerequisites

- Ruby (version 2.7 or higher)
- RubyGems
- Bundler

## Installation Steps

### 1. Install Ruby (if not already installed)

**Windows:**
Download and install from [RubyInstaller](https://rubyinstaller.org/)

**macOS:**
```bash
brew install ruby
```

**Linux:**
```bash
sudo apt-get install ruby-full
```

### 2. Install Bundler

```bash
gem install bundler
```

### 3. Install Project Dependencies

Navigate to the project directory and run:

```bash
bundle install
```

### 4. Run the Development Server

```bash
bundle exec jekyll serve
```

Or with live reload:

```bash
bundle exec jekyll serve --livereload
```

### 5. View the Site

Open your browser and navigate to:
```
http://localhost:4000
```

## Building for Production

To build the static site for deployment:

```bash
bundle exec jekyll build
```

The generated site will be in the `_site/` directory.

## Customization for Your Store

1. **Update Site Information** (`_data/site.yml`):
   - Change business name, tagline, contact info
   - Update social media links

2. **Customize Categories** (`_data/categories.yml`):
   - Modify the 7 main categories
   - Adjust subcategories as needed
   - Categories will automatically appear in the navigation

3. **Add Products** (`_products/` directory):
   - Create markdown files for each product
   - Include front matter with title, price, category, etc.
   - Add product images to `assets/images/`

4. **Style Customization** (`assets/css/style.css`):
   - Change colors, fonts, layout
   - Modify the CSS to match your brand

5. **Create Category Pages**:
   - Main categories are in `category/`
   - Subcategories are in subdirectories like `category/trading-cards/`
   - Follow the existing pattern for new categories

## Deploying Your Store

### GitHub Pages
1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Select the main branch as source

### Netlify
1. Connect your repository to Netlify
2. Build command: `jekyll build`
3. Publish directory: `_site`

### Vercel
1. Import your repository
2. Framework preset: Jekyll
3. Deploy

## Troubleshooting

**Issue:** Jekyll command not found
**Solution:** Run `bundle exec jekyll` instead of just `jekyll`

**Issue:** Port 4000 already in use
**Solution:** Use a different port: `bundle exec jekyll serve --port 4001`

**Issue:** Changes not showing up
**Solution:** Use `--livereload` flag or restart the server

## Next Steps

- Add your product catalog
- Customize the design
- Set up payment integration (Stripe, PayPal, etc.)
- Add analytics (Google Analytics)
- Configure SEO settings
- Test on mobile devices
