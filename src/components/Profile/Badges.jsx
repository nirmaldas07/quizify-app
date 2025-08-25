import React from "react";
import Screen from "./Screen.jsx";

const badges = [
  { id: 1, name: "First Win",        emoji: "🏁", unlocked: true,  hint: "Win 1 quiz" },
  { id: 2, name: "Streak 3",         emoji: "🔥", unlocked: false, hint: "Keep a 3-day streak" },
  { id: 3, name: "Perfect 10",       emoji: "🌟", unlocked: false, hint: "Score 10/10 once" },
  { id: 4, name: "Early Bird",       emoji: "🌅", unlocked: true,  hint: "Play before 9 AM" },
  { id: 5, name: "Category Master",  emoji: "📚", unlocked: false, hint: "Win 5 in one category" },
  { id: 6, name: "Speedster",        emoji: "⚡️", unlocked: false, hint: "Finish a quiz in <2m" },
];

export default function Badges() {
  return (
    <Screen title="Badges" subtitle="Collect and show off">
      <div className="grid grid-cols-3 gap-3">
        {badges.map(b => (
          <div
            key={b.id}
            className={[
              "aspect-square rounded-2xl grid place-items-center text-center px-2",
              "border transition-transform duration-150 active:scale-[0.99]",
              b.unlocked ? "bg-white/10 border-white/10" : "bg-white/5 border-white/10"
            ].join(" ")}
          >
            <div className="text-3xl">{b.emoji}</div>
            <div className="mt-1 text-xs font-semibold leading-tight">{b.name}</div>
            {!b.unlocked && (
              <div className="mt-1 text-[10px] text-white/60 leading-tight">🔒 {b.hint}</div>
            )}
          </div>
        ))}
      </div>
      <div className="mt-3 text-xs text-white/60">
        Tip: Tap any locked badge to see how to unlock it (coming soon).
      </div>
    </Screen>
  );
}
