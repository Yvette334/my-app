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
      <header className=" flex gap-6 m-6 space-x-6 justify-center">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </header>
        <main className="p-10">{children}</main>
        <footer className="text-center">&copy;2025 </footer>
      </body>
    </html>
  );
}
