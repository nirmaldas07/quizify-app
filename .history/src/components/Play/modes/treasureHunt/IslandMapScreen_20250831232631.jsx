// src/components/Play/modes/treasureHunt/IslandMapScreen.jsx

import { useState, useEffect, useRef } from "react";
import { ISLANDS, getAllTreasurePieces } from "./data/islandConfig.js";

export default function IslandMapScreen({ 
  islands, 
  islandProgress, 
  onSelectIsland, 
  onBack, 
  soundOn, 
  setSoundOn,
  totalStats 
}) {
  const [selectedIslandPreview, setSelectedIslandPreview] = useState(null);
  const [showTreasureCollection, setShowTreasureCollection] = useState(false);
  const mapRef = useRef(null);
  const [mapOffset, setMapOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  // Auto-scroll to first locked island on mount
  useEffect(() => {
    const firstLockedIndex = islands.findIndex(island => !islandProgress[island.id]?.unlocked);
    if (firstLockedIndex > 0 && firstLockedIndex < 3) {
      setMapOffset(-firstLockedIndex * 100);
    }
  }, []);

  const treasurePieces = getAllTreasurePieces(islandProgress);
  const collectedPieces = treasurePieces.filter(p => p.collected).length;

  // Handle touch/mouse drag for map scrolling
  const handleDragStart = (e) => {
    setIsDragging(true);
    dragStartX.current = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    dragStartOffset.current = mapOffset;
  };

  const handleDragMove = (e) => {
    if (!isDragging) return;
    const currentX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = currentX - dragStartX.current;
    const newOffset = dragStartOffset.current + diff;
    
    // Limit scrolling bounds
    const maxOffset = 0;
    const minOffset = -(islands.length - 1) * 150;
    setMapOffset(Math.max(minOffset, Math.min(maxOffset, newOffset)));
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Calculate completion percentage
  const completionPercentage = Math.round((collectedPieces / islands.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 relative overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(5px) rotate(3deg); }
          66% { transform: translateY(5px) translateX(-5px) rotate(-3deg); }
        }
        
        @keyframes cloudDrift {
          0% { transform: translateX(-100px); opacity: 0.3; }
          50% { opacity: 0.7; }
          100% { transform: translateX(calc(100vw + 100px)); opacity: 0.3; }
        }
        
        @keyframes wave {
          0%, 100% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(-10px) scaleY(0.95); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes unlock {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 1; }
          100% { transform: scale(1) rotate(360deg); opacity: 1; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .cloud-drift {
          animation: cloudDrift 20s linear infinite;
        }
        
        .wave-animation {
          animation: wave 3s ease-in-out infinite;
        }
        
        .sparkle-animation {
          animation: sparkle 2s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .unlock-animation {
          animation: unlock 0.6s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(90deg, 
            transparent, 
            rgba(255,255,255,0.4), 
            transparent
          );
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .island-shadow {
          filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
        }
        
        .path-dots {
          stroke-dasharray: 5, 10;
          stroke-dashoffset: 0;
          animation: pathMove 1s linear infinite;
        }
        
        @keyframes pathMove {
          to { stroke-dashoffset: -15; }
        }
        
        .no-select {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }
      `}</style>

      {/* Animated Sky Background */}
      <div className="absolute inset-0">
        {/* Clouds */}
        <div className="absolute top-10 cloud-drift" style={{ animationDelay: '0s' }}>
          <div className="text-8xl opacity-30">☁️</div>
        </div>
        <div className="absolute top-20 cloud-drift" style={{ animationDelay: '5s', animationDuration: '25s' }}>
          <div className="text-6xl opacity-40">☁️</div>
        </div>
        <div className="absolute top-32 cloud-drift" style={{ animationDelay: '10s', animationDuration: '30s' }}>
          <div className="text-7xl opacity-30">☁️</div>
        </div>
        
        {/* Sun */}
        <div className="absolute top-10 right-10">
          <div className="text-8xl pulse-animation">☀️</div>
        </div>
        
        {/* Birds */}
        <div className="absolute top-40 left-20 float-animation" style={{ animationDelay: '0s' }}>
          <div className="text-3xl">🦜</div>
        </div>
        <div className="absolute top-60 right-40 float-animation" style={{ animationDelay: '2s' }}>
          <div className="text-2xl">🦅</div>
        </div>
      </div>

      {/* Header */}
      <div className="relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+1rem)]">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={onBack}
            className="w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-2xl">⬅️</span>
          </button>
          
          <div className="glass-card rounded-2xl px-4 py-2 shadow-lg">
            <div className="text-white font-bold text-center">
              <div className="text-xs opacity-90">TREASURE HUNT</div>
              <div className="text-lg">🏝️ Island Explorer 🏝️</div>
            </div>
          </div>
          
          <button 
            onClick={() => setSoundOn(!soundOn)}
            className="w-12 h-12 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-2xl">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Progress Bar */}
        <div className="glass-card rounded-2xl p-4 shadow-xl mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold">Adventure Progress</span>
            <span className="text-white font-bold">{completionPercentage}%</span>
          </div>
          <div className="w-full h-3 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000 shimmer"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          
          {/* Treasure Pieces Collection */}
          <button 
            onClick={() => setShowTreasureCollection(true)}
            className="mt-3 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-center gap-2">
              <span>🏆</span>
              <span>Treasure Pieces: {collectedPieces}/5</span>
              <span>🏆</span>
            </div>
          </button>
        </div>
      </div>

      {/* Ocean Waves */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg className="w-full h-32" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path 
            fill="rgba(59, 130, 246, 0.3)" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-animation"
          />
          <path 
            fill="rgba(59, 130, 246, 0.5)" 
            d="M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,181.3C672,181,768,203,864,213.3C960,224,1056,224,1152,208C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="wave-animation"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      {/* Island Map - Improved Layout */}
      <div className="flex-1 relative z-10 px-4 overflow-y-auto">
        {/* Scroll Indicator */}
        <div className="text-center mb-4 text-white/70 text-sm font-medium animate-pulse">
          ↓ Scroll to explore all islands ↓
        </div>
        
        {/* Islands Grid */}
        <div className="space-y-4 pb-8">
          {islands.map((island, index) => {
            const progress = islandProgress[island.id];
            const isUnlocked = progress?.unlocked;
            const hasTreasure = progress?.treasurePiece;
            const isPerfect = progress?.perfectScore;
            const isNext = index > 0 && !isUnlocked && islandProgress[islands[index - 1].id]?.treasurePiece;
            
            return (
              <div key={island.id} className="relative">
                {/* Connection Path */}
                {index > 0 && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-4 w-1">
                    <div className={`h-full w-full ${
                      islandProgress[islands[index - 1].id]?.treasurePiece 
                        ? 'bg-gradient-to-b from-yellow-400 to-yellow-300' 
                        : 'bg-white/20'
                    }`} />
                    {islandProgress[islands[index - 1].id]?.treasurePiece && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-400 rounded-full animate-pulse" />
                    )}
                  </div>
                )}
                
                {/* Island Card */}
                <button
                  onClick={() => onSelectIsland(island.id)}
                  disabled={!isUnlocked}
                  className={`relative w-full rounded-3xl transition-all ${
                    isUnlocked 
                      ? 'hover:scale-[1.02] active:scale-[0.98] shadow-xl' 
                      : isNext
                      ? 'opacity-75 shadow-lg'
                      : 'opacity-50'
                  }`}
                >
                  {/* Card Background */}
                  <div className={`relative overflow-hidden rounded-3xl ${
                    isUnlocked 
                      ? `bg-gradient-to-br ${island.theme.background}` 
                      : 'bg-gradient-to-br from-slate-500 to-slate-600'
                  } p-5`}>
                    {/* Animated Background Elements */}
                    {isUnlocked && (
                      <>
                        <div className="absolute top-2 right-2 text-2xl sparkle-animation opacity-60">✨</div>
                        <div className="absolute bottom-2 left-2 text-xl sparkle-animation opacity-60" style={{ animationDelay: '1s' }}>⭐</div>
                      </>
                    )}
                    
                    {/* Next Island Glow */}
                    {isNext && (
                      <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse" />
                    )}
                    
                    <div className="relative flex items-center gap-4">
                      {/* Island Number Circle */}
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center font-black text-xl ${
                        isUnlocked 
                          ? 'bg-white/30 text-white shadow-lg' 
                          : 'bg-black/30 text-white/50'
                      }`}>
                        {island.id}
                      </div>
                      
                      {/* Island Icon & Info */}
                      <div className="flex-1 flex items-center gap-3">
                        <div className={`text-5xl ${isUnlocked ? 'animate-bounce' : ''}`} style={{ animationDelay: `${index * 0.2}s` }}>
                          {isUnlocked ? island.emoji : '🔒'}
                        </div>
                        
                        <div className="flex-1 text-left">
                          <h3 className="text-white font-black text-lg">
                            {island.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                              isUnlocked 
                                ? 'bg-white/30 text-white' 
                                : 'bg-black/30 text-white/50'
                            }`}>
                              {island.difficulty}
                            </span>
                            {!isUnlocked && isNext && (
                              <span className="text-xs text-yellow-300 font-medium animate-pulse">
                                Ready to unlock!
                              </span>
                            )}
                            {!isUnlocked && !isNext && (
                              <span className="text-xs text-white/40 font-medium">
                                Complete island {index} first
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Right Side Indicators */}
                      <div className="flex flex-col items-center gap-1">
                        {/* Perfect Score */}
                        {isPerfect && (
                          <div className="text-2xl">💯</div>
                        )}
                        
                        {/* Treasure Piece */}
                        {hasTreasure && (
                          <div className="text-3xl pulse-animation">
                            {island.rewards.treasurePiece}
                          </div>
                        )}
                        
                        {/* Stars */}
                        {progress?.attempts > 0 && (
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <span key={i} className={`text-sm ${
                                i < progress.bestScore ? 'text-yellow-300' : 'text-white/30'
                              }`}>
                                ⭐
                              </span>
                            ))}
                          </div>
                        )}
                        
                        {/* Tap to Start */}
                        {isUnlocked && !hasTreasure && (
                          <span className="text-xs bg-white/30 px-2 py-1 rounded-full text-white font-bold animate-pulse">
                            TAP
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            );
          })}
          
          {/* Final Treasure Teaser */}
          <div className="mt-8 text-center p-6 glass-card rounded-3xl">
            <div className="text-5xl mb-3 bounce-animation">🏆</div>
            <h3 className="text-xl font-black text-white mb-2">Final Treasure</h3>
            <p className="text-white/70 text-sm">
              Collect all 5 treasure pieces to unlock the legendary treasure!
            </p>
            <div className="flex justify-center gap-2 mt-4">
              {getAllTreasurePieces(islandProgress).map((piece) => (
                <div key={piece.id} className={`text-2xl ${
                  piece.collected ? 'opacity-100' : 'opacity-30 grayscale'
                }`}>
                  {piece.collected ? piece.piece : '❓'}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Footer */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-4 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
        <div className="glass-card rounded-2xl p-4 shadow-xl">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-1">💰</div>
              <div className="text-white font-bold text-lg">{totalStats.totalCoinsEarned}</div>
              <div className="text-white/70 text-xs">Total Coins</div>
            </div>
            <div>
              <div className="text-3xl mb-1">💎</div>
              <div className="text-white font-bold text-lg">{totalStats.totalGemsFound}</div>
              <div className="text-white/70 text-xs">Gems Found</div>
            </div>
            <div>
              <div className="text-3xl mb-1">📝</div>
              <div className="text-white font-bold text-lg">{totalStats.totalCorrectAnswers}/{totalStats.totalQuestionsAnswered}</div>
              <div className="text-white/70 text-xs">Correct</div>
            </div>
          </div>
        </div>
      </div>

      {/* Treasure Collection Modal */}
      {showTreasureCollection && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-6 max-w-sm w-full shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              🏆 Treasure Collection 🏆
            </h3>
            
            <div className="flex justify-center gap-4 mb-6">
              {treasurePieces.map((piece, index) => (
                <div 
                  key={piece.id}
                  className={`text-5xl ${piece.collected ? 'unlock-animation' : 'opacity-30 grayscale'}`}
                  style={{ animationDelay: piece.collected ? `${index * 0.1}s` : '0s' }}
                >
                  {piece.collected ? piece.piece : '❓'}
                </div>
              ))}
            </div>
            
            <div className="text-center text-white mb-6">
              {collectedPieces === 5 ? (
                <div>
                  <p className="text-lg font-bold mb-2">🎉 COMPLETE! 🎉</p>
                  <p className="text-sm opacity-90">You're a true Treasure Master!</p>
                </div>
              ) : (
                <p className="text-sm opacity-90">
                  Collect all 5 pieces to unlock the final treasure!
                </p>
              )}
            </div>
            
            <button 
              onClick={() => setShowTreasureCollection(false)}
              className="w-full py-3 bg-white/20 backdrop-blur rounded-2xl text-white font-bold hover:bg-white/30 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}