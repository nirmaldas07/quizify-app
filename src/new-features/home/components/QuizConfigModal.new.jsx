//src/components/Home/QuizConfigModal.jsx
import React from 'react';

export default function QuizConfigModal({
  show,
  onClose,
  selectedCategory,
  difficulty,
  setDifficulty,
  count,
  setCount,
  timer,
  setTimer,
  onStart
}) {
  if (!show || !selectedCategory) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div 
        className="bg-base-card rounded-3xl p-6 w-full max-w-md border border-base-border"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Quiz Mode</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>

        {/* Show selected category info */}
        <div className="mb-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="flex items-center gap-3">
            <div className="text-2xl">{selectedCategory.icon}</div>
            <div>
              <div className="font-medium">Category: {selectedCategory.name}</div>
              <div className="text-xs text-base-muted">{selectedCategory.questions} questions available</div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm text-base-muted mb-2 block">Difficulty</label>
          <div className="grid grid-cols-3 gap-2">
            {["easy", "medium", "hard"].map(d => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`py-2 rounded-xl border ${
                  difficulty === d 
                    ? 'bg-brand-blue/30 border-brand-blue' 
                    : 'bg-white/5 border-base-border'
                }`}
              >
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="text-sm text-base-muted mb-2 block">Questions</label>
          <div className="grid grid-cols-4 gap-2">
            {[5, 10, 20, 30].map(n => (
              <button
                key={n}
                onClick={() => setCount(n)}
                className={`py-2 rounded-xl border ${
                  count === n 
                    ? 'bg-brand-blue/30 border-brand-blue' 
                    : 'bg-white/5 border-base-border'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="text-sm text-base-muted mb-2 block">Timer (seconds per question)</label>
          <input
            type="number"
            value={timer}
            onChange={(e) => setTimer(Number(e.target.value) || 45)}
            min={10}
            max={120}
            className="w-full px-4 py-2 rounded-xl bg-white/5 border border-base-border"
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-base-border bg-white/5"
          >
            Cancel
          </button>
          <button
            onClick={onStart}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium"
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}