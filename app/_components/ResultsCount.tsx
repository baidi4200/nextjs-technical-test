type Props = {
  count: number;
};

export default function ResultsCount({ count }: Props) {
  return (
    <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">
      {count} {count === 1 ? 'result' : 'results'}
    </p>
  );
}
