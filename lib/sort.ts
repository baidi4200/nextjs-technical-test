import type { Product } from './products';

export type SortKey = 'price_asc' | 'price_desc' | 'rating_desc';

export const DEFAULT_SORT: SortKey = 'rating_desc';

const SORT_KEYS: readonly SortKey[] = ['price_asc', 'price_desc', 'rating_desc'];

export function parseSort(value: string | undefined): SortKey {
  return SORT_KEYS.includes(value as SortKey) ? (value as SortKey) : DEFAULT_SORT;
}

export function sortProducts(products: Product[], sort: SortKey): Product[] {
  const copy = [...products];
  switch (sort) {
    case 'price_asc':
      return copy.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return copy.sort((a, b) => b.price - a.price);
    case 'rating_desc':
      return copy.sort((a, b) => b.rating - a.rating);
  }
}

export const SORT_OPTIONS: { value: SortKey; label: string }[] = [
  { value: 'rating_desc', label: 'Top rated' },
  { value: 'price_asc', label: 'Price: low to high' },
  { value: 'price_desc', label: 'Price: high to low' },
];
