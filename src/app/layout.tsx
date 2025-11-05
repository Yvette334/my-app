import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Next.js Assignment",
  description: "Next.js Assignment for using the CSR, SSR,ISR"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <header className=" flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </header>
        <main className="p-6">{children}</main>
        <footer>&copy;2025 </footer>
      </body>
    </html>
  );
}
