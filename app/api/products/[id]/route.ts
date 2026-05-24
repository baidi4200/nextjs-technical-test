import type { NextRequest } from 'next/server';
import { getCatalog } from '@/lib/catalog';
import { parsePage, parsePageSize } from '@/lib/pagination';
import { parsePrice } from '@/lib/searchParams';
import { parseSort } from '@/lib/sort';

export function GET(request: NextRequest) {
  const sp = request.nextUrl.searchParams;

  const catalog = getCatalog({
    q: sp.get('q') ?? undefined,
    
    tag: sp.get('tag') ?? undefined,
    minPrice: parsePrice(sp.get('minPrice') ?? undefined),
    maxPrice: parsePrice(sp.get('maxPrice') ?? undefined),
    sort: parseSort(sp.get('sort') ?? undefined),
    page: parsePage(sp.get('page') ?? undefined),
    pageSize: parsePageSize(sp.get('pageSize') ?? undefined),
  });

  return Response.json(catalog);
}