"use client";
import { useState } from "react";

export default function PhaseTabs() {
  const [tab, setTab] = useState("1");

  return (
    <div className="flex space-x-3 justify-center">
      {["1", "2", "3"].map((t) => (
        <button
          key={t}
          onClick={() => setTab(t)}
          className={`px-5 py-2 rounded-lg glass 
            ${tab === t ? "bg-neon/20 border border-neon text-neon" : "text-white"}
          `}
        >
          Phase {t}
        </button>
      ))}
    </div>
  );
}
