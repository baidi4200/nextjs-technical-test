import type { NextRequest } from 'next/server';
import { filterProducts, type ProductFilters } from '@/lib/products';

function parsePrice(raw: string | null): number | undefined {
  if (raw === null || raw === '') return undefined;
  const n = Number(raw);
  return Number.isFinite(n) ? n : undefined;
}

export function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;

  const filters: ProductFilters = {
    q: sp.get('q') ?? undefined,
    minPrice: parsePrice(sp.get('minPrice')),
    maxPrice: parsePrice(sp.get('maxPrice')),
    tag: sp.get('tag') ?? undefined,
  };

  const results = filterProducts(filters);
  return Response.json({ count: results.length, products: results });
}
