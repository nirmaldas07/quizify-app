// src/components/ConfirmStartSheet.jsx
import React from "react";

/**
 * Micro sheet to confirm starting a quiz — now always centered.
 * Props:
 * - open: boolean
 * - categoryLabel: string
 * - summary: string
 * - hasResume: boolean
 * - resumeInfo?: { index:number, total:number, remainingSec?:number }
 * - onStart(): void
 * - onResume?(): void
 * - onChange(): void
 * - onClose(): void
 */
export default function ConfirmStartSheet({
  open,
  categoryLabel,
  summary,
  hasResume,
  resumeInfo,
  onStart,
  onResume,
  onChange,
  onClose,
}) {
  if (!open) return null;

  const lines = String(summary || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center" // 🔥 changed from items-end to items-center
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Popup (centered) */}
      <div
        className="relative w-full max-w-md rounded-2xl bg-base-card border border-base-border shadow-2xl
                   p-5 mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 w-12 rounded-full bg-white/15 mx-auto mb-4" />

        {!hasResume ? (
          <>
            <h2 className="text-lg font-bold mb-2">Start {categoryLabel} quiz?</h2>

            {/* Current setting block */}
            {lines.length > 0 && (
              <div className="mb-4 rounded-xl border border-base-border bg-white/5 p-3">
                <div className="text-xs text-base-muted mb-1">Current setting</div>
                <div className="text-sm space-y-0.5">
                  {lines.map((l, i) => (
                    <div key={i}>{l}</div>
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-3">
              <button
                onClick={onStart}
                className="flex-1 btn-primary rounded-xl px-3 py-3"
                autoFocus
              >
                Start
              </button>
              <button
                onClick={onChange}
                className="flex-1 rounded-xl border border-base-border bg-white/5 px-3 py-3"
              >
                Change
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-base-border bg-white/5 px-3 py-3"
              >
                Cancel
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-lg font-bold mb-2">Resume your {categoryLabel} quiz?</h2>
            <div className="text-sm text-base-muted mb-4">
              You’re on Q{(resumeInfo?.index ?? 0) + 1}/{resumeInfo?.total ?? "?"}
              {typeof resumeInfo?.remainingSec === "number" ? (
                <> • ⏱ {resumeInfo.remainingSec}s left</>
              ) : null}
            </div>

            <div className="flex gap-3">
              <button
                onClick={onResume}
                className="flex-1 btn-primary rounded-xl px-3 py-3"
                autoFocus
              >
                Resume
              </button>
              <button
                onClick={onStart}
                className="flex-1 rounded-xl border border-base-border bg-white/5 px-3 py-3"
                title="Start a fresh quiz with your saved settings"
              >
                Start New
              </button>
              <button
                onClick={onClose}
                className="rounded-xl border border-base-border bg-white/5 px-3 py-3"
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
