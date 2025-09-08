// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import useSound from 'use-sound';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [dailyQ, setDailyQ] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [picked, setPicked] = useState(null);
  const [lives, setLives] = useState(3);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [animatingCoins, setAnimatingCoins] = useState(false);
  const [theme, setTheme] = useState('');
  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [totalCorrect, setTotalCorrect] = useState(0);
  
  // Sound effects
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  
  // Constants
  const DAILY_Q_COINS = [10, 7, 5]; // Coins for each attempt
  const DAILY_Q_XP = 15;
  const STORAGE_KEY = 'daily_challenge_session_';
  const QUESTIONS_PER_SESSION = 3; // Show 3 questions per session
  
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

  // Load questions and initialize on mount
  useEffect(() => {
    loadAllQuestions();
    loadStreakData();
  }, []);

  // Generate new session when questions are loaded
  useEffect(() => {
    if (allQuestions.length > 0) {
      initializeNewSession();
    }
  }, [allQuestions]);

  const loadStreakData = () => {
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      const streakData = GameDataService.getStreakData(user.phone);
      if (streakData) {
        setStreak(streakData.current);
      }
    }
  };

  const loadAllQuestions = async () => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      const csv = await response.text();
      const { data } = Papa.parse(csv, { 
        header: true, 
        skipEmptyLines: true 
      });
      
      // Format questions
      const formattedQuestions = data.map((row, idx) => ({
        id: idx,
        prompt: row.question,
        options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean),
        answerIndex: ['A', 'B', 'C', 'D'].indexOf(row.answer?.toUpperCase()),
        explanation: row.explanation || "That's the right answer! Keep learning!",
        difficulty: row.difficulty || 'medium',
        category: row.category || 'General Knowledge',
        theme: row.theme || row.category || 'general'
      })).filter(q => q.options.length === 4 && q.answerIndex >= 0);
      
      setAllQuestions(formattedQuestions);
    } catch (error) {
      console.error('Failed to load questions:', error);
      // Use fallback questions
      setAllQuestions(getFallbackQuestions());
    }
  };

  const initializeNewSession = () => {
    const sessionId = `${Date.now()}_${Math.random()}`;
    const storedSession = sessionStorage.getItem(STORAGE_KEY + sessionId);
    
    if (storedSession) {
      const parsed = JSON.parse(storedSession);
      setSessionCompleted(parsed.completed);
      setCurrentQuestionIndex(parsed.currentIndex);
      setSessionQuestions(parsed.questions);
      setTotalCorrect(parsed.totalCorrect);
    } else {
      generateNewSession();
    }
    
    // Set today's theme
    const dayOfWeek = new Date().getDay();
    setTheme(THEMES[dayOfWeek]);
  };

  const generateNewSession = () => {
    if (allQuestions.length === 0) return;
    
    const dayOfWeek = new Date().getDay();
    const currentTheme = THEMES[dayOfWeek];
    
    // Filter questions by theme
    let themedQuestions = allQuestions.filter(q => 
      q.theme?.toLowerCase().includes(currentTheme.name.split(' ')[0].toLowerCase()) ||
      q.category?.toLowerCase().includes(currentTheme.name.split(' ')[0].toLowerCase())
    );
    
    // Fallback to easy/medium questions if no themed questions
    if (themedQuestions.length < QUESTIONS_PER_SESSION) {
      themedQuestions = allQuestions.filter(q => 
        q.difficulty === 'easy' || q.difficulty === 'medium'
      );
    }
    
    // Shuffle and pick questions
    const shuffled = themedQuestions.sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffled.slice(0, QUESTIONS_PER_SESSION);
    
    setSessionQuestions(selectedQuestions);
    setCurrentQuestionIndex(0);
    setDailyQ(selectedQuestions[0]);
    setSessionCompleted(false);
    setTotalCorrect(0);
    setPicked(null);
    setLives(3);
  };

  const handleAnswer = async (optionIndex, e) => {
    if (e) e.stopPropagation();
    if (picked !== null || sessionCompleted) return;
    
    setPicked(optionIndex);
    const isCorrect = optionIndex === dailyQ.answerIndex;
    
    if (isCorrect) {
      playCorrect();
      setTotalCorrect(prev => prev + 1);
      
      // Calculate coins based on attempts
      const attemptNumber = 3 - lives;
      const coinsEarned = DAILY_Q_COINS[attemptNumber];
      
      // Add coins and XP
      GameDataService.addCoins(coinsEarned, 'Daily Challenge');
      GameDataService.addXP(DAILY_Q_XP);
      
      // Update streak
      const user = UserService.getCurrentUser();
      if (user?.phone) {
        GameDataService.updateStreak(user.phone);
        const newStreakData = GameDataService.getStreakData(user.phone);
        setStreak(newStreakData.current);
      }
      
      // Show explanation
      setTimeout(() => {
        setShowExplanation(true);
        setAnimatingCoins(true);
        playCoin();
      }, 500);
      
      // Move to next question or complete
      setTimeout(() => {
        moveToNext();
      }, 2500);
      
      if (onCoinsUpdate) {
        onCoinsUpdate();
      }
      
    } else {
      playWrong();
      const newLives = lives - 1;
      setLives(newLives);
      
      if (newLives > 0) {
        setTimeout(() => {
          setPicked(null);
        }, 1500);
      } else {
        // No more lives for this question
        setTimeout(() => {
          moveToNext();
        }, 1500);
      }
    }
  };

  const moveToNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < sessionQuestions.length) {
      // Move to next question
      setCurrentQuestionIndex(nextIndex);
      setDailyQ(sessionQuestions[nextIndex]);
      setPicked(null);
      setLives(3);
      setShowExplanation(false);
    } else {
      // Session complete
      setSessionCompleted(true);
    }
  };

  const startNewSession = () => {
    generateNewSession();
  };

  const getFallbackQuestions = () => {
    return [
      {
        id: 1,
        prompt: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Applied Intelligence"],
        answerIndex: 1,
        explanation: "AI stands for Artificial Intelligence!",
        difficulty: "easy",
        category: "Technology"
      },
      {
        id: 2,
        prompt: "Which planet is known as the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answerIndex: 1,
        explanation: "Mars is called the Red Planet due to iron oxide on its surface!",
        difficulty: "easy",
        category: "Science"
      },
      {
        id: 3,
        prompt: "What is 15 + 27?",
        options: ["42", "43", "41", "40"],
        answerIndex: 0,
        explanation: "15 + 27 = 42. Break it down: 15 + 20 = 35, then 35 + 7 = 42!",
        difficulty: "easy",
        category: "Math"
      }
    ];
  };

  // Render completed state
  if (sessionCompleted) {
    const tomorrowTheme = THEMES[(new Date().getDay() + 1) % 7];
    
    return (
      <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 p-6 mb-6">
        <div className="text-center">
          {/* Success Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <span className="text-3xl">✅</span>
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-2">
            Daily Challenge Complete!
          </h3>
          
          {/* Score */}
          <div className="flex justify-center gap-4 mb-4">
            <div className="px-4 py-2 rounded-xl bg-white/5">
              <div className="text-2xl font-bold text-green-400">
                {totalCorrect}/{QUESTIONS_PER_SESSION}
              </div>
              <div className="text-xs text-gray-400">Correct</div>
            </div>
            {streak > 0 && (
              <div className="px-4 py-2 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-orange-400">
                  🔥 {streak}
                </div>
                <div className="text-xs text-gray-400">Streak</div>
              </div>
            )}
          </div>
          
          {/* Message */}
          <p className="text-sm text-gray-400 mb-4">
            Come back tomorrow for a new challenge!
          </p>
          
          {/* Tomorrow Preview */}
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5">
            <span className="text-xs text-gray-500">Tomorrow:</span>
            <div className="flex items-center gap-2">
              <span>{tomorrowTheme.icon}</span>
              <span className="text-sm font-medium">{tomorrowTheme.name}</span>
            </div>
          </div>
          
          {/* New Session Button */}
          <button
            onClick={startNewSession}
            className="mt-4 w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:opacity-90 transition-all"
          >
            Play Another Round
          </button>
        </div>
      </div>
    );
  }

  if (!dailyQ) return null;

  return (
    <div className="rounded-3xl bg-white/5 border border-base-border p-6 mb-6">
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
          {/* Lives */}
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
      
      {/* Progress indicator - Always visible */}
      <div className="flex justify-center gap-2 mb-4">
        {sessionQuestions.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-12 rounded-full transition-all ${
              i < currentQuestionIndex ? 'bg-green-500' :
              i === currentQuestionIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
      
      {/* Question Number */}
      <div className="text-center text-sm text-gray-400 mb-3">
        Question {currentQuestionIndex + 1} of {QUESTIONS_PER_SESSION}
      </div>
      
      {/* Question */}
      <p className="text-base mb-4 font-medium">{dailyQ.prompt}</p>
      
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

      <style jsx>{`
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
      `}</style>
    </div>
  );
}