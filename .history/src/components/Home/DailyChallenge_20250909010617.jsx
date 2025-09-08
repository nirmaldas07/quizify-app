// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [stage, setStage] = useState('idle'); // idle, playing, complete
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeUntilTomorrow, setTimeUntilTomorrow] = useState('');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  
  // Constants
  const TOTAL_QUESTIONS = 3;
  const COINS_PER_CORRECT = 10;
  const BONUS_MULTIPLIER = 2;
  const MIN_SWIPE_DISTANCE = 50;

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
  }, []);

  // Timer for tomorrow
  useEffect(() => {
    if (stage === 'complete') {
      const updateTimer = () => {
        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(tomorrow.getDate() + 1);
        tomorrow.setHours(0, 0, 0, 0);
        
        const diff = tomorrow - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeUntilTomorrow(`${hours}h ${minutes}m`);
      };
      
      updateTimer();
      const timer = setInterval(updateTimer, 60000);
      
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
    setSelectedAnswers(new Array(TOTAL_QUESTIONS).fill(null));
    setScore(0);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    
    // Check if correct
    if (optionIndex === questions[currentIndex].correct) {
      setScore(score + 1);
    }
    
    // Check if all questions answered
    const answeredCount = newAnswers.filter(a => a !== null).length;
    
    if (answeredCount === TOTAL_QUESTIONS) {
      // All questions answered, show results
      setTimeout(() => {
        completeChallenge(newAnswers);
      }, 500);
    } else {
      // Move to next unanswered question
      setTimeout(() => {
        moveToNextUnanswered(newAnswers);
      }, 300);
    }
  };

  const moveToNextUnanswered = (answers) => {
    // Find next unanswered question
    for (let i = currentIndex + 1; i < TOTAL_QUESTIONS; i++) {
      if (answers[i] === null) {
        setCurrentIndex(i);
        return;
      }
    }
    // If no unanswered after current, check from beginning
    for (let i = 0; i < currentIndex; i++) {
      if (answers[i] === null) {
        setCurrentIndex(i);
        return;
      }
    }
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
  };

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > MIN_SWIPE_DISTANCE;
    const isRightSwipe = distance < -MIN_SWIPE_DISTANCE;
    
    if (isLeftSwipe) {
      // Swipe left - next question
      const nextIndex = (currentIndex + 1) % TOTAL_QUESTIONS;
      setCurrentIndex(nextIndex);
    } else if (isRightSwipe) {
      // Swipe right - previous question
      const prevIndex = (currentIndex - 1 + TOTAL_QUESTIONS) % TOTAL_QUESTIONS;
      setCurrentIndex(prevIndex);
    }
  };

  // Render complete screen - Compact version
  if (stage === 'complete') {
    const accuracy = Math.round((score / TOTAL_QUESTIONS) * 100);
    const isPerfect = score === TOTAL_QUESTIONS;
    const earnedCoins = isPerfect ? 
      score * COINS_PER_CORRECT * BONUS_MULTIPLIER : 
      score * COINS_PER_CORRECT;
    
    return (
      <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4">
        <div className="flex items-center justify-between">
          {/* Left: Trophy */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400/20 to-orange-400/20 flex items-center justify-center">
              <span className="text-2xl">
                {isPerfect ? '🏆' : score >= 2 ? '🥈' : '🥉'}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-yellow-400">
                Challenge Complete!
              </h3>
              <p className="text-xs text-gray-400">
                Come back in {timeUntilTomorrow}
              </p>
            </div>
          </div>
          
          {/* Right: Stats */}
          <div className="flex gap-3">
            <div className="text-center">
              <div className="text-lg font-bold text-green-400">{accuracy}%</div>
              <div className="text-[10px] text-gray-500">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-yellow-400">+{earnedCoins}</div>
              <div className="text-[10px] text-gray-500">Coins</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-orange-400">🔥2</div>
              <div className="text-[10px] text-gray-500">Streak</div>
            </div>
          </div>
        </div>
        
        {/* Test button - remove in production */}
        <button
          onClick={handleRestart}
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-[10px] text-gray-600 hover:text-gray-400"
        >
          [Test: Replay]
        </button>
      </div>
    );
  }

  // Render idle screen - Compact version
  if (stage === 'idle') {
    return (
      <div 
        onClick={handleStart}
        className="relative rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur border border-white/10 p-4 mb-4 cursor-pointer hover:scale-[1.02] transition-transform"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base font-semibold">Daily Challenge</h3>
            <p className="text-xs text-gray-400">{TOTAL_QUESTIONS} questions • Up to {TOTAL_QUESTIONS * COINS_PER_CORRECT * BONUS_MULTIPLIER} coins</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
            <span className="text-white">▶</span>
          </div>
        </div>
      </div>
    );
  }

  // Render playing screen
  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  return (
    <div 
      className="relative rounded-2xl bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur border border-white/10 p-4 mb-4"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Progress bar */}
      <div className="flex gap-1 mb-4">
        {[...Array(TOTAL_QUESTIONS)].map((_, i) => (
          <div
            key={i}
            className={`h-1 flex-1 rounded-full transition-all ${
              selectedAnswers[i] !== null ? 
                (selectedAnswers[i] === questions[i]?.correct ? 'bg-green-500' : 'bg-red-500') :
              i === currentIndex ? 'bg-blue-500' :
              'bg-gray-700'
            }`}
          />
        ))}
      </div>
      
      {/* Question */}
      <h3 className="text-base font-medium mb-4">
        {currentQuestion.question}
      </h3>
      
      {/* Options */}
      <div className="grid gap-2">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedAnswers[currentIndex] === idx;
          const hasAnswered = selectedAnswers[currentIndex] !== null;
          
          return (
            <button
              key={idx}
              onClick={() => !hasAnswered && handleAnswer(idx)}
              disabled={hasAnswered}
              className={`
                relative p-3 rounded-xl text-left text-sm font-medium transition-all
                ${isSelected ? 'bg-blue-500/20 border border-blue-500' :
                  hasAnswered ? 'bg-white/5 border border-transparent opacity-50' :
                  'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]'}
              `}
            >
              <div className="flex items-center gap-2">
                <span className="opacity-50">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
      
      {/* Swipe hint */}
      <div className="text-center mt-4 text-[10px] text-gray-500">
        Swipe left/right to navigate questions
      </div>
    </div>
  );
}