# Next.js Product Catalog

A product browsing and basket application built with Next.js 16, React 19, and Tailwind CSS v4.

---

## What This App Does

- Browse a product catalog with search, filtering by tag and price, and sorting
- Paginate results and control page size
- View individual product detail pages
- Add products to a basket, adjust quantities, and remove items
- Basket persists across page refreshes using localStorage

---

## Setup Instructions

**Requirements:** Node.js 18 or later

**1. Install dependencies**

```bash
npm install
```

**2. Start the development server**

```bash
npm run dev
```

**3. Open the app**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

**Other commands**

```bash
npm run build   # production build
npm start       # run the production build
npm run lint    # run ESLint
```

> No environment variables or external services are needed. Product data lives in `data/products.json`.

---

## Project Structure

```
app/
  page.tsx                  → Home page (redirects to /products)
  products/page.tsx         → Product catalog (search, filter, sort, paginate)
  products/[id]/page.tsx    → Individual product detail page
  basket/page.tsx           → Basket / checkout summary
  _components/              → All UI components, grouped by feature
    basket/                 → Basket-related components (provider, items, badge)
    catalog/                → Pagination, results count, page size
    filters/                → Search, sort, tag, price filter inputs
    product/                → Product card, grid, image
    layout/                 → Shared layout pieces (header, back link)

lib/
  basket.ts                 → Basket state shape, reducer, and helper functions
  basketStorage.ts          → Read/write basket to localStorage
  catalog.ts                → Filter, sort, and paginate products
  products.ts               → Load and query raw product data
  pagination.ts             → Page/page-size parsing and validation
  sort.ts                   → Sort option parsing
  searchParams.ts           → URL search param helpers
  buildCatalogHref.ts       → Build URLs for filter/sort/page links

data/
  products.json             → Static product data (no database needed)
```

---

## Architectural Decisions

### 1. URL-driven filters (no client-side filter state)

All filters — search query, tag, price range, sort order, page, and page size — live in the URL as search parameters. The server reads them on every request and returns filtered results.

**Why:** Filtered views are bookmarkable and shareable. Pressing back in the browser correctly restores the previous filter state. No need for a global client-side filter store.

### 2. Server Components for data fetching, Client Components only where needed

Product pages and the catalog page are React Server Components that fetch and render data on the server. Client Components (`'use client'`) are used only where browser APIs are needed — specifically the basket (which uses `localStorage` and React context).

**Why:** Server Components reduce JavaScript sent to the browser and keep data-fetching simple and synchronous on the server side.

### 3. Basket state managed with `useReducer` + Context + localStorage

The basket uses a reducer pattern (`basketReducer` in `lib/basket.ts`) with a React Context provider that hydrates from and persists to localStorage.

**Why:** A reducer makes all basket operations (add, remove, set quantity, clear) predictable and easy to test in isolation. Keeping the logic in a plain function separate from the component also means it can be reused or moved to a different storage layer later.

### 4. Static product data (JSON file, no API)

Products are loaded from `data/products.json` at build time / request time. There is no external API or database.

**Why:** Keeps the project self-contained and easy to run locally without any external setup. For a real app this would be replaced with an API call or database query.

---

## What I Would Improve With More Time

- **Add tests** — unit tests for the basket reducer and catalog filtering logic, and integration tests for the filter/search flow
- **Persist basket server-side** — currently the basket is lost if you clear localStorage; a server-side session or account would fix this
- **Optimistic UI for basket updates** — right now the basket badge updates instantly but the basket page has no loading state for quantity changes
- **Better images** — product images are placeholders; real images with `next/image` optimization and blur placeholders would improve the experience
- **Accessibility audit** — filter inputs and the quantity stepper need proper ARIA labels and keyboard navigation testing
- **Error boundaries** — the app has a top-level `error.tsx` but individual sections could benefit from more granular error handling
