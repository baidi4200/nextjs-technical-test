import Link from 'next/link';

type Props = {
  tag: string;
  href?: string;
};

const baseClass =
  'rounded-full bg-zinc-100 px-2 py-0.5 text-[10px] text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300';
const linkClass = `${baseClass} hover:bg-zinc-200 dark:hover:bg-zinc-800`;

export default function TagBadge({ tag, href }: Props) {
  if (href) {
    return (
      <Link href={href} className={linkClass}>
        {tag}
      </Link>
    );
  }
  return <span className={baseClass}>{tag}</span>;
}
