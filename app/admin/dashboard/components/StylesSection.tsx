"use client";
import { useState } from "react";

export default function StylesSection() {
  const [styles, setStyles] = useState({
    mainColor: "#1a202c",
    accentColor: "#3182ce",
    textColor: "#000000",
    textHoverColor: "#555555",
    buttonColor: "#3182ce",
    buttonHoverColor: "#2b6cb0",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStyles({ ...styles, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Website Styles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow">
        {Object.entries(styles).map(([key, value]) => (
          <div key={key}>
            <label className="block font-medium mb-1 capitalize">{key}</label>
            <input
              type="color"
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border rounded-lg h-10"
            />
          </div>
        ))}
      </div>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Save Styles
      </button>
    </div>
  );
}
