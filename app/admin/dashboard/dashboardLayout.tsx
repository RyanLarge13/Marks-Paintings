"use client";
import { useState } from "react";
import StatsSection from "./components/StatsSection";
import OwnerInfoSection from "./components/OwnerInfoSection";
import PaintingsSection from "./components/PaintingsSection";
import StylesSection from "./components/StylesSection";
import TextContentSection from "./components/TextContentSection";

const tabs = [
  "Stats",
  "Owner Info",
  "Paintings",
  "Website Styles",
  "Page Texts",
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeTab, setActiveTab] = useState("Stats");

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white p-6">
        <h2 className="text-xl font-bold mb-8">Dashboard</h2>
        <ul className="space-y-2">
          {tabs.map((tab) => (
            <li key={tab}>
              <button
                onClick={() => setActiveTab(tab)}
                className={`w-full text-left px-3 py-2 rounded-lg ${
                  activeTab === tab
                    ? "bg-gray-700"
                    : "hover:bg-gray-800 transition"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      <main className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        {activeTab === "Stats" && <StatsSection />}
        {activeTab === "Owner Info" && <OwnerInfoSection />}
        {activeTab === "Paintings" && <PaintingsSection />}
        {activeTab === "Website Styles" && <StylesSection />}
        {activeTab === "Page Texts" && <TextContentSection />}
      </main>
    </div>
  );
}
