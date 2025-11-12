"use client";
import { useState } from "react";

export default function PaintingsSection() {
  const [paintings, setPaintings] = useState([
    { id: 1, title: "Sunset Bliss", image: "/sunset.jpg" },
    { id: 2, title: "Ocean Dreams", image: "/ocean.jpg" },
  ]);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Paintings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {paintings.map((p) => (
          <div key={p.id} className="bg-white shadow rounded-lg p-4">
            <img
              src={p.image}
              alt={p.title}
              className="rounded-md w-full h-40 object-cover mb-3"
            />
            <input
              type="text"
              value={p.title}
              className="w-full border p-2 rounded-lg mb-2"
              onChange={(e) =>
                setPaintings((prev) =>
                  prev.map((x) =>
                    x.id === p.id ? { ...x, title: e.target.value } : x
                  )
                )
              }
            />
            <button className="bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700">
              Save
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
