// src/components/Home/DailyChallenge.jsx
import React, { useState, useEffect, useRef } from 'react';
import GameDataService from '../../services/GameDataService';
import UserService from '../../services/UserService';
import useSound from 'use-sound';
import Papa from 'papaparse';

export default function DailyChallenge({ onCoinsUpdate }) {
  // State management
  const [stage, setStage] = useState('idle');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [lives, setLives] = useState(1);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');
  const [showLifelineModal, setShowLifelineModal] = useState(false);
  const [lifelineType, setLifelineType] = useState('');
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [audienceVotes, setAudienceVotes] = useState([]);
  const [usedLifelines, setUsedLifelines] = useState({ fifty: false, audience: false });
  const [isProcessing, setIsProcessing] = useState(false);
  const [timeUntilTomorrow, setTimeUntilTomorrow] = useState('');
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  
  // Sound effects - with safe fallbacks
  let playCorrect, playWrong, playCoin, playSwipe, playClap, playClick;
  
  try {
    [playCorrect] = useSound('/sounds/correct.mp3', { volume: 0.6 });
    [playWrong] = useSound('/sounds/wrong.mp3', { volume: 0.6 });
    [playCoin] = useSound('/sounds/coin.mp3', { volume: 0.75 });
    [playSwipe] = useSound('/sounds/swipe.mp3', { volume: 0.5 });
    [playClap] = useSound('/sounds/clap.mp3', { volume: 0.7 });
    [playClick] = useSound('/sounds/click.mp3', { volume: 0.5 });
  } catch (e) {
    // If useSound fails, create dummy functions
    playCorrect = () => {};
    playWrong = () => {};
    playCoin = () => {};
    playSwipe = () => {};
    playClap = () => {};
    playClick = () => {};
  }
  
  // Constants
  const COINS_PER_CORRECT = 10;
  const XP_PER_CORRECT = 15;
  const PERFECT_MULTIPLIER = 2;
  const LIFELINE_COST = 20;
  const EXTRA_LIFE_COST = 30;
  const TOTAL_QUESTIONS = 3;

  // Initialize
  useEffect(() => {
    loadSession();
    loadStreak();
  }, []);

  // Timer for next day
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
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        setTimeUntilTomorrow(`${hours}h ${minutes}m ${seconds}s`);
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [stage]);

  const loadStreak = () => {
    try {
      const user = UserService?.getCurrentUser ? UserService.getCurrentUser() : null;
      if (user?.phone && GameDataService?.getStreakData) {
        const streakData = GameDataService.getStreakData(user.phone);
        setStreak(streakData?.current || 0);
      }
    } catch (e) {
      console.log('Could not load streak');
    }
  };

  const loadSession = async () => {
    // For testing - always load fresh questions
    await loadQuestions();
  };

  const loadQuestions = async () => {
    try {
      const response = await fetch('/data/quiz_questions_bank.csv');
      const csv = await response.text();
      const { data } = Papa.parse(csv, { header: true, skipEmptyLines: true });
      
      const formatted = data
        .map((row, idx) => ({
          id: idx,
          question: row.question,
          options: [row.option1, row.option2, row.option3, row.option4].filter(Boolean),
          correct: ['A', 'B', 'C', 'D'].indexOf(row.answer?.toUpperCase()),
          explanation: row.explanation || "Great job! Keep learning!"
        }))
        .filter(q => q.options.length === 4 && q.correct >= 0)
        .sort(() => Math.random() - 0.5)
        .slice(0, TOTAL_QUESTIONS);
      
      setQuestions(formatted);
      setAnswers(new Array(TOTAL_QUESTIONS).fill(null));
      setStage('idle');
    } catch (error) {
      setQuestions(getFallbackQuestions());
      setAnswers(new Array(TOTAL_QUESTIONS).fill(null));
      setStage('idle');
    }
  };

  const getFallbackQuestions = () => [
    {
      id: 1,
      question: "What makes the sky blue?",
      options: ["Water vapor", "Light scattering", "Ocean reflection", "Space color"],
      correct: 1,
      explanation: "Sunlight scatters in our atmosphere!"
    },
    {
      id: 2,
      question: "How many continents are there?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explanation: "There are 7 continents on Earth!"
    },
    {
      id: 3,
      question: "What is 12 × 8?",
      options: ["86", "96", "106", "116"],
      correct: 1,
      explanation: "12 × 8 = 96!"
    }
  ];

  const handleStart = () => {
    if (playClick) playClick();
    setStage('playing');
    setCurrentIndex(0);
    setScore(0);
    setLives(1);
    setUsedLifelines({ fifty: false, audience: false });
    setEliminatedOptions([]);
    setAudienceVotes([]);
    setSelectedOption(null);
    setShowGameOverModal(false);
    
    // Find first unanswered question
    const firstUnanswered = answers.findIndex(a => a === null);
    if (firstUnanswered !== -1) {
      setCurrentIndex(firstUnanswered);
    }
  };

  const handleAnswer = (optionIndex) => {
    if (isProcessing || answers[currentIndex] !== null) return;
    
    setIsProcessing(true);
    setSelectedOption(optionIndex);
    
    const isCorrect = optionIndex === questions[currentIndex].correct;
    const newAnswers = [...answers];
    newAnswers[currentIndex] = { selected: optionIndex, correct: isCorrect };
    setAnswers(newAnswers);
    
    if (isCorrect) {
      if (playCorrect) playCorrect();
      setScore(score + 1);
    } else {
      if (playWrong) playWrong();
      const newLives = lives - 1;
      setLives(newLives);
      
      // Check if game over
      if (newLives <= 0) {
        setTimeout(() => {
          setShowGameOverModal(true);
          setIsProcessing(false);
        }, 1000);
        return;
      }
    }
    
    // Check if all questions are answered
    setTimeout(() => {
      const answeredCount = newAnswers.filter(a => a !== null).length;
      if (answeredCount === TOTAL_QUESTIONS) {
        completeSession(newAnswers);
      } else {
        moveToNextUnanswered(newAnswers);
      }
    }, 1500);
  };

  const moveToNextUnanswered = (currentAnswers) => {
    // Find next unanswered question
    let nextUnanswered = -1;
    for (let i = currentIndex + 1; i < TOTAL_QUESTIONS; i++) {
      if (currentAnswers[i] === null) {
        nextUnanswered = i;
        break;
      }
    }
    
    // If no more after current, check from beginning
    if (nextUnanswered === -1) {
      for (let i = 0; i < currentIndex; i++) {
        if (currentAnswers[i] === null) {
          nextUnanswered = i;
          break;
        }
      }
    }
    
    if (nextUnanswered !== -1) {
      setIsSliding(true);
      setSlideDirection('left');
      if (playSwipe) playSwipe();
      
      setTimeout(() => {
        setCurrentIndex(nextUnanswered);
        setSelectedOption(null);
        setEliminatedOptions([]);
        setAudienceVotes([]);
        setIsSliding(false);
        setIsProcessing(false);
      }, 300);
    } else {
      setIsProcessing(false);
    }
  };

  const handleNavigate = (direction) => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % TOTAL_QUESTIONS
      : (currentIndex - 1 + TOTAL_QUESTIONS) % TOTAL_QUESTIONS;
    
    if (playClick) playClick();
    setIsSliding(true);
    setSlideDirection(direction === 'next' ? 'left' : 'right');
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setSelectedOption(answers[newIndex]?.selected || null);
      // Only reset if the question hasn't been answered
      if (answers[newIndex] === null) {
        setEliminatedOptions([]);
        setAudienceVotes([]);
      }
      setIsSliding(false);
    }, 300);
  };

  const handleLifeline = (type) => {
    const currentCoins = GameDataService?.getCoins ? GameDataService.getCoins() : 0;
    
    if (currentCoins < LIFELINE_COST) {
      alert(`You need ${LIFELINE_COST} coins to use this lifeline!`);
      return;
    }
    
    setLifelineType(type);
    setShowLifelineModal(true);
  };

  const confirmLifeline = () => {
    // Deduct coins immediately
    const success = GameDataService?.spendCoins ? 
      GameDataService.spendCoins(LIFELINE_COST, `${lifelineType === 'fifty' ? '50:50' : 'Audience'} Lifeline`) : 
      false;
    
    if (!success) {
      alert('Insufficient coins!');
      setShowLifelineModal(false);
      return;
    }
    
    if (lifelineType === 'fifty') {
      const correct = questions[currentIndex].correct;
      const wrong = [0, 1, 2, 3].filter(i => i !== correct);
      const toEliminate = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
      setEliminatedOptions(toEliminate);
      setUsedLifelines({ ...usedLifelines, fifty: true });
    } else {
      const correct = questions[currentIndex].correct;
      const votes = [0, 0, 0, 0];
      votes[correct] = 40 + Math.floor(Math.random() * 30);
      let remaining = 100 - votes[correct];
      for (let i = 0; i < 4; i++) {
        if (i !== correct) {
          votes[i] = Math.floor(Math.random() * remaining);
          remaining -= votes[i];
        }
      }
      setAudienceVotes(votes);
      setUsedLifelines({ ...usedLifelines, audience: true });
    }
    
    if (playClick) playClick();
    setShowLifelineModal(false);
    if (onCoinsUpdate) onCoinsUpdate();
  };

  const handleBuyLife = () => {
    const currentCoins = GameDataService?.getCoins ? GameDataService.getCoins() : 0;
    
    if (currentCoins < EXTRA_LIFE_COST) {
      alert(`You need ${EXTRA_LIFE_COST} coins to buy an extra life!`);
      return;
    }
    
    // Deduct coins and add life
    const success = GameDataService?.spendCoins ? 
      GameDataService.spendCoins(EXTRA_LIFE_COST, 'Extra Life') : 
      false;
      
    if (success) {
      setLives(1);
      setShowGameOverModal(false);
      if (playCorrect) playCorrect();
      if (onCoinsUpdate) onCoinsUpdate();
      
      // Continue to next question
      moveToNextUnanswered(answers);
    }
  };

  const handleEndChallenge = () => {
    setShowGameOverModal(false);
    completeSession(answers);
  };

  const completeSession = (finalAnswers = answers) => {
    const attemptedCount = finalAnswers.filter(a => a !== null).length;
    const correctCount = finalAnswers.filter(a => a?.correct).length;
    const baseCoins = correctCount * COINS_PER_CORRECT;
    const isPerfect = correctCount === TOTAL_QUESTIONS;
    const finalCoins = isPerfect ? baseCoins * PERFECT_MULTIPLIER : baseCoins;
    
    try {
      if (GameDataService?.addCoins) {
        GameDataService.addCoins(finalCoins, 'Daily Challenge');
      }
      if (GameDataService?.addXP) {
        GameDataService.addXP(correctCount * XP_PER_CORRECT);
      }
      
      const user = UserService?.getCurrentUser ? UserService.getCurrentUser() : null;
      if (user?.phone && GameDataService?.updateStreak) {
        GameDataService.updateStreak(user.phone);
        const newStreakData = GameDataService?.getStreakData ? 
          GameDataService.getStreakData(user.phone) : null;
        setStreak(newStreakData?.current || 0);
      }
    } catch (e) {
      console.log('Could not update game data');
    }
    
    if (isPerfect && playClap) {
      playClap();
    } else if (playCoin) {
      playCoin();
    }
    
    setScore(correctCount);
    setStage('complete');
    if (onCoinsUpdate) onCoinsUpdate();
  };

  // Restart function for testing
  const handleRestart = () => {
    setStage('idle');
    setCurrentIndex(0);
    setAnswers(new Array(TOTAL_QUESTIONS).fill(null));
    setSelectedOption(null);
    setLives(1);
    setScore(0);
    setEliminatedOptions([]);
    setAudienceVotes([]);
    setUsedLifelines({ fifty: false, audience: false });
    setIsProcessing(false);
    setShowGameOverModal(false);
    loadQuestions();
  };

  // Complete state
  if (stage === 'complete') {
    const isPerfect = score === TOTAL_QUESTIONS;
    const finalCoins = isPerfect ? score * COINS_PER_CORRECT * PERFECT_MULTIPLIER : score * COINS_PER_CORRECT;
    // Calculate accuracy based on attempted questions
    const attemptedQuestions = answers.filter(a => a !== null).length;
    const accuracy = attemptedQuestions > 0 ? Math.round((score / attemptedQuestions) * 100) : 0;
    
    return (
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur border border-white/10 p-4 mb-6">
        <div className="flex items-center gap-6">
          {/* Left side - Trophy and title */}
          <div className="flex-shrink-0 text-center">
            <div className="mb-2">
              <span className="text-5xl">
                {isPerfect ? '🏆' : score >= 2 ? '🥈' : '🥉'}
              </span>
            </div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {isPerfect ? 'PERFECT!' : 'Complete!'}
            </h3>
          </div>
          
          {/* Center - Stats */}
          <div className="flex-1 flex justify-center gap-3">
            <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur">
              <div className="text-xl font-bold text-green-400">{accuracy}%</div>
              <div className="text-xs text-gray-400">Accuracy</div>
            </div>
            
            <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur">
              <div className="text-xl font-bold text-yellow-400">+{finalCoins}</div>
              <div className="text-xs text-gray-400">Coins</div>
            </div>
            
            {streak > 0 && (
              <div className="px-3 py-2 rounded-xl bg-white/10 backdrop-blur">
                <div className="text-xl font-bold text-orange-400">🔥 {streak}</div>
                <div className="text-xs text-gray-400">Streak</div>
              </div>
            )}
          </div>
          
          {/* Right side - Buttons */}
          <div className="flex-shrink-0 space-y-2">
            <button
              onClick={handleRestart}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all text-sm"
            >
              Play Again (Test)
            </button>
            
            <button
              disabled
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 text-gray-300 font-medium cursor-not-allowed opacity-50 text-xs"
            >
              Tomorrow: {timeUntilTomorrow}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Idle state
  if (stage === 'idle') {
    return (
      <div 
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur border border-white/10 p-6 mb-6 cursor-pointer hover:scale-[1.02] transition-all"
        onClick={handleStart}
      >
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
            <p className="text-sm text-gray-400">Tap to start • 3 questions • 1 life</p>
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

  // Playing state
  const currentQ = questions[currentIndex];
  if (!currentQ) {
    return (
      <div className="rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-white/10 p-6 mb-6">
        <div className="text-center text-gray-400">Loading questions...</div>
      </div>
    );
  }

  return (
    <>
      <div className={`relative rounded-3xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur border border-white/10 p-6 mb-6 ${isSliding ? `slide-${slideDirection}` : ''}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-1">
            {[...Array(TOTAL_QUESTIONS)].map((_, i) => (
              <div
                key={i}
                className={`h-1.5 w-10 rounded-full transition-all ${
                  answers[i] !== null ? (answers[i].correct ? 'bg-green-500' : 'bg-red-500') :
                  i === currentIndex ? 'bg-blue-500 animate-pulse' : 
                  'bg-gray-600'
                }`}
              />
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(lives)].map((_, i) => (
                <span key={i} className="text-lg animate-heartbeat">❤️</span>
              ))}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <p className="text-base font-medium leading-relaxed">{currentQ.question}</p>
        </div>

        {/* Options with navigation */}
        <div className="relative">
          {/* Left navigation - moved to edge */}
          <button
            onClick={() => handleNavigate('prev')}
            className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all z-10"
          >
            <span className="text-gray-400 text-sm">‹</span>
          </button>
          
          {/* Right navigation - moved to edge */}
          <button
            onClick={() => handleNavigate('next')}
            className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all z-10"
          >
            <span className="text-gray-400 text-sm">›</span>
          </button>
          
          {/* Options - full width */}
          <div className="grid gap-2">
            {currentQ.options.map((option, idx) => {
              const isEliminated = eliminatedOptions.includes(idx);
              const hasAudienceVote = audienceVotes.length > 0;
              const isAnswered = answers[currentIndex] !== null;
              const isSelected = answers[currentIndex]?.selected === idx;
              const isCorrect = idx === currentQ.correct;
              
              let className = "relative overflow-hidden p-4 rounded-2xl text-left font-medium transition-all ";
              
              if (isEliminated) {
                className += "opacity-30 cursor-not-allowed bg-gray-800";
              } else if (isAnswered) {
                if (isCorrect) {
                  className += "bg-green-500/20 border-2 border-green-500";
                } else if (isSelected) {
                  className += "bg-red-500/20 border-2 border-red-500";
                } else {
                  className += "bg-white/5 border-2 border-transparent opacity-50";
                }
              } else {
                className += "bg-white/5 border-2 border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98]";
              }
              
              return (
                <button
                  key={idx}
                  onClick={() => !isEliminated && !isAnswered && handleAnswer(idx)}
                  disabled={isEliminated || isAnswered}
                  className={className}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{['🅰️', '🅱️', '🅲️', '🅳️'][idx]}</span>
                      <span>{option}</span>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      {hasAudienceVote && (
                        <span className="px-2 py-1 rounded-lg bg-purple-500/20 text-purple-400 text-xs">
                          {audienceVotes[idx]}%
                        </span>
                      )}
                      {isAnswered && isCorrect && (
                        <span className="text-green-400">✓</span>
                      )}
                      {isAnswered && isSelected && !isCorrect && (
                        <span className="text-red-400">✗</span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Lifelines */}
        {answers[currentIndex] === null && (
          <div className="flex justify-center gap-3 mt-4">
            <button
              onClick={() => handleLifeline('fifty')}
              disabled={usedLifelines.fifty || eliminatedOptions.length > 0}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-all ${
                usedLifelines.fifty || eliminatedOptions.length > 0
                  ? 'bg-gray-700 text-gray-500 opacity-50'
                  : 'bg-orange-500/20 text-orange-400 hover:bg-orange-500/30'
              }`}
            >
              50:50 <span className="text-xs">20🪙</span>
            </button>
            
            <button
              onClick={() => handleLifeline('audience')}
              disabled={usedLifelines.audience || audienceVotes.length > 0}
              className={`px-4 py-2 rounded-xl flex items-center gap-2 text-sm font-medium transition-all ${
                usedLifelines.audience || audienceVotes.length > 0
                  ? 'bg-gray-700 text-gray-500 opacity-50'
                  : 'bg-purple-500/20 text-purple-400 hover:bg-purple-500/30'
              }`}
            >
              👥 Ask <span className="text-xs">20🪙</span>
            </button>
          </div>
        )}
      </div>

      {/* Lifeline Modal */}
      {showLifelineModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">Use {lifelineType === 'fifty' ? '50:50' : 'Audience'} Lifeline?</h3>
            <p className="text-sm text-gray-400 mb-2">This will cost 20 coins</p>
            <p className="text-xs text-gray-500 mb-6">Current balance: {GameDataService?.getCoins ? GameDataService.getCoins() : 0} coins</p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowLifelineModal(false)}
                className="flex-1 py-2 rounded-xl bg-gray-700 hover:bg-gray-600"
              >
                Cancel
              </button>
              <button
                onClick={confirmLifeline}
                className="flex-1 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500"
              >
                Use Lifeline
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Over Modal */}
      {showGameOverModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-2xl p-6 max-w-sm w-full text-center">
            <div className="text-4xl mb-4">💔</div>
            <h3 className="text-xl font-bold mb-2">Out of Lives!</h3>
            <p className="text-sm text-gray-400 mb-6">
              You've lost your life. Get an extra life to continue or end the challenge.
            </p>
            
            <div className="bg-gray-700/50 rounded-xl p-3 mb-4">
              <p className="text-xs text-gray-400">Current balance</p>
              <p className="text-lg font-bold text-yellow-400">
                {GameDataService?.getCoins ? GameDataService.getCoins() : 0} coins
              </p>
            </div>
            
            <div className="space-y-3">
              <button
                onClick={handleBuyLife}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 transition-all"
              >
                <div className="font-medium">Get Extra Life</div>
                <div className="text-xs opacity-90">30 coins</div>
              </button>
              
              <button
                onClick={handleEndChallenge}
                className="w-full py-2 rounded-xl bg-gray-700 hover:bg-gray-600 text-gray-300 transition-all"
              >
                End Challenge
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes heartbeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1s infinite;
        }
        
        .slide-left {
          animation: slideLeft 0.3s ease-out;
        }
        
        .slide-right {
          animation: slideRight 0.3s ease-out;
        }
        
        @keyframes slideLeft {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(-20px); opacity: 0; }
        }
        
        @keyframes slideRight {
          from { transform: translateX(0); opacity: 1; }
          to { transform: translateX(20px); opacity: 0; }
        }
      `}</style>
    </>
  );
}