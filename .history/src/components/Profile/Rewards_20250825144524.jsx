import React, { useState } from "react";
import Screen from "./Screen.jsx";

const START_BALANCE = 1240;

const initialRewards = [
  { id: 1, title: "₹100 Amazon Gift Card",   subtitle: "Instant email code",   cost: 1000, claimed: false },
  { id: 2, title: "Pro Theme Pack",          subtitle: "Unlock 6 gradients",   cost: 400,  claimed: false },
  { id: 3, title: "Extra Life (x3)",         subtitle: "Retry 3 questions",    cost: 250,  claimed: false },
  { id: 4, title: "Custom Avatar Frame",     subtitle: "Glow ring for profile",cost: 600,  claimed: false },
];

export default function Rewards() {
  const [balance, setBalance] = useState(START_BALANCE);
  const [items, setItems] = useState(initialRewards);

  const claim = (id) => {
    setItems((prev) =>
      prev.map((r) =>
        r.id === id && !r.claimed && balance >= r.cost
          ? (setBalance((b) => b - r.cost), { ...r, claimed: true })
          : r
      )
    );
    if (navigator.vibrate) navigator.vibrate(20);
  };

  return (
    <Screen title="Rewards" subtitle="Claim & redeem">
      {/* Balance pill */}
      <div className="mb-3 flex items-center justify-between">
        <div className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm">
          Balance: <span className="font-semibold">{balance}</span> 🪙
        </div>
        <div className="text-xs text-white/60">Earn coins by playing</div>
      </div>

      {/* Rewards list */}
      <ul className="space-y-2">
        {items.map((r) => {
          const affordable = balance >= r.cost;
          const disabled = r.claimed || !affordable;
          return (
            <li
              key={r.id}
              className="rounded-2xl border border-white/10 bg-white/5 p-3 flex items-center justify-between
                         transition-transform duration-150 active:scale-[0.99]"
            >
              <div>
                <div className="text-sm font-semibold">{r.title}</div>
                <div className="text-xs text-white/60">{r.subtitle}</div>
              </div>

              <div className="flex items-center gap-2">
                <div className="text-sm font-semibold">{r.cost} 🪙</div>
                <button
                  onClick={() => claim(r.id)}
                  disabled={disabled}
                  className={[
                    "px-3 py-1.5 rounded-xl text-sm font-semibold border transition",
                    disabled
                      ? "opacity-50 cursor-not-allowed border-white/10 bg-white/5"
                      : "border-lime-400 bg-lime-400 text-black hover:brightness-110",
                  ].join(" ")}
                >
                  {r.claimed ? "Claimed" : affordable ? "Claim" : "Earn"}
                </button>
              </div>
            </li>
          );
        })}
      </ul>

      {/* How it works (subtle) */}
      <div className="mt-3 text-xs text-white/60">
        Tip: Weekly leaderboard bonus → extra coins for top 100.
      </div>
    </Screen>
  );
}
