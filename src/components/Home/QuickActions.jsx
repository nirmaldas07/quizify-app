//src/components/Home/QuickActions.jsx

import React from 'react';

export default function QuickActions({ actions }) {
  return (
    <div className="grid grid-cols-4 gap-3 mb-8">
      {actions.map((action, idx) => (
        <button
          key={idx}
          onClick={action.action}
          className={`${action.color} aspect-square rounded-2xl flex flex-col items-center justify-center gap-1 transform transition-all hover:scale-105`}
        >
          <div className="text-2xl">{action.icon}</div>
          <div className="text-[10px] font-medium text-white">{action.label}</div>
        </button>
      ))}
    </div>
  );
}