// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import Papa from 'papaparse';
import useSound from 'use-sound';
import CoinFly from '../Shared/CoinFly';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';

export default function DailyChallenge({ coinPillRef }) {
  // State management
  const [stage, setStage] = useState('idle'); // idle, playing, celebrating, complete
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timeUntilTomorrow, setTimeUntilTomorrow] = useState('');
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [coinFly, setCoinFly] = useState(null);
  const [earnedCoins, setEarnedCoins] = useState(0);
  const completeButtonRef = useRef(null);
  const cardRef = useRef(null);

  
  // Sound effects
  const [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
  const [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
  const [playComplete] = useSound('/sounds/win.mp3', { volume: 0.7, duration: 1000 });
  const [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
  
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
    setShowFeedback(false);
    setEarnedCoins(0);
  };

  const handleAnswer = (optionIndex) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = optionIndex;
    setSelectedAnswers(newAnswers);
    
    // Check if correct and play sound
    const isCorrect = optionIndex === questions[currentIndex].correct;
    setLastAnswerCorrect(isCorrect);
    setShowFeedback(true);
    
    if (isCorrect) {
    // Don't update score here - it will be calculated in completeChallenge
    if (playCorrect) playCorrect();
    // Show confetti for correct answer
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 1000);  // Reduced from 2000 to 1000
    } else {
    if (playWrong) playWrong();
    }
    
    // Check if all questions answered
    const answeredCount = newAnswers.filter(a => a !== null).length;
    
    setTimeout(() => {
      setShowFeedback(false);
      
      if (answeredCount === TOTAL_QUESTIONS) {
        // Show celebration first
        setStage('celebrating');
        if (playComplete) playComplete();
        
        // Then show results after celebration
        setTimeout(() => {
          completeChallenge(newAnswers);
        }, 2000);
      } else {
        // Move to next unanswered question
        moveToNextUnanswered(newAnswers);
      }
    }, 600);
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
  const isPerfect = finalScore === TOTAL_QUESTIONS;
  const coins = isPerfect ? 
    finalScore * COINS_PER_CORRECT * BONUS_MULTIPLIER : 
    finalScore * COINS_PER_CORRECT;
  
  setEarnedCoins(coins);
  setStage('complete');
  
  // DON'T add coins here - wait for animation
  // Just trigger the animation
  setTimeout(() => {
    if (coins > 0 && completeButtonRef.current && coinPillRef?.current) {
      const rect = completeButtonRef.current.getBoundingClientRect();
      setCoinFly({ 
        startRect: rect, 
        count: Math.min(coins / 5, 10),
        amount: coins 
      });
      if (playCoin) playCoin();
    }
  }, 500);
};

  const handleRestart = () => {
    loadQuestions();
    setStage('idle');
    setCurrentIndex(0);
    setSelectedAnswers([]);
    setScore(0);
    setShowFeedback(false);
    setEarnedCoins(0);
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

  // Simple confetti component
const Confetti = ({ parentRef }) => {
  if (!showConfetti) return null;
  
  const parentRect = parentRef?.current?.getBoundingClientRect();
  const startY = parentRect ? parentRect.top : 100;
  const startX = parentRect ? parentRect.left : 0;
  const width = parentRect ? parentRect.width : window.innerWidth;
  
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {[...Array(12)].map((_, i) => (
        <div
          key={`${Date.now()}-${i}`}  // Unique key to prevent React reusing elements
          className="absolute"
          style={{
            left: `${startX + (Math.random() * width)}px`,
            top: `${startY}px`,
            animation: `confettiFall ${2 + Math.random() * 1}s ease-out forwards`,
            animationDelay: `${Math.random() * 0.3}s`,
            fontSize: '24px',
            opacity: 0.9
          }}
        >
          {['🎉', '✨', '🌟', '⭐', '🎊'][Math.floor(Math.random() * 5)]}
        </div>
      ))}
    </div>
  );
};

  // Render celebration screen
  if (stage === 'celebrating') {
    return (
      <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-8 mb-4 text-center">
        <div className="animate-bounce-slow">
          <span className="text-5xl">🎉</span>
        </div>
        <h2 className="text-2xl font-bold mt-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
          Congratulations!
        </h2>
        <p className="text-sm text-gray-400 mt-2">
          You've completed today's challenge
        </p>
      </div>
    );
  }

  // Render complete screen - Compact version
  if (stage === 'complete') {
    const accuracy = Math.round((score / TOTAL_QUESTIONS) * 100);
    const isPerfect = score === TOTAL_QUESTIONS;
    
    return (
      <>
        {/* Coin fly animation */}
        {coinFly && (
          <CoinFly
            startRect={coinFly.startRect}
            targetRef={coinPillRef}
            count={coinFly.count}
            onDone={() => {
            // Prevent double execution with a flag
            if (!coinFly.processed) {
                coinFly.processed = true;
                
                // Update coins in GameDataService
                const currentUser = UserService.getCurrentUser();
                if (currentUser?.phone) {
                GameDataService.addCoins(coinFly.amount, 'Daily Challenge');
                GameDataService.updateQuestProgress(currentUser.phone, 'daily_challenge', 1);
                } else {
                GameDataService.addCoins(coinFly.amount, 'Daily Challenge');
                }
                
                // Dispatch custom event to trigger re-render
                window.dispatchEvent(new Event('coinsUpdated'));
            }
            
            setCoinFly(null);
            }}
          />
        )}
        
        <div className="relative rounded-2xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 backdrop-blur border border-white/10 p-4 mb-4">
          <div 
            ref={completeButtonRef}
            className="flex items-center justify-between"
          >
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
            <div className="flex gap-4">
              <div className="text-center">
                <div className="text-lg font-bold text-green-400">{accuracy}%</div>
                <div className="text-[10px] text-gray-500">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-yellow-400">+{earnedCoins}</div>
                <div className="text-[10px] text-gray-500">Coins</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-orange-400 whitespace-nowrap">🔥2</div>
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
      </>
    );
  }

  // Render idle screen - Compact version
  if (stage === 'idle') {
    return (
      <div 
        className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-500/30 to-blue-500/15 backdrop-blur border border-white/10 p-8 mb-4"
      >
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold mb-2">Daily Challenge</h3>
            <p className="text-xs text-gray-400">{TOTAL_QUESTIONS} questions • Up to {TOTAL_QUESTIONS * COINS_PER_CORRECT * BONUS_MULTIPLIER} coins</p>
          </div>
          <button
            onClick={handleStart}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-transform"
          >
            <span className="text-white">▶</span>
          </button>
        </div>
      </div>
    );
  }

  
  // Render playing screen
  const currentQuestion = questions[currentIndex];
 
  return (
  <>
    {/* Confetti effect */}
    <Confetti parentRef={cardRef} />
      
    <div 
        ref={cardRef}
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
            const isCorrect = idx === currentQuestion.correct;
            const showCorrectness = showFeedback && (isSelected || isCorrect);
            
            return (
              <button
                key={idx}
                onClick={() => !hasAnswered && handleAnswer(idx)}
                disabled={hasAnswered}
                className={`
                  relative p-3 rounded-xl text-left text-sm font-medium transition-all
                  ${showCorrectness && isCorrect ? 
                    'bg-green-500/30 border border-green-500 animate-pulse-once' :
                    showCorrectness && isSelected && !isCorrect ? 
                    'bg-red-500/30 border border-red-500 animate-shake' :
                    isSelected && !showFeedback ? 
                    'bg-blue-500/20 border border-blue-500' :
                    hasAnswered ? 
                    'bg-white/5 border border-transparent opacity-50' :
                    'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 active:scale-[0.98]'}
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="opacity-50">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>
                  {showCorrectness && isCorrect && (
                    <span className="text-green-400 animate-fade-in">✓</span>
                  )}
                  {showCorrectness && isSelected && !isCorrect && (
                    <span className="text-red-400 animate-fade-in">✗</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
        
        <style jsx>{`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes pulse-once {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; transform: scale(1.02); }
          }
          
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-5px); }
            75% { transform: translateX(5px); }
          }
          
          @keyframes fade-in {
            from { opacity: 0; transform: scale(0.5); }
            to { opacity: 1; transform: scale(1); }
          }
          
          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
        @keyframes confettiFall {
        0% { 
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.9;
        }
        10% {
            opacity: 1;
        }
        25% {
            transform: translateY(25vh) translateX(10px) rotate(180deg) scale(1.1);
        }
        50% {
            transform: translateY(50vh) translateX(-10px) rotate(360deg) scale(1);
        }
        75% {
            transform: translateY(75vh) translateX(5px) rotate(540deg) scale(0.9);
            opacity: 0.8;
        }
        100% { 
            transform: translateY(100vh) translateX(0) rotate(720deg) scale(0.8);
            opacity: 0;
        }
        }
                
          .animate-shimmer {
            animation: shimmer 3s infinite;
          }
          
          .animate-pulse-once {
            animation: pulse-once 0.6s ease-out;
          }
          
          .animate-shake {
            animation: shake 0.4s ease-out;
          }
          
          .animate-fade-in {
            animation: fade-in 0.3s ease-out;
          }
          
          .animate-bounce-slow {
            animation: bounce-slow 1s ease-in-out infinite;
          }
          
          .animate-confetti {
            animation: confetti 2s ease-in forwards;
          }
        `}</style>
      </div>
    </>
  );
}