export type BasketItem = {
  id: string;
  name: string;
  brand: string;
  price: number;
  imageUrl?: string;
  quantity: number;
};

export type BasketState = {
  items: BasketItem[];
};

export const EMPTY_BASKET: BasketState = { items: [] };

export type BasketAction =
  | { type: 'add'; item: Omit<BasketItem, 'quantity'>; quantity?: number }
  | { type: 'setQuantity'; id: string; quantity: number }
  | { type: 'remove'; id: string }
  | { type: 'clear' }
  | { type: 'hydrate'; state: BasketState };

export function basketReducer(state: BasketState, action: BasketAction): BasketState {
  switch (action.type) {
    case 'hydrate':
      return action.state;

    case 'add': {
      const qty = action.quantity ?? 1;
      const existing = state.items.find((i) => i.id === action.item.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.item.id ? { ...i, quantity: i.quantity + qty } : i,
          ),
        };
      }
      return { items: [...state.items, { ...action.item, quantity: qty }] };
    }

    case 'setQuantity': {
      if (action.quantity <= 0) {
        return { items: state.items.filter((i) => i.id !== action.id) };
      }
      return {
        items: state.items.map((i) =>
          i.id === action.id ? { ...i, quantity: action.quantity } : i,
        ),
      };
    }

    case 'remove':
      return { items: state.items.filter((i) => i.id !== action.id) };

    case 'clear':
      return EMPTY_BASKET;
  }
}

export function getItemCount(state: BasketState): number {
  return state.items.reduce((sum, i) => sum + i.quantity, 0);
}

export function getTotal(state: BasketState): number {
  return state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
}
