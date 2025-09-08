// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect } from 'react';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import useSound from 'use-sound';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [dailyQuestions, setDailyQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [picked, setPicked] = useState(null);
  const [lives, setLives] = useState(3);
  const [sessionCompleted, setSessionCompleted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [theme, setTheme] = useState('');
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [allQuestions, setAllQuestions] = useState([]);
  
  // Sound effects
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  
  // Constants
  const DAILY_Q_COINS = [10, 7, 5]; // Coins for each attempt
  const DAILY_Q_XP = 15;
  const STORAGE_KEY = 'daily_challenge_session_';
  const QUESTIONS_PER_SESSION = 3;
  
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

  // Initialize on mount
  useEffect(() => {
    loadQuestions();
    loadStreakData();
    const dayOfWeek = new Date().getDay();
    setTheme(THEMES[dayOfWeek]);
  }, []);

  // Load streak data
  const loadStreakData = () => {
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      const streakData = GameDataService.getStreakData(user.phone);
      if (streakData) {
        setStreak(streakData.current);
      }
    }
  };

  // Load questions from CSV
  const loadQuestions = async () => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      if (response.ok) {
        const csv = await response.text();
        const { data } = Papa.parse(csv, { 
          header: true, 
          skipEmptyLines: true 
        });
        
        const formatted = data.map((row, idx) => ({
          id: idx,
          prompt: row.question,
          options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean),
          answerIndex: ['A', 'B', 'C', 'D'].indexOf(row.answer?.toUpperCase()),
          explanation: row.explanation || "Great job! Keep learning!",
          difficulty: row.difficulty || 'medium',
          category: row.category || 'General Knowledge'
        })).filter(q => q.options.length === 4 && q.answerIndex >= 0);
        
        setAllQuestions(formatted);
        initializeSession(formatted);
      } else {
        // Use fallback questions
        const fallback = getFallbackQuestions();
        setAllQuestions(fallback);
        initializeSession(fallback);
      }
    } catch (error) {
      console.error('Failed to load questions:', error);
      const fallback = getFallbackQuestions();
      setAllQuestions(fallback);
      initializeSession(fallback);
    }
  };

  // Initialize new session
  const initializeSession = (questions) => {
    const sessionId = new Date().toISOString();
    const existingSession = localStorage.getItem(STORAGE_KEY + 'current');
    
    if (existingSession) {
      const parsed = JSON.parse(existingSession);
      // Check if it's today's session
      const sessionDate = new Date(parsed.timestamp).toDateString();
      const today = new Date().toDateString();
      
      if (sessionDate === today && parsed.completed) {
        setSessionCompleted(true);
        setTotalCorrect(parsed.totalCorrect || 0);
        setDailyQuestions(parsed.questions || []);
        return;
      }
    }
    
    // Generate new session questions
    const shuffled = [...questions].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, QUESTIONS_PER_SESSION);
    
    setDailyQuestions(selected);
    setCurrentQuestion(selected[0]);
    setCurrentQuestionIndex(0);
    setSessionCompleted(false);
    setTotalCorrect(0);
    
    // Save session
    saveSession(false, 0, selected);
  };

  // Save session state
  const saveSession = (completed, correct, questions) => {
    localStorage.setItem(STORAGE_KEY + 'current', JSON.stringify({
      completed,
      totalCorrect: correct,
      questions,
      timestamp: new Date().toISOString()
    }));
  };

  // Get fallback questions
  const getFallbackQuestions = () => {
    return [
      {
        id: 1,
        prompt: "What does AI stand for?",
        options: ["Automated Intelligence", "Artificial Intelligence", "Advanced Intelligence", "Applied Intelligence"],
        answerIndex: 1,
        explanation: "AI stands for Artificial Intelligence!",
        difficulty: "easy"
      },
      {
        id: 2,
        prompt: "Which planet is the Red Planet?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        answerIndex: 1,
        explanation: "Mars appears red due to iron oxide on its surface!",
        difficulty: "easy"
      },
      {
        id: 3,
        prompt: "What is 15 + 27?",
        options: ["40", "41", "42", "43"],
        answerIndex: 2,
        explanation: "15 + 27 = 42. You can break it down: 15 + 20 = 35, then 35 + 7 = 42!",
        difficulty: "easy"
      }
    ];
  };

  // Handle answer selection
  const handleAnswer = async (optionIndex) => {
    if (picked !== null || sessionCompleted) return;
    
    setPicked(optionIndex);
    const isCorrect = optionIndex === currentQuestion.answerIndex;
    
    if (isCorrect) {
      playCorrect();
      
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
        GameDataService.updateQuestProgress(user.phone, 'daily_challenge', 1);
      }
      
      setTotalCorrect(prev => prev + 1);
      setShowExplanation(true);
      playCoin();
      
      // Move to next question after delay
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
        setTimeout(() => {
          moveToNext();
        }, 1500);
      }
    }
  };

  // Move to next question
  const moveToNext = () => {
    const nextIndex = currentQuestionIndex + 1;
    
    if (nextIndex < dailyQuestions.length) {
      setCurrentQuestionIndex(nextIndex);
      setCurrentQuestion(dailyQuestions[nextIndex]);
      setPicked(null);
      setLives(3);
      setShowExplanation(false);
    } else {
      setSessionCompleted(true);
      saveSession(true, totalCorrect, dailyQuestions);
    }
  };

  // Start new session
  const startNewSession = () => {
    localStorage.removeItem(STORAGE_KEY + 'current');
    initializeSession(allQuestions);
  };

  // Render completed state
  if (sessionCompleted) {
    const tomorrowTheme = THEMES[(new Date().getDay() + 1) % 7];
    
    return (
      <div className="rounded-3xl bg-white/5 border border-base-border p-6 mb-6">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
            <span className="text-3xl">✅</span>
          </div>
          
          <h3 className="text-xl font-bold mb-2">Daily Challenge Complete!</h3>
          
          <div className="flex justify-center gap-4 mb-4">
            <div className="px-4 py-2 rounded-xl bg-white/5">
              <div className="text-2xl font-bold text-green-400">{totalCorrect}/{QUESTIONS_PER_SESSION}</div>
              <div className="text-xs text-gray-400">Correct</div>
            </div>
            {streak > 0 && (
              <div className="px-4 py-2 rounded-xl bg-white/5">
                <div className="text-2xl font-bold text-orange-400">🔥 {streak}</div>
                <div className="text-xs text-gray-400">Streak</div>
              </div>
            )}
          </div>
          
          <p className="text-sm text-gray-400 mb-4">Come back later for a new challenge!</p>
          
          <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 mb-4">
            <span className="text-xs text-gray-500">Tomorrow:</span>
            <div className="flex items-center gap-2">
              <span>{tomorrowTheme.icon}</span>
              <span className="text-sm font-medium">{tomorrowTheme.name}</span>
            </div>
          </div>
          
          <button
            onClick={startNewSession}
            className="w-full py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
          >
            Play Another Round
          </button>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

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
      
      {/* Progress */}
      <div className="flex justify-center gap-2 mb-4">
        {dailyQuestions.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-12 rounded-full transition-all ${
              i < currentQuestionIndex ? 'bg-green-500' :
              i === currentQuestionIndex ? 'bg-blue-500' : 'bg-gray-600'
            }`}
          />
        ))}
      </div>
      
      <div className="text-center text-sm text-gray-400 mb-3">
        Question {currentQuestionIndex + 1} of {QUESTIONS_PER_SESSION}
      </div>
      
      {/* Question */}
      <p className="text-base mb-4 font-medium">{currentQuestion.prompt}</p>
      
      {/* Options */}
      <div className="grid grid-cols-2 gap-3">
        {currentQuestion.options.map((opt, idx) => {
          const isCorrect = idx === currentQuestion.answerIndex;
          const isPicked = picked === idx;
          const showResult = picked !== null;
          
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={picked !== null}
              className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                showResult
                  ? (isCorrect ? 'border-green-500 bg-green-500/20' : 
                     (isPicked ? 'border-red-500 bg-red-500/20' : 'border-base-border bg-white/5'))
                  : 'border-base-border bg-white/5 hover:bg-white/10'
              }`}
            >
              <span className="mr-2">{['🅰️', '🅱️', '🅲️', '🅳️'][idx]}</span>
              {opt}
            </button>
          );
        })}
      </div>
      
      {/* Explanation */}
      {showExplanation && (
        <div className="mt-4 p-3 rounded-xl bg-blue-500/10 border border-blue-500/30">
          <div className="text-xs font-semibold text-blue-400 mb-1">💡 Fun Fact!</div>
          <p className="text-xs text-base-muted">{currentQuestion.explanation}</p>
        </div>
      )}
    </div>
  );
}