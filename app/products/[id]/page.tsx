import BackLink from '@/app/_components/layout/BackLink';
import ProductDetail from '@/app/_components/product/ProductDetail';
import { getProductById } from '@/lib/products';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata(
  props: PageProps<'/products/[id]'>
): Promise<Metadata> {
  const { id } = await props.params;
  const product = getProductById(id);

  if (!product) return { title: 'Product Not Found' };

  return {
    title: `${product.name} — ${product.brand}`,
    description: product.description,
  };
}

export default async function ProductPage(props: PageProps<'/products/[id]'>) {
  const { id } = await props.params;
  const product = getProductById(id);

  if (!product) notFound();

  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <BackLink href="/products" label="Back to catalog" />
      <ProductDetail product={product} />
    </div>
  );
}
