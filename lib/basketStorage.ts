import { EMPTY_BASKET, type BasketState, type BasketItem } from './basket';

const STORAGE_KEY = 'product-catalog:basket';

function isValidItem(value: unknown): value is BasketItem {
  if (typeof value !== 'object' || value === null) return false;
  const v = value as Record<string, unknown>;
  return (
    typeof v.id === 'string' &&
    typeof v.name === 'string' &&
    typeof v.brand === 'string' &&
    typeof v.price === 'number' &&
    typeof v.quantity === 'number' &&
    v.quantity > 0 &&
    (v.imageUrl === undefined || typeof v.imageUrl === 'string')
  );
}

export function readBasket(): BasketState {
  if (typeof window === 'undefined') return EMPTY_BASKET;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_BASKET;
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== 'object' || parsed === null) return EMPTY_BASKET;
    const items = (parsed as { items?: unknown }).items;
    if (!Array.isArray(items)) return EMPTY_BASKET;
    return { items: items.filter(isValidItem) };
  } catch {
    return EMPTY_BASKET;
  }
}

export function writeBasket(state: BasketState): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Quota or private-mode error — non-fatal
  }
}
