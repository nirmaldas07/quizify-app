// src/components/Play/modes/survival/LivesDisplay.jsx
export default function LivesDisplay({ lives, maxLives = 3 }) {
  return (
    <div className="flex gap-2">
      {[...Array(maxLives)].map((_, i) => (
        <div key={i} className="relative">
          <span className={`text-2xl transition-all ${i < lives ? 'opacity-100' : 'opacity-30'}`}>
            {i < lives ? '❤️' : '💔'}
          </span>
        </div>
      ))}
    </div>
  );
}