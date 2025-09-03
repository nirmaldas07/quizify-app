// src/App.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
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
import { App as CapacitorApp } from '@capacitor/app';

// Auth imports
import PhoneAuth from "./components/Auth/PhoneAuth";
import SignIn from "./components/Auth/SignIn";
import AvatarSelection from "./components/Auth/AvatarSelection";
import UsernameSelection from "./components/Auth/UsernameSelection";
import { isLoggedIn } from './utils/authHelpers';
import WelcomeScreen from "./components/Auth/WelcomeScreen";
import DevTools from './components/Dev/DevTools';

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
  const [authChecked, setAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const userLoggedIn = isLoggedIn();
      setIsAuthenticated(userLoggedIn);
      setAuthChecked(true);
    };
    
    checkAuth();
  }, []);

  // Handle back button
  useEffect(() => {
    let exitCounter = 0;
    let exitTimer = null;

    const backButtonHandler = CapacitorApp.addListener('backButton', () => {
      const currentPath = window.location.pathname;
      
      // If we're on the home page
      if (currentPath === '/' || currentPath === '/home') {
        exitCounter++;
        
        if (exitCounter === 1) {
          // First press - show toast
          console.log('Press back again to exit');
          
          // Reset counter after 2 seconds
          exitTimer = setTimeout(() => {
            exitCounter = 0;
          }, 2000);
        } else if (exitCounter === 2) {
          // Second press - minimize app instead of exit
          clearTimeout(exitTimer);
          CapacitorApp.minimizeApp();
        }
      } else {
        // For all other pages, just go back
        window.history.back();
      }
    });

    // Cleanup
    return () => {
      backButtonHandler.remove();
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  // Show loading screen while checking auth
  if (!authChecked) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        backgroundColor: '#000'
      }}>
        <div style={{ color: '#fff' }}>Loading...</div>
      </div>
    );
  }

  // Redirect to auth if not authenticated and not already on auth page
  if (!isAuthenticated && !window.location.pathname.startsWith('/auth')) {
    window.location.href = '/auth';
    return null;
  }

  return (
    <GameProvider>
      <Routes>
        {/* Auth routes OUTSIDE of Layout */}
        <Route path="/auth" element={<PhoneAuth />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/avatar" element={<AvatarSelection />} />
        <Route path="/auth/username" element={<UsernameSelection />} />
        <Route path="/welcome" element={<WelcomeScreen />} /> 
  
        {/* Main app routes inside Layout */}
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
          <Route path="/profile/edit" element={<EditProfile />} />
          <Route path="/profile/privacy" element={<PrivacyPolicy />} />          
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
      <DevTools /> 
    </GameProvider>
  );
}