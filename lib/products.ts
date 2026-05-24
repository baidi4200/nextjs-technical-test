import productsData from '@/data/products.json';

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  description: string;
  tags: string[];
  rating: number;
  imageUrl?: string;
};

export type ProductFilters = {
  q?: string;
  minPrice?: number;
  maxPrice?: number;
  tag?: string;
};

const products = productsData as Product[];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function filterProducts(filters: ProductFilters): Product[] {
  const { q, minPrice, maxPrice, tag } = filters;
  const needle = q?.trim().toLowerCase();
  const tagNeedle = tag?.trim().toLowerCase();

  return products.filter(p => {
    if (needle) {
      const haystack = [p.name, p.brand, ...p.tags].join(' ').toLowerCase();
      if (!haystack.includes(needle)) return false;
    }
    if (tagNeedle && !p.tags.some(t => t.toLowerCase() === tagNeedle)) {
      return false;
    }
    if (minPrice !== undefined && p.price < minPrice) return false;
    if (maxPrice !== undefined && p.price > maxPrice) return false;
    return true;
  });
}

export function getAllTags(): string[] {
  return [...new Set(products.flatMap(p => p.tags))].sort();
}
