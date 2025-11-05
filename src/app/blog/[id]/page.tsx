export const revalidate = 30 // regenerate after 30s

export default async function BlogDetail({ params }: { params: { id: string } }) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if (!res.ok) throw new Error("Failed to fetch post")

    const post = await res.json()

    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
        <p className="mt-4 text-gray-400">Post ID: {params.id}</p>
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
