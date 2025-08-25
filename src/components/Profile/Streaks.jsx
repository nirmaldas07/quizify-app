import React from "react";
import { useNavigate } from "react-router-dom";
import Screen from "./Screen.jsx";

const todayIdx = new Date().getDay(); // 0..6
const week = ["S","M","T","W","T","F","S"].map((d,i)=>({ label:d, hit: i <= todayIdx && i !== 0 }));

export default function Streaks() {
  const navigate = useNavigate();
  const current = 5; // mock

  return (
    <Screen title="Streaks" subtitle="Don’t break the chain">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4 mb-3">
        <div className="text-sm text-white/70">Current streak</div>
        <div className="mt-1 text-4xl font-extrabold">🔥 {current} days</div>
        <div className="mt-3 grid grid-cols-7 gap-2">
          {week.map((d,i)=>(
            <div
              key={i}
              className={[
                "h-9 rounded-xl grid place-items-center text-xs font-semibold",
                d.hit ? "bg-lime-400 text-black" : "bg-white/10 text-white/70"
              ].join(" ")}
            >
              {d.label}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate("/play")}
        className="w-full rounded-2xl border border-lime-400 bg-lime-400 text-black py-3 font-semibold
                   transition-transform duration-150 active:scale-[0.99]"
      >
        Keep it going → Play now
      </button>
    </Screen>
  );
}
