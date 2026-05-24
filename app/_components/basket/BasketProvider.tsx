'use client';

import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import {
  EMPTY_BASKET,
  basketReducer,
  type BasketAction,
  type BasketState,
} from '@/lib/basket';
import { readBasket, writeBasket } from '@/lib/basketStorage';

type BasketContextValue = {
  state: BasketState;
  dispatch: (action: BasketAction) => void;
  hydrated: boolean;
};

const BasketContext = createContext<BasketContextValue | null>(null);

export default function BasketProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(basketReducer, EMPTY_BASKET);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    dispatch({ type: 'hydrate', state: readBasket() });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) writeBasket(state);
  }, [state, hydrated]);

  return (
    <BasketContext.Provider value={{ state, dispatch, hydrated }}>
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket(): BasketContextValue {
  const ctx = useContext(BasketContext);
  if (!ctx) {
    throw new Error('useBasket must be used inside <BasketProvider>');
  }
  return ctx;
}
