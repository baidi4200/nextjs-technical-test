type Props = {
  src?: string;
  alt: string;
  aspect?: 'square' | 'video' | 'card';
};

const aspectClass = {
  square: 'aspect-square',
  video: 'aspect-video',
  card: 'aspect-[4/3]',
} as const;

export default function ProductImage({ src, alt, aspect = 'card' }: Props) {
  const a = aspectClass[aspect];

  if (!src) {
    return <div className={`${a} w-full bg-zinc-100 dark:bg-zinc-900`} />;
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={`${a} w-full object-cover`} />
  );
}
