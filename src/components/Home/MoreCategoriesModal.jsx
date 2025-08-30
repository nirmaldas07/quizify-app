//src/components/Home/MoreCategoriesModal.jsx
import React from 'react';

export default function MoreCategoriesModal({ 
  show, 
  onClose, 
  categories, 
  onCategorySelect 
}) {
  if (!show) return null;

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
          <h3 className="text-xl font-bold">More categories</h3>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-white/5 border border-base-border grid place-items-center hover:bg-white/10 transition"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          {categories.map(cat => (
            <button
              key={cat.name}
              onClick={() => {
                onClose();
                onCategorySelect(cat);
              }}
              className={`bg-gradient-to-br ${cat.gradient} p-4 rounded-2xl flex flex-col items-center gap-2 hover:scale-105 transition-transform relative`}
            >
              <div className="text-3xl">{cat.icon}</div>
              <div className="text-sm font-bold text-white">{cat.name}</div>
              <div className="text-xs text-white/80">{cat.questions} questions</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}