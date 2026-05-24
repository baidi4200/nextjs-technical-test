'use client';

import type { BasketItem } from '@/lib/basket';
import BasketLineItem from './BasketLineItem';

type Props = {
  items: BasketItem[];
};

export default function BasketList({ items }: Props) {
  return (
    <ul className="divide-y divide-zinc-200 rounded-lg border border-zinc-200 bg-white px-4 dark:divide-zinc-800 dark:border-zinc-800 dark:bg-zinc-950">
      {items.map((item) => (
        <BasketLineItem key={item.id} item={item} />
      ))}
    </ul>
  );
}
