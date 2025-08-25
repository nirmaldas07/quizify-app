// src/components/Profile/Streaks.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Streaks() {
  const navigate = useNavigate();
  const days = ["S","M","T","W","T","F","S"];
  const today = 2; // mock - Tuesday

  return (
    <div className="min-h-screen bg-black text-white px-4 pt-6 pb-28">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={() => navigate(-1)} 
          className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm"
        >
          ← Back
        </button>
        <div className="text-center">
          <div className="text-base font-semibold leading-tight">Streaks</div>
          <div className="text-xs text-white/60 leading-tight">Don't break the chain</div>
        </div>
        <div className="w-[68px]" />
      </div>

      {/* Current Streak Display */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 mb-4 text-center">
        <div className="text-6xl mb-2">🔥</div>
        <div className="text-2xl font-bold mb-1">5 Day Streak</div>
        <div className="text-sm text-white/60">Keep it going!</div>
      </div>

      {/* Weekly Calendar */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
        <div className="text-sm text-white/70 mb-3">This week</div>
        <div className="grid grid-cols-7 gap-2">
          {days.map((d, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-xl grid place-items-center text-sm border transition ${
                i <= today 
                  ? "bg-white/80 text-black border-transparent" 
                  : "border-white/10 text-white/40"
              }`}
            >
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* Streak Stats */}
      <div className="mt-4 space-y-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex justify-between">
          <span className="text-white/70">Current Streak</span>
          <span className="font-semibold">5 days</span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex justify-between">
          <span className="text-white/70">Longest Streak</span>
          <span className="font-semibold">12 days</span>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-3 flex justify-between">
          <span className="text-white/70">Streak Freezes</span>
          <span className="font-semibold">2 available</span>
        </div>
      </div>
    </div>
  );
}