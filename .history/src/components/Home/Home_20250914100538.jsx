//src/components/home.jsx

import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import Papa from "papaparse";
import CoinFly from "../Shared/CoinFly";
import { useGame } from '../../App';
import AvatarDisplay from '../GameSystem/AvatarDisplay';
import XPBar from '../GameSystem/XPBar';
import EnergyMeter from '../GameSystem/EnergyMeter';
import { GAME_CONSTANTS } from '../../utils/gameConstants';
import AnalyticsService from '../../services/AnalyticsService';
import { categories, moreCategories, allCategories } from '../../utils/categories';
import HeroCard from './HeroCard';
import QuickActions from './QuickActions';
import CategoryGrid from './CategoryGrid';
import PracticeModeButton from './PracticeModeButton';
import DailyChallenge from './DailyChallenge';
import AvatarSelectionModal from './AvatarSelectionModal';
import MoreCategoriesModal from './MoreCategoriesModal';
import CoinsInfoModal from './CoinsInfoModal';
import QuizConfigModal from './QuizConfigModal';
import PracticeConfigModal from './PracticeConfigModal';
import WelcomeBack from './WelcomeBack';
// import { useBackButton } from '../../hooks/useBackButton.jsx';


/* Helpers */
const ymd = (d = new Date()) => d.toLocaleDateString("en-CA");
const readJSON = (k, fallback = null) => {
  try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : fallback; }
  catch { return fallback; }
};
const writeJSON = (k, v) => localStorage.setItem(k, JSON.stringify(v));

export default function Home() {
  // Initialize back button handler with exit dialog
  // const { ExitDialog } = useBackButton();
  
  const [showWelcome, setShowWelcome] = useState(() => {
  // Check if user just signed up or signed in
  const justSignedUp = sessionStorage.getItem('justSignedUp');
  const justSignedIn = sessionStorage.getItem('justSignedIn');
  
  if (justSignedUp === 'true' || justSignedIn === 'true') {
    // Clear the flags
    sessionStorage.removeItem('justSignedUp');
    sessionStorage.removeItem('justSignedIn');
    // Mark welcome as already shown for this session
    sessionStorage.setItem('welcomeShown', 'true');
    return false; // Don't show WelcomeBack
  }
  
  // Check if welcome was already shown in this session
  const welcomeShown = sessionStorage.getItem('welcomeShown');
  if (welcomeShown === 'true') {
    return false;
  }
  
  // Show welcome for returning users in new sessions
  return true;
});
  
  const navigate = useNavigate();
  const gameContext = useGame();
const { player, levelProgress, useEnergy, changeAvatar } = gameContext;
const [, forceUpdate] = useState({});
// Don't extract addXP or addCoins - use GameDataService directly
  
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6 });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.6 });
  const [playCoin] = useSound("/sounds/coin.mp3", { volume: 0.75 });
  const [playLevelUp] = useSound("/sounds/levelup.mp3", { volume: 0.8 });

  // Track previous level for level-up detection
  const prevLevelRef = useRef(player.level);
  const coinPillRef = useRef(null);

  
  // Force update when navigating back to home
  useEffect(() => {
    // This will run every time Home component mounts
    // ensuring we always show the latest coin count
    const handleFocus = () => {
      // Force a re-render by updating a dummy state if needed
      // The player prop should already be updated via context
    };
    
  window.addEventListener('focus', handleFocus);
  return () => window.removeEventListener('focus', handleFocus);
}, []);

  // Check for level up
  useEffect(() => {
    if (player.level > prevLevelRef.current) {
      playLevelUp?.();
      prevLevelRef.current = player.level;
    }
  }, [player.level, playLevelUp]);


// Listen for coin updates to refresh the display
useEffect(() => {
  const handleStorageChange = () => {
    forceUpdate({});
  };
  
  window.addEventListener('storage', handleStorageChange);
  window.addEventListener('coinsUpdated', handleStorageChange);
  
  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener('coinsUpdated', handleStorageChange);
  };
}, []);

  // UI State
  const [showMoreCategories, setShowMoreCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showQuizConfig, setShowQuizConfig] = useState(false);
  const [quizDifficulty, setQuizDifficulty] = useState("medium");
  const [quizCount, setQuizCount] = useState(10);
  const [quizTimer, setQuizTimer] = useState(45);
  const [showCoinsInfo, setShowCoinsInfo] = useState(false);
  const [showAvatarModal, setShowAvatarModal] = useState(false);

  // Practice Mode State
  const [showPracticeConfig, setShowPracticeConfig] = useState(false);
  const [practiceCategory, setPracticeCategory] = useState("general-knowledge");
  const [practiceDifficulty, setPracticeDifficulty] = useState("medium");
  const [practiceCount, setPracticeCount] = useState(10);

  // Scroll restoration
  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('homeScrollPosition');
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition));
    }

    const handleScroll = () => {
      sessionStorage.setItem('homeScrollPosition', window.scrollY.toString());
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleCategorySelect = (category) => {
      AnalyticsService.trackButtonClick(`category_${category.slug}`, 'home_screen');
    if (category.slug === "more") {
      setShowMoreCategories(true);
      return;
    }
    
    setSelectedCategory(category);
    setShowQuizConfig(true);
  };

  const startQuiz = () => {
    console.log("Starting quiz with energy:", player.energy);
    console.log("Category:", selectedCategory.slug);
    
    navigate(`/quiz/${selectedCategory.slug}`, {
      state: { 
        mode: "quiz",
        difficulty: quizDifficulty, 
        count: quizCount, 
        timer: { type: "per_q", seconds: quizTimer },
        source: "adventure"
      }
    });
    setShowQuizConfig(false);
  };

  const startPractice = () => {
    console.log("Starting practice, category:", practiceCategory);
    // Practice mode doesn't use energy
    navigate(`/quiz/${practiceCategory}`, {
      state: { 
        mode: "practice", 
        difficulty: practiceDifficulty, 
        count: practiceCount, 
        timer: { type: "off", seconds: 0 } 
      }
    });
    setShowPracticeConfig(false);
  };

  const quickActions = [
    { 
      icon: "🎯", 
      label: "Quests", 
      color: "bg-gradient-to-br from-orange-500 to-pink-500", 
      action: () => {
        AnalyticsService.trackButtonClick('quests', 'home_screen');
        sessionStorage.setItem('questsFromHome', 'true');
        navigate("/profile/quests");
      }
    },
    { 
  icon: "🔥", 
  label: "Streak", 
  color: "bg-gradient-to-br from-red-500 to-orange-500", 
  action: () => {
    AnalyticsService.trackButtonClick('streak', 'home_screen');
    navigate("/profile/streaks");
  }
},
{ 
  icon: "🏆", 
  label: "Achieve", 
  color: "bg-gradient-to-br from-blue-500 to-purple-500", 
  action: () => {
    AnalyticsService.trackButtonClick('achievements', 'home_screen');
    navigate("/profile/achievements");
  }
},
{ 
  icon: "🎁", 
  label: "Rewards", 
  color: "bg-gradient-to-br from-green-500 to-teal-500", 
  action: () => {
    AnalyticsService.trackButtonClick('rewards', 'home_screen');
    navigate("/profile/rewards");
  }
},

  ];

  return (
    <>
    {/* Exit Confirmation Dialog */}
    {/* <ExitDialog /> */}

    {showWelcome && (
      <WelcomeBack 
        player={player} 
        onContinue={() => setShowWelcome(false)}
      />
    )}
    
    <div className="min-h-screen bg-base-bg text-base-text">
      <div className="fixed inset-0 -z-10 pointer-events-none"  
        style={{ background: 'linear-gradient(to bottom, #0B0F1A, #111827)' }}
        />     
      <div className="relative z-10 px-4 pt-4 pb-24">
        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            25% { transform: translateY(-5px) rotate(-2deg); }
            50% { transform: translateY(0) rotate(0deg); }
            75% { transform: translateY(-3px) rotate(2deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
          
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          
          @keyframes coinRotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
          }
          
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.5); }
            50% { box-shadow: 0 0 40px rgba(251, 191, 36, 0.8); }
          }
          
          .flip-card {
            perspective: 1000px;
          }
          
          .flip-card-inner {
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }
          
          .flip-card-inner.flipped {
            transform: rotateY(180deg);
          }
          
          .flip-card-front, .flip-card-back {
            backface-visibility: hidden;
          }
          
          .flip-card-back {
            transform: rotateY(180deg);
          }
          
          .coin-3d {
            animation: coinRotate 2s linear infinite;
            transform-style: preserve-3d;
          }
          
          .magic-gradient {
            background: linear-gradient(45deg, #FFD700, #FFA500, #FF6B6B, #FF1493, #9370DB, #4169E1, #00CED1, #FFD700);
            background-size: 400% 400%;
            animation: gradientShift 8s ease infinite;
          }
          
          @keyframes gradientShift {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
        `}</style>

        {/* Enhanced Header with Avatar & Game Stats */}
        <div className="mb-8">
          <div className="flex justify-between items-start mb-4">
            <div 
              className="cursor-pointer hover:scale-105 transition-transform"
              onClick={() => {
                AnalyticsService.trackButtonClick('avatar_modal_opened', 'home_screen');
                setShowAvatarModal(true);
              }}
            >
              <AvatarDisplay player={player} size="small" showLevel={true} showName={true} />
            </div>
            
          <div className="flex gap-2">
          <button
            ref={coinPillRef}
            onClick={() => {
              AnalyticsService.trackButtonClick('coins_modal_opened', 'home_screen');
              setShowCoinsInfo(true);
            }}
            className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 flex items-center gap-2 hover:from-yellow-500/20 hover:to-orange-500/20 transition"
          >
            <span className="text-lg">🪙</span>
            <span className="font-bold">{GameDataService.getCoins()}</span>
          </button>
          </div>
          </div>
          
          {/* XP Progress Bar */}
          <XPBar 
            current={levelProgress.current} 
            required={levelProgress.required} 
            level={player.level}
            animate={true}
          />
        </div>


  {/* Hero Card - Spin & Win */}
  <HeroCard />

  {/* Quick Actions */}
  <QuickActions actions={quickActions} />


{/* Daily Challenge */}
<DailyChallenge 
  coinPillRef={coinPillRef}
/>

    {/* Categories Section */}
    <CategoryGrid categories={categories} onCategorySelect={handleCategorySelect} />

    {/* Practice Mode - Always available (no energy cost) */}
    <PracticeModeButton 
      onClick={() => setShowPracticeConfig(true)}
      isPulsing={player.energy < 10}
    />

{/* Surprise Zone Entry */}
<div
  onClick={() => {
  AnalyticsService.trackButtonClick('surprise_zone', 'home_screen');
  navigate("/surprise");
}}
  className="mt-6 relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-yellow-500/20 backdrop-blur border border-white/10 p-12 mb-4 cursor-pointer hover:scale-[1.02] transition-all group"
>
  {/* Animated background sparkles */}
  <div className="absolute inset-0 opacity-30">
    <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
    <div className="absolute top-8 right-8 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
    <div className="absolute bottom-6 left-12 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
    <div className="absolute bottom-4 right-6 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
  </div>
  
  <div className="relative flex items-center justify-between">
    <div>
      <h3 className="text-xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
        ✨ Surprise Zone
      </h3>
      <p className="text-sm text-gray-400">Mystery Box • Avatar Room • Fun Facts</p>
    </div>
    <div className="text-4xl group-hover:rotate-12 transition-transform">
      🎁
    </div>
  </div>
</div>

    {/* Avatar Selection Modal */}
    <AvatarSelectionModal 
      show={showAvatarModal}
      onClose={() => setShowAvatarModal(false)}
      player={player}
      changeAvatar={changeAvatar}
      GAME_CONSTANTS={GAME_CONSTANTS}
    />

    {/* Quiz Configuration Modal */}
    <QuizConfigModal
      show={showQuizConfig}
      onClose={() => setShowQuizConfig(false)}
      selectedCategory={selectedCategory}
      difficulty={quizDifficulty}
      setDifficulty={setQuizDifficulty}
      count={quizCount}
      setCount={setQuizCount}
      timer={quizTimer}
      setTimer={setQuizTimer}
      onStart={startQuiz}
    />
    {/* Practice Configuration Modal */}
    <PracticeConfigModal
      show={showPracticeConfig}
      onClose={() => setShowPracticeConfig(false)}
      allCategories={allCategories}
      category={practiceCategory}
      setCategory={setPracticeCategory}
      difficulty={practiceDifficulty}
      setDifficulty={setPracticeDifficulty}
      count={practiceCount}
      setCount={setPracticeCount}
      onStart={startPractice}
    />

    {/* More Categories Modal */}
    <MoreCategoriesModal
      show={showMoreCategories}
      onClose={() => setShowMoreCategories(false)}
      categories={moreCategories}
      onCategorySelect={handleCategorySelect}
    />

    {/* Enhanced Coins Info Modal */}
    <CoinsInfoModal
      show={showCoinsInfo}
      onClose={() => setShowCoinsInfo(false)}
      coins={player.coins}
      onNavigateToPlay={() => {
        setShowCoinsInfo(false);
        navigate('/play');
      }}
    />
      </div>
    </div>
  </>
  );
}