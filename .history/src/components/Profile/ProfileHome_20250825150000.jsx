import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileHome() {
  const navigate = useNavigate();

  // shared tile style (press effect + subtle hover)
  const TILE =
    "rounded-3xl p-5 text-left text-white shadow-[0_6px_24px_rgba(0,0,0,0.25)] " +
    "transition-transform duration-150 active:scale-[0.99] hover:opacity-95";

  return (
    <div className="min-h-full bg-[#0B0C10] text-white px-4 pt-12">
      <h1 className="text-lg font-semibold mb-3">Your Space</h1>

      {/* HERO → Leaderboard */}
      <button
        onClick={() => navigate("/profile/leaderboard")}
        className={`${TILE} w-full mb-4 bg-gradient-to-br from-[#5AA9FF] via-[#6C63FF] to-[#9C6BFF]`}
      >
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs opacity-90">Rank & Coins</div>
            <div className="mt-1 text-4xl font-extrabold tracking-tight">LEADERBOARD</div>
            <div className="mt-2 text-xs opacity-90">Weekly reset · Ends in 2d 14h</div>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-white/20 grid place-items-center text-2xl">🏆</div>
        </div>
      </button>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-3">
        {/* History */}
        <button
          onClick={() => navigate("/profile/history")}
          className={`${TILE} bg-gradient-to-br from-[#D19A00] to-[#C94B4B]`}
        >
          <div className="text-2xl mb-2">🗂️</div>
          <div className="text-sm font-semibold">HISTORY</div>
          <div className="text-[11px] opacity-80 mt-1">Quizzes & Practice</div>
        </button>

        {/* Rewards */}
        <button
          onClick={() => navigate("/profile/rewards")}
          className={`${TILE} bg-gradient-to-br from-[#2EB872] to-[#1EA07A]`}
        >
          <div className="text-2xl mb-2">🎁</div>
          <div className="text-sm font-semibold">REWARDS</div>
          <div className="text-[11px] opacity-80 mt-1">Claim & Redeem</div>
        </button>

        {/* Badges */}
        <button
          onClick={() => navigate("/profile/badges")}
          className={`${TILE} bg-gradient-to-br from-[#E65C00] to-[#F9D423]`}
        >
          <div className="text-2xl mb-2">🔖</div>
          <div className="text-sm font-semibold">BADGES</div>
          <div className="text-[11px] opacity-80 mt-1">Collectables</div>
        </button>

        {/* Achievements */}
        <button
          onClick={() => navigate("/profile/achievements")}
          className={`${TILE} bg-gradient-to-br from-[#5D26C1] to-[#A17FE0]`}
        >
          <div className="text-2xl mb-2">📈</div>
          <div className="text-sm font-semibold">ACHIEVEMENTS</div>
          <div className="text-[11px] opacity-80 mt-1">Milestones</div>
        </button>

        {/* Streaks */}
        <button
          onClick={() => navigate("/profile/streaks")}
          className={`${TILE} bg-white/5 border border-white/10`}
        >
          <div className="text-2xl mb-2">🔥</div>
          <div className="text-sm font-semibold">STREAKS</div>
          <div className="text-[11px] opacity-80 mt-1">Keep the chain</div>
        </button>

        {/* Quests */}
        <button
          onClick={() => navigate("/profile/quests")}
          className={`${TILE} bg-white/5 border border-white/10`}
        >
          <div className="text-2xl mb-2">🧩</div>
          <div className="text-sm font-semibold">QUESTS</div>
          <div className="text-[11px] opacity-80 mt-1">Daily goals</div>
        </button>

        {/* Settings — full width */}
        <button
          onClick={() => navigate("/profile/settings")}
          className={`${TILE} col-span-2 bg-white/5 border border-white/10`}
        >
          <div className="flex items-center gap-3">
            <div className="text-2xl">⚙️</div>
            <div>
              <div className="text-sm font-semibold">SETTINGS</div>
              <div className="text-[11px] opacity-80 mt-0.5">Preferences</div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
