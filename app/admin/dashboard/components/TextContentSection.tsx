"use client";
import { useState } from "react";

export default function TextContentSection() {
  const [texts, setTexts] = useState({
    home: "Welcome to my art gallery.",
    about: "I’m an independent artist creating abstract landscapes.",
    contact: "Reach out through email or social media!",
  });

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Page Texts</h2>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
        {Object.entries(texts).map(([page, content]) => (
          <div key={page}>
            <label className="block font-medium mb-1 capitalize">{page}</label>
            <textarea
              value={content}
              onChange={(e) =>
                setTexts((prev) => ({ ...prev, [page]: e.target.value }))
              }
              className="w-full border rounded-lg p-2 h-24"
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Save Texts
        </button>
      </form>
    </div>
  );
}
