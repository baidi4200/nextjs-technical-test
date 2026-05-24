type Props = {
  message: string;
};

export default function EmptyState({ message }: Props) {
  return (
    <div className="rounded-md border border-dashed border-zinc-300 px-6 py-12 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">
      {message}
    </div>
  );
}
