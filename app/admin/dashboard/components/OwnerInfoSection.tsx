"use client";
import { useState } from "react";

export default function OwnerInfoSection() {
  const [info, setInfo] = useState({
    email: "owner@example.com",
    facebook: "https://facebook.com/owner",
    twitter: "https://twitter.com/owner",
    instagram: "https://instagram.com/owner",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Owner Information</h2>
      <form className="space-y-4 bg-white p-6 rounded-lg shadow">
        {Object.entries(info).map(([key, value]) => (
          <div key={key}>
            <label className="block font-medium mb-1 capitalize">{key}</label>
            <input
              name={key}
              value={value}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />
          </div>
        ))}
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Save Changes
        </button>
      </form>
    </div>
  );
}
