"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Coin {
  id: string;
  name: string;
  explorerLink: string;
}

export default function CoinsPage() {
  const [coins, setCoins] = useState<Coin[]>([]);

  useEffect(() => {
    // TODO: Replace with real API call or local storage fetch
    const storedCoins = typeof window !== "undefined" ? JSON.parse(localStorage.getItem("createdCoins") || "[]") : [];
    setCoins(storedCoins);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">All Created Coins</h1>
      {coins.length === 0 ? (
        <p className="text-lg">No coins created yet.</p>
      ) : (
        <ul className="w-full max-w-xl space-y-6">
          {coins.map((coin) => (
            <li key={coin.id} className="border rounded-lg p-6 flex flex-col items-center">
              <span className="text-2xl font-semibold mb-2">{coin.name}</span>
              <Link href={coin.explorerLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                View on Basescan Sepolia ↗
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
