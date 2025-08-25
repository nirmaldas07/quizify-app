import React, { useState } from "react";
import Screen from "./Screen.jsx";

const init = [
  { id: 1, title: "Play 3 quizzes today", progress: 2, target: 3, reward: 60,  claimed: false },
  { id: 2, title: "Score 8+ twice",       progress: 1, target: 2, reward: 80,  claimed: false },
  { id: 3, title: "Practice 15 questions",progress: 15, target:15, reward: 100, claimed: true  },
];

export default function Quests() {
  const [items, setItems] = useState(init);

  const claim = (id) => {
    setItems(prev => prev.map(q => q.id === id ? { ...q, claimed: true } : q));
    if (navigator.vibrate) navigator.vibrate(20);
  };

  return (
    <Screen title="Quests" subtitle="Small goals. Big gains.">
      <ul className="space-y-2">
        {items.map(q => {
          const pct = Math.min(100, Math.round((q.progress / q.target) * 100));
          const done = pct === 100;
          return (
            <li key={q.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{q.title}</div>
                  <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-lime-400" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {q.progress}/{q.target} • Reward {q.reward} 🪙
                  </div>
                </div>
                <button
                  onClick={() => claim(q.id)}
                  disabled={!done || q.claimed}
                  className={[
                    "px-3 py-1.5 rounded-xl text-sm font-semibold border transition",
                    !done || q.claimed
                      ? "opacity-50 cursor-not-allowed border-white/10 bg-white/5"
                      : "border-lime-400 bg-lime-400 text-black hover:brightness-110",
                  ].join(" ")}
                >
                  {q.claimed ? "Claimed" : done ? "Claim" : "Do it"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="mt-3 text-xs text-white/60">New quests arrive daily at 5 AM.</div>
    </Screen>
  );
}
