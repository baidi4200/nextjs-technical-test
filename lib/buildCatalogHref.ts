import { DEFAULT_PAGE_SIZE } from './pagination';
export const CATALOG_PATH = '/products';
export type CatalogSearchParams = Record<string, string | undefined>;

export function buildCatalogHref(
  searchParams: CatalogSearchParams,
  overrides: { page?: number; pageSize?: number },
): string {
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(searchParams)) {
    if (key === 'page' || key === 'pageSize') continue;
    if (value === undefined || value === '') continue;
    params.set(key, value);
  }

  if (overrides.pageSize !== undefined && overrides.pageSize !== DEFAULT_PAGE_SIZE) {
    params.set('pageSize', String(overrides.pageSize));
  }
  if (overrides.page !== undefined && overrides.page > 1) {
    params.set('page', String(overrides.page));
  }

  const qs = params.toString();
  return qs ? `${CATALOG_PATH}?${qs}` : CATALOG_PATH;
}
