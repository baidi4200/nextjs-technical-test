import ProductCardSkeleton from './ProductCardSkeleton';

type Props = {
  count?: number;
};

export default function ProductGridSkeleton({ count = 6 }: Props) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </ul>
  );
}
