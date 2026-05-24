import BackLink from '@/app/_components/BackLink';
import ProductDetail from '@/app/_components/ProductDetail';
import { getProductById } from '@/lib/products';
import { notFound } from 'next/navigation';

export default async function ProductPage(props: PageProps<'/products/[id]'>) {
  const { id } = await props.params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <BackLink href="/" label="Back to catalog" />
      <ProductDetail product={product} />
    </div>
  );
}
