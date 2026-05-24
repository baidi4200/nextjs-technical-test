import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Product Catalog',
  description: 'Browse the product catalog.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
