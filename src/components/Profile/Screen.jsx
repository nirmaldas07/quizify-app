import React from "react";
import { useNavigate } from "react-router-dom";

export default function Screen({ title, subtitle, children }) {
  const navigate = useNavigate();
  return (
    <div className="min-h-[100dvh] bg-black text-white px-4 pt-6 pb-28">
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => navigate(-1)}
          className="px-3 py-1.5 rounded-xl border border-white/10 bg-white/5 text-sm"
        >
          ← Back
        </button>
        <div className="text-center">
          <div className="text-base font-semibold leading-tight">{title}</div>
          {subtitle && <div className="text-xs text-white/60 leading-tight">{subtitle}</div>}
        </div>
        <div className="w-[68px]" />
      </div>
      {children}
    </div>
  );
}
