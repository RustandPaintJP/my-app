"use client";

import { useState } from "react";
import { generateInsult } from "@/lib/insults";

export default function Home() {
  const [insult, setInsult] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 gap-8">
      <button
        onClick={() => setInsult(generateInsult())}
        className="px-8 py-4 bg-red-600 hover:bg-red-500 active:scale-95 text-white text-xl font-semibold rounded-2xl transition-all duration-150 cursor-pointer"
      >
        What am I?
      </button>

      {insult && (
        <p className="text-2xl text-yellow-300 font-medium italic text-center px-8">
          "{insult}"
        </p>
      )}
    </main>
  );
}
