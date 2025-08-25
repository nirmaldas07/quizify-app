import React, { useState } from "react";
import Screen from "./Screen.jsx";

const init = [
  { id: 1, title: "Play 10 quizzes", current: 7,  target: 10, reward: 150, claimed: false },
  { id: 2, title: "Earn 2,000 coins", current: 1240, target: 2000, reward: 200, claimed: false },
  { id: 3, title: "Win 3 in a row", current: 3,  target: 3,  reward: 100, claimed: true  },
];

export default function Achievements() {
  const [items, setItems] = useState(init);

  const claim = (id) => {
    setItems(prev => prev.map(a => a.id === id ? { ...a, claimed: true } : a));
    if (navigator.vibrate) navigator.vibrate(20);
  };

  return (
    <Screen title="Achievements" subtitle="Milestones you’ve hit">
      <ul className="space-y-2">
        {items.map(a => {
          const pct = Math.min(100, Math.round((a.current / a.target) * 100));
          const done = pct === 100;
          return (
            <li key={a.id} className="rounded-2xl border border-white/10 bg-white/5 p-3">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{a.title}</div>
                  <div className="mt-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full bg-lime-400" style={{ width: `${pct}%` }} />
                  </div>
                  <div className="mt-1 text-xs text-white/60">
                    {a.current}/{a.target} • Reward {a.reward} 🪙
                  </div>
                </div>
                <button
                  onClick={() => claim(a.id)}
                  disabled={!done || a.claimed}
                  className={[
                    "px-3 py-1.5 rounded-xl text-sm font-semibold border transition",
                    !done || a.claimed
                      ? "opacity-50 cursor-not-allowed border-white/10 bg-white/5"
                      : "border-lime-400 bg-lime-400 text-black hover:brightness-110",
                  ].join(" ")}
                >
                  {a.claimed ? "Claimed" : done ? "Claim" : "In progress"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </Screen>
  );
}
