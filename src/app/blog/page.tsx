import Link from "next/link";

export const revalidate = 60 // rebuild every minute

export default async function BlogPage() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
    if (!res.ok) throw new Error("Failed to fetch posts")

    const posts = await res.json()

    return (
      <div>
        <h1 className="text-3xl font-bold mb-6 text-center">Blog </h1>
        <div className="space-y-4">
          {posts.map((post: any) => (
            <Link 
              key={post.id} 
              href={`/blog/${post.id}`}
              className="block bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2 hover:text-blue-600 dark:hover:text-blue-400">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                {post.body}
              </p>
            </Link>
          ))}
        </div>
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
