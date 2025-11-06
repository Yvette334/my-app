export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <aside className="w-64 bg-gray-100 dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 h-fit sticky top-10">
        <h2 className="font-bold text-lg mb-4">Categories</h2>
        <ul className="space-y-2">
          <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Tech
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Lifestyle
          </li>
          <li className="px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer">
            Education
          </li>
        </ul>
      </aside>
      <section className="flex-1">{children}</section>
    </div>
  )
}
