# Resilient Scents 🌿

A premium e-commerce catalog website for an empowerment-driven self-care brand offering luxury body oils and fragrances.

[![Deploy to GitHub Pages](https://github.com/bomino/resilient-scents/actions/workflows/deploy.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/deploy.yml)
[![Test and Build](https://github.com/bomino/resilient-scents/actions/workflows/test.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/test.yml)
[![Lighthouse CI](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)

🌐 **Live Site**: [https://bomino.github.io/resilient-scents/](https://bomino.github.io/resilient-scents/)

## ✨ Features

- **Product Catalog**: Browse premium body oils and fragrances with detailed descriptions
- **Advanced Filtering**: Filter by category (Women/Men/Unisex)
- **Search & Sort**: Real-time product search and multiple sorting options
- **Responsive Design**: Mobile-first design with elegant animations
- **Performance Optimized**: Static site generation for lightning-fast loading
- **Accessibility**: WCAG-compliant with keyboard navigation support

## 🛍️ Product Collection

Our curated collection includes:
- **Savage** - Bold & Untamed (Men)
- **Tommy-B** - Classic Confidence (Men)
- **Rihanna** - Feminine Grace (Women)
- **Belle** - Elegant Sophistication (Women)
- **One Million** - Luxury Redefined (Men)
- **Nag Champa** - Mystical Essence (Unisex)
- **Unscented Body Butter** - Pure Nourishment (Unisex)

## 🚀 Quick Start

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/bomino/resilient-scents.git
cd resilient-scents

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:4321/resilient-scents/` to view the site locally.

## 📦 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run tests in watch mode
npm test -- --run    # Run tests once
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
```

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x - Static Site Generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 3.x with custom design system
- **Testing**: [Vitest](https://vitest.dev/) with jsdom
- **Language**: TypeScript
- **Deployment**: GitHub Pages with GitHub Actions

## 📁 Project Structure

```
resilient-scents/
├── src/
│   ├── pages/              # Route pages (.astro files)
│   ├── components/         # Reusable components
│   ├── layouts/            # Page layouts
│   ├── data/              # JSON data (products, testimonials, FAQ)
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions and tests
├── public/                # Static assets
│   └── images/           # Product images
├── .github/
│   └── workflows/        # CI/CD pipelines
└── dist/                 # Build output (git-ignored)
```

## 🎨 Design System

### Color Palette

- **Brand Green**: `#A3E699` - Primary brand color
- **Brand Blue**: `#1A5698` - Secondary color
- **Mint**: Extended green palette (50-950)
- **Navy**: Extended blue palette (50-950)
- **Cream**: Off-white backgrounds

### Typography

- **Display**: Playfair Display
- **Body**: DM Sans
- **Accent**: Cormorant Garamond

### Animations

Custom animations include: `float`, `fade-in`, `fade-in-up`, `slide-in-left`, `slide-in-right`, `scale-in`, `blob`

## 🧪 Testing

The project includes comprehensive unit tests for all utility functions:

```bash
# Run tests
npm test -- --run

# Run with coverage
npm run test:coverage

# Interactive UI
npm run test:ui
```

## 🚢 Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `master` branch.

### Manual Deployment

```bash
# Build the site
npm run build

# Preview locally
npm run preview
```

The built files in `dist/` are deployed via GitHub Actions.

## 🤖 CI/CD Pipeline

Our comprehensive CI/CD includes:

- **Automated Testing**: Unit tests run on every PR
- **Type Checking**: TypeScript validation
- **Build Verification**: Ensures successful builds
- **Performance Monitoring**: Lighthouse CI audits
- **Dependency Updates**: Automated via Dependabot
- **Auto-deployment**: Pushes to master deploy automatically

## 📊 Performance

Target metrics (monitored by Lighthouse CI):
- **Performance**: 85+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 🔧 Configuration

### Forms

Contact forms use [Formspree](https://formspree.io/). To enable:

1. Sign up at formspree.io
2. Create a new form
3. Replace `xYOURFORMID` in the following files:
   - `src/pages/contact.astro`
   - `src/components/Footer.astro`
   - `src/pages/index.astro`

### Social Media

Update social media links in `src/components/Footer.astro`:
- Instagram: [@resilientscents](https://instagram.com/resilientscents)
- TikTok: [@resilientscents](https://tiktok.com/@resilientscents)
- Pinterest: [@resilientscents](https://pinterest.com/resilientscents)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure:
- All tests pass (`npm test -- --run`)
- TypeScript compiles (`npx tsc --noEmit`)
- Build succeeds (`npm run build`)

## 📝 License

This project is proprietary and confidential. All rights reserved.

## 👤 Author

**Bomino**

- GitHub: [@bomino](https://github.com/bomino)

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Deployed with [GitHub Pages](https://pages.github.com/)
- CI/CD powered by [GitHub Actions](https://github.com/features/actions)

---

<p align="center">Made with 💚 for Resilient Scents</p>