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
    <div className="min-h-screen bg-gradient-to-b from-sky-400 via-blue-500 to-blue-600 relative overflow-hidden flex flex-col">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          33% { transform: translateY(-15px) translateX(5px) rotate(3deg); }
          66% { transform: translateY(5px) translateX(-5px) rotate(-3deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pathFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        
        .float-animation {
          animation: float 4s ease-in-out infinite;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .bounce-animation {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .path-animation {
          animation: pathFlow 2s linear infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
      `}</style>

      {/* Sun in background */}
      <div className="absolute top-12 right-12">
        <div className="text-5xl pulse-animation opacity-70">☀️</div>
      </div>

      {/* Header - Moved down more */}
      <div className="relative z-20 px-4 pt-[calc(env(safe-area-inset-top)+2rem)]">
        <div className="flex justify-between items-center mb-4">
          <button 
            onClick={onBack}
            className="w-10 h-10 glass-card rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-lg">⬅️</span>
          </button>
          
          <div className="glass-card rounded-full px-3 py-1.5 shadow-lg">
            <div className="text-white font-bold text-center">
              <div className="text-[9px] opacity-90">TREASURE HUNT</div>
              <div className="text-xs">🏝️ Island Explorer 🏝️</div>
            </div>
          </div>
          
          <button 
            onClick={() => setSoundOn(!soundOn)}
            className="w-10 h-10 glass-card rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-lg">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Progress Section - Moved down with header */}
        <div className="glass-card rounded-2xl p-2.5 shadow-xl">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-white font-bold text-xs">Adventure Progress</span>
            <span className="text-white font-bold text-xs">{completionPercentage}%</span>
          </div>
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-2">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 transition-all duration-1000"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
          
          <button 
            onClick={() => setShowTreasureCollection(true)}
            className="w-full py-1.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold text-xs hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center justify-center gap-1">
              <span>🏆</span>
              <span>Treasure Pieces: {collectedPieces}/5</span>
              <span>🏆</span>
            </div>
          </button>
        </div>
      </div>

      {/* Islands with Curved Path - Centered */}
      <div className="flex-1 flex items-center justify-center px-6 py-2">
        <div className="relative w-full max-w-sm">
          {/* SVG Path connecting islands */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
            {/* Path from Island 1 to 2 */}
            <path
              d="M 80 60 Q 160 40, 240 60"
              fill="none"
              stroke={islandProgress[2]?.unlocked ? "#fbbf24" : "#94a3b8"}
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity={islandProgress[2]?.unlocked ? 1 : 0.3}
              className={islandProgress[2]?.unlocked ? "path-animation" : ""}
            />
            {/* Arrow 1->2 */}
            {!islandProgress[2]?.unlocked && (
              <polygon
                points="235,57 245,60 235,63"
                fill="#94a3b8"
                opacity="0.5"
              />
            )}
            
            {/* Path from Island 2 to 3 */}
            <path
              d="M 240 100 Q 200 130, 80 140"
              fill="none"
              stroke={islandProgress[3]?.unlocked ? "#fbbf24" : "#94a3b8"}
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity={islandProgress[3]?.unlocked ? 1 : 0.3}
              className={islandProgress[3]?.unlocked ? "path-animation" : ""}
            />
            {/* Arrow 2->3 */}
            {!islandProgress[3]?.unlocked && (
              <polygon
                points="85,143 75,140 85,137"
                fill="#94a3b8"
                opacity="0.5"
              />
            )}
            
            {/* Path from Island 3 to 4 */}
            <path
              d="M 80 180 Q 160 200, 240 180"
              fill="none"
              stroke={islandProgress[4]?.unlocked ? "#fbbf24" : "#94a3b8"}
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity={islandProgress[4]?.unlocked ? 1 : 0.3}
              className={islandProgress[4]?.unlocked ? "path-animation" : ""}
            />
            {/* Arrow 3->4 */}
            {!islandProgress[4]?.unlocked && (
              <polygon
                points="235,177 245,180 235,183"
                fill="#94a3b8"
                opacity="0.5"
              />
            )}
            
            {/* Path from Island 4 to 5 */}
            <path
              d="M 240 220 Q 200 250, 160 260"
              fill="none"
              stroke={islandProgress[5]?.unlocked ? "#fbbf24" : "#94a3b8"}
              strokeWidth="3"
              strokeDasharray="5,5"
              opacity={islandProgress[5]?.unlocked ? 1 : 0.3}
              className={islandProgress[5]?.unlocked ? "path-animation" : ""}
            />
            {/* Arrow 4->5 */}
            {!islandProgress[5]?.unlocked && (
              <polygon
                points="165,263 155,260 165,257"
                fill="#94a3b8"
                opacity="0.5"
              />
            )}
          </svg>

          {/* Island 1 - Top Left */}
          <div className="absolute" style={{ left: '40px', top: '20px', zIndex: 2 }}>
            {renderIsland(islands[0], islandProgress[islands[0].id], onSelectIsland)}
          </div>

          {/* Island 2 - Top Right */}
          <div className="absolute" style={{ right: '40px', top: '20px', zIndex: 2 }}>
            {renderIsland(islands[1], islandProgress[islands[1].id], onSelectIsland)}
          </div>

          {/* Island 3 - Middle Left */}
          <div className="absolute" style={{ left: '40px', top: '100px', zIndex: 2 }}>
            {renderIsland(islands[2], islandProgress[islands[2].id], onSelectIsland)}
          </div>

          {/* Island 4 - Middle Right */}
          <div className="absolute" style={{ right: '40px', top: '140px', zIndex: 2 }}>
            {renderIsland(islands[3], islandProgress[islands[3].id], onSelectIsland)}
          </div>

          {/* Island 5 - Bottom Center */}
          <div className="absolute" style={{ left: '50%', transform: 'translateX(-50%)', top: '220px', zIndex: 2 }}>
            {renderIsland(islands[4], islandProgress[islands[4].id], onSelectIsland)}
          </div>
        </div>
      </div>

      {/* Stats Footer - Moved up more */}
      <div className="relative z-20 px-4 pb-[calc(env(safe-area-inset-bottom)+2rem)]">
        <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 backdrop-blur-lg rounded-2xl p-2.5 shadow-xl border border-white/20">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-xl mb-0.5">💰</div>
              <div className="text-yellow-300 font-black text-base">{totalStats.totalCoinsEarned}</div>
              <div className="text-white/80 text-[9px] font-medium">Total Coins</div>
            </div>
            <div>
              <div className="text-xl mb-0.5">💎</div>
              <div className="text-cyan-300 font-black text-base">{totalStats.totalGemsFound}</div>
              <div className="text-white/80 text-[9px] font-medium">Gems Found</div>
            </div>
            <div>
              <div className="text-xl mb-0.5">📝</div>
              <div className="text-green-300 font-black text-base">{totalStats.totalCorrectAnswers}/{totalStats.totalQuestionsAnswered}</div>
              <div className="text-white/80 text-[9px] font-medium">Correct</div>
            </div>
          </div>
        </div>
      </div>

      {/* Treasure Collection Modal */}
      {showTreasureCollection && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-5 max-w-sm w-full shadow-2xl">
            <h3 className="text-xl font-bold text-white text-center mb-4">
              🏆 Treasure Collection 🏆
            </h3>
            
            <div className="flex justify-center gap-3 mb-4">
              {treasurePieces.map((piece) => (
                <div 
                  key={piece.id}
                  className={`text-4xl ${piece.collected ? '' : 'opacity-30 grayscale'}`}
                >
                  {piece.collected ? piece.piece : '❓'}
                </div>
              ))}
            </div>
            
            <div className="text-center text-white mb-4">
              {collectedPieces === 5 ? (
                <div>
                  <p className="text-base font-bold mb-1">🎉 COMPLETE! 🎉</p>
                  <p className="text-xs opacity-90">You're a true Treasure Master!</p>
                </div>
              ) : (
                <p className="text-xs opacity-90">
                  Collect all 5 pieces to unlock the final treasure!
                </p>
              )}
            </div>
            
            <button 
              onClick={() => setShowTreasureCollection(false)}
              className="w-full py-2.5 bg-white/20 backdrop-blur rounded-2xl text-white font-bold text-sm hover:bg-white/30 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Helper function to render circular islands
function renderIsland(island, progress, onSelectIsland) {
  const isUnlocked = progress?.unlocked;
  const hasTreasure = progress?.treasurePiece;
  const isPerfect = progress?.perfectScore;
  
  return (
    <button
      onClick={() => onSelectIsland(island.id)}
      disabled={!isUnlocked}
      className={`relative w-20 h-20 rounded-full transition-all ${
        isUnlocked 
          ? 'hover:scale-110 active:scale-95 shadow-xl' 
          : 'opacity-60'
      }`}
    >
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${
        isUnlocked ? island.theme.background : 'from-gray-400 to-gray-500'
      } ${!isUnlocked ? 'grayscale' : ''}`}>
        {isUnlocked && (
          <div className="absolute top-0 right-0 text-xs animate-pulse">✨</div>
        )}
      </div>
      
      {!isUnlocked && (
        <div className="absolute inset-0 rounded-full bg-black/30 flex items-center justify-center">
          <div className="text-2xl">🔒</div>
        </div>
      )}
      
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Island Number */}
        <div className="absolute -top-1 -left-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md">
          <span className="text-gray-800 font-bold text-[10px]">{island.id}</span>
        </div>
        
        {/* Perfect Score Badge */}
        {isPerfect && (
          <div className="absolute -top-1 -right-1 text-sm">💯</div>
        )}
        
        {/* Island Emoji */}
        <div className={`text-3xl ${isUnlocked ? 'bounce-animation' : ''}`}>
          {isUnlocked ? island.emoji : '❓'}
        </div>
        
        {/* Treasure Piece */}
        {hasTreasure && (
          <div className="absolute -bottom-1 text-lg pulse-animation">
            {island.rewards.treasurePiece}
          </div>
        )}
        
        {/* Score Badge */}
        {progress?.attempts > 0 && (
          <div className="absolute -bottom-2 -right-2 bg-white/90 text-gray-800 rounded-full px-1.5 py-0.5 text-[9px] font-bold flex items-center gap-0.5 shadow-md">
            <span>{progress.bestScore}/3</span>
            <span className="text-[8px]">⭐</span>
          </div>
        )}
      </div>
      
      {/* Island Name below circle */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
        <div className="text-white font-bold text-[10px] drop-shadow-md">
          {island.name}
        </div>
        <div className={`text-center text-[8px] font-bold ${
          isUnlocked ? 'text-white/80' : 'text-white/50'
        }`}>
          {island.difficulty}
        </div>
      </div>
    </button>
  );
}