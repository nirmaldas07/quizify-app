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
  const [showTreasureCollection, setShowTreasureCollection] = useState(false);
  const treasurePieces = getAllTreasurePieces(islandProgress);
  const collectedPieces = treasurePieces.filter(p => p.collected).length;
  const completionPercentage = Math.round((collectedPieces / islands.length) * 100);

  return (
    <div className="h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 relative overflow-auto flex flex-col">
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
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .cloud-drift {
          animation: cloudDrift 20s linear infinite;
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
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Animated Sky Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 cloud-drift" style={{ animationDelay: '0s' }}>
          <div className="text-6xl opacity-40">☁️</div>
        </div>
        <div className="absolute top-12 cloud-drift" style={{ animationDelay: '7s', animationDuration: '25s' }}>
          <div className="text-5xl opacity-40">☁️</div>
        </div>
        <div className="absolute top-10 right-12">
          <div className="text-6xl pulse-animation opacity-80">☀️</div>
        </div>
        <div className="absolute top-16 left-20 float-animation opacity-60">
          <div className="text-2xl">🦜</div>
        </div>
      </div>

      {/* Header - Adjusted spacing */}
      <div className="relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+3rem)]">
        <div className="flex justify-between items-center mb-3">
          <button 
            onClick={onBack}
            className="w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">⬅</span>
          </button>
          
          <div className="glass-card rounded-2xl px-3 py-2 shadow-lg">
            <div className="text-white font-bold text-center">
              <div className="text-[10px] opacity-90">TREASURE HUNT</div>
              <div className="text-sm">🏝️ Island Explorer 🏝️</div>
            </div>
          </div>
          
          <button 
            onClick={() => setSoundOn(!soundOn)}
            className="w-11 h-11 glass-card rounded-2xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Progress Section - Moved down slightly */}
        <div className="glass-card rounded-2xl p-3 shadow-xl mt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-white font-bold text-sm">Adventure Progress</span>
            <span className="text-white font-bold text-sm">{completionPercentage}%</span>
          </div>
          <div className="w-full h-2.5 bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          
          <button 
            onClick={() => setShowTreasureCollection(true)}
            className="mt-2.5 w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-sm hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-center gap-2">
              <span>🏆</span>
              <span>Treasure Pieces: {collectedPieces}/5</span>
              <span>🏆</span>
            </div>
          </button>
        </div>
      </div>

      {/* Islands Grid - Centered in remaining space */}
      <div className="flex-1 flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-md">
          {/* Islands Grid - 2x2 + 1 */}
          <div className="grid grid-cols-2 gap-3">
            {islands.slice(0, 4).map((island) => {
              const progress = islandProgress[island.id];
              const isUnlocked = progress?.unlocked;
              const hasTreasure = progress?.treasurePiece;
              const isPerfect = progress?.perfectScore;
              
              return (
                <button
                  key={island.id}
                  onClick={() => onSelectIsland(island.id)}
                  disabled={!isUnlocked}
                  className={`relative aspect-square rounded-2xl transition-all ${
                    isUnlocked 
                      ? 'hover:scale-105 active:scale-95 shadow-xl' 
                      : 'opacity-50 grayscale'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    isUnlocked ? island.theme.background : 'from-gray-400 to-gray-500'
                  }`}>
                    {isUnlocked && (
                      <>
                        <div className="absolute top-1 right-1 text-lg sparkle-animation">✨</div>
                        <div className="absolute bottom-1 left-1 text-sm sparkle-animation" style={{ animationDelay: '1s' }}>⭐</div>
                      </>
                    )}
                  </div>
                  
                  {!isUnlocked && (
                    <div className="absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center">
                      <div className="text-4xl">🔒</div>
                    </div>
                  )}
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-3">
                    <div className="absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{island.id}</span>
                    </div>
                    
                    {isPerfect && (
                      <div className="absolute top-1 right-1 text-lg">💯</div>
                    )}
                    
                    <div className={`text-5xl mb-1 ${isUnlocked ? 'bounce-animation' : ''}`}>
                      {isUnlocked ? island.emoji : '❓'}
                    </div>
                    
                    <div className="text-white font-bold text-sm text-center mb-1">
                      {island.name}
                    </div>
                    
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isUnlocked ? 'bg-white/30' : 'bg-black/30'
                    } text-white`}>
                      {island.difficulty}
                    </div>
                    
                    {hasTreasure && (
                      <div className="absolute bottom-1 text-2xl pulse-animation">
                        {island.rewards.treasurePiece}
                      </div>
                    )}
                    
                    {progress?.attempts > 0 && (
                      <div className="absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                        <span>{progress.bestScore}/3</span>
                        <span>⭐</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
          
          {/* 5th Island - Centered below */}
          <div className="flex justify-center mt-3">
            {islands.slice(4, 5).map((island) => {
              const progress = islandProgress[island.id];
              const isUnlocked = progress?.unlocked;
              const hasTreasure = progress?.treasurePiece;
              const isPerfect = progress?.perfectScore;
              
              return (
                <button
                  key={island.id}
                  onClick={() => onSelectIsland(island.id)}
                  disabled={!isUnlocked}
                  className={`relative w-[calc(50%-6px)] aspect-square rounded-2xl transition-all ${
                    isUnlocked 
                      ? 'hover:scale-105 active:scale-95 shadow-xl' 
                      : 'opacity-50 grayscale'
                  }`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${
                    isUnlocked ? island.theme.background : 'from-gray-400 to-gray-500'
                  }`}>
                    {isUnlocked && (
                      <>
                        <div className="absolute top-1 right-1 text-lg sparkle-animation">✨</div>
                        <div className="absolute bottom-1 left-1 text-sm sparkle-animation" style={{ animationDelay: '1s' }}>⭐</div>
                      </>
                    )}
                    {!isUnlocked && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-400/20 to-transparent animate-pulse" />
                    )}
                  </div>
                  
                  {!isUnlocked && (
                    <div className="absolute inset-0 rounded-2xl bg-black/30 flex items-center justify-center">
                      <div className="text-4xl">🔒</div>
                    </div>
                  )}
                  
                  <div className="relative h-full flex flex-col items-center justify-center p-3">
                    <div className="absolute top-1 left-1 w-7 h-7 bg-white/30 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{island.id}</span>
                    </div>
                    
                    {isPerfect && (
                      <div className="absolute top-1 right-1 text-lg">💯</div>
                    )}
                    
                    <div className={`text-5xl mb-1 ${isUnlocked ? 'bounce-animation' : ''}`}>
                      {isUnlocked ? island.emoji : '👑'}
                    </div>
                    
                    <div className="text-white font-bold text-sm text-center mb-1">
                      {island.name}
                    </div>
                    
                    <div className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      isUnlocked ? 'bg-white/30' : 'bg-black/30'
                    } text-white`}>
                      {island.difficulty}
                    </div>
                    
                    {hasTreasure && (
                      <div className="absolute bottom-1 text-2xl pulse-animation">
                        {island.rewards.treasurePiece}
                      </div>
                    )}
                    
                    {progress?.attempts > 0 && (
                      <div className="absolute -bottom-1 -right-1 bg-white/90 text-gray-800 rounded-full px-2 py-0.5 text-[10px] font-bold flex items-center gap-1">
                        <span>{progress.bestScore}/3</span>
                        <span>⭐</span>
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Stats Footer - Moved up slightly */}
      <div className="relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+2.5rem)]">
        <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl p-1 shadow-xl border border-white/20">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="relative">
              <div className="text-2xl mb-0.5 filter drop-shadow-lg">💰</div>
              <div className="text-yellow-300 font-black text-lg">{totalStats.totalCoinsEarned}</div>
              <div className="text-white/80 text-[10px] font-medium">Total Coins</div>
            </div>
            <div className="relative">
              <div className="text-2xl mb-0.5 filter drop-shadow-lg">💎</div>
              <div className="text-cyan-300 font-black text-lg">{totalStats.totalGemsFound}</div>
              <div className="text-white/80 text-[10px] font-medium">Gems Found</div>
            </div>
            <div className="relative">
              <div className="text-2xl mb-0.5 filter drop-shadow-lg">📝</div>
              <div className="text-green-300 font-black text-lg">{totalStats.totalCorrectAnswers}/{totalStats.totalQuestionsAnswered}</div>
              <div className="text-white/80 text-[10px] font-medium">Correct</div>
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
                  className={`text-5xl ${piece.collected ? '' : 'opacity-30 grayscale'}`}
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