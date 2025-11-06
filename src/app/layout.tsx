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
      <body className="min-h-screen flex flex-col">
      <header className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex gap-6 justify-center">
            <Link href="/" className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              About
            </Link>
            <Link href="/blog" className="px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
              Blog
            </Link>
          </div>
        </nav>
      </header>
        <main className="flex-1 container mx-auto px-6 py-10 max-w-6xl">{children}</main>
        <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 mt-auto">
          <div className="container mx-auto px-6 text-center text-gray-600 dark:text-gray-400">
            &copy; 2025 Next.js Assignment
          </div>
        </footer>
      </body>
    </html>
  );
}
