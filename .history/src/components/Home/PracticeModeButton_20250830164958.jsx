//src/components/Home/PracticeModeButton.jsx
import React from 'react';

export default function PracticeModeButton({ onClick, isPulsing }) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl p-5 flex justify-between items-center transition-all ${
        isPulsing 
        ? 'bg-green-500/20 border-2 border-green-500 animate-pulse' 
        : 'bg-white/5 border border-base-border hover:bg-white/10'
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl grid place-items-center text-2xl">
          📚
        </div>
        <div className="text-left">
          <div className="font-medium">Practice Mode</div>
          <div className="text-xs text-base-muted">No timer • No energy cost • Learn at your pace</div>
        </div>
      </div>
      <div className="text-xl">→</div>
    </button>
  );
}