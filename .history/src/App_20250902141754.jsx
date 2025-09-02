// src/App.jsx
import React, { createContext, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import Home from "./components/Home/Home";
import Play from "./components/Play/PlayHome";
import Quiz from "./components/Quiz/Quiz.jsx";
import PartySpin from "./components/Play/PartySpin";
import SwipeQuiz from './components/Swipe/SwipeQuiz.jsx';
import QuizPlay from './components/Quiz/QuizPlay';
import PracticeStart from './components/Quiz/PracticeStart';

// Profile imports
import ProfileHome from "./components/Profile/ProfileHome";
import ProfileLeaderboard from "./components/Profile/Leaderboard";
import ProfileHistory from "./components/Profile/History";
import ProfileRewards from "./components/Profile/Rewards";
import ProfileBadges from "./components/Profile/Badges";
import ProfileAchievements from "./components/Profile/Achievements";
import ProfileStreaks from "./components/Profile/Streaks";
import ProfileQuests from "./components/Profile/Quests";
import ProfileSettings from "./components/Profile/Settings";
import { useEffect } from 'react';
import { App as CapacitorApp } from '@capacitor/app';


// Game System imports
import { useGameState } from './hooks/useGameState';

// Initialize history state for back button handling
// This ensures we have a state to go back to
window.history.replaceState({ path: window.location.pathname, preventBack: true }, '', window.location.pathname);
window.history.pushState({ path: window.location.pathname, preventBack: true }, '', window.location.pathname);


// Create Game Context
const GameContext = createContext(null);

// Export hook to use game context in components
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within GameProvider');
  }
  return context;
};

// Game Provider Wrapper
function GameProvider({ children }) {
  const gameState = useGameState();
  
  return (
    <GameContext.Provider value={gameState}>
      {children}
    </GameContext.Provider>
  );
}

export default function App() {
  // Add this useEffect for back button handling
  useEffect(() => {
    const backButtonHandler = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      // Get current path
      const currentPath = window.location.pathname;
      
      // If we're on the home page, exit the app
      if (currentPath === '/' || currentPath === '/home') {
        CapacitorApp.exitApp();
      } else {
        // Otherwise, go back in history
        window.history.back();
      }
    });

    // Cleanup listener on unmount
    return () => {
      backButtonHandler.remove();
    };
  }, []);
  return (
    <GameProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/play" element={<Play />} />
            <Route path="/play/party" element={<PartySpin />} />            
            {/* Add this line for direct /quests access */}
            {/* Profile routes */}
            <Route path="/profile" element={<ProfileHome />} />
            <Route path="/profile/leaderboard" element={<ProfileLeaderboard />} />
            <Route path="/profile/history" element={<ProfileHistory />} />
            <Route path="/profile/rewards" element={<ProfileRewards />} />
            <Route path="/profile/badges" element={<ProfileBadges />} />
            <Route path="/profile/achievements" element={<ProfileAchievements />} />
            <Route path="/profile/streaks" element={<ProfileStreaks />} />
            <Route path="/profile/quests" element={<ProfileQuests />} />
            <Route path="/profile/settings" element={<ProfileSettings />} />
            
            <Route path="/swipe" element={<SwipeQuiz />} />
            <Route path="/leaders" element={<Navigate to="/profile/leaderboard" replace />} />
            
            {/* Quiz routes */}
            <Route path="/quiz/:category" element={<Quiz />} />
            <Route path="/quiz/play" element={<QuizPlay />} />
            <Route path="/practice/start" element={<PracticeStart />} />
            
            {/* Fallback */}
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
    </GameProvider>
  );
}