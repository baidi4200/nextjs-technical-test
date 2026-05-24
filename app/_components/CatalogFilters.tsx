'use client';

type Props = {
  q?: string;
  tag?: string;
  minPrice?: string;
  maxPrice?: string;
  tags: string[];
};

const labelClass =
  'block text-xs font-medium text-zinc-700 dark:text-zinc-300';
const inputClass =
  'mt-1 w-full rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-900 focus:outline-none dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-50 dark:placeholder:text-zinc-500 dark:focus:border-zinc-50';

export default function CatalogFilters({ q, tag, minPrice, maxPrice, tags }: Props) {
  return (
    <form
      method="get"
      className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-12"
    >
      <div className="sm:col-span-5">
        <label htmlFor="filter-q" className={labelClass}>
          Search
        </label>
        <input
          id="filter-q"
          type="search"
          name="q"
          defaultValue={q ?? ''}
          placeholder="Search name, brand, or tag"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-3">
        <label htmlFor="filter-tag" className={labelClass}>
          Tag
        </label>
        <select
          id="filter-tag"
          name="tag"
          defaultValue={tag ?? ''}
          className={inputClass}
        >
          <option value="">All tags</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="filter-min" className={labelClass}>
          Min price
        </label>
        <input
          id="filter-min"
          type="number"
          name="minPrice"
          min="0"
          step="1"
          defaultValue={minPrice ?? ''}
          placeholder="$"
          className={inputClass}
        />
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="filter-max" className={labelClass}>
          Max price
        </label>
        <input
          id="filter-max"
          type="number"
          name="maxPrice"
          min="0"
          step="1"
          defaultValue={maxPrice ?? ''}
          placeholder="$"
          className={inputClass}
        />
      </div>

      <div className="flex gap-2 sm:col-span-12">
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-50 hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200"
        >
          Apply
        </button>
        <a
          href="/"
          className="rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
        >
          Reset
        </a>
      </div>
    </form>
  );
}
