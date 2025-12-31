import products from '../data/products.json';

export interface Product {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  category: 'women' | 'men' | 'unisex';
  price: number;
  currency: string;
  sizes: { size: string; price: number }[];
  scent_notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  vibe: string;
  best_for: string[];
  ingredients: string;
  how_to_use: string;
  warnings: string;
  images: string[];
  featured: boolean;
  badge: string | null;
}

/**
 * Filter products by category
 */
export function filterProducts(
  productList: Product[],
  category: 'all' | 'women' | 'men' | 'unisex'
): Product[] {
  if (category === 'all') {
    return productList;
  }
  return productList.filter((product) => product.category === category);
}

/**
 * Search products by name
 */
export function searchProducts(productList: Product[], query: string): Product[] {
  const normalizedQuery = query.toLowerCase().trim();
  if (!normalizedQuery) {
    return productList;
  }
  return productList.filter((product) =>
    product.name.toLowerCase().includes(normalizedQuery)
  );
}

/**
 * Sort products by various criteria
 */
export function sortProducts(
  productList: Product[],
  sortBy: 'featured' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc'
): Product[] {
  const sorted = [...productList];

  switch (sortBy) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name));
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name));
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'featured':
    default:
      return sorted.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }
}

/**
 * Get featured products
 */
export function getFeaturedProducts(productList: Product[]): Product[] {
  return productList.filter((product) => product.featured);
}

/**
 * Get product by slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return (products as Product[]).find((product) => product.slug === slug);
}

/**
 * Get related products (same category, excluding current)
 */
export function getRelatedProducts(
  currentProduct: Product,
  limit: number = 3
): Product[] {
  return (products as Product[])
    .filter(
      (product) =>
        product.category === currentProduct.category &&
        product.id !== currentProduct.id
    )
    .slice(0, limit);
}

/**
 * Validate email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
