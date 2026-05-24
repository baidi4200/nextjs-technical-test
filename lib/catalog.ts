import { filterProducts, type Product, type ProductFilters } from './products';
import { paginate, type Paginated } from './pagination';
import { sortProducts, type SortKey } from './sort';

export type CatalogQuery = ProductFilters & {
  sort: SortKey;
  page: number;
  pageSize: number;
};

export function getCatalog(query: CatalogQuery): Paginated<Product> {
  const { sort, page, pageSize, ...filters } = query;
  const filtered = filterProducts(filters);
  const sorted = sortProducts(filtered, sort);
  return paginate(sorted, page, pageSize);
}
