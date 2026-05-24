import CatalogFilters from '@/app/_components/filters/CatalogFilters';
import EmptyState from '@/app/_components/catalog/EmptyState';
import PageHeader from '@/app/_components/layout/PageHeader';
import PageSizeSelect from '@/app/_components/catalog/PageSizeSelect';
import Pagination from '@/app/_components/catalog/Pagination';
import ProductGrid from '@/app/_components/product/ProductGrid';
import ResultsCount from '@/app/_components/catalog/ResultsCount';
import { getCatalog } from '@/lib/catalog';
import { getAllTags } from '@/lib/products';
import { PAGE_SIZE_OPTIONS, parsePage, parsePageSize } from '@/lib/pagination';
import { parseSort } from '@/lib/sort';
import { firstParam, parsePrice } from '@/lib/searchParams';

export default async function ProductsPage(props: PageProps<'/products'>) {
  const sp = await props.searchParams;
  const q = firstParam(sp.q);
  const tag = firstParam(sp.tag);
  const minPriceRaw = firstParam(sp.minPrice);
  const maxPriceRaw = firstParam(sp.maxPrice);
  const sort = parseSort(firstParam(sp.sort));
  const page = parsePage(firstParam(sp.page));
  const pageSize = parsePageSize(firstParam(sp.pageSize));

  const { items, total, page: currentPage, pageSize: currentPageSize } = getCatalog({
    q,
    tag,
    minPrice: parsePrice(minPriceRaw),
    maxPrice: parsePrice(maxPriceRaw),
    sort,
    page,
    pageSize,
  });

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <PageHeader
        title="Product Catalog"
        subtitle="Browse the full lineup. Search by name or filter by tag and price."
      />

      <CatalogFilters
        q={q}
        tag={tag}
        minPrice={minPriceRaw}
        maxPrice={maxPriceRaw}
        sort={sort}
        tags={getAllTags()}
      />

      <ResultsCount count={total} />

      {items.length === 0 ? (
        <EmptyState message="No products match those filters." />
      ) : (
        <>
          <ProductGrid products={items} />
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <PageSizeSelect
              value={currentPageSize}
              options={[...PAGE_SIZE_OPTIONS]}
              searchParams={{
                q,
                tag,
                minPrice: minPriceRaw,
                maxPrice: maxPriceRaw,
                sort,
              }}
            />
            <Pagination
              page={currentPage}
              pageSize={currentPageSize}
              total={total}
              searchParams={{
                q,
                tag,
                minPrice: minPriceRaw,
                maxPrice: maxPriceRaw,
                sort,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}
