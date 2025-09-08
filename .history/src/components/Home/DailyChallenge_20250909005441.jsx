// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [stage, setStage] = useState('idle'); // idle, playing, complete
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeUntilTomorrow, setTimeUntilTomorrow] = useState('');
  
  // Constants
  const TOTAL_QUESTIONS = 3;
  const COINS_PER_CORRECT = 10;
  const BONUS_MULTIPLIER = 2;

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
  }, []);

  // Timer for tomorrow
  useEffect(() => {
    if (stage === 'complete') {
      const timer = setInterval(() => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeUntilTomorrow(`${hours}h ${minutes}m`);
      }, 60000); // Update every minute
      
      return () => clearInterval(timer);
    }
  }, [stage]);

  const loadQuestions = async () => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      const csv = await response.text();
      const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
      
      const formatted = data
        .filter(row => row.question && row.option1 && row.option2 && row.option3 && row.option4)
        .map((row, idx) => ({
          id: idx,
          question: row.question,
          options: [row.option1, row.option2, row.option3, row.option4],
          correct: ['A', 'B', 'C', 'D'].indexOf(row.answer?.toUpperCase())
        }))
        .filter(q => q.correct >= 0)
        .sort(() => Math.random() - 0.5)
        .slice(0, TOTAL_QUESTIONS);
      
      setQuestions(formatted);
    } catch (error) {
      // Fallback questions
      setQuestions([
        {
          id: 1,
          question: "What is the capital of France?",
          options: ["London", "Paris", "Berlin", "Madrid"],
          correct: 1
        },
        {
          id: 2,
          question: "What is 2 + 2?",
          options: ["3", "4", "5", "6"],
          correct: 1
        },
        {
          id: 3,
          question: "What color is the sky?",
          options: ["Red", "Green", "Blue", "Yellow"],
          correct: 2
        }
      ]);
    }
  };

  const handleStart = () => {
    setStage('playing');
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setShowResult(false);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...selectedAnswers, optionIndex];
    setSelectedAnswers(newAnswers);
    
    // Check if correct
    if (optionIndex === questions[currentIndex].correct) {
      setScore(score + 1);
    }
    
    // Show result briefly
    setShowResult(true);
    
    setTimeout(() => {
      if (currentIndex < TOTAL_QUESTIONS - 1) {
        // Next question
        setCurrentIndex(currentIndex + 1);
        setShowResult(false);
      } else {
        // Complete
        completeChallenge(newAnswers);
      }
    }, 1000);
  };

  const completeChallenge = (answers) => {
    const finalScore = answers.reduce((acc, answer, idx) => {
      return acc + (answer === questions[idx].correct ? 1 : 0);
    }, 0);
    
    setScore(finalScore);
    setStage('complete');
    
    // Add coins (if service exists)
    if (onCoinsUpdate) {
      const isPerfect = finalScore === TOTAL_QUESTIONS;
      const coins = isPerfect ? 
        finalScore * COINS_PER_CORRECT * BONUS_MULTIPLIER : 
        finalScore * COINS_PER_CORRECT;
      onCoinsUpdate(coins);
    }
  };

  const handleRestart = () => {
    loadQuestions();
    setStage('idle');
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setShowResult(false);
  };

  // Render complete screen
  if (stage === 'complete') {
    const accuracy = Math.round((score / TOTAL_QUESTIONS) * 100);
    const isPerfect = score === TOTAL_QUESTIONS;
    const earnedCoins = isPerfect ? 
      score * COINS_PER_CORRECT * BONUS_MULTIPLIER : 
      score * COINS_PER_CORRECT;
    
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/10 via-blue-600/10 to-indigo-600/10 backdrop-blur-xl border border-white/10 p-8 mb-6">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5" />
        
        {/* Content */}
        <div className="relative text-center space-y-6">
          {/* Trophy */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 mb-2">
            <span className="text-5xl">
              {isPerfect ? '🏆' : score >= 2 ? '🥈' : '🥉'}
            </span>
          </div>
          
          {/* Title */}
          <div>
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {isPerfect ? 'Perfect Score!' : 'Challenge Complete!'}
            </h2>
            <p className="text-gray-400">Great job on today's challenge!</p>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-green-400">{accuracy}%</div>
                <div className="text-xs text-gray-400 mt-1">Accuracy</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-yellow-400">+{earnedCoins}</div>
                <div className="text-xs text-gray-400 mt-1">Coins</div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-white/5 backdrop-blur rounded-2xl p-4 border border-white/10">
                <div className="text-3xl font-bold text-orange-400">🔥 2</div>
                <div className="text-xs text-gray-400 mt-1">Streak</div>
              </div>
            </div>
          </div>
          
          {/* Come back tomorrow message */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-4 border border-white/10">
            <p className="text-sm font-medium text-blue-400 mb-2">
              ✨ Come back tomorrow for a new challenge!
            </p>
            <p className="text-xs text-gray-500">
              Next challenge in: {timeUntilTomorrow || 'calculating...'}
            </p>
          </div>
          
          {/* Test Mode Button (remove in production) */}
          <button
            onClick={handleRestart}
            className="px-6 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-400 hover:bg-white/10 transition-all"
          >
            Play Again (Test Mode)
          </button>
        </div>
      </div>
    );
  }

  // Render idle screen
  if (stage === 'idle') {
    return (
      <div 
        onClick={handleStart}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 p-6 mb-6 cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-2">Daily Challenge</h3>
            <p className="text-sm text-gray-400">
              Answer {TOTAL_QUESTIONS} questions • Earn up to {TOTAL_QUESTIONS * COINS_PER_CORRECT * BONUS_MULTIPLIER} coins
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white text-lg">▶</span>
          </div>
        </div>
      </div>
    );
  }

  // Render playing screen
  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-xl border border-white/10 p-6 mb-6">
      {/* Progress bar */}
      <div className="flex gap-2 mb-6">
        {[...Array(TOTAL_QUESTIONS)].map((_, i) => (
          <div
            key={i}
            className={`h-1.5 flex-1 rounded-full transition-all ${
              i < currentIndex ? 'bg-green-500' :
              i === currentIndex ? 'bg-blue-500' :
              'bg-gray-700'
            }`}
          />
        ))}
      </div>
      
      {/* Question number */}
      <div className="text-sm text-gray-400 mb-3">
        Question {currentIndex + 1} of {TOTAL_QUESTIONS}
      </div>
      
      {/* Question */}
      <h3 className="text-lg font-medium mb-6">
        {currentQuestion.question}
      </h3>
      
      {/* Options */}
      <div className="grid gap-3">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedAnswers[currentIndex] === idx;
          const isCorrect = idx === currentQuestion.correct;
          const showFeedback = showResult && (isSelected || isCorrect);
          
          return (
            <button
              key={idx}
              onClick={() => !showResult && handleAnswer(idx)}
              disabled={showResult}
              className={`
                relative p-4 rounded-2xl text-left font-medium transition-all
                ${showFeedback && isCorrect ? 'bg-green-500/20 border-2 border-green-500' :
                  showFeedback && isSelected && !isCorrect ? 'bg-red-500/20 border-2 border-red-500' :
                  showResult ? 'bg-white/5 border-2 border-transparent opacity-50' :
                  'bg-white/5 border-2 border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]'}
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-lg opacity-70">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span>{option}</span>
                </div>
                {showFeedback && isCorrect && (
                  <span className="text-green-400">✓</span>
                )}
                {showFeedback && isSelected && !isCorrect && (
                  <span className="text-red-400">✗</span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}