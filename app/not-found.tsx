import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto w-full max-w-md px-4 py-24 text-center">
      <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
        Not found
      </h1>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        The page or product you’re looking for doesn’t exist.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-md border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
      >
        Back to catalog
      </Link>
    </div>
  );
}
