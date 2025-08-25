import React, { useState } from "react";
import Screen from "./Screen.jsx";

const mockUser = { rank: 23, coins: 1240 };
const mockRows = Array.from({ length: 20 }).map((_, i) => ({
  rank: i + 1,
  name: i === 9 ? "You" : ["Aarav","Neha","Kabir","Ishita","Vikram","Zara"][i % 6],
  handle: "@user" + (i + 1),
  coins: 5200 - i * 117,
  you: i === 9,
}));

export default function Leaderboard() {
  const [period, setPeriod] = useState("weekly");
  const [scope, setScope] = useState("global");

  return (
    <Screen title="Leaderboard" subtitle="Ends in 2d 14h">
      {/* Controls */}
      <div className="flex items-center justify-between mb-3">
        <div className="inline-flex p-1 rounded-xl bg-white/10 border border-white/10">
          {["weekly","monthly","all"].map(v => (
            <button key={v}
              onClick={() => setPeriod(v)}
              className={`px-3 py-1.5 text-sm rounded-lg ${period===v?"bg-white text-black":"text-white/80 hover:text-white"}`}>
              {v==="all"?"All-time":v[0].toUpperCase()+v.slice(1)}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          {["global","friends","city"].map(v => (
            <button key={v}
              onClick={() => setScope(v)}
              className={`px-3 py-1.5 text-sm rounded-full border ${scope===v?"border-white bg-white text-black":"border-white/10 bg-transparent text-white/80 hover:bg-white/10"}`}>
              {v[0].toUpperCase()+v.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Your rank pinned */}
      <div className="rounded-2xl border border-white/10 bg-white/10 p-3 mb-3 text-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-base">🏆</span>
          <span className="font-semibold">You</span>
        </div>
        <div className="font-semibold">#{mockUser.rank} • {mockUser.coins} 🪙</div>
      </div>

      {/* List */}
      <ul className="space-y-2">
        {mockRows.map(u => (
          <li key={u.rank}
              className={`rounded-2xl border border-white/10 p-3 flex items-center justify-between ${u.you?"bg-white/10":"bg-white/5"}`}>
            <div className="flex items-center gap-3">
              <div className="w-8 text-center font-semibold">{u.rank}</div>
              <div className="w-9 h-9 rounded-xl bg-white/10 grid place-items-center">{u.you?"🧑🏻‍💻":"🙂"}</div>
              <div>
                <div className="text-sm font-semibold leading-tight">{u.name}</div>
                <div className="text-xs text-white/60">{u.handle}</div>
              </div>
            </div>
            <div className="text-sm font-semibold">{u.coins} 🪙</div>
          </li>
        ))}
      </ul>
    </Screen>
  );
}
