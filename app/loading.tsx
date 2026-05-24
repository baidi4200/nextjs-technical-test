import PageHeader from './_components/layout/PageHeader';
import ProductGridSkeleton from './_components/product/ProductGridSkeleton';

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-16">
      <PageHeader
        title="Product Catalog"
        subtitle="Browse the full lineup. Search by name or filter by tag and price."
      />

      <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-12">
        <div className="sm:col-span-5 h-16 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
        <div className="sm:col-span-3 h-16 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
        <div className="sm:col-span-2 h-16 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
        <div className="sm:col-span-2 h-16 animate-pulse rounded-md bg-zinc-100 dark:bg-zinc-900" />
      </div>

      <div className="mb-4 h-4 w-20 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />

      <ProductGridSkeleton />
    </div>
  );
}
