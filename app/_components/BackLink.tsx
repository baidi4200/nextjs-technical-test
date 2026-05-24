import Link from 'next/link';

type Props = {
  href: string;
  label: string;
};

export default function BackLink({ href, label }: Props) {
  return (
    <Link
      href={href}
      className="text-sm text-zinc-600 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
    >
      ← {label}
    </Link>
  );
}
