import CatalogFilters from './_components/CatalogFilters';
import EmptyState from './_components/EmptyState';
import PageHeader from './_components/PageHeader';
import ProductGrid from './_components/ProductGrid';
import ResultsCount from './_components/ResultsCount';
import { filterProducts, getAllTags } from '@/lib/products';
import { firstParam, parsePrice } from '@/lib/searchParams';

export default async function Home(props: PageProps<'/'>) {
  const sp = await props.searchParams;
  const q = firstParam(sp.q);
  const tag = firstParam(sp.tag);
  const minPriceRaw = firstParam(sp.minPrice);
  const maxPriceRaw = firstParam(sp.maxPrice);

  const products = filterProducts({
    q,
    tag,
    minPrice: parsePrice(minPriceRaw),
    maxPrice: parsePrice(maxPriceRaw),
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
        tags={getAllTags()}
      />

      <ResultsCount count={products.length} />

      {products.length === 0 ? (
        <EmptyState message="No products match those filters." />
      ) : (
        <ProductGrid products={products} />
      )}
    </div>
  );
}
