import Link from 'next/link';
import type { Product } from '@/lib/products';
import ProductImage from './ProductImage';
import TagBadge from './TagBadge';

type Props = {
  product: Product;
  maxTags?: number;
};

export default function ProductCard({ product, maxTags = 3 }: Props) {
  return (
    <li className="overflow-hidden rounded-lg border border-zinc-200 bg-white transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-600">
      <Link href={`/products/${product.id}`} className="block">
        <ProductImage src={product.imageUrl} alt={product.name} />
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h2 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h2>
            <span className="shrink-0 text-sm font-semibold text-zinc-900 dark:text-zinc-50">
              ${product.price.toFixed(2)}
            </span>
          </div>
          <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">
            {product.brand} · ★ {product.rating.toFixed(1)}
          </p>
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tags.slice(0, maxTags).map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
          </div>
        </div>
      </Link>
    </li>
  );
}
