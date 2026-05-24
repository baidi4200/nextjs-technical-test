export default function ProductCardSkeleton() {
  return (
    <li className="overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="aspect-4/3 w-full animate-pulse bg-zinc-100 dark:bg-zinc-900" />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="h-3.5 w-2/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-3.5 w-12 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        </div>
        <div className="h-3 w-1/3 animate-pulse rounded bg-zinc-200 dark:bg-zinc-800" />
        <div className="flex gap-1">
          <div className="h-4 w-12 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-10 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
          <div className="h-4 w-14 animate-pulse rounded-full bg-zinc-200 dark:bg-zinc-800" />
        </div>
      </div>
    </li>
  );
}
