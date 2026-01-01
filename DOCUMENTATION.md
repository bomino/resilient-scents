# Resilient Scents - Complete Documentation

## Table of Contents
- [Project Overview](#project-overview)
- [Architecture](#architecture)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Content Management](#content-management)
- [Development Guide](#development-guide)
- [Deployment](#deployment)
- [Performance](#performance)
- [Security](#security)
- [Maintenance](#maintenance)

## Project Overview

### About Resilient Scents
Resilient Scents is a premium e-commerce catalog website for an empowerment-driven self-care brand offering luxury body oils and fragrances. The site serves as a digital showroom, focusing on product presentation and brand storytelling rather than direct e-commerce transactions.

### Business Model
- **Catalog-First Approach**: Products are showcased with detailed information
- **Inquiry-Based Orders**: Customers submit inquiries through contact forms
- **Personal Touch**: Orders are processed personally via direct communication
- **Brand Focus**: Emphasis on empowerment, self-care, and luxury

### Target Audience
- Women and men seeking premium fragrance oils and body care products
- Customers who value natural ingredients and ethical beauty
- Individuals looking for unique, empowering scents
- Gift buyers seeking luxurious personal care items

## Architecture

### Static Site Generation (SSG)
The site uses Astro's SSG approach for optimal performance:
- Pre-built HTML pages at build time
- No server-side rendering overhead
- Fast page loads and excellent SEO
- CDN-friendly deployment

### Project Structure
```
resilient-scents/
├── src/
│   ├── pages/                # Route pages
│   │   ├── index.astro       # Homepage
│   │   ├── about.astro       # About page
│   │   ├── shop.astro        # Product catalog
│   │   ├── shop/[slug].astro # Dynamic product pages
│   │   ├── contact.astro     # Contact form
│   │   └── faq.astro         # FAQ page
│   ├── components/           # Reusable components
│   │   ├── Navigation.astro  # Site navigation
│   │   ├── Footer.astro      # Site footer
│   │   ├── ProductCard.astro # Product display card
│   │   └── TestimonialCard.astro
│   ├── layouts/              # Page layouts
│   │   └── MainLayout.astro  # Base layout with SEO
│   ├── data/                 # Content data
│   │   ├── products.json     # Product catalog
│   │   ├── testimonials.json # Customer reviews
│   │   └── faq.json         # FAQ content
│   ├── utils/               # Utility functions
│   │   ├── products.ts      # Product utilities
│   │   └── products.test.ts # Unit tests
│   └── styles/              # Global styles
│       └── global.css       # Tailwind imports
├── public/                  # Static assets
│   ├── admin/              # Tina CMS admin
│   └── images/             # Product images
├── tina/                   # CMS configuration
│   └── config.ts           # Tina schema
└── .github/               # CI/CD workflows
    └── workflows/         # GitHub Actions
```

### Data Flow
1. **Content Storage**: JSON files in `src/data/`
2. **Build Time**: Astro reads JSON and generates static HTML
3. **Runtime**: Client-side JavaScript for interactive features
4. **CMS Updates**: Tina CMS modifies JSON files directly

## Features

### Product Catalog
- **7 Premium Products**: Fragrances and body care items
- **Detailed Information**:
  - Scent profiles (top, middle, base notes)
  - Multiple size options with pricing
  - Ingredients and usage instructions
  - Safety warnings
- **Smart Categorization**: Women's, Men's, and Unisex products
- **Visual Presentation**: Product images and badges

### User Experience Features
1. **Advanced Filtering**
   - Category filters (All/Women/Men/Unisex)
   - Real-time product search
   - Multiple sorting options (Featured/Name/Price)

2. **Interactive Elements**
   - Smooth scroll animations
   - Hover effects and transitions
   - Mobile-responsive navigation
   - Accordion FAQ sections

3. **Performance Optimizations**
   - Lazy-loaded images
   - Optimized bundle sizes
   - Minimal JavaScript
   - Fast page transitions

### Content Sections
- **Homepage**: Hero, featured products, testimonials, newsletter
- **About Page**: Brand story and mission
- **Shop Page**: Full product catalog with filters
- **Product Pages**: Detailed individual product views
- **Contact Page**: Inquiry form with Formspree integration
- **FAQ Page**: Categorized frequently asked questions

## Technology Stack

### Core Technologies
- **Astro 5.16.6**: Static site generator
- **TypeScript**: Type-safe development
- **Tailwind CSS 3.4.19**: Utility-first styling
- **Vitest 2.1.8**: Unit testing framework

### Content Management
- **Tina CMS 3.1.3**: Git-based headless CMS
- **JSON Data Files**: Structured content storage
- **Visual Editor**: Non-technical user interface

### Development Tools
- **Node.js 20+**: JavaScript runtime
- **npm**: Package management
- **GitHub Actions**: CI/CD pipelines
- **Lighthouse CI**: Performance monitoring

### Third-Party Services
- **Formspree**: Contact form handling
- **GitHub Pages**: Static site hosting
- **Dependabot**: Dependency updates

## Content Management

### Tina CMS Integration
Tina CMS provides a visual interface for content management:

#### Access Methods
1. **Local Development**
   ```bash
   npm run dev
   # Visit http://localhost:4001/admin/
   ```

2. **Production (Tina Cloud)**
   - Configure at https://tina.io
   - Connect GitHub repository
   - Access via cloud interface

#### Content Types

##### Products
- Product information management
- Size and pricing variants
- Scent profile editing
- Featured product selection
- Badge management (Bestseller/New/Limited)

##### Testimonials
- Customer review management
- Rating system (1-5 stars)
- Product association
- Location information

##### FAQs
- Question/answer pairs
- Category organization
- Easy reordering

### Content Structure

#### Product Schema
```json
{
  "id": number,
  "slug": string,
  "name": string,
  "tagline": string,
  "category": "women" | "men" | "unisex",
  "type": "fragrance-oil" | "body-butter",
  "price": number,
  "currency": "USD",
  "sizes": [
    { "size": string, "price": number }
  ],
  "scent_notes": {
    "top": string[],
    "middle": string[],
    "base": string[]
  },
  "vibe": string,
  "best_for": string[],
  "ingredients": string,
  "how_to_use": string,
  "warnings": string,
  "images": string[],
  "featured": boolean,
  "badge": string | null
}
```

## Development Guide

### Prerequisites
- Node.js 20.x or higher
- npm or yarn package manager
- Git for version control

### Setup Instructions
```bash
# Clone repository
git clone https://github.com/bomino/resilient-scents.git
cd resilient-scents

# Install dependencies
npm install

# Start development server
npm run dev

# Access sites
# Main: http://localhost:4321/resilient-scents/
# CMS: http://localhost:4001/admin/
```

### Available Scripts
```bash
npm run dev          # Start with Tina CMS
npm run build        # Production build
npm run preview      # Preview production
npm test            # Run tests (watch)
npm test -- --run   # Run tests once
npm run test:ui     # Test UI interface
npm run test:coverage # Coverage report
npm run tina:admin  # CMS standalone
npm run tina:build  # Build CMS schema
```

### Development Workflow
1. **Feature Development**
   - Create feature branch
   - Implement changes
   - Write/update tests
   - Test locally

2. **Content Updates**
   - Use Tina CMS interface
   - Preview changes
   - Save to JSON files
   - Commit changes

3. **Testing**
   - Unit tests for utilities
   - Visual testing in browser
   - Mobile responsiveness check
   - Performance validation

### Code Style
- TypeScript for type safety
- Astro components for templating
- Tailwind for styling
- ESLint for linting

## Deployment

### GitHub Pages Deployment

#### Automatic Deployment
- Push to `master` branch triggers deployment
- GitHub Actions builds and deploys
- Available at: https://bomino.github.io/resilient-scents/

#### Manual Deployment
```bash
# Build for production
npm run build

# Files in dist/ ready for deployment
```

### CI/CD Pipeline

#### Workflows
1. **deploy.yml**: Production deployment
2. **test.yml**: Test suite and build verification
3. **lighthouse.yml**: Performance audits

#### Pipeline Steps
1. Checkout code
2. Setup Node.js
3. Install dependencies
4. Run tests
5. Build with Tina CMS
6. Deploy to GitHub Pages
7. Run Lighthouse audits

### Environment Variables
- `TINA_CLIENT_ID`: Tina Cloud client ID
- `TINA_TOKEN`: Tina Cloud access token
- `HEAD` / `VERCEL_GIT_COMMIT_REF`: Branch name

## Performance

### Optimization Strategies
1. **Static Generation**: Pre-built HTML pages
2. **Image Optimization**: Lazy loading, proper formats
3. **Bundle Optimization**: Tree shaking, code splitting
4. **CSS Optimization**: Tailwind purge, minimal CSS
5. **Caching**: Browser and CDN caching

### Performance Metrics
- **Lighthouse Scores**:
  - Performance: 85+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+

- **Core Web Vitals**:
  - LCP (Largest Contentful Paint): < 2.5s
  - FID (First Input Delay): < 100ms
  - CLS (Cumulative Layout Shift): < 0.1

### Monitoring
- Lighthouse CI on every build
- GitHub Actions performance checks
- Browser DevTools profiling

## Security

### Security Measures
1. **Static Site Benefits**
   - No server-side vulnerabilities
   - No database attacks possible
   - Minimal attack surface

2. **Form Security**
   - Formspree handles submissions
   - No direct email exposure
   - Spam protection

3. **Dependencies**
   - Dependabot monitoring
   - Regular updates
   - Security patches

4. **Best Practices**
   - HTTPS enforcement
   - CSP headers (via hosting)
   - No sensitive data in code

### Data Protection
- No user data storage
- Form data via secure third-party
- No payment processing on-site

## Maintenance

### Regular Tasks

#### Weekly
- Check form submissions
- Review website analytics
- Monitor social media inquiries

#### Monthly
- Update product information
- Add new testimonials
- Review and update FAQs
- Check for dependency updates

#### Quarterly
- Performance audit
- SEO review
- Content refresh
- Image optimization

### Update Procedures

#### Content Updates
1. Access Tina CMS
2. Make changes through interface
3. Save and preview
4. Commit to repository
5. Auto-deployment triggers

#### Code Updates
1. Create feature branch
2. Implement changes
3. Run tests locally
4. Create pull request
5. Merge after review
6. Auto-deployment triggers

#### Dependency Updates
```bash
# Check outdated packages
npm outdated

# Update dependencies
npm update

# Test after updates
npm test -- --run
npm run build
```

### Troubleshooting

#### Common Issues

1. **Build Failures**
   - Check Node version
   - Clear cache: `rm -rf .astro node_modules dist`
   - Reinstall: `npm ci`

2. **CMS Access Issues**
   - Verify Tina configuration
   - Check port availability (4001)
   - Restart dev server

3. **Deployment Issues**
   - Check GitHub Actions logs
   - Verify branch permissions
   - Review build output

4. **Form Submission Issues**
   - Verify Formspree endpoint
   - Check form field names
   - Test in different browsers

### Backup Strategy
- Git repository is primary backup
- GitHub stores all history
- Local development copies
- Export JSON data periodically

## Support and Resources

### Documentation
- [README.md](README.md) - Quick start guide
- [CLAUDE.md](CLAUDE.md) - AI assistant instructions
- [CMS_GUIDE.md](CMS_GUIDE.md) - CMS user guide
- [DOCUMENTATION.md](DOCUMENTATION.md) - This file

### External Resources
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Tina CMS Docs](https://tina.io/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Getting Help
1. Check documentation first
2. Review GitHub issues
3. Contact development team
4. Submit bug reports on GitHub

---

## Changelog

### Version 1.0.0 (January 2025)
- Initial release
- Tina CMS integration
- Complete product catalog
- Responsive design
- CI/CD pipeline setup
- Performance optimizations

---

*Last updated: January 2025*