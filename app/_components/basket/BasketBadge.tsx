'use client';

import Link from 'next/link';
import { getItemCount } from '@/lib/basket';
import { useBasket } from './BasketProvider';

export default function BasketBadge() {
  const { state, hydrated } = useBasket();
  const count = hydrated ? getItemCount(state) : 0;

  return (
    <Link
      href="/basket"
      className="inline-flex items-center gap-2 rounded-md border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
      aria-label={`Basket (${count} item${count === 1 ? '' : 's'})`}
    >
      <span>Basket</span>
      <span
        className="inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-zinc-900 px-1.5 text-xs font-semibold text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900"
        suppressHydrationWarning
      >
        {count}
      </span>
    </Link>
  );
}
