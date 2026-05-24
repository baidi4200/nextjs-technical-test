import type { Metadata } from "next";
import Link from "next/link";
import BasketBadge from "@/app/_components/basket/BasketBadge";
import BasketProvider from "@/app/_components/basket/BasketProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product Catalog",
  description: "Browse the product catalog.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-50">
        <BasketProvider>
          <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
            <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
              <Link
                href="/products"
                className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-50"
              >
                Product Catalog
              </Link>
              <BasketBadge />
            </div>
          </header>
          {children}
        </BasketProvider>
      </body>
    </html>
  );
}
