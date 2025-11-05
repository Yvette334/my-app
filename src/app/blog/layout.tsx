export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <aside className="w-1/4 bg-gray-800 p-4 rounded-lg h-fit">
        <h2 className="font-bold mb-2">Categories</h2>
        <ul className="space-y-1 text-gray-300">
          <li>Tech</li>
          <li>Lifestyle</li>
          <li>Education</li>
        </ul>
      </aside>
      <section className="flex-1">{children}</section>
    </div>
  )
}
