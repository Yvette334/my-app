export const dynamic = "force-dynamic"

export default async function AboutPage() {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1", {
      cache: "no-store",
    })
    if (!res.ok) throw new Error("Failed to fetch user")

    const author = await res.json()

    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">About Page </h1>
        <p>Name: {author.name}</p>
        <p>Email: {author.email}</p>
        <p>Company: {author.company.name}</p>
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