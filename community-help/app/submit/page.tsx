"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: "",
    category: "food",
    purpose: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    website: "",
  });

  const handleSubmit = async () => {
    await fetch("/api/submissions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Submitted for review!");
  };

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-xl font-bold">
        Submit a Resource
      </h1>

      <div className="space-y-3 mt-4">
        <input
          placeholder="Name"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
        />

        <select
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              category: e.target.value,
            })
          }
        >
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="jobs">Jobs</option>
          <option value="transportation">
            Transportation
          </option>
          <option value="taxes">Taxes</option>
          <option value="healthcare">
            Healthcare
          </option>
        </select>

        {/* 🆕 PURPOSE FIELD */}
        <textarea
          placeholder="Why is this resource important? Who does it help?"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              purpose: e.target.value,
            })
          }
        />

        <input
          placeholder="Address"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              address: e.target.value,
            })
          }
        />

        <input
          placeholder="Phone"
          className="border p-2 w-full"
          onChange={(e) =>
            setForm({
              ...form,
              phone: e.target.value,
            })
          }
        />

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </div>
  );
}