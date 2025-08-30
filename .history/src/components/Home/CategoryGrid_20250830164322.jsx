//src/components/Home/CategoryGrid.jsx
import React from 'react';

export default function CategoryGrid({ categories, onCategorySelect }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-bold mb-4">Choose Your Adventure</h3>
      <div className="grid grid-cols-3 gap-3">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => onCategorySelect(cat)}
            className={`bg-gradient-to-br ${cat.gradient} aspect-square rounded-2xl p-4 flex flex-col items-center justify-center gap-2 transform transition-all hover:scale-105 hover:shadow-lg relative`}
          >
            <div className="text-3xl">{cat.icon}</div>
            <div className="text-xs font-bold text-white text-center">{cat.name}</div>
            {cat.questions > 0 && (
              <div className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full">{cat.questions} Qs</div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}