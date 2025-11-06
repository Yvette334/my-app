export const dynamic = "force-dynamic"

export default async function AboutPage() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: "no-store",
    })
    if (!res.ok) throw new Error("Failed to fetch user")

    const author = await res.json()

    return (
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">About Page </h1>
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4">
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Name</p>
            <p className="text-lg font-semibold">{author.name}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Email</p>
            <p className="text-lg">{author.email}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Company</p>
            <p className="text-lg font-semibold">{author.company.name}</p>
          </div>
        </div>
      </div>
    )
  } catch {
    return (
      <div className="text-center text-red-400">
        <h1 className="text-2xl font-bold mb-4">Error Loading Author Info</h1>
        <p>Something went wrong while fetching data.</p>
      </div>
    )
  }
}