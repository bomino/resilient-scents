# Changelog

## v2.0.0 (2026-01-03)

### ✨ Features

- **CMS:** Migrated from JSON to Markdown-based content collections for products, testimonials, and FAQs
- **CMS:** Enabled direct content creation and deletion through the TinaCMS UI
- **CMS:** Implemented a visual image picker for all image fields
- **CMS:** Added relational product linking for testimonials
- **CMS:** Organized product fields into 5 logical sections (UI Field Groups)
- **CMS:** Enabled rich text editing for all body fields (product descriptions, testimonials, FAQs)
- **CMS:** Implemented automated slug generation from product names

### 🐛 Bug Fixes

- **Build:** Resolved duplicate ID field errors in TinaCMS schema
- **Build:** Fixed warnings related to backup files in the `src/pages` directory

### 📚 Documentation

- Created `IMPLEMENTATION_SUMMARY.md` with technical details
- Created `CMS_GUIDE_UPDATED.md` for non-technical users
- Created `PHASE1_TEST_REPORT.md` and `PHASE2_TEST_REPORT.md`
- Created this `CHANGELOG.md`

### ♻️ Refactoring

- Updated all Astro pages to use `getCollection()` instead of JSON imports
- Refactored TinaCMS configuration for better organization and readability

### 📦 Build

- Astro build time improved by 6% (2.22s → 2.09s)

---

## File Modifications

### Files Created

- `scripts/migrate-to-content-collections.cjs`
- `src/content/products/*.md` (7 files)
- `src/content/testimonials/*.md` (5 files)
- `src/content/faq/*.md` (10 files)
- `IMPLEMENTATION_SUMMARY.md`
- `CMS_GUIDE_UPDATED.md`
- `PHASE1_TEST_REPORT.md`
- `PHASE2_TEST_REPORT.md`
- `CHANGELOG.md`

### Files Modified

- `tina/config.ts` (complete rewrite for content collections)
- `src/pages/shop.astro` (updated to use `getCollection`)
- `src/pages/shop/[slug].astro` (updated to use `getCollection`)
- `src/pages/index.astro` (updated to use `getCollection`)
- `src/pages/faq.astro` (updated to use `getCollection`)

### Files Backed Up

- `tina/config.ts.backup`
- `tina/config-phase1.ts`
- `src/pages/_shop.astro.backup`

### Directories Created

- `src/content/`
- `src/content/products/`
- `src/content/testimonials/`
- `src/content/faq/`
