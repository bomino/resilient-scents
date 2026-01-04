#!/usr/bin/env node

/**
 * Migration Script: JSON to Content Collections
 * 
 * This script migrates the existing JSON data files to individual Markdown files
 * in the new content collections structure for better CMS management.
 */

const fs = require('fs');
const path = require('path');

// Helper function to create a URL-safe slug
function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to convert object to YAML frontmatter
function toYAML(obj, indent = 0) {
  const spaces = '  '.repeat(indent);
  let yaml = '';
  
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      continue;
    }
    
    if (Array.isArray(value)) {
      if (value.length === 0) {
        yaml += `${spaces}${key}: []\n`;
      } else if (typeof value[0] === 'object' && value[0] !== null) {
        yaml += `${spaces}${key}:\n`;
        value.forEach(item => {
          yaml += `${spaces}  -\n`;
          yaml += toYAML(item, indent + 2).split('\n').map(line => 
            line ? `${spaces}  ${line}` : ''
          ).join('\n');
        });
      } else {
        yaml += `${spaces}${key}:\n`;
        value.forEach(item => {
          const escaped = String(item).replace(/"/g, '\\"');
          yaml += `${spaces}  - "${escaped}"\n`;
        });
      }
    } else if (typeof value === 'object' && value !== null) {
      yaml += `${spaces}${key}:\n`;
      yaml += toYAML(value, indent + 1);
    } else if (typeof value === 'string') {
      // Escape quotes and handle multiline strings
      if (value.includes('\n')) {
        yaml += `${spaces}${key}: |\n`;
        value.split('\n').forEach(line => {
          yaml += `${spaces}  ${line}\n`;
        });
      } else {
        const escaped = value.replace(/"/g, '\\"');
        yaml += `${spaces}${key}: "${escaped}"\n`;
      }
    } else {
      yaml += `${spaces}${key}: ${value}\n`;
    }
  }
  
  return yaml;
}

// Migrate Products
function migrateProducts() {
  console.log('Migrating products...');
  const productsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../src/data/products.json'), 'utf-8')
  );
  
  const outputDir = path.join(__dirname, '../src/content/products');
  
  productsData.products.forEach(product => {
    const filename = `${product.slug}.md`;
    const filepath = path.join(outputDir, filename);
    
    // Extract description for body (use vibe as the main content)
    const body = product.vibe || '';
    
    // Create frontmatter
    const frontmatter = { ...product };
    delete frontmatter.vibe; // Remove vibe from frontmatter since it's in the body
    
    const content = `---\n${toYAML(frontmatter)}---\n\n${body}\n`;
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`  ✓ Created ${filename}`);
  });
  
  console.log(`✓ Migrated ${productsData.products.length} products\n`);
}

// Migrate Testimonials
function migrateTestimonials() {
  console.log('Migrating testimonials...');
  const testimonialsData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../src/data/testimonials.json'), 'utf-8')
  );
  
  const outputDir = path.join(__dirname, '../src/content/testimonials');
  
  testimonialsData.testimonials.forEach(testimonial => {
    const slug = createSlug(`${testimonial.name}-${testimonial.id}`);
    const filename = `${slug}.md`;
    const filepath = path.join(outputDir, filename);
    
    // Extract text for body
    const body = testimonial.text || '';
    
    // Create frontmatter
    const frontmatter = { ...testimonial };
    delete frontmatter.text; // Remove text from frontmatter since it's in the body
    
    const content = `---\n${toYAML(frontmatter)}---\n\n${body}\n`;
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`  ✓ Created ${filename}`);
  });
  
  console.log(`✓ Migrated ${testimonialsData.testimonials.length} testimonials\n`);
}

// Migrate FAQs
function migrateFAQs() {
  console.log('Migrating FAQs...');
  const faqData = JSON.parse(
    fs.readFileSync(path.join(__dirname, '../src/data/faq.json'), 'utf-8')
  );
  
  const outputDir = path.join(__dirname, '../src/content/faq');
  
  faqData.faqs.forEach(faq => {
    const slug = createSlug(`${faq.category}-${faq.id}`);
    const filename = `${slug}.md`;
    const filepath = path.join(outputDir, filename);
    
    // Extract answer for body
    const body = faq.answer || '';
    
    // Create frontmatter
    const frontmatter = {
      id: faq.id,
      category: faq.category,
      question: faq.question
    };
    
    const content = `---\n${toYAML(frontmatter)}---\n\n${body}\n`;
    
    fs.writeFileSync(filepath, content, 'utf-8');
    console.log(`  ✓ Created ${filename}`);
  });
  
  console.log(`✓ Migrated ${faqData.faqs.length} FAQs\n`);
}

// Run migrations
try {
  migrateProducts();
  migrateTestimonials();
  migrateFAQs();
  
  console.log('✅ Migration completed successfully!');
  console.log('\nNext steps:');
  console.log('1. Review the generated files in src/content/');
  console.log('2. Update tina/config.ts to use the new content collections');
  console.log('3. Update Astro pages to use getCollection() instead of JSON imports');
  console.log('4. Test the CMS at /admin');
} catch (error) {
  console.error('❌ Migration failed:', error.message);
  process.exit(1);
}
