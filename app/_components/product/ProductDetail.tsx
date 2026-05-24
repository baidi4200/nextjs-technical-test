import type { Product } from '@/lib/products';
import { CATALOG_PATH } from '@/lib/buildCatalogHref';
import ProductImage from './ProductImage';
import TagBadge from './TagBadge';

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  return (
    <article className="mt-6 overflow-hidden rounded-lg border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <ProductImage src={product.imageUrl} alt={product.name} aspect="video" />
      <div className="p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {product.name}
            </h1>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {product.brand} · ★ {product.rating.toFixed(1)}
            </p>
          </div>
          <span className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            ${product.price.toFixed(2)}
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
          {product.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-1.5">
          {product.tags.map(t => (
            <TagBadge key={t} tag={t} href={`${CATALOG_PATH}?tag=${encodeURIComponent(t)}`} />
          ))}
        </div>
      </div>
    </article>
  );
}
