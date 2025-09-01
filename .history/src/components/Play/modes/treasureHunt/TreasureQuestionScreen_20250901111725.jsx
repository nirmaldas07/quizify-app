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
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.1); filter: brightness(1.2); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes correctPulse {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
          50% { transform: scale(1.05); box-shadow: 0 0 20px 10px rgba(34, 197, 94, 0); }
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
        
        @keyframes gemSparkle {
          0%, 100% { transform: scale(1) rotate(0deg); filter: brightness(1); }
          50% { transform: scale(1.3) rotate(180deg); filter: brightness(1.5); }
        }
        
        @keyframes timePulse {
          0%, 100% { transform: scale(1); color: inherit; }
          50% { transform: scale(1.1); color: #ef4444; }
        }
        
        .shake-animation {
          animation: shake 0.5s ease-in-out;
        }
        
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        
        .slide-in {
          animation: slideIn 0.5s ease-out;
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
        
        .gem-sparkle {
          animation: gemSparkle 1s ease-in-out;
        }
        
        .time-pulse-critical {
          animation: timePulse 1s ease-in-out infinite;
        }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        
        .option-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        .option-card:not(.disabled):hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }
        
        .option-card.disabled {
          cursor: not-allowed;
          opacity: 0.7;
        }
        
        .progress-bar {
          transition: width 0.3s ease;
        }
      `}</style>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {island.visualElements.bgEmojis.map((emoji, index) => (
          <div
            key={index}
            className="absolute text-7xl opacity-10 float-animation"
            style={{
              top: `${20 + index * 15}%`,
              left: `${10 + index * 18}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${3 + index}s`
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Header - Mobile Optimized */}
      <div className="relative z-10 px-3 pt-[calc(env(safe-area-inset-top)+4rem)]">
        <div className="flex justify-between items-center mb-3">
          {/* Quit Button */}
          <button
            onClick={() => setShowQuitModal(true)}
            className="w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">⬅️</span>
          </button>

          {/* Island Name */}
          <div className="glass-card rounded-xl px-3 py-1.5 shadow-lg">
            <div className="flex items-center gap-1.5">
              <span className="text-xl">{island.emoji}</span>
              <span className="text-gray-800 font-bold text-sm">{island.name}</span>
            </div>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={() => setSoundOn(!soundOn)}
            className="w-10 h-10 glass-card rounded-xl shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
          >
            <span className="text-xl">{soundOn ? '🔊' : '🔇'}</span>
          </button>
        </div>

        {/* Game Stats Bar - Compact */}
        <div className="glass-card rounded-xl p-3 shadow-xl mb-3">
          <div className="grid grid-cols-4 gap-2">
            {/* Timer */}
            <div className="text-center">
              <div className={`text-xl font-black ${
                timeWarning === 'critical' ? 'text-red-600 time-pulse-critical' : 
                timeWarning === 'warning' ? 'text-orange-600' : 'text-gray-800'
              }`}>
                {formatTime(timeRemaining)}
              </div>
              <div className="text-[10px] text-gray-700 font-medium">Time</div>
            </div>

            {/* Question Progress */}
            <div className="text-center">
              <div className="text-xl font-black text-gray-800">
                {questionNumber}/{totalQuestions}
              </div>
              <div className="text-[10px] text-gray-700 font-medium">Question</div>
            </div>

            {/* Coins */}
            <div className="text-center relative">
              <div className="text-xl font-black text-orange-600">
                {coinsEarned}
              </div>
              <div className="text-[10px] text-gray-700 font-medium">Coins</div>
              {showFeedback && isCorrect && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-orange-600 font-bold text-xs coin-float">
                    +{island.rewards.perCorrectAnswer}
                  </span>
                </div>
              )}
            </div>

            {/* Gems */}
            <div className="text-center relative">
              <div className="text-xl font-black text-blue-600">
                {gemsFound}
              </div>
              <div className="text-[10px] text-gray-700 font-medium">Gems</div>
              {foundGem && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-blue-600 text-xl gem-sparkle">💎</span>
                </div>
              )}
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="w-full h-1.5 bg-gray-800/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-600 progress-bar"
                style={{ width: `${((questionNumber - 1) / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Shovels Display */}
        <div className="flex justify-center mb-3 pt-4">
          <ShovelDisplay 
            shovelsRemaining={shovelsRemaining} 
            showBreak={showFeedback && !isCorrect}
          />
        </div>
      </div>

      {/* Question Card - Mobile Optimized */}
      <div className="px-3 pt-20 slide-in">
        <div 
          ref={questionRef}
          className={`glass-card rounded-2xl shadow-xl p-4 mb-4 ${
            showFeedback && !isCorrect ? 'wrong-shake' : ''
          }`}
        >
          <div className="text-center mb-2">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-wider">
              Question {questionNumber}
            </span>
          </div>
          <h2 className="text-lg font-bold text-center text-gray-800 leading-relaxed">
            {question.prompt}
          </h2>
        </div>

        {/* Answer Options - Mobile Optimized */}
        <div className="space-y-2.5">
          {question.options.map((option, index) => {
            const letters = ['A', 'B', 'C', 'D'];
            const isSelected = selectedAnswer === index;
            const isCorrectAnswer = index === question.correctIndex;
            
            let cardClass = "glass-card option-card";
            let borderClass = "border border-gray-800/20";
            
            if (showFeedback) {
              if (isCorrectAnswer) {
                cardClass += " correct-pulse";
                borderClass = "border-2 border-green-500 bg-green-400/20";
              } else if (isSelected && !isCorrect) {
                cardClass += " wrong-shake";
                borderClass = "border-2 border-red-500 bg-red-400/20";
              }
              cardClass += " disabled";
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={answerLocked}
                className={`w-full p-3 rounded-xl shadow-lg ${cardClass} ${borderClass}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                    index === 0 ? 'from-blue-400 to-blue-500' :
                    index === 1 ? 'from-green-400 to-green-500' :
                    index === 2 ? 'from-yellow-400 to-yellow-500' :
                    'from-purple-400 to-purple-500'
                  } text-white font-bold text-lg flex items-center justify-center shadow-md`}>
                    {letters[index]}
                  </div>
                  <span className="flex-1 text-left font-medium text-gray-800 text-sm">
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

        {/* Feedback Message - Mobile Optimized */}
        {showFeedback && (
          <div className="mt-3 text-center slide-in">
            <p className="text-base font-bold text-gray-800">
              {isCorrect ? 
                `Great job! Let's dig for treasure! ${island.visualElements.diggingEmoji}` : 
                `Oops! Your shovel broke! Try the next question! 💪`
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

      {/* Quit Confirmation Modal */}
      {showQuitModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-6 max-w-sm w-full shadow-2xl slide-in border border-white/10">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-white mb-2">Leave the Island?</h3>
              <p className="text-white/70">Your progress won't be saved!</p>
            </div>
            
            <div className="flex gap-3">
              <button 
                onClick={() => setShowQuitModal(false)} 
                className="flex-1 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Keep Playing
              </button>
              <button 
                onClick={onQuit} 
                className="flex-1 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
              >
                Leave Island
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}