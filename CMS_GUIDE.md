# Content Management Guide for Resilient Scents

## Overview

This guide explains how to manage your website content (products, testimonials, and FAQs) using Tina CMS - a user-friendly content management system that requires no technical knowledge.

## Getting Started

### Accessing the CMS

There are two ways to access the CMS:

#### Option 1: Cloud-Based (Recommended for Production)
1. Visit: https://app.tina.io
2. Sign in with your GitHub account
3. Select the "resilient-scents" repository
4. Start editing!

#### Option 2: Local Development
1. Open your terminal/command prompt
2. Navigate to the project folder
3. Run: `npm run dev`
4. Open your browser to: http://localhost:4323/resilient-scents/admin
5. The CMS interface will open automatically

## Managing Products

### Viewing Products
1. Click on "Products" in the left sidebar
2. You'll see your complete product catalog
3. Each product shows its name for easy identification

### Editing a Product
1. Click on any product from the list
2. You'll see all product details in an easy-to-edit form:
   - **Basic Information**
     - Product ID (unique number)
     - URL Slug (used in web address)
     - Product Name
     - Tagline (catchy phrase)
     - Category (Women/Men/Unisex)
     - Product Type (Fragrance Oil/Body Butter)

   - **Pricing**
     - Base Price (in USD)
     - Size Options (add multiple sizes with different prices)

   - **Scent Profile**
     - Top Notes (initial scents)
     - Middle Notes (heart of the fragrance)
     - Base Notes (long-lasting foundation)

   - **Marketing**
     - Vibe Description (emotional description)
     - Best For (occasions/situations)
     - Featured (yes/no toggle)
     - Badge (Bestseller/New/Limited/etc.)

   - **Product Details**
     - Ingredients (full list)
     - How to Use (application instructions)
     - Warnings (safety information)
     - Images (product photo paths)

3. Make your changes
4. Click "Save" to update the product

### Important Product Fields

#### URL Slug
- This creates the product's web address
- Example: slug "savage" creates `/shop/savage`
- Use lowercase letters and hyphens only
- No spaces or special characters

#### Images
- Add image paths like: `/images/product-name.jpg`
- Upload images to the `public/images/` folder first
- Use consistent naming: `productname-1.jpg`, `productname-2.jpg`

#### Size Options
- Click "Add Size" to create a new size option
- Each size needs:
  - Size name (e.g., "10ml", "30ml")
  - Price for that size

#### Scent Notes
- Click "Add Item" to add notes to any category
- Keep descriptions short and evocative
- Example: "Bergamot", "Vanilla", "Sandalwood"

## Managing Testimonials

### Adding a New Testimonial
1. Click on "Testimonials" in the sidebar
2. Click on the testimonials file
3. Scroll to the bottom of the list
4. Click "Add Testimonial"
5. Fill in:
   - ID (unique number)
   - Customer Name
   - Location (e.g., "New York, USA")
   - Product (select from dropdown)
   - Testimonial Text
   - Rating (1-5 stars)
6. Click "Save"

### Editing Testimonials
1. Find the testimonial in the list
2. Click to expand it
3. Make your changes
4. Click "Save"

## Managing FAQs

### FAQ Categories
FAQs are organized into categories:
- Products
- Application
- Skin & Safety
- Shipping & Returns
- Orders

### Adding a New FAQ
1. Click on "FAQ" in the sidebar
2. Click on the FAQ file
3. Scroll to the bottom
4. Click "Add FAQ"
5. Fill in:
   - ID (unique number)
   - Category (select from dropdown)
   - Question
   - Answer
6. Click "Save"

### Tips for Good FAQs
- Keep questions concise
- Provide complete, helpful answers
- Use simple, clear language
- Address common customer concerns

## Saving Your Changes

### Local Changes
- Click the "Save" button after making edits
- Changes are saved to your local files
- You'll see a success message

### Publishing Changes
To make your changes live on the website:

1. **Via Tina Cloud** (if configured):
   - Click "Save" - changes auto-publish

2. **Via GitHub** (manual):
   - After saving locally, commit changes to GitHub
   - The website will automatically update within 5-10 minutes

## Best Practices

### Product Management
1. **Consistency**: Use consistent naming for products and images
2. **Complete Information**: Fill in all required fields
3. **SEO**: Use descriptive, keyword-rich product names and descriptions
4. **Images**: Use high-quality product photos
5. **Pricing**: Always include currency (USD) and update all size options

### Content Guidelines
1. **Tone**: Maintain the brand's empowering, luxurious voice
2. **Accuracy**: Double-check prices, ingredients, and safety warnings
3. **Updates**: Keep featured products and badges current
4. **Testing**: Preview changes before publishing

## Troubleshooting

### Can't Access the CMS?
- Ensure you're running `npm run dev` first
- Check that you're using the correct URL
- Clear your browser cache

### Changes Not Showing?
- Make sure you clicked "Save"
- Refresh your browser
- Wait 5-10 minutes for GitHub Pages to update

### Images Not Displaying?
- Check the image path is correct
- Ensure images are in `public/images/` folder
- Use forward slashes (/) not backslashes (\)

## Getting Help

If you need assistance:
1. Check this guide first
2. Review the README.md for technical details
3. Contact your developer for support
4. Report issues at: https://github.com/bomino/resilient-scents/issues

## Quick Reference

### Common Tasks
- **Update a price**: Products → Select product → Edit price/sizes → Save
- **Mark as featured**: Products → Select product → Toggle "Featured" → Save
- **Add a badge**: Products → Select product → Select badge → Save
- **Update testimonial**: Testimonials → Select testimonial → Edit → Save
- **Add FAQ**: FAQ → Add FAQ → Fill details → Save

### File Locations
- Products: `src/data/products.json`
- Testimonials: `src/data/testimonials.json`
- FAQs: `src/data/faq.json`
- Images: `public/images/`

---

Remember: All changes through Tina CMS are tracked in version control, so you can always revert if needed!