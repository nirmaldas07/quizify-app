// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import useSound from 'use-sound';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [dailyQ, setDailyQ] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [picked, setPicked] = useState(null);
  const [lives, setLives] = useState(3);
  const [dailyCompleted, setDailyCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [animatingCoins, setAnimatingCoins] = useState(false);
  const [theme, setTheme] = useState('');
  
  // Sound effects
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  
  // Constants
  const DAILY_Q_COINS = [10, 7, 5]; // Coins for each attempt
  const DAILY_Q_XP = 15;
  const STORAGE_KEY = 'daily_challenge_';
  
  // Daily themes
  const THEMES = {
    0: { name: 'Science Sunday', icon: '🔬', color: 'from-blue-500 to-cyan-500' },
    1: { name: 'Math Monday', icon: '🔢', color: 'from-purple-500 to-pink-500' },
    2: { name: 'Nature Tuesday', icon: '🌿', color: 'from-green-500 to-emerald-500' },
    3: { name: 'Wildlife Wednesday', icon: '🦁', color: 'from-orange-500 to-amber-500' },
    4: { name: 'History Thursday', icon: '🏛️', color: 'from-indigo-500 to-purple-500' },
    5: { name: 'Fun Facts Friday', icon: '🎉', color: 'from-pink-500 to-rose-500' },
    6: { name: 'Space Saturday', icon: '🚀', color: 'from-gray-700 to-gray-900' }
  };

  // Load daily challenge on mount
  useEffect(() => {
    loadDailyChallenge();
    loadStreakData();
  }, []);

  const loadStreakData = () => {
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      const streakData = GameDataService.getStreakData(user.phone);
      if (streakData) {
        setStreak(streakData.current);
      }
    }
  };

  const loadDailyChallenge = async () => {
    const today = new Date().toDateString();
    const storedData = localStorage.getItem(STORAGE_KEY + today);
    
    if (storedData) {
      const parsed = JSON.parse(storedData);
      setDailyCompleted(parsed.completed);
      setLives(parsed.lives || 0);
      setPicked(parsed.lastPick);
      if (!parsed.completed) {
        setDailyQ(parsed.question);
      }
    } else {
      // Generate new daily challenge
      const newQuestion = await generateDailyQuestion();
      setDailyQ(newQuestion);
      saveDailyProgress(false, 3, null, newQuestion);
    }
    
    // Set today's theme
    const dayOfWeek = new Date().getDay();
    setTheme(THEMES[dayOfWeek]);
  };

  const generateDailyQuestion = async () => {
    // In real app, fetch from server or question bank
    // For now, mock data
    const questions = [
      {
        prompt: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Applied Intelligence"],
        answerIndex: 1,
        explanation: "AI stands for Artificial Intelligence - computer systems that can perform tasks that typically require human intelligence!",
        difficulty: "easy"
      },
      {
        prompt: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answerIndex: 1,
        explanation: "Mars is called the Red Planet because iron minerals in its soil oxidize, or rust, making it look red!",
        difficulty: "easy"
      },
      {
        prompt: "What is the largest mammal in the world?",
        options: ["African Elephant", "Blue Whale", "Giraffe", "Polar Bear"],
        answerIndex: 1,
        explanation: "The Blue Whale is not just the largest mammal, but the largest animal ever known to have lived on Earth!",
        difficulty: "medium"
      }
    ];
    
    // Pick random question for today (in production, this would be server-determined)
    const seed = new Date().getDate();
    return questions[seed % questions.length];
  };

  const saveDailyProgress = (completed, livesLeft, lastPick, question) => {
    const today = new Date().toDateString();
    localStorage.setItem(STORAGE_KEY + today, JSON.stringify({
      completed,
      lives: livesLeft,
      lastPick,
      question,
      timestamp: Date.now()
    }));
  };

  const handleAnswer = async (optionIndex, e) => {
    if (e) e.stopPropagation();
    if (picked !== null || dailyCompleted) return;
    
    setPicked(optionIndex);
    const isCorrect = optionIndex === dailyQ.answerIndex;
    
    if (isCorrect) {
      // Play success sound
      playCorrect();
      
      // Calculate coins based on attempts
      const attemptNumber = 3 - lives;
      const coinsEarned = DAILY_Q_COINS[attemptNumber];
      
      // Add coins and XP through GameDataService
      GameDataService.addCoins(coinsEarned, 'Daily Challenge');
      GameDataService.addXP(DAILY_Q_XP);
      
      // Update streak
      const user = UserService.getCurrentUser();
      if (user?.phone) {
        GameDataService.updateStreak(user.phone);
        const newStreakData = GameDataService.getStreakData(user.phone);
        setStreak(newStreakData.current);
        
        // Update quest progress
        GameDataService.updateQuestProgress(user.phone, 'daily_challenge', 1);
      }
      
      // Show explanation
      setTimeout(() => {
        setShowExplanation(true);
        setAnimatingCoins(true);
        playCoin();
      }, 500);
      
      // Flip card after delay
      setTimeout(() => {
        setIsFlipped(true);
        setDailyCompleted(true);
        saveDailyProgress(true, lives - 1, optionIndex, dailyQ);
      }, 2000);
      
      // Update parent component
      if (onCoinsUpdate) {
        onCoinsUpdate();
      }
      
    } else {
      // Wrong answer
      playWrong();
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives > 0) {
        // Can try again
        setTimeout(() => {
          setPicked(null);
          saveDailyProgress(false, newLives, optionIndex, dailyQ);
        }, 1500);
      } else {
        // No more lives
        setTimeout(() => {
          setDailyCompleted(true);
          saveDailyProgress(true, 0, optionIndex, dailyQ);
        }, 1500);
      }
    }
  };

  // Render completed state
  if (dailyCompleted && lives === 0) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 p-6 mb-6">
        <div className="flex items-center gap-3">
          <span className="text-3xl">😔</span>
          <div>
            <h3 className="font-bold">Better luck tomorrow!</h3>
            <p className="text-sm text-base-muted">Come back for a new challenge</p>
          </div>
        </div>
      </div>
    );
  }

  if (dailyCompleted && lives > 0) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 p-6 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">✅</span>
            <div>
              <h3 className="font-bold">Daily Challenge Complete!</h3>
              <p className="text-sm text-base-muted">
                {streak > 1 && `${streak} day streak! 🔥`} Come back tomorrow
              </p>
            </div>
          </div>
          {theme && (
            <div className="text-xs text-base-muted">
              Tomorrow: {THEMES[(new Date().getDay() + 1) % 7].icon} {THEMES[(new Date().getDay() + 1) % 7].name}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (!dailyQ) return null;

  return (
    <div className="flip-card mb-6">
      <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
        {/* Front - Question */}
        <div className="flip-card-front">
          <div className="rounded-3xl bg-white/5 border border-base-border p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold flex items-center gap-2">
                  {theme?.icon} Daily Challenge
                  {streak > 0 && (
                    <span className="text-sm px-2 py-0.5 bg-orange-500/20 text-orange-400 rounded-full">
                      🔥 {streak}
                    </span>
                  )}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                {/* Lives display */}
                <div className="flex gap-1">
                  {[...Array(3)].map((_, i) => (
                    <span key={i} className={i < lives ? 'text-red-500' : 'text-gray-600 opacity-30'}>
                      ❤️
                    </span>
                  ))}
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                  +{DAILY_Q_COINS[3 - lives]} coins
                </span>
              </div>
            </div>
            
            {/* Theme badge */}
            {theme && (
              <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r ${theme.color} opacity-20 mb-3`}>
                <span className="text-xs font-medium text-white">{theme.name}</span>
              </div>
            )}
            
            {/* Question */}
            <p className="text-sm mb-4 text-base-muted">{dailyQ.prompt}</p>
            
            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {dailyQ.options.map((opt, idx) => {
                const isCorrect = idx === dailyQ.answerIndex;
                const isPicked = picked === idx;
                const showResult = picked !== null;
                
                return (
                  <button
                    key={idx}
                    onClick={(e) => handleAnswer(idx, e)}
                    disabled={picked !== null}
                    className={`p-3 rounded-xl border-2 text-sm font-medium transition-all transform hover:scale-105 ${
                      showResult
                        ? (isCorrect ? 'border-green-500 bg-green-500/20 scale-105' : 
                           (isPicked ? 'border-red-500 bg-red-500/20 shake' : 'border-base-border bg-white/5'))
                        : 'border-base-border bg-white/5 hover:bg-white/10'
                    } ${picked !== null ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="mr-2">{['🅰️', '🅱️', '🅲️', '🅳️'][idx]}</span>
                    {opt}
                  </button>
                );
              })}
            </div>
            
            {/* Explanation */}
            {showExplanation && (
              <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30 animate-slideIn">
                <div className="text-xs font-semibold text-blue-400 mb-1">💡 Fun Fact!</div>
                <p className="text-xs text-base-muted">{dailyQ.explanation}</p>
              </div>
            )}
            
            {/* Progress indicator */}
            <div className="mt-4 flex justify-center gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`h-1 w-8 rounded-full transition-all ${
                    i < (3 - lives) ? 'bg-orange-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Back - Success */}
        <div className="flip-card-back absolute inset-0">
          <div className="rounded-3xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 h-full flex flex-col items-center justify-center">
            <div className="text-6xl mb-4 animate-bounce">🎉</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">Awesome!</h3>
            <p className="text-sm text-base-muted text-center">
              You've earned {DAILY_Q_COINS[3 - lives]} coins & {DAILY_Q_XP} XP!
            </p>
            {streak > 6 && (
              <div className="mt-3 px-3 py-1 bg-orange-500/20 rounded-full">
                <span className="text-xs text-orange-400">🔥 {streak} day streak!</span>
              </div>
            )}
            <p className="text-xs text-base-muted/70 mt-2">Come back tomorrow for more</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 1000px;
          height: auto;
        }
        
        .flip-card-inner {
          position: relative;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        
        .flip-card-front,
        .flip-card-back {
          backface-visibility: hidden;
        }
        
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        .shake {
          animation: shake 0.5s;
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
}