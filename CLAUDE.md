# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Resilient Scents is a premium static e-commerce catalog website for an empowerment-driven self-care brand offering body oils for men and women. The site showcases products without a full shopping cart (Path A: marketing + catalog approach), with inquiries handled via contact form or social media DMs.

## Tech Stack

- **Framework**: Astro 5.x (SSG)
- **Styling**: Tailwind CSS 3.x with custom earth-tone color palette
- **Testing**: Vitest with jsdom for DOM testing
- **Forms**: Formspree for contact form submissions
- **Deployment**: GitHub Pages

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:4321
npm run build        # Build static files to dist/
npm run preview      # Preview production build

# Testing
npm test             # Run Vitest in watch mode
npm test -- --run    # Run tests once
npm run test:ui      # Run Vitest with UI
npm run test:coverage # Run with coverage report
```

## Project Structure

```
src/
├── pages/                    # Route pages (.astro files)
│   ├── index.astro           # Home page with hero, featured products, testimonials
│   ├── about.astro           # Monique's story and brand mission
│   ├── contact.astro         # Contact form (Formspree)
│   ├── faq.astro             # Accordion FAQ by category
│   ├── shop.astro            # Product catalog with filters/search/sort
│   └── shop/[slug].astro     # Dynamic product detail pages
├── components/               # Reusable components
│   ├── Navigation.astro      # Fixed header with mobile menu
│   ├── Footer.astro          # Site footer with newsletter
│   ├── ProductCard.astro     # Product card for grids
│   └── TestimonialCard.astro # Testimonial display card
├── layouts/
│   └── MainLayout.astro      # Base layout with SEO meta tags
├── data/                     # Static JSON data
│   ├── products.json         # 6 products with full schema
│   ├── testimonials.json     # Customer testimonials
│   └── faq.json              # FAQ organized by category
├── styles/
│   └── global.css            # Tailwind imports + custom components
└── utils/
    ├── products.ts           # Product filtering/sorting/search utilities
    └── products.test.ts      # Unit tests (21 tests)
public/
├── favicon.svg               # Brand favicon
└── images/                   # Product photos (placeholders currently)
```

## Data Model

Products in `src/data/products.json`:
```json
{
  "id": 1,
  "slug": "golden-hour",
  "name": "Golden Hour",
  "tagline": "Liquid Confidence",
  "category": "unisex",  // "women" | "men" | "unisex"
  "price": 38.00,
  "currency": "USD",
  "sizes": [
    { "size": "10ml", "price": 18.00 },
    { "size": "30ml", "price": 38.00 }
  ],
  "scent_notes": {
    "top": ["Bergamot", "Blood Orange"],
    "middle": ["Jasmine Sambac", "Neroli"],
    "base": ["Sandalwood", "Amber"]
  },
  "vibe": "That moment when the sun dips low...",
  "best_for": ["Date nights", "Important meetings"],
  "ingredients": "Fractionated Coconut Oil, Sweet Almond Oil...",
  "how_to_use": "Apply to pulse points...",
  "warnings": "For external use only. Patch test recommended.",
  "images": ["/images/golden-hour-1.jpg"],
  "featured": true,
  "badge": "Bestseller"  // or "New", "Limited", null
}
```

## Custom Tailwind Colors

The design uses a warm earth-tone palette defined in `tailwind.config.mjs`:
- `terracotta`: Primary brand color (warm orange-red)
- `amber`: Accent color (golden)
- `clay`: Neutral browns
- `sage`: Muted green accents
- `cream`: Light backgrounds

## Key Features

- **Product Filtering**: Client-side filtering by category (all/women/men/unisex)
- **Search**: Real-time product search by name
- **Sorting**: By featured, name (A-Z/Z-A), price (low-high/high-low)
- **URL Params**: Shop page respects `?category=` query param
- **Animations**: Scroll reveal, staggered children, floating elements
- **Mobile Menu**: Animated slide-in with staggered nav links

## Testing

Unit tests in `src/utils/products.test.ts` cover:
- `filterProducts()` - category filtering
- `searchProducts()` - name search
- `sortProducts()` - various sort options
- `getFeaturedProducts()` - featured filter
- `validateEmail()` - email validation

Run tests: `npm test -- --run`

## Adding New Products

1. Add product object to `src/data/products.json` following the schema above
2. Add product images to `public/images/` named `{slug}-1.jpg`, `{slug}-2.jpg`, etc.
3. Rebuild: `npm run build`

## Deployment (GitHub Pages)

1. Update `astro.config.mjs` with your GitHub username and repo name
2. Run `npm run build`
3. Push `dist/` contents to `gh-pages` branch
4. Enable Pages in GitHub repo settings

## Design Notes

- **Typography**: Playfair Display (display), DM Sans (body), Cormorant Garamond (accent)
- **Aesthetic**: Editorial/luxury magazine feel with organic blob shapes and warm gradients
- **Animations**: Scroll-triggered reveals, floating elements, smooth transitions
- **Forms**: Formspree integration (update endpoint in contact.astro)
