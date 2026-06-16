"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const params = useSearchParams();
  const category = params.get("category");

  const [resources, setResources] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        `/api/resources?category=${category}`
      );
      const data = await res.json();
      setResources(data.resources);
    }

    fetchData();
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        {category?.toUpperCase()} Resources
      </h1>

      <div className="mt-4 space-y-3">
        {resources.map((r: any) => (
          <div
            key={r._id}
            className="border p-4 rounded"
          >
            <h2 className="font-bold">{r.name}</h2>
            <p className="text-sm text-gray-600">
              {r.description}
            </p>
            <p className="text-sm">
              📍 {r.address}
            </p>
            <p className="text-sm">
              📞 {r.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}