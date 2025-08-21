// src/components/ConfirmStartSheet.jsx
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

/**
 * Micro sheet to confirm starting a quiz (always centered).
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
  const prevOverflowRef = useRef("");
  const dialogRef = useRef(null);

  // Body scroll lock, but allow scroll *inside* the dialog
  useEffect(() => {
    if (!open) return;
    prevOverflowRef.current = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const stopNativeScroll = (e) => {
      // If the touch is inside the dialog, let it scroll
      if (dialogRef.current && dialogRef.current.contains(e.target)) return;
      e.preventDefault();
    };
    document.addEventListener("touchmove", stopNativeScroll, { passive: false });

    return () => {
      document.body.style.overflow = prevOverflowRef.current || "";
      document.removeEventListener("touchmove", stopNativeScroll);
    };
  }, [open]);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const lines = String(summary || "")
    .split("\n")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Centered dialog */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-md mx-auto
                   rounded-2xl
                   bg-base-card border border-base-border shadow-2xl
                   p-5 pt-4
                   max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-1 w-12 rounded-full bg-white/15 mx-auto mb-4" />

        {!hasResume ? (
          <>
            <h2 className="text-lg font-bold mb-2">Start {categoryLabel} quiz?</h2>

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

        {/* Spacer */}
        <div className="mt-2" />
      </div>
    </div>
  );
}
