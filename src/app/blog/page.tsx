export const revalidate = 60 // rebuild every minute

export default async function BlogPage() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    if (!res.ok) throw new Error("Failed to fetch posts")

    const posts = await res.json()

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4 text-center">Blog (SSG)</h1>
        <ul className="space-y-4">
          {posts.map((post: any) => (
            <li key={post.id} className="border border-gray-700 p-4 rounded">
              <a href={`/blog/${post.id}`} className="text-blue-400 hover:underline">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    )
  } catch {
    return (
      <div className="text-center text-red-400">
        <h1 className="text-2xl font-bold mb-4">Error Loading Posts</h1>
        <p>Could not fetch blog data. Try again later.</p>
      </div>
    )
  }
}
