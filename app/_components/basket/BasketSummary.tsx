'use client';

import { getItemCount, getTotal, type BasketState } from '@/lib/basket';
import { useBasket } from './BasketProvider';

type Props = {
  state: BasketState;
};

export default function BasketSummary({ state }: Props) {
  const { dispatch } = useBasket();
  const count = getItemCount(state);
  const total = getTotal(state);

  return (
    <div className="mt-6 rounded-lg border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between text-zinc-600 dark:text-zinc-400">
          <dt>Items</dt>
          <dd>{count}</dd>
        </div>
        <div className="flex justify-between border-t border-zinc-200 pt-2 text-base font-semibold text-zinc-900 dark:border-zinc-800 dark:text-zinc-50">
          <dt>Total</dt>
          <dd>${total.toFixed(2)}</dd>
        </div>
      </dl>
      <button
        type="button"
        onClick={() => dispatch({ type: 'clear' })}
        className="mt-4 w-full rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        Clear basket
      </button>
    </div>
  );
}
