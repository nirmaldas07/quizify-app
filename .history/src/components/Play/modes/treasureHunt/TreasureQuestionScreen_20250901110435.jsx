// src/components/Play/modes/treasureHunt/TreasureQuestionScreen.jsx

import { useState, useEffect, useRef } from "react";
import { GAME_CONSTANTS } from "./data/islandConfig.js";
import ShovelDisplay from "./components/ShovelDisplay.jsx";
import DiggingAnimation from "./components/DiggingAnimation.jsx";

export default function TreasureQuestionScreen({
  island,
  question,
  questionNumber,
  totalQuestions,
  shovelsRemaining,
  timeRemaining,
  coinsEarned,
  gemsFound,
  onAnswer,
  onQuit,
  soundOn,
  setSoundOn
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showDigging, setShowDigging] = useState(false);
  const [foundGem, setFoundGem] = useState(false);
  const [showQuitModal, setShowQuitModal] = useState(false);
  const [answerLocked, setAnswerLocked] = useState(false);
  
  const questionRef = useRef(null);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    setIsCorrect(false);
    setShowDigging(false);
    setFoundGem(false);
    setAnswerLocked(false);
  }, [question]);

  // Format time display
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Get time warning level
  const getTimeWarning = () => {
    if (timeRemaining <= 10) return 'critical';
    if (timeRemaining <= 30) return 'warning';
    return 'normal';
  };

  const handleAnswerSelect = (index) => {
    if (answerLocked || showFeedback) return;
    
    setSelectedAnswer(index);
    setAnswerLocked(true);
    
    const correct = index === question.correctIndex;
    setIsCorrect(correct);
    
    // Show feedback immediately
    setTimeout(() => {
      setShowFeedback(true);
      
      if (correct) {
        // Show digging animation for correct answer
        setTimeout(() => {
          setShowDigging(true);
          // Check for gem discovery
          const gemFound = Math.random() < island.rewards.gemChance;
          if (gemFound) {
            setTimeout(() => setFoundGem(true), 800);
          }
        }, 500);
      }
      
      // Call onAnswer after animations
      setTimeout(() => {
        onAnswer(index);
      }, correct ? 2000 : 1500);
    }, 300);
  };

  const timeWarning = getTimeWarning();

  return (
    <div className={`min-h-screen bg-gradient-to-br ${island.theme.background} relative overflow-hidden`}>
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.1); }
        }
        
        @keyframes correctPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { transform: scale(1.02); box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
        
        @keyframes wrongShake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes coinFloat {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(-50px) rotate(360deg); opacity: 0; }
        }
        
        @keyframes timePulse {
          0%, 100% { transform: scale(1); color: #ef4444; }
          50% { transform: scale(1.1); color: #dc2626; }
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .correct-pulse {
          animation: correctPulse 1s ease-out;
        }
        
        .wrong-shake {
          animation: wrongShake 0.5s ease-out;
        }
        
        .coin-float {
          animation: coinFloat 1s ease-out forwards;
        }
        
        .time-pulse-critical {
          animation: timePulse 1s ease-in-out infinite;
        }
        
        .glass-dark {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .glass-light {
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
      `}</style>

      {/* Simplified Header */}
      <div className="relative z-10 px-4 pt-[calc(env(safe-area-inset-top)+0.5rem)]">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-3">
          <button
            onClick={() => setShowQuitModal(true)}
            className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center"
          >
            <span className="text-xl">⬅️</span>
          </button>

          <div className="glass-dark rounded-xl px-3 py-1.5">
            <div className="flex items-center gap-2">
              <span className="text-lg">{island.emoji}</span>
              <span className="text-white font-bold text-sm">{island.name}</span>
            </div>
          </div>

          <button
            onClick={() => setSoundOn(!soundOn)}
            className="w-10 h-10 glass-dark rounded-xl flex items-center justify-center"
          >
            <span className="text-xl">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Compact Stats Grid */}
        <div className="glass-dark rounded-2xl p-3 mb-3">
          <div className="grid grid-cols-4 gap-2">
            {/* Timer */}
            <div className="text-center">
              <div className={`text-xl font-black ${
                timeWarning === 'critical' ? 'text-red-400 time-pulse-critical' : 
                timeWarning === 'warning' ? 'text-yellow-400' : 'text-white'
              }`}>
                {formatTime(timeRemaining)}
              </div>
              <div className="text-[10px] text-white/60 font-medium">Time</div>
            </div>

            {/* Question */}
            <div className="text-center">
              <div className="text-xl font-black text-white">
                {questionNumber}/{totalQuestions}
              </div>
              <div className="text-[10px] text-white/60 font-medium">Question</div>
            </div>

            {/* Coins */}
            <div className="text-center relative">
              <div className="text-xl font-black text-yellow-400">
                {coinsEarned}
              </div>
              <div className="text-[10px] text-white/60 font-medium">Coins</div>
              {showFeedback && isCorrect && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-yellow-400 font-bold text-xs coin-float">
                    +{island.rewards.perCorrectAnswer}
                  </span>
                </div>
              )}
            </div>

            {/* Gems */}
            <div className="text-center">
              <div className="text-xl font-black text-cyan-400">
                {gemsFound}
              </div>
              <div className="text-[10px] text-white/60 font-medium">Gems</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="w-full h-1.5 bg-black/30 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 transition-all duration-500"
                style={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Compact Shovels Display */}
        <div className="glass-dark rounded-xl p-2 mb-3">
          <div className="flex items-center justify-center gap-3">
            <span className="text-white/80 font-bold text-sm">Shovels:</span>
            <div className="flex gap-2">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`text-2xl ${
                  i < shovelsRemaining ? '' : 'opacity-30 grayscale'
                }`}>
                  {i < shovelsRemaining ? '⛏️' : '💔'}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Question Section */}
      <div className="px-4">
        {/* Question Card */}
        <div 
          ref={questionRef}
          className={`glass-light rounded-2xl p-4 mb-4 ${
            showFeedback && !isCorrect ? 'wrong-shake' : ''
          }`}
        >
          <div className="text-center mb-1">
            <span className="text-xs font-black text-gray-700 uppercase tracking-wider">
              Question {questionNumber}
            </span>
          </div>
          <h2 className="text-lg font-black text-center text-gray-900 leading-tight">
            {question.prompt}
          </h2>
        </div>

        {/* Answer Options - Compact */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D'];
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctIndex;
            const colors = [
              'from-blue-500 to-blue-600',
              'from-green-500 to-green-600',
              'from-yellow-500 to-yellow-600',
              'from-purple-500 to-purple-600'
            ];
            
            let cardClass = "glass-light";
            let borderClass = "";
            
            if (showFeedback) {
              if (isCorrectAnswer) {
                cardClass = "correct-pulse";
                borderClass = "ring-2 ring-green-400 bg-green-400/30";
              } else if (isSelected && !isCorrect) {
                cardClass = "wrong-shake";
                borderClass = "ring-2 ring-red-400 bg-red-400/30";
              }
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={answerLocked}
                className={`w-full p-3 rounded-xl shadow-md transition-all ${cardClass} ${borderClass} ${
                  !answerLocked ? 'hover:scale-[1.02] active:scale-[0.98]' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${colors[index]} 
                    text-white font-black text-base flex items-center justify-center shadow-sm`}>
                    {letters[index]}
                  </div>
                  <span className="flex-1 text-left font-bold text-gray-900 text-sm">
                    {option}
                  </span>
                  {showFeedback && isCorrectAnswer && (
                    <span className="text-2xl">✅</span>
                  )}
                  {showFeedback && isSelected && !isCorrect && (
                    <span className="text-2xl">❌</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback Message */}
        {showFeedback && (
          <div className="mt-3 text-center">
            <p className="text-sm font-black text-white bg-black/30 backdrop-blur rounded-xl px-3 py-2 inline-block">
              {isCorrect ? 
                `Great! Let's dig! ${island.visualElements.diggingEmoji}` : 
                `Oops! Try the next one! 💪`
              }
            </p>
          </div>
        )}
      </div>

      {/* Digging Animation Overlay */}
      {showDigging && (
        <DiggingAnimation 
          island={island}
          foundGem={foundGem}
          onComplete={() => setShowDigging(false)}
        />
      )}

      {/* Quit Modal - Compact */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-5 max-w-xs w-full shadow-2xl">
            <div className="text-center mb-4">
              <div className="text-4xl mb-2">🗺️</div>
              <h3 className="text-lg font-black text-white">Leave Island?</h3>
              <p className="text-white/70 text-sm">Progress won't be saved!</p>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => setShowQuitModal(false)} 
                className="flex-1 py-2.5 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-bold text-sm"
              >
                Stay
              </button>
              <button 
                onClick={onQuit} 
                className="flex-1 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-bold text-sm"
              >
                Leave
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}