# Resilient Scents 🌿

<div align="center">

[![Deploy to GitHub Pages](https://github.com/bomino/resilient-scents/actions/workflows/deploy.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/deploy.yml)
[![Test and Build](https://github.com/bomino/resilient-scents/actions/workflows/test.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/test.yml)
[![Lighthouse CI](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml/badge.svg)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)

[![GitHub stars](https://img.shields.io/github/stars/bomino/resilient-scents?style=social)](https://github.com/bomino/resilient-scents/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/bomino/resilient-scents?style=social)](https://github.com/bomino/resilient-scents/network/members)
[![GitHub watchers](https://img.shields.io/github/watchers/bomino/resilient-scents?style=social)](https://github.com/bomino/resilient-scents/watchers)

[![Astro](https://img.shields.io/badge/Astro-v5.16.6-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v3.4.19-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.x-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v20.x-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

[![GitHub last commit](https://img.shields.io/github/last-commit/bomino/resilient-scents)](https://github.com/bomino/resilient-scents/commits/master)
[![GitHub issues](https://img.shields.io/github/issues/bomino/resilient-scents)](https://github.com/bomino/resilient-scents/issues)
[![GitHub pull requests](https://img.shields.io/github/issues-pr/bomino/resilient-scents)](https://github.com/bomino/resilient-scents/pulls)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

[![Website](https://img.shields.io/website?url=https%3A%2F%2Fbomino.github.io%2Fresilient-scents%2F&label=Live%20Site)](https://bomino.github.io/resilient-scents/)
[![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Active-00A86B)](https://bomino.github.io/resilient-scents/)
[![Dependabot](https://img.shields.io/badge/Dependabot-Enabled-025E8C?logo=dependabot)](https://github.com/bomino/resilient-scents/network/updates)

[![Lighthouse Performance](https://img.shields.io/badge/Lighthouse_Performance-85%2B-green)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)
[![Lighthouse Accessibility](https://img.shields.io/badge/Lighthouse_Accessibility-90%2B-green)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)
[![Lighthouse Best Practices](https://img.shields.io/badge/Lighthouse_Best_Practices-90%2B-green)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)
[![Lighthouse SEO](https://img.shields.io/badge/Lighthouse_SEO-90%2B-green)](https://github.com/bomino/resilient-scents/actions/workflows/lighthouse.yml)

[![Tests](https://img.shields.io/badge/Tests-21_Passing-success?logo=vitest&logoColor=white)](https://github.com/bomino/resilient-scents/actions/workflows/test.yml)
[![Code Style](https://img.shields.io/badge/Code_Style-Prettier-ff69b4?logo=prettier&logoColor=white)](https://prettier.io/)
[![Semantic Versioning](https://img.shields.io/badge/Semantic_Versioning-1.0.0-blue)](https://semver.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/bomino/resilient-scents/pulls)

</div>

<div align="center">
  <strong>A premium e-commerce catalog website for an empowerment-driven self-care brand offering luxury body oils and fragrances.</strong>
</div>

<div align="center">
  <sub>Built with ❤️ using modern web technologies</sub>
</div>

<br />

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
npm run dev          # Start development server with Tina CMS
npm run build        # Build for production (Astro only)
npm run build:tina   # Build with Tina CMS (requires cloud credentials)
npm run preview      # Preview production build
npm test             # Run tests in watch mode
npm test -- --run    # Run tests once
npm run test:ui      # Run tests with UI
npm run test:coverage # Generate coverage report
npm run tina:admin   # Run Tina CMS standalone
npm run tina:build   # Build Tina schema
```

## 🏗️ Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x - Static Site Generator
- **CMS**: [Tina CMS](https://tina.io/) - Git-based content management
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

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch.

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
- **Auto-deployment**: Pushes to main deploy automatically

## 📊 Performance

Target metrics (monitored by Lighthouse CI):
- **Performance**: 85+
- **Accessibility**: 90+
- **Best Practices**: 90+
- **SEO**: 90+

## 📝 Content Management

The site uses **Tina CMS** for easy content management without technical knowledge.

### For Non-Technical Users
See the [CMS_GUIDE.md](CMS_GUIDE.md) for detailed instructions on managing products, testimonials, and FAQs.

### Accessing the CMS
1. **Local Development**: Run `npm run dev` and visit `/admin`
2. **Production**: Configure Tina Cloud (see below)

### Content Types
- **Products**: Full product catalog with variants and pricing
- **Testimonials**: Customer reviews and ratings
- **FAQs**: Frequently asked questions by category

### Setting Up TinaCMS Cloud (Optional)

To enable content editing in production, set up TinaCMS Cloud:

1. **Create a Tina Cloud account** at [tina.io](https://tina.io)
2. **Create a new project** and connect it to your GitHub repository
3. **Get your credentials**:
   - `Client ID` from your Tina Cloud dashboard
   - `Read-Only Token` for production builds
4. **Add GitHub repository secrets**:
   - Go to your repo → Settings → Secrets and variables → Actions
   - Add `TINA_CLIENT_ID` with your Client ID
   - Add `TINA_TOKEN` with your Read-Only Token
5. **Update build script** (optional): Change `npm run build` to `npm run build:tina` in your workflow if you want Tina-enabled builds

> **Note**: The site works without TinaCMS Cloud credentials. Content can still be edited locally using `npm run dev` and committed to the repository. TinaCMS Cloud is only needed if you want browser-based content editing in production.

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