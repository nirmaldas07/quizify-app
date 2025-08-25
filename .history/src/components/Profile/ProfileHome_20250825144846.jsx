import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileHome() {
  const navigate = useNavigate();
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

      {/* Tiles you actually have routes for right now */}
      <div className="grid grid-cols-2 gap-3">
        <button onClick={() => navigate("/profile/history")}
          className={`${TILE} bg-gradient-to-br from-[#D19A00] to-[#C94B4B]`}>
          <div className="text-2xl mb-2">🗂️</div>
          <div className="text-sm font-semibold">HISTORY</div>
          <div className="text-[11px] opacity-80 mt-1">Quizzes & Practice</div>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-3">
      <button
        onClick={() => navigate("/profile/rewards")}
        className={`${TILE} bg-gradient-to-br from-[#2EB872] to-[#1EA07A]`}
        >
        <div className="text-2xl mb-2">🎁</div>
        <div className="text-sm font-semibold">REWARDS</div>
        <div className="text-[11px] opacity-80 mt-1">Claim & Redeem</div>
        </button>
    </div>
    </div>
  );
}
