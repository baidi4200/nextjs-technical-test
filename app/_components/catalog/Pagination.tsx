import Link from 'next/link';
import { buildCatalogHref, type CatalogSearchParams } from '@/lib/buildCatalogHref';
import { getTotalPages } from '@/lib/pagination';
import { getPaginationRange } from '@/lib/paginationRange';

type Props = {
  page: number;
  pageSize: number;
  total: number;
  searchParams: CatalogSearchParams;
};

const baseItem =
  'inline-flex h-9 min-w-9 items-center justify-center rounded-md px-3 text-sm font-medium';
const inactiveItem =
  `${baseItem} text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800`;
const activeItem =
  `${baseItem} border border-zinc-300 bg-white text-zinc-900 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-50`;
const navItem =
  `${baseItem} gap-1 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800`;
const disabledNav =
  `${baseItem} gap-1 pointer-events-none text-zinc-400 dark:text-zinc-600`;
const ellipsisItem = `${baseItem} text-zinc-500 dark:text-zinc-500`;

export default function Pagination({ page, pageSize, total, searchParams }: Props) {
  const totalPages = getTotalPages(total, pageSize);
  if (totalPages <= 1) return null;

  const items = getPaginationRange(page, totalPages);
  const isFirst = page <= 1;
  const isLast = page >= totalPages;

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-1"
    >
      {isFirst ? (
        <span className={disabledNav} aria-disabled="true">
          <span aria-hidden="true">‹</span> Previous
        </span>
      ) : (
        <Link
          href={buildCatalogHref(searchParams, { page: page - 1, pageSize })}
          className={navItem}
          rel="prev"
        >
          <span aria-hidden="true">‹</span> Previous
        </Link>
      )}

      {items.map((item) =>
        typeof item === 'number' ? (
          item === page ? (
            <span
              key={item}
              aria-current="page"
              className={activeItem}
            >
              {item}
            </span>
          ) : (
            <Link
              key={item}
              href={buildCatalogHref(searchParams, { page: item, pageSize })}
              className={inactiveItem}
              aria-label={`Go to page ${item}`}
            >
              {item}
            </Link>
          )
        ) : (
          <span key={item} className={ellipsisItem} aria-hidden="true">
            …
          </span>
        ),
      )}

      {isLast ? (
        <span className={disabledNav} aria-disabled="true">
          Next <span aria-hidden="true">›</span>
        </span>
      ) : (
        <Link
          href={buildCatalogHref(searchParams, { page: page + 1, pageSize })}
          className={navItem}
          rel="next"
        >
          Next <span aria-hidden="true">›</span>
        </Link>
      )}
    </nav>
  );
}
