# Student Tools Suite - Style Guide

## Design Philosophy

Student Tools Suite uses a **Brutalist Design** approach:
- Clean, bold typography
- Geometric shapes and borders
- High contrast colors
- Minimal decorative elements
- Function-first approach
- Raw, unpolished aesthetic that emphasizes content

## Color Palette

### Primary Colors
```
Blue:     #0066ff  - Primary action, links, accents
Green:    #00cc66  - Success, growth, progress
Yellow:   #ffcc00  - Warnings, highlights, attention
Red:      #ff0000  - Danger, errors, important
Purple:   #9900ff  - Creative, special tools
Orange:   #ff6600  - Secondary accent, engagement
```

### Neutral Colors
```
Dark Background:   #1a1a1a  - Main background
Light Background:  #f5f5f5  - Card backgrounds
Dark Text:         #0a0a0a  - Primary text
Light Text:        #ffffff  - Text on dark backgrounds
Muted Text:        #666666  - Secondary text, descriptions
Border:            #333333  - Borders and dividers
```

## Typography

### Font Family
- **Primary:** Courier New, monospace
  - Brutalist, code-like aesthetic
  - Perfect for technical student audience
  - Excellent readability on screens

### Font Sizes
```
H1: 3.5rem (56px)  - Page titles, hero section
H2: 2.5rem (40px)  - Section headings
H3: 1.5rem (24px)  - Subsections
H4: 1.25rem (20px) - Minor headings
Body: 1rem (16px)  - Regular text
Small: 0.9rem (14px) - Secondary text
```

### Font Weights
- 400: Regular text
- 600: Emphasized text, nav items
- 700: Headings, strong emphasis

### Letter Spacing
- 0.5px: Body text
- 1px: Headings
- 2px: Logo text

### Line Height
- 1.6: Body text (leading-relaxed)
- 1.4: Headings

## Spacing Scale

```
0.25rem (4px)   - Micro spacing
0.5rem (8px)    - Small elements
0.75rem (12px)  - Button padding
1rem (16px)     - Standard spacing
1.5rem (24px)   - Section padding
2rem (32px)     - Large spacing
3rem (48px)     - Massive spacing
```

## Borders

### Border Width
- 2px: Standard borders (used throughout)
- 1px: Subtle dividers (footer)

### Border Style
- Solid: All borders
- Color: Varies by element

### Border Radius
- 0px: Most elements (brutalist sharp edges)
- 8px: Icon backgrounds (slight softness)

## Components

### Buttons

#### Primary Button
```css
background-color: #0066ff
color: #ffffff
border: 2px solid #0066ff
padding: 0.75rem 1.5rem
font-weight: 700

:hover {
  background-color: transparent
  border-color: #0066ff
  color: #0066ff
}
```

#### Secondary Button
```css
background-color: transparent
color: #0a0a0a
border: 2px solid #0a0a0a
padding: 0.75rem 1.5rem

:hover {
  background-color: #0a0a0a
  color: #ffffff
}
```

### Cards

All cards follow this pattern:
```css
padding: 2rem
border: 2px solid #333333
background-color: #f5f5f5
transition: all 0.3s ease

:hover {
  transform: translateY(-5px) or translateX(5px)
  border-color: #0066ff
  box-shadow: 0 10px 30px rgba(0, 102, 255, 0.15)
}
```

### Tool Cards

Each tool card features:
- 80x80px icon background with gradient
- Tool name in uppercase
- Description text
- Consistent padding (2rem)

### Forms

Input elements:
```css
padding: 0.75rem
border: 2px solid #333333
font-family: 'Courier New', monospace
font-size: 1rem
background-color: #ffffff

:focus {
  outline: none
  border-color: #0066ff
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1)
}
```

## Animations

### Timing
- 0.3s: Standard transitions (hover effects)
- 0.5s: Component entrances
- 0.6s: Scroll animations
- 2s-3s: Continuous animations (bounce, rotate)

### Easing
- `cubic-bezier(0.25, 0.46, 0.45, 0.94)`: Standard easing
- `ease`: Smooth transitions
- `linear`: Continuous rotations

### Animation Types

**Fade In**
```css
opacity: 0 → 1
```

**Slide In**
```css
translateX: ±50px → 0
translateY: -20px → 0
```

**Bounce**
```css
transform: translateY(0) → translateY(-20px) → translateY(0)
Animation: 2s infinite
```

**Rotate**
```css
rotate: 0deg → 360deg
Animation: 3s linear infinite
```

## Responsive Design

### Breakpoints
```
768px: Tablet
480px: Mobile
```

### Mobile (≤480px)
- Single column layouts
- Reduced font sizes (60-70%)
- Smaller padding
- Stacked navigation
- Full-width buttons

### Tablet (≤768px)
- Single column layouts
- Hidden desktop nav
- Sidebar navigation
- Reduced spacing

### Desktop (>768px)
- Grid layouts
- Full navigation menu
- Optimal spacing
- Multi-column designs

## Accessibility

### Colors
- Minimum 4.5:1 contrast ratio for text
- Blue (#0066ff) on white: ✓ Passes
- All colors tested for colorblind accessibility

### Typography
- Minimum 16px for body text
- Letter spacing >= 0.5px
- Line height >= 1.4

### Interactive Elements
- All buttons focusable
- Focus outline: 2px solid #0066ff
- Outline offset: 2px
- Keyboard navigation support

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic tags: main, header, footer, article
- ARIA labels for controls
- Alt text for images

## SEO Best Practices

### Meta Tags
- Title: 50-60 characters
- Description: 150-160 characters
- Keywords: 5-10 relevant terms

### Structured Data
- Schema.org JSON-LD markup
- OpenGraph tags for social sharing
- Twitter Card tags

### URLs
- Descriptive, lowercase
- Hyphens for word separation
- Canonical tags on all pages

## Code Style

### CSS Organization
1. CSS Variables (colors, transitions)
2. Reset & Base Styles
3. Typography
4. Components
5. Layout Sections
6. Animations
7. Responsive Media Queries

### CSS Classes
- BEM naming convention optional
- Descriptive class names
- Lowercase with hyphens
- No abbreviations

### JavaScript Conventions
- camelCase for variables and functions
- PascalCase for Classes
- Descriptive function names
- Comments for complex logic
- Error handling with try-catch

## Performance Guidelines

### Images
- JPG for photographs and complex graphics
- Max width: 1400px for desktop
- Responsive sizes for different screens
- Lazy loading with data-src

### CSS
- Critical CSS inline (minimal)
- Main stylesheet: <1000 lines
- No unused selectors
- Utility classes over custom styles

### JavaScript
- Minimal JavaScript (< 400 lines)
- No external libraries
- Defer non-critical scripts
- Event delegation for efficiency

## File Structure

```
/
├── index.html              # Homepage
├── all-tools.html         # Tools directory
├── [page].html            # Other pages
├── styles.css             # Main stylesheet (855 lines)
├── script.js              # Main JavaScript (338 lines)
├── manifest.json          # PWA manifest
├── sw.js                  # Service worker
├── sitemap.xml            # XML sitemap
├── robots.txt             # Robots file
├── .htaccess              # Apache config
└── assets/
    ├── logo.jpg           # Logo (200x200)
    ├── favicon.jpg        # Favicon (192x192)
    └── apple-touch-icon.jpg # iOS icon (180x180)
```

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: Latest versions
- Minimum: ES6 JavaScript support

## Testing Checklist

- [ ] All links working
- [ ] Responsive on mobile (375px)
- [ ] Responsive on tablet (768px)
- [ ] Responsive on desktop (1920px)
- [ ] All animations smooth
- [ ] Keyboard navigation works
- [ ] Focus states visible
- [ ] Form validation working
- [ ] Images load properly
- [ ] Social sharing metadata correct
- [ ] SEO keywords present
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] Page speed < 2s

## Customization

### Changing Colors
1. Update CSS variables in `:root`
2. Update gradient backgrounds
3. Update hover states
4. Test contrast ratios

### Modifying Fonts
1. Update `font-family` in `body`
2. Update all `@theme` variables
3. Adjust font sizes for readability
4. Test on mobile devices

### Adding New Tools
1. Add to `tools` array in `script.js`
2. Assign icon and gradient color
3. Write description
4. Update tool count in pages

## Support

For design questions or contributions:
- Contact: support@estudytools.github.io
- GitHub Issues: https://github.com/estudytools
