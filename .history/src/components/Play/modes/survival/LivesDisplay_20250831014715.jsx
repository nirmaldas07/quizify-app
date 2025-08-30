// src/components/Play/modes/survival/LivesDisplay.jsx
export default function LivesDisplay({ lives, maxLives = 3 }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur rounded-full shadow-sm">
      {[...Array(maxLives)].map((_, i) => (
        <div 
          key={i} 
          className={`transition-all duration-500 ${i < lives ? 'scale-100' : 'scale-75 grayscale'}`}
        >
          <div className="relative">
            {i < lives ? (
              <div className="relative">
                <span className="text-3xl">❤️</span>
                {/* Pulse animation for active hearts */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-red-400 rounded-full animate-ping opacity-20"></div>
                </div>
              </div>
            ) : (
              <span className="text-3xl opacity-30">🤍</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}