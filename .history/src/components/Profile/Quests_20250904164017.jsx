// src/components/Profile/Quests.jsx

import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useGame } from '../../App';
import CoinFly from "../Shared/CoinFly";
import GameDataService from '../../services/GameDataService';

// Helper function to get today's date key for localStorage
const getTodayKey = () => {
  const today = new Date();
  // Don't pad with zeros - keep it consistent
  return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

// Helper function to check if quest data is from today
const isToday = (dateKey) => {
  return dateKey === getTodayKey();
};

// Helper function to get quest progress from localStorage
const getQuestProgress = () => {
  const stored = localStorage.getItem('questProgress');
  if (!stored) return {};
  
  const progress = JSON.parse(stored);
  
  // Don't reset based on date - just return the progress
  // The reset should happen elsewhere if needed
  return progress;
};

// Helper function to update quest progress
const updateQuestProgress = (questType, value) => {
  const progress = getQuestProgress();
  progress[questType] = value;
  progress.date = getTodayKey();
  localStorage.setItem('questProgress', JSON.stringify(progress));
};

export default function Quests() {
  const { player } = useGame();
// Don't extract addCoins - use GameDataService directly
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get saved progress from localStorage
  const savedProgress = getQuestProgress();
  
  const [items, setItems] = useState([
    { 
      id: 1, 
      title: "Play 3 quizzes today", 
      progress: savedProgress.dailyQuizzes || 0, 
      target: 3, 
      reward: 60, 
      claimed: savedProgress.dailyQuizzesClaimed || false, 
      icon: "🎮", 
      color: "#FF6B6B", 
      difficulty: "Easy",
      questType: "dailyQuizzes",
      route: "/quiz/play",
      routeParams: "?category=random&difficulty=random&from=quest"
    },
    // Removed quest ID 2 (Score 8+ twice)
    { 
      id: 3, 
      title: "Practice 15 questions", 
      progress: savedProgress.practiceQuestions || 0, 
      target: 15, 
      reward: 100, 
      claimed: savedProgress.practiceQuestionsClaimed || false, 
      icon: "📚", 
      color: "#FFD93D", 
      difficulty: "Easy",
      questType: "practiceQuestions",
      route: "/practice/start",
      routeParams: "?questions=15&difficulty=easy&category=random&from=quest"
    },
    { 
      id: 4, 
      title: "Win 5 in a row", 
      progress: savedProgress.winStreak || 0, 
      target: 5, 
      reward: 150, 
      claimed: savedProgress.winStreakClaimed || false, 
      icon: "🔥", 
      color: "#A8E6CF", 
      difficulty: "Hard",
      questType: "winStreak",
      route: "/play",
      routeParams: "?mode=survival&from=quest"
    },
    { 
      id: 5, 
      title: "Complete a speed run", 
      progress: savedProgress.speedRun || 0, 
      target: 1, 
      reward: 120, 
      claimed: savedProgress.speedRunClaimed || false, 
      icon: "⚡", 
      color: "#C7B8FF", 
      difficulty: "Medium",
      questType: "speedRun",
      route: "/swipe/random-mix",
      routeParams: "?from=quest"
    },
  ]);
  
  const [totalCoins, setTotalCoins] = useState(player?.coins || 0);
  const [showRewardAnimation, setShowRewardAnimation] = useState(null);
  const [dailyProgress, setDailyProgress] = useState(0);
  const coinPillRef = useRef(null);
  const [coinFly, setCoinFly] = useState(null);

    // Listen for localStorage changes
    useEffect(() => {
    const handleStorageChange = () => {
        const progress = getQuestProgress();
        setItems(prev => prev.map(quest => {
        const key = quest.questType;
        if (progress[key] !== undefined) {
            return { ...quest, progress: progress[key] };
        }
        return quest;
        }));
    };
    
    // Listen for storage events
    window.addEventListener('storage', handleStorageChange);
    
    // Also check when component gains focus
    const handleFocus = () => handleStorageChange();
    window.addEventListener('focus', handleFocus);
    
    return () => {
        window.removeEventListener('storage', handleStorageChange);
        window.removeEventListener('focus', handleFocus);
    };
    }, []);

    // Listen for quest progress updates
    useEffect(() => {
    const handleProgressUpdate = (event) => {
        console.log('Quest progress update received:', event.detail);
        setItems(prev => prev.map(quest => {
        if (quest.questType === 'practiceQuestions' && event.detail.practiceQuestions) {
            return { ...quest, progress: event.detail.practiceQuestions };
        }
        return quest;
        }));
    };
    
    // Listen for custom event
    window.addEventListener('questProgressUpdate', handleProgressUpdate);
    
    // Also poll localStorage as backup
    const interval = setInterval(() => {
        try {
        const stored = localStorage.getItem('questProgress');
        if (stored) {
            const progress = JSON.parse(stored);
            setItems(prev => prev.map(quest => {
            if (quest.questType === 'practiceQuestions' && progress.practiceQuestions) {
                if (quest.progress !== progress.practiceQuestions) {
                return { ...quest, progress: progress.practiceQuestions };
                }
            }
            return quest;
            }));
        }
        } catch (e) {
        console.error('Error checking progress:', e);
        }
    }, 1000);
    
    return () => {
        window.removeEventListener('questProgressUpdate', handleProgressUpdate);
        clearInterval(interval);
    };
    }, []);

        
  // Check for quest completion when returning from a game
  useEffect(() => {
    // This will run when navigating back to quests
    if (location.state?.questCompleted) {
      const { questType, increment } = location.state;
      
      // Update the specific quest progress
      setItems(prev => prev.map(quest => {
        if (quest.questType === questType) {
          const newProgress = Math.min(quest.progress + (increment || 1), quest.target);
          // Update localStorage
          updateQuestProgress(questType, newProgress);
          return { ...quest, progress: newProgress };
        }
        return quest;
      }));
      
      // Clear the state to prevent re-triggering
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  // Update overall daily progress
  useEffect(() => {
    const completed = items.filter(q => q.progress >= q.target).length;
    setDailyProgress(Math.round((completed / items.length) * 100));
  }, [items]);

    // Sync totalCoins with player coins
    useEffect(() => {
    setTotalCoins(player?.coins || 0);
    }, [player?.coins]);

  // Handle navigation to quest activities
  const handleDoIt = (quest) => {
    if (navigator.vibrate) navigator.vibrate([20]);
    
    // Store the current quest info in sessionStorage for the game to access
    sessionStorage.setItem('activeQuest', JSON.stringify({
      id: quest.id,
      type: quest.questType,
      title: quest.title,
      currentProgress: quest.progress,
      target: quest.target
    }));
    
    // Navigate to the appropriate screen
    navigate(quest.route + quest.routeParams);
  };

    const handleBack = () => {
    // Check where we came from using sessionStorage
    const cameFromHome = sessionStorage.getItem('questsFromHome');
    
    if (cameFromHome === 'true') {
        // Clear the flag and go to home
        sessionStorage.removeItem('questsFromHome');
        navigate('/');
    } else {
        // Default to profile
        navigate('/profile');
    }
    };

    const claim = (quest) => {
    if (navigator.vibrate) navigator.vibrate([20, 10, 20]);
    
    // Play coin sound
    try {
        const audio = new Audio('/sounds/coin.mp3');
        audio.volume = 0.75;
        audio.play();
    } catch (error) {
        console.log('Sound not available');
    }
    
    setShowRewardAnimation(quest.id);
    
    // Start coin flying animation
    setCoinFly({
        startRect: {
        left: window.innerWidth / 2 - 50,
        top: window.innerHeight / 2,
        width: 100,
        height: 100
        },
        count: Math.min(quest.reward / 10, 10),
        amount: quest.reward
    });
    
    setTimeout(() => {
        setItems(prev => prev.map(q => {
        if (q.id === quest.id) {
            updateQuestProgress(q.questType + 'Claimed', true);
            return { ...q, claimed: true };
        }
        return q;
        }));
        setShowRewardAnimation(null);
    }, 600);
    };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Easy': return '#10B981';
      case 'Medium': return '#F59E0B';
      case 'Hard': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getTimeUntilReset = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(5, 0, 0, 0);
    
    const diff = tomorrow - now;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    return `${hours}h ${minutes}m`;
  };

    return (
    <div className="quests-screen">
        {/* Coin Animation */}
        {coinFly && (
        <CoinFly
            startRect={coinFly.startRect}
            targetRef={coinPillRef}
            count={coinFly.count}
            onDone={() => {
            setTotalCoins(prev => prev + coinFly.amount);
            addCoins(coinFly.amount);
            setCoinFly(null);
            }}
        />
        )}
        <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .quests-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
          padding: 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif;
          color: white;
          position: relative;
          overflow-x: hidden;
        }

        .animated-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        .floating-icon {
          position: absolute;
          font-size: 40px;
          opacity: 0.03;
          animation: float 20s infinite ease-in-out;
        }

        .floating-icon:nth-child(1) {
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .floating-icon:nth-child(2) {
          top: 20%;
          right: 10%;
          animation-delay: 5s;
        }

        .floating-icon:nth-child(3) {
          bottom: 30%;
          left: 15%;
          animation-delay: 10s;
        }

        .floating-icon:nth-child(4) {
          bottom: 20%;
          right: 20%;
          animation-delay: 15s;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }

        .header {
          position: relative;
          z-index: 10;
          margin-bottom: 24px;
          animation: slideDown 0.5s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 12px;
          color: white;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          margin-top: 10px;
          margin-bottom: 24px;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.15);
          transform: translateX(-2px);
        }

        .coins-display {
          position: absolute;
          top: 20px;
          right: 20px;
          background: linear-gradient(135deg, #FFD93D, #FFA500);
          padding: 8px 16px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 18px;
          color: #1a1a1a;
          box-shadow: 0 4px 12px rgba(255, 217, 61, 0.3);
        }

        .title-section {
          text-align: center;
          margin-bottom: 24px;
        }

        .main-title {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 8px;
          background: linear-gradient(135deg, #FFD93D, #FF6B6B, #4ECDC4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .subtitle {
          font-size: 16px;
          color: rgba(255, 255, 255, 0.7);
        }

        .daily-progress-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 20px;
          margin-bottom: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          animation: fadeInScale 0.6s ease-out 0.2s both;
        }

        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-label {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.8);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .progress-value {
          font-size: 24px;
          font-weight: 700;
          background: linear-gradient(135deg, #10B981, #059669);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .progress-bar-container {
          width: 100%;
          height: 12px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
        }

        .progress-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10B981, #059669);
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }

        .quests-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 24px;
        }

        .quest-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 18px;
          position: relative;
          overflow: hidden;
          border: 1.5px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: slideUp 0.5s ease-out both;
        }

        .quest-card:nth-child(1) { animation-delay: 0.1s; }
        .quest-card:nth-child(2) { animation-delay: 0.2s; }
        .quest-card:nth-child(3) { animation-delay: 0.3s; }
        .quest-card:nth-child(4) { animation-delay: 0.4s; }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .quest-card:hover {
          transform: translateY(-2px);
          border-color: var(--quest-color);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .quest-card.completed {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 217, 61, 0.2);
        }

        .quest-accent {
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: var(--quest-color);
          opacity: 0.8;
        }

        .quest-content {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .quest-icon-container {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--quest-color), var(--quest-color-dark));
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .quest-icon-container.animating {
          animation: bounce 0.6s ease;
        }

        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          30% { transform: scale(0.9); }
          60% { transform: scale(1.1); }
        }

        .quest-details {
          flex: 1;
          min-width: 0;
        }

        .quest-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 4px;
        }

        .quest-title {
          font-size: 15px;
          font-weight: 600;
          color: white;
        }

        .difficulty-badge {
          padding: 2px 8px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .progress-info {
          margin-top: 8px;
        }

        .mini-progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 100px;
          overflow: hidden;
          margin-bottom: 6px;
        }

        .mini-progress-fill {
          height: 100%;
          background: linear-gradient(90deg, var(--quest-color), var(--quest-color-dark));
          border-radius: 100px;
          transition: width 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 4px var(--quest-color);
        }

        .progress-text {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
        }

        .progress-numbers {
          color: rgba(255, 255, 255, 0.7);
        }

        .reward-display {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px;
          background: rgba(255, 217, 61, 0.15);
          border-radius: 100px;
          color: #FFD93D;
          font-weight: 600;
        }

        .action-button {
          padding: 10px 18px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          min-width: 90px;
        }

        .action-button.can-claim {
          background: linear-gradient(135deg, #10B981, #059669);
          color: white;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .action-button.can-claim:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .action-button.claimed {
          background: rgba(255, 255, 255, 0.1);
          color: rgba(255, 255, 255, 0.4);
          cursor: not-allowed;
        }

        .action-button.in-progress {
          background: linear-gradient(135deg, var(--quest-color), var(--quest-color-dark));
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .action-button.in-progress:hover {
          transform: scale(1.02);
        }

        .timer-card {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 16px;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.08);
          animation: slideUp 0.5s ease-out 0.6s both;
        }

        .timer-icon {
          font-size: 32px;
          margin-bottom: 8px;
        }

        .timer-label {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 4px;
        }

        .timer-value {
          font-size: 20px;
          font-weight: 700;
          color: #FFD93D;
        }

        .reward-animation {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 80px;
          z-index: 1000;
          pointer-events: none;
          animation: coinCollect 1s ease-out forwards;
        }

        @keyframes coinCollect {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(0deg);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5) rotate(180deg);
            opacity: 1;
          }
          100% {
            transform: translate(50vw, -50vh) scale(0.5) rotate(360deg);
            opacity: 0;
          }
        }

        .completed-checkmark {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, #10B981, #059669);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          color: white;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
        }
      `}</style>

      <div className="animated-bg">
        <div className="floating-icon">🎮</div>
        <div className="floating-icon">🎯</div>
        <div className="floating-icon">🏆</div>
        <div className="floating-icon">⭐</div>
      </div>

      <div className="header">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>

        <div className="coins-display" ref={coinPillRef}>
        🪙 {totalCoins}
        </div>
        
        <div className="title-section">
          <h1 className="main-title">Daily Quests</h1>
          <p className="subtitle">Complete challenges, earn rewards!</p>
        </div>
      </div>

      <div className="daily-progress-card">
        <div className="progress-header">
          <span className="progress-label">Today's Progress</span>
          <span className="progress-value">{dailyProgress}%</span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${dailyProgress}%` }}
          />
        </div>
      </div>

      <div className="quests-list">
        {items.map(quest => {
          const progress = Math.min(100, Math.round((quest.progress / quest.target) * 100));
          const isComplete = progress === 100;
          const colorDark = quest.color + 'CC';
          
          return (
            <div 
              key={quest.id} 
              className={`quest-card ${isComplete ? 'completed' : ''}`}
              style={{ 
                '--quest-color': quest.color,
                '--quest-color-dark': colorDark
              }}
            >
              <div className="quest-accent" />
              {isComplete && quest.claimed && (
                <div className="completed-checkmark">✓</div>
              )}
              
              <div className="quest-content">
                <div className={`quest-icon-container ${showRewardAnimation === quest.id ? 'animating' : ''}`}>
                  {quest.icon}
                </div>
                
                <div className="quest-details">
                  <div className="quest-header">
                    <span className="quest-title">{quest.title}</span>
                    <span 
                      className="difficulty-badge"
                      style={{ 
                        background: `${getDifficultyColor(quest.difficulty)}20`,
                        color: getDifficultyColor(quest.difficulty)
                      }}
                    >
                      {quest.difficulty}
                    </span>
                  </div>
                  
                  <div className="progress-info">
                    <div className="mini-progress-bar">
                      <div 
                        className="mini-progress-fill" 
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="progress-text">
                      <span className="progress-numbers">{quest.progress}/{quest.target}</span>
                      <span className="reward-display">
                        🪙 {quest.reward}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    if (isComplete && !quest.claimed) {
                      claim(quest);
                    } else if (!isComplete) {
                      handleDoIt(quest);
                    }
                  }}
                  disabled={quest.claimed}
                  className={`action-button ${
                    quest.claimed ? 'claimed' : 
                    isComplete ? 'can-claim' : 
                    'in-progress'
                  }`}
                  style={!isComplete && !quest.claimed ? {
                    '--quest-color': quest.color,
                    '--quest-color-dark': colorDark
                  } : {}}
                >
                  {quest.claimed ? '✓' : isComplete ? 'Claim' : 'Do it'}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="timer-card">
        <div className="timer-icon">⏰</div>
        <div className="timer-label">New Quests In</div>
        <div className="timer-value">{getTimeUntilReset()}</div>
      </div>

      {showRewardAnimation && (
        <div className="reward-animation">🪙</div>
      )}
    </div>
  );
}