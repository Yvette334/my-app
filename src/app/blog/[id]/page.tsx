import Link from "next/link";

export const revalidate = 30 // regenerate after 30s

export default async function BlogDetail({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if (!res.ok) throw new Error("Failed to fetch post")

    const post = await res.json()

    return (
      <div className="max-w-3xl mx-auto">
        <div className="mb-4">
          <Link href="/blog" className="text-blue-600 dark:text-blue-400 hover:underline text-sm">
            ← Back to Blog
          </Link>
        </div>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Post ID: {params.id} (ISR)</p>
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-wrap">{post.body}</p>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mt-4 text-sm">
          This page uses Incremental Static Regeneration (ISR) to fetch data.
        </p>
      </div>
    )
  } catch {
    return (
      <div className="text-center text-red-400">
        <h1 className="text-2xl font-bold mb-4">Error Loading Post</h1>
        <p>Something went wrong while fetching this post.</p>
      </div>
    )
  }
}
