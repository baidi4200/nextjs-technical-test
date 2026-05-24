'use client';

import { useBasket } from '@/app/_components/basket/BasketProvider';
import BasketList from '@/app/_components/basket/BasketList';
import BasketSummary from '@/app/_components/basket/BasketSummary';
import EmptyState from '@/app/_components/catalog/EmptyState';
import PageHeader from '@/app/_components/layout/PageHeader';
import BackLink from '@/app/_components/layout/BackLink';

export default function BasketPage() {
  const { state, hydrated } = useBasket();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <BackLink href="/products" label="Continue shopping" />
      <PageHeader title="Your basket" subtitle="Review items and adjust quantities." />

      {!hydrated ? null : state.items.length === 0 ? (
        <EmptyState message="Your basket is empty." />
      ) : (
        <>
          <BasketList items={state.items} />
          <BasketSummary state={state} />
        </>
      )}
    </div>
  );
}
