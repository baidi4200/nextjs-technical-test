# AI Usage Notes

## What AI tools I used

I used Claude (Claude Code) as an AI assistant during this project. It helped me with boilerplate setup, component structure, and working through unfamiliar parts of the Next.js 16 / React 19 API.

---

## Two examples where I improved or corrected AI-generated output

### Example 1: Basket hydration flash

AI initially suggested reading from `localStorage` directly inside the component body to initialise the basket state:

```ts
// What AI suggested
const [state, dispatch] = useReducer(basketReducer, readBasket());
```

The problem is that `readBasket()` runs on the server during SSR where `localStorage` does not exist — it throws an error. I corrected this by starting with an empty basket and loading from storage inside a `useEffect`, which only runs in the browser:

```ts
// What I changed it to
const [state, dispatch] = useReducer(basketReducer, EMPTY_BASKET);
const [hydrated, setHydrated] = useState(false);

useEffect(() => {
  dispatch({ type: 'hydrate', state: readBasket() });
  setHydrated(true);
}, []);
```

The `hydrated` flag lets components know when the real basket data has loaded, so they can avoid showing stale "empty basket" content on first render.

### Example 2: Filter state in React state instead of the URL

AI initially suggested keeping the search and filter values in `useState` inside the filter component and sending an API request when they change:

```ts
// What AI suggested
const [search, setSearch] = useState('');
const [tag, setTag] = useState('');
// ...fetch products when state changes
```

I changed this so all filter values live in the URL as search parameters instead. The page is a Server Component that reads the URL on each request and passes the values down as props. This means:

- Filtered views are bookmarkable and shareable
- The browser back button correctly restores previous filter state
- No client-side fetch or loading state is needed for filtering

---

## Architectural tradeoff I made and why

**Tradeoff: URL-driven filters vs client-side filter state**

I chose to store all filter values (search, tag, price range, sort, page) in the URL rather than in React state.

**The upside** is that the filtered view is always shareable and bookmarkable, and the server can render the correct results on the first request without a second fetch. It also means the filter components are mostly Server Components with no hydration overhead.

**The downside** is that every filter change causes a full navigation (a new request to the server). If the product data were coming from a slow external API, this would feel slower than a client-side filter that updates instantly. For a static JSON data source like this one, the server response is fast enough that this is not a problem in practice.

If the data source were slow, I would add `loading.tsx` suspense boundaries (which I have done) and consider debouncing the search input to reduce the number of requests.
