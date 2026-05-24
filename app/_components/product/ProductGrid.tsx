import type { Product } from '@/lib/products';
import ProductCard from './ProductCard';

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}
    </ul>
  );
}
