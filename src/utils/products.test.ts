import { describe, it, expect } from 'vitest';
import {
  filterProducts,
  searchProducts,
  sortProducts,
  getFeaturedProducts,
  validateEmail,
  type Product,
} from './products';

// Sample test data
const sampleProducts: Product[] = [
  {
    id: 1,
    slug: 'golden-hour',
    name: 'Golden Hour',
    tagline: 'Liquid Confidence',
    category: 'unisex',
    price: 38.0,
    currency: 'USD',
    sizes: [{ size: '30ml', price: 38.0 }],
    scent_notes: { top: ['Bergamot'], middle: ['Jasmine'], base: ['Sandalwood'] },
    vibe: 'Confident',
    best_for: ['Date nights'],
    ingredients: 'Jojoba Oil',
    how_to_use: 'Apply to pulse points',
    warnings: 'For external use only',
    images: ['/images/golden-hour.jpg'],
    featured: true,
    badge: 'Bestseller',
  },
  {
    id: 2,
    slug: 'midnight-resilience',
    name: 'Midnight Resilience',
    tagline: 'Power Unveiled',
    category: 'men',
    price: 42.0,
    currency: 'USD',
    sizes: [{ size: '30ml', price: 42.0 }],
    scent_notes: { top: ['Black Pepper'], middle: ['Leather'], base: ['Vetiver'] },
    vibe: 'Mysterious',
    best_for: ['Evening events'],
    ingredients: 'Argan Oil',
    how_to_use: 'Warm between palms',
    warnings: 'Patch test recommended',
    images: ['/images/midnight.jpg'],
    featured: true,
    badge: 'New',
  },
  {
    id: 3,
    slug: 'velvet-bloom',
    name: 'Velvet Bloom',
    tagline: 'Soft Strength',
    category: 'women',
    price: 40.0,
    currency: 'USD',
    sizes: [{ size: '30ml', price: 40.0 }],
    scent_notes: { top: ['Pear Blossom'], middle: ['Peony'], base: ['White Musk'] },
    vibe: 'Feminine',
    best_for: ['Brunch dates'],
    ingredients: 'Rosehip Oil',
    how_to_use: 'Glide onto skin',
    warnings: 'Store in cool place',
    images: ['/images/velvet.jpg'],
    featured: false,
    badge: null,
  },
];

describe('filterProducts', () => {
  it('returns all products when category is "all"', () => {
    const result = filterProducts(sampleProducts, 'all');
    expect(result).toHaveLength(3);
  });

  it('filters products by "men" category', () => {
    const result = filterProducts(sampleProducts, 'men');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Midnight Resilience');
  });

  it('filters products by "women" category', () => {
    const result = filterProducts(sampleProducts, 'women');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Velvet Bloom');
  });

  it('filters products by "unisex" category', () => {
    const result = filterProducts(sampleProducts, 'unisex');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Golden Hour');
  });

  it('returns empty array when no products match category', () => {
    const result = filterProducts([], 'men');
    expect(result).toHaveLength(0);
  });
});

describe('searchProducts', () => {
  it('finds products by name', () => {
    const result = searchProducts(sampleProducts, 'golden');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Golden Hour');
  });

  it('is case insensitive', () => {
    const result = searchProducts(sampleProducts, 'MIDNIGHT');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Midnight Resilience');
  });

  it('returns all products when query is empty', () => {
    const result = searchProducts(sampleProducts, '');
    expect(result).toHaveLength(3);
  });

  it('returns all products when query is whitespace', () => {
    const result = searchProducts(sampleProducts, '   ');
    expect(result).toHaveLength(3);
  });

  it('returns empty array when no products match', () => {
    const result = searchProducts(sampleProducts, 'nonexistent');
    expect(result).toHaveLength(0);
  });

  it('finds partial matches', () => {
    const result = searchProducts(sampleProducts, 'vel');
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe('Velvet Bloom');
  });
});

describe('sortProducts', () => {
  it('sorts by name ascending', () => {
    const result = sortProducts(sampleProducts, 'name-asc');
    expect(result[0].name).toBe('Golden Hour');
    expect(result[1].name).toBe('Midnight Resilience');
    expect(result[2].name).toBe('Velvet Bloom');
  });

  it('sorts by name descending', () => {
    const result = sortProducts(sampleProducts, 'name-desc');
    expect(result[0].name).toBe('Velvet Bloom');
    expect(result[1].name).toBe('Midnight Resilience');
    expect(result[2].name).toBe('Golden Hour');
  });

  it('sorts by price ascending', () => {
    const result = sortProducts(sampleProducts, 'price-asc');
    expect(result[0].price).toBe(38.0);
    expect(result[1].price).toBe(40.0);
    expect(result[2].price).toBe(42.0);
  });

  it('sorts by price descending', () => {
    const result = sortProducts(sampleProducts, 'price-desc');
    expect(result[0].price).toBe(42.0);
    expect(result[1].price).toBe(40.0);
    expect(result[2].price).toBe(38.0);
  });

  it('sorts by featured status', () => {
    const result = sortProducts(sampleProducts, 'featured');
    expect(result[0].featured).toBe(true);
    expect(result[1].featured).toBe(true);
    expect(result[2].featured).toBe(false);
  });

  it('does not mutate original array', () => {
    const original = [...sampleProducts];
    sortProducts(sampleProducts, 'price-desc');
    expect(sampleProducts).toEqual(original);
  });
});

describe('getFeaturedProducts', () => {
  it('returns only featured products', () => {
    const result = getFeaturedProducts(sampleProducts);
    expect(result).toHaveLength(2);
    expect(result.every((p) => p.featured)).toBe(true);
  });

  it('returns empty array when no products are featured', () => {
    const unfeatured = sampleProducts.map((p) => ({ ...p, featured: false }));
    const result = getFeaturedProducts(unfeatured);
    expect(result).toHaveLength(0);
  });
});

describe('validateEmail', () => {
  it('validates correct email addresses', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.org')).toBe(true);
    expect(validateEmail('user+tag@example.co.uk')).toBe(true);
  });

  it('rejects invalid email addresses', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('missing@domain')).toBe(false);
    expect(validateEmail('@nodomain.com')).toBe(false);
    expect(validateEmail('spaces in@email.com')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});
