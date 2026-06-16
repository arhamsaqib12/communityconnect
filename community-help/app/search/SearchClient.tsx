"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Resource = {
  _id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
};

export default function SearchClient() {
  const params = useSearchParams();

  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const category = params.get("category");

    // ✅ FIX: handle null safely
    if (!category) {
      setResources([]);
      return;
    }

    async function fetchData() {
      try {
        setLoading(true);

        const res = await fetch(
          `/api/resources?category=${category && encodeURIComponent(category)}`
        );

        const data = await res.json();
        setResources(data.resources || []);
      } catch (err) {
        console.error("Error fetching resources:", err);
        setResources([]);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [params]);

  const category = params.get("category");

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">
        {category ? category.toUpperCase() : "All"} Resources
      </h1>

      {loading && <p className="mt-4">Loading...</p>}

      <div className="mt-4 space-y-3">
        {!loading && resources.length === 0 ? (
          <p>No resources found.</p>
        ) : (
          resources.map((r) => (
            <div key={r._id} className="border p-4 rounded">
              <h2 className="font-bold">{r.name}</h2>
              <p className="text-sm text-gray-600">{r.description}</p>
              <p className="text-sm">📍 {r.address}</p>
              <p className="text-sm">📞 {r.phone}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}