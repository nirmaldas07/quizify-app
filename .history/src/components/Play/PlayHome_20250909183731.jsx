//src/components/Play/PlayHome.jsx
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ClassicMode from "./modes/classic/ClassicMode";
import SurvivalMode from "./modes/survival/SurvivalMode.jsx";
import TreasureHuntMode from "./modes/treasureHunt/TreasureHuntMode.jsx";


const PRIMARY_CATS = [
  { name: "General Knowledge", questions: 50, icon: "🧠", color: "#7C3AED" },
  { name: "Artificial Intelligence", questions: 28, icon: "🤖", color: "#10B981" },
  { name: "Fun facts", questions: 30, icon: "🎉", color: "#EF4444" },
  { name: "Science", questions: 45, icon: "🧪", color: "#F59E0B" },
  { name: "History", questions: 42, icon: "🏺", color: "#2563EB" },
  { name: "Geography", questions: 38, icon: "🗺️", color: "#FACC15" }
];

const WHEEL_CATEGORIES = PRIMARY_CATS.slice(0, 6);
const sliceAngle = 360 / WHEEL_CATEGORIES.length;

function ModesGrid({ onModeSelect, onNavigateHome }) {
  return (
    <div className="fixed inset-0 bg-base-bg text-base-text overflow-hidden mt-12">
      <div className="h-full overflow-y-auto mx-auto max-w-md px-4 pt-[calc(env(safe-area-inset-top)+5rem)] pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
        <header className="flex items-center mb-8">
          <h1 className="text-center text-xl font-bold w-full">Choose a quiz mode</h1>
        </header>

        <div className="space-y-8">
          <button
            onClick={() => onModeSelect('classic')}
            className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-8 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            <div className="absolute top-0 right-0 w-32 h-32 opacity-30">
              <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                {WHEEL_CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 40 * Math.cos(sr);
                  const y1 = 50 - 40 * Math.sin(sr);
                  const x2 = 50 + 40 * Math.cos(er);
                  const y2 = 50 - 40 * Math.sin(er);
                  return (
                    <path
                      key={i}
                      d={`M50,50 L${x1},${y1} A40,40 0 ${largeArc} 0 ${x2},${y2} Z`}
                      fill={cat.color}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
                <circle cx="50" cy="50" r="8" fill="white"/>
              </svg>
            </div>
            
            <div className="absolute top-4 left-8 text-3xl opacity-60">🏆</div>
            <div className="absolute top-12 right-16 text-xl opacity-40">⭐</div>
            <div className="absolute bottom-6 left-6 text-2xl opacity-50">🎲</div>
            <div className="absolute bottom-4 right-12 text-3xl opacity-60">🍪</div>
            <div className="absolute top-1/2 left-4 text-lg opacity-40">🥨</div>
            
            <h2 className="text-5xl font-black text-white mb-10 relative z-10" style={{transform: 'translateX(-20px)'}}>CLASSIC</h2>
          </button>

          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => onModeSelect('survival')}
              className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden"
            >
              <div className="text-2xl mb-2">💀</div>
              <h4 className="text-lg font-black text-white">SURVIVAL</h4>
            </button>

            <button
              onClick={() => onModeSelect('treasureHunt')}
              className="aspect-square rounded-3xl bg-gradient-to-br from-purple-400 to-green-500 p-4 text-left hover:shadow-xl transition-all active:scale-[0.98] relative overflow-hidden"
            >
              {/* Animated island background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-2 right-2 text-4xl animate-pulse">🏝️</div>
                <div className="absolute bottom-2 left-2 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>⛏️</div>
                <div className="absolute top-1/2 right-4 text-2xl animate-pulse" style={{ animationDelay: '1s' }}>💎</div>
              </div>
              <div className="text-2xl mb-2 relative z-10">🏴‍☠️</div>
              <h4 className="text-lg font-black text-white relative z-10">TREASURE HUNT</h4>
              <div className="absolute bottom-2 right-2">
                <span className="text-xs bg-white/20 px-2 py-1 rounded-full text-white font-bold">NEW!</span>
              </div>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">⚔️</div>
              <h4 className="text-lg font-black text-white">SURVIVAL ARENA</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">📱</div>
              <h4 className="text-lg font-black text-white">TRIVIA VIDEO</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PlayHome() {
  const [selectedMode, setSelectedMode] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    // Check if we should auto-start survival mode from quest
    const params = new URLSearchParams(location.search);
    if (params.get('mode') === 'survival' && params.get('from') === 'quest') {
      setSelectedMode('survival');
    }
  }, [location]);

  const handleModeSelect = (mode) => {
  if (mode === 'classic') {
    navigate('/play/classic', { state: { from: 'play' } });
    return;
    } else if (mode === 'survival') {
      setSelectedMode('survival');
    } else if (mode === 'treasureHunt') {
      setSelectedMode('treasureHunt');
    }
  };

  const handleNavigateHome = () => {
    navigate('/');
  };

  const handleBackToModes = () => {
    setSelectedMode(null);
  };


//   // Handle browser back button
//   useEffect(() => {
//     const handlePopState = (e) => {
//       if (selectedMode) {
//         setSelectedMode(null);
//       }
//     };

//     window.addEventListener('popstate', handlePopState);
//     return () => window.removeEventListener('popstate', handlePopState);
//   }, [selectedMode]);

  // Render the selected mode
  if (selectedMode === 'classic') {
    return <ClassicMode onBack={handleBackToModes} />;
  }

  if (selectedMode === 'survival') {
    const params = new URLSearchParams(location.search);
    const isFromQuest = params.get('from') === 'quest';
    
    return <SurvivalMode 
      onBack={handleBackToModes} 
      isFromQuest={isFromQuest}
    />;
  }

  if (selectedMode === 'treasureHunt') {
    return <TreasureHuntMode onBack={handleBackToModes} />;
  }

  // Default: show mode selection screen (this is what users see first)
  return (
    <ModesGrid 
      onModeSelect={handleModeSelect}
      onNavigateHome={handleNavigateHome}
    />
  );
}