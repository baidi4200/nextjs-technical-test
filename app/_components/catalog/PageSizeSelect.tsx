'use client';

import { useRouter } from 'next/navigation';
import { buildCatalogHref, type CatalogSearchParams } from '@/lib/buildCatalogHref';

type Props = {
  value: number;
  options: number[];
  searchParams: CatalogSearchParams;
};

const labelClass = 'text-sm text-zinc-600 dark:text-zinc-400';
const selectClass =
  'rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:focus:border-zinc-50';

export default function PageSizeSelect({ value, options, searchParams }: Props) {
  const router = useRouter();

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="page-size" className={labelClass}>
        Per page
      </label>
      <select
        id="page-size"
        value={value}
        onChange={(e) => {
          const next = Number(e.target.value);
          router.push(buildCatalogHref(searchParams, { pageSize: next }));
        }}
        className={selectClass}
        aria-label="Items per page"
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
  );
}
