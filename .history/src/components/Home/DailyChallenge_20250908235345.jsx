// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import useSound from 'use-sound';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [stage, setStage] = useState('idle'); // idle, playing, correct, wrong, complete
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hearts, setHearts] = useState(3);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showReward, setShowReward] = useState(false);
  
  // Refs for animations
  const cardRef = useRef(null);
  const coinsRef = useRef(null);
  
  // Sound effects
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  const [playSwipe] = useSound('/sounds/swipe.mp3', { volume: 0.5 });
  
  // Constants
  const COINS_PER_CORRECT = 10;
  const XP_PER_CORRECT = 15;
  const TOTAL_QUESTIONS = 3;

  // Load questions on mount
  useEffect(() => {
    loadSession();
    loadStreak();
  }, []);

  const loadStreak = () => {
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      const streakData = GameDataService.getStreakData(user.phone);
      setStreak(streakData?.current || 0);
    }
  };

  const loadSession = async () => {
    // Check if already completed today
    const today = new Date().toDateString();
    const completed = localStorage.getItem(`daily_complete_${today}`);
    
    if (completed) {
      setStage('complete');
      const data = JSON.parse(completed);
      setScore(data.score);
      return;
    }

    // Load fresh questions
    await loadQuestions();
  };

  const loadQuestions = async () => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      const csv = await response.text();
      const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
      
      const formatted = data
        .map(row => ({
          question: row.question,
          options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean),
          correct: ['A', 'B', 'C', 'D'].indexOf(row.answer?.toUpperCase()),
          explanation: row.explanation || "Amazing! You're getting smarter! 🧠"
        }))
        .filter(q => q.options.length === 4 && q.correct >= 0)
        .sort(() => Math.random() - 0.5)
        .slice(0, TOTAL_QUESTIONS);
      
      setQuestions(formatted);
      setStage('idle');
    } catch (error) {
      // Fallback questions
      setQuestions([
        {
          question: "What makes the sky blue?",
          options: ["Water vapor", "Light scattering", "Ocean reflection", "Space color"],
          correct: 1,
          explanation: "Sunlight scatters in our atmosphere, and blue light scatters the most!"
        }
      ]);
      setStage('idle');
    }
  };

  const handleStart = () => {
    setStage('playing');
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const handleAnswer = (optionIndex) => {
    if (selectedOption !== null) return;
    
    setSelectedOption(optionIndex);
    const isCorrect = optionIndex === questions[currentIndex].correct;
    
    if (isCorrect) {
      setStage('correct');
      setScore(score + 1);
      playCorrect();
      
      // Add rewards
      GameDataService.addCoins(COINS_PER_CORRECT, 'Daily Challenge');
      GameDataService.addXP(XP_PER_CORRECT);
      
      // Trigger reward animation
      setShowReward(true);
      setTimeout(() => setShowReward(false), 2000);
      
      // Move to next
      setTimeout(() => {
        if (currentIndex < questions.length - 1) {
          nextQuestion();
        } else {
          completeSession();
        }
      }, 2500);
      
    } else {
      setStage('wrong');
      playWrong();
      setHearts(hearts - 1);
      
      // Shake animation
      if (cardRef.current) {
        cardRef.current.classList.add('shake-animation');
        setTimeout(() => {
          cardRef.current?.classList.remove('shake-animation');
        }, 500);
      }
      
      // Check if game over
      if (hearts <= 1) {
        setTimeout(() => completeSession(), 1500);
      } else {
        setTimeout(() => {
          setSelectedOption(null);
          setStage('playing');
        }, 1500);
      }
    }
  };

  const nextQuestion = () => {
    setIsAnimating(true);
    playSwipe?.();
    
    setTimeout(() => {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(null);
      setStage('playing');
      setIsAnimating(false);
    }, 300);
  };

  const completeSession = () => {
    setStage('complete');
    
    // Save completion
    const today = new Date().toDateString();
    localStorage.setItem(`daily_complete_${today}`, JSON.stringify({
      score,
      timestamp: Date.now()
    }));
    
    // Update streak
    const user = UserService.getCurrentUser();
    if (user?.phone) {
      GameDataService.updateStreak(user.phone);
    }
    
    if (onCoinsUpdate) onCoinsUpdate();
  };

  const resetChallenge = () => {
    localStorage.removeItem(`daily_complete_${new Date().toDateString()}`);
    setStage('idle');
    setCurrentIndex(0);
    setSelectedOption(null);
    setHearts(3);
    setScore(0);
    loadQuestions();
  };

  // Render based on stage
  if (stage === 'complete') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-white/10 p-6 mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 animate-pulse" />
        
        <div className="relative text-center">
          <div className="mb-4">
            <div className="inline-block animate-bounce">
              <span className="text-5xl">🏆</span>
            </div>
          </div>
          
          <h3 className="text-lg font-semibold mb-2">Challenge Complete!</h3>
          
          <div className="flex justify-center gap-3 mb-4">
            <div className="px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur">
              <span className="text-2xl font-bold text-green-400">{score}</span>
              <span className="text-xs text-gray-400 ml-1">/ {TOTAL_QUESTIONS}</span>
            </div>
            {streak > 0 && (
              <div className="px-3 py-1.5 rounded-lg bg-white/5 backdrop-blur">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-medium ml-1">{streak}</span>
              </div>
            )}
          </div>
          
          <button
            onClick={resetChallenge}
            className="w-full py-2.5 rounded-xl bg-white/5 backdrop-blur border border-white/10 text-sm font-medium hover:bg-white/10 transition-all"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  if (stage === 'idle') {
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur border border-white/10 p-6 mb-6 cursor-pointer hover:scale-[1.02] transition-transform"
           onClick={handleStart}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 animate-shimmer" />
        
        <div className="relative flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-1 flex items-center gap-2">
              Daily Challenge
              {streak > 0 && (
                <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/20 text-orange-400">
                  🔥 {streak}
                </span>
              )}
            </h3>
            <p className="text-sm text-gray-400">Tap to start • 3 questions</p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-xl">▶</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  return (
    <div ref={cardRef} className={`relative rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-white/10 p-6 mb-6 ${isAnimating ? 'slide-animation' : ''}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-1">
          {[...Array(TOTAL_QUESTIONS)].map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-8 rounded-full transition-all ${
                i < currentIndex ? 'bg-green-500' :
                i === currentIndex ? 'bg-blue-500 animate-pulse' : 
                'bg-gray-600'
              }`}
            />
          ))}
        </div>
        
        <div className="flex gap-1">
          {[...Array(3)].map((_, i) => (
            <span
              key={i}
              className={`transition-all ${
                i < hearts ? 'opacity-100' : 'opacity-20 grayscale'
              }`}
            >
              ❤️
            </span>
          ))}
        </div>
      </div>

      {/* Question */}
      <div className="mb-6">
        <p className="text-base font-medium leading-relaxed">{currentQ.question}</p>
      </div>

      {/* Options */}
      <div className="grid gap-2">
        {currentQ.options.map((option, idx) => {
          const isSelected = selectedOption === idx;
          const isCorrect = idx === currentQ.correct;
          const showResult = selectedOption !== null;
          
          let className = "relative overflow-hidden p-4 rounded-2xl text-left font-medium transition-all transform hover:scale-[1.02] ";
          
          if (showResult) {
            if (isCorrect) {
              className += "bg-green-500/20 border-2 border-green-500 scale-[1.02]";
            } else if (isSelected) {
              className += "bg-red-500/20 border-2 border-red-500";
            } else {
              className += "bg-white/5 border-2 border-transparent opacity-50";
            }
          } else {
            className += "bg-white/5 border-2 border-white/10 hover:border-white/20 active:scale-[0.98]";
          }
          
          return (
            <button
              key={idx}
              onClick={() => handleAnswer(idx)}
              disabled={selectedOption !== null}
              className={className}
            >
              <span className="relative z-10 flex items-center gap-3">
                <span className="text-lg">{['🅰️', '🅱️', '🅲️', '🅳️'][idx]}</span>
                <span className="flex-1">{option}</span>
                {showResult && isCorrect && (
                  <span className="text-green-400">✓</span>
                )}
                {showResult && isSelected && !isCorrect && (
                  <span className="text-red-400">✗</span>
                )}
              </span>
              
              {/* Ripple effect on click */}
              {isSelected && (
                <div className="absolute inset-0 bg-white/10 animate-ripple" />
              )}
            </button>
          );
        })}
      </div>

      {/* Reward popup */}
      {showReward && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="bg-green-500 text-white px-6 py-3 rounded-2xl font-bold animate-reward-popup">
            +{COINS_PER_CORRECT} coins!
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ripple {
          from { transform: scale(0); opacity: 1; }
          to { transform: scale(4); opacity: 0; }
        }
        
        @keyframes reward-popup {
          0% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1.2) rotate(5deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 0; }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        
        .animate-reward-popup {
          animation: reward-popup 2s ease-out;
        }
        
        .shake-animation {
          animation: shake 0.5s;
        }
        
        .slide-animation {
          animation: slideOut 0.3s ease-out;
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes slideOut {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-100%); opacity: 0; }
        }
      `}</style>
    </div>
  );
}