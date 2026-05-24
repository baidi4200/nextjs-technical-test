'use client';

import Link from 'next/link';
import type { BasketItem } from '@/lib/basket';
import ProductImage from '@/app/_components/product/ProductImage';
import QuantityStepper from './QuantityStepper';
import { useBasket } from './BasketProvider';

type Props = {
  item: BasketItem;
};

export default function BasketLineItem({ item }: Props) {
  const { dispatch } = useBasket();
  const lineTotal = item.price * item.quantity;

  return (
    <li className="flex gap-4 border-b border-zinc-200 py-4 last:border-b-0 dark:border-zinc-800">
      <div className="w-20 shrink-0 overflow-hidden rounded-md">
        <ProductImage src={item.imageUrl} alt={item.name} />
      </div>

      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-start justify-between gap-4">
          <div>
            <Link
              href={`/products/${item.id}`}
              className="text-sm font-medium text-zinc-900 hover:underline dark:text-zinc-50"
            >
              {item.name}
            </Link>
            <p className="text-xs text-zinc-600 dark:text-zinc-400">
              {item.brand} · ${item.price.toFixed(2)} each
            </p>
          </div>
          <span className="shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
            ${lineTotal.toFixed(2)}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <QuantityStepper
            value={item.quantity}
            onChange={(next) =>
              dispatch({ type: 'setQuantity', id: item.id, quantity: next })
            }
          />
          <button
            type="button"
            onClick={() => dispatch({ type: 'remove', id: item.id })}
            className="text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
