import Link from "next/link";

const categories = [
  { name: "Food", value: "food" },
  { name: "Housing", value: "housing" },
  { name: "Jobs", value: "jobs" },
  { name: "Transportation", value: "transportation" },
  { name: "Taxes", value: "taxes" },
  { name: "Healthcare", value: "healthcare" },
];

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold">
        Community Help Finder
      </h1>

      <p className="mt-2 text-gray-600">
        Find food, jobs, housing, and support near you.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {categories.map((cat) => (
          <Link
            key={cat.value}
            href={`/search?category=${cat.value}`}
            className="p-4 border rounded-lg hover:bg-gray-100"
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <Link
        href="/submit"
        className="inline-block mt-8 bg-black text-white px-4 py-2 rounded"
      >
        Submit a Resource
      </Link>
    </main>
  );
}