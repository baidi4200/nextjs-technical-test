'use client';

import { useState } from 'react';
import type { Product } from '@/lib/products';
import { useBasket } from './BasketProvider';

type Props = {
  product: Product;
};

export default function AddToBasketButton({ product }: Props) {
  const { dispatch } = useBasket();
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    dispatch({
      type: 'add',
      item: {
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        imageUrl: product.imageUrl,
      },
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1500);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
    >
      {added ? 'Added ✓' : 'Add to basket'}
    </button>
  );
}
