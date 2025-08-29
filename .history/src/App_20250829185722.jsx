// src/App.jsx
import React, { createContext, useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Play from "./components/Play.jsx";
import Quiz from "./components/Quiz";
import PartySpin from "./components/PartySpin.jsx";
import SwipeQuiz from './components/SwipeQuiz';

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


// Game System imports
import { useGameState } from './hooks/useGameState';

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
  return (
    <GameProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/play/party" element={<PartySpin />} />

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
          {/* Old leaders path → redirect */}
          <Route path="/leaders" element={<Navigate to="/profile/leaderboard" replace />} />

          {/* Quiz flow - Update this path when you move Quiz.jsx to Quiz folder */}
          <Route path="/quiz/:category" element={<Quiz />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </GameProvider>
  );
}