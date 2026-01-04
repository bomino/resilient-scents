# Content Management Guide for Resilient Scents (Updated)

## Overview

This guide explains how to manage your website content (products, testimonials, and FAQs) using the enhanced Tina CMS. The system has been upgraded to make content management easier and more intuitive for non-technical users.

## What's New? ✨

The CMS has been significantly improved with the following enhancements:

1. **Visual Image Picker** - Upload and select images visually, no more typing file paths
2. **Easy Content Creation** - Add new products, testimonials, and FAQs with a single click
3. **Safe Deletion** - Remove individual items without affecting the rest of your catalog
4. **Smart Product Linking** - Select products from a dropdown when adding testimonials

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

### Adding a New Product ✨ NEW

1. Click on "Products" in the left sidebar
2. Click the **"+ Create New"** button at the top
3. Fill in all the product details:
   - **URL Slug**: A unique identifier (e.g., "midnight-rose")
   - **Product Name**: Display name (e.g., "Midnight Rose")
   - **Tagline**: Short catchy phrase
   - **Category**: Select Women, Men, or Unisex
   - **Product Type**: Fragrance Oil or Body Butter
   - **Base Price**: Default price in USD
   - **Size Options**: Click "Add Size" to add different sizes and prices
   - **Scent Profile**: Add top, middle, and base notes
   - **Best For**: Add occasions or situations
   - **Ingredients**: Full ingredient list
   - **How to Use**: Application instructions
   - **Warnings**: Safety information
   - **Product Images**: Click "Upload" to add images visually ✨
   - **Featured**: Toggle on/off
   - **Badge**: Select from dropdown (Bestseller, New, etc.)
4. Type the product description in the main text area (this is the "vibe")
5. Click **"Save"** to create the product

### Uploading Images ✨ NEW

1. In the "Product Images" section, click **"Add Item"**
2. Click the **"Upload"** button
3. Select an image from your computer
4. The image will be automatically uploaded and the path will be set
5. You can add multiple images by repeating this process
6. To remove an image, click the trash icon next to it

### Editing an Existing Product

1. Click on "Products" in the left sidebar
2. Click on the product you want to edit from the list
3. Make your changes in the form
4. Click **"Save"** to update the product

### Deleting a Product ✨ NEW

1. Click on "Products" in the left sidebar
2. Click on the product you want to delete
3. Click the **"Delete"** button at the top
4. Confirm the deletion
5. The product will be safely removed without affecting other products

## Managing Testimonials

### Adding a New Testimonial ✨ NEW

1. Click on "Testimonials" in the sidebar
2. Click the **"+ Create New"** button
3. Fill in the details:
   - **Customer Name**: Full name
   - **Location**: City, State/Country
   - **Product**: Select from the dropdown ✨ (no more typos!)
   - **Rating**: Enter a number from 1-5
4. Type the testimonial text in the main text area
5. Click **"Save"**

### Editing a Testimonial

1. Click on "Testimonials" in the sidebar
2. Click on the testimonial you want to edit
3. Make your changes
4. Click **"Save"**

### Deleting a Testimonial ✨ NEW

1. Click on "Testimonials" in the sidebar
2. Click on the testimonial you want to delete
3. Click the **"Delete"** button at the top
4. Confirm the deletion

## Managing FAQs

### Adding a New FAQ ✨ NEW

1. Click on "FAQ" in the sidebar
2. Click the **"+ Create New"** button
3. Fill in the details:
   - **Category**: Select from dropdown (Products, Application, etc.)
   - **Question**: The question text
4. Type the answer in the main text area
5. Click **"Save"**

### Editing an FAQ

1. Click on "FAQ" in the sidebar
2. Click on the FAQ you want to edit
3. Make your changes
4. Click **"Save"**

### Deleting an FAQ ✨ NEW

1. Click on "FAQ" in the sidebar
2. Click on the FAQ you want to delete
3. Click the **"Delete"** button at the top
4. Confirm the deletion

## Best Practices

### Product Management

1. **URL Slugs**: Use lowercase letters and hyphens only (e.g., "midnight-rose", not "Midnight Rose")
2. **Complete Information**: Fill in all required fields for the best customer experience
3. **High-Quality Images**: Upload clear, well-lit product photos
4. **Consistent Naming**: Use a consistent style for product names and descriptions
5. **SEO**: Use descriptive, keyword-rich product names and descriptions

### Image Management

1. **File Names**: Use descriptive file names (e.g., "savage-bottle.jpg")
2. **Image Size**: Optimize images before uploading (recommended: under 500KB)
3. **Multiple Angles**: Upload 2-4 images per product showing different angles
4. **Consistency**: Use similar lighting and backgrounds for all product photos

### Content Guidelines

1. **Tone**: Maintain the brand's empowering, luxurious voice
2. **Accuracy**: Double-check prices, ingredients, and safety warnings
3. **Updates**: Keep featured products and badges current
4. **Testing**: Preview changes before publishing

## Saving Your Changes

### Local Changes
- Click the **"Save"** button after making edits
- Changes are saved to your local files
- You'll see a success message

### Publishing Changes

To make your changes live on the website:

1. **Via Tina Cloud** (if configured):
   - Click "Save" - changes auto-publish to the live site

2. **Via GitHub** (manual):
   - After saving locally, commit changes to GitHub
   - The website will automatically update within 5-10 minutes

## Troubleshooting

### Can't Access the CMS?
- Ensure you're running `npm run dev` first (for local development)
- Check that you're using the correct URL
- Clear your browser cache

### Changes Not Showing?
- Make sure you clicked "Save"
- Refresh your browser
- Wait 5-10 minutes for GitHub Pages to update (for production)

### Images Not Displaying?
- Make sure the image was uploaded successfully
- Check that the image appears in the media library
- Try re-uploading the image

### Can't Delete an Item?
- Make sure you have the necessary permissions
- Try refreshing the page and trying again
- Contact your administrator if the issue persists

## Quick Reference

### Common Tasks

| Task | Steps |
|:---|:---|
| **Add a product** | Products → + Create New → Fill form → Save |
| **Upload an image** | Edit product → Product Images → Add Item → Upload |
| **Update a price** | Products → Select product → Edit price/sizes → Save |
| **Mark as featured** | Products → Select product → Toggle "Featured" → Save |
| **Add a testimonial** | Testimonials → + Create New → Fill form → Save |
| **Add FAQ** | FAQ → + Create New → Fill details → Save |
| **Delete any item** | Select item → Delete button → Confirm |

### File Locations (For Developers)

- Products: `src/content/products/*.md`
- Testimonials: `src/content/testimonials/*.md`
- FAQs: `src/content/faq/*.md`
- Images: `public/images/`

## Getting Help

If you need assistance:
1. Check this guide first
2. Review the `IMPLEMENTATION_SUMMARY.md` for technical details
3. Consult the TinaCMS documentation at https://tina.io/docs
4. Contact your developer for support
5. Report issues at: https://github.com/bomino/resilient-scents/issues

---

**Remember:** All changes through Tina CMS are tracked in version control, so you can always revert if needed!
