// src/components/Play.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

/* ------------------------------ Data ------------------------------ */
const CATEGORIES = [
  { label: "Art", slug: "art", color: "#E91E63", available: true, icon: "🎨" },
  { label: "Science", slug: "science", color: "#4CAF50", available: true, icon: "🧪" },
  { label: "Sports", slug: "sports", color: "#FF5722", available: true, icon: "🏈" },
  { label: "Entertainment", slug: "entertainment", color: "#9C27B0", available: true, icon: "👑" },
  { label: "Geography", slug: "geography", color: "#2196F3", available: true, icon: "🌍" },
  { label: "History", slug: "history", color: "#FF9800", available: true, icon: "🏛️" },
];

const CHARACTERS = {
  art: "TINA",
  science: "ALBERT", 
  sports: "BONZO",
  entertainment: "POP",
  geography: "TITO",
  history: "HECTOR"
};

const MOTIVATORS = {
  correct: ["Boom! Nailed it.", "Sharp shot!", "Clean hit.", "Right on.", "Brilliant!", "Amazing!"],
  wrong: ["Close one—next spin's yours.", "Toughie—bank it and roll again.", "Learning unlocks wins.", "Almost there!", "Good try!"]
};

const sliceAngle = 360 / CATEGORIES.length;

/* ----------------------------- Motion ----------------------------- */
const FULL_TURNS = 8;
const DURATION_MAIN = 2500;
const OVERSHOOT_DEG = 15;
const DURATION_SETTLE = 300;

/* --------------------------- LocalStorage ------------------------- */
const LS_SOUND = "play_sound_on";
const LS_OWNED_CHARS = "owned_characters";

/* ------------------------------ Components ------------------------------ */

/** Modes Grid (SS1 Design) */
function ModesGrid({ onModeSelect }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-md px-4 pt-12 pb-8">
        {/* Header */}
        <header className="flex items-center mb-8">
          <button className="p-2 hover:bg-gray-200 rounded-lg transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
          <h1 className="flex-1 text-center text-xl font-bold text-gray-900">Choose a game mode</h1>
        </header>

        <div className="space-y-4">
          {/* Classic Mode - Large Card */}
          <button
            onClick={() => onModeSelect('classic')}
            className="w-full relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-400 to-blue-500 p-6 text-left shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
          >
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 opacity-20">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                {CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 40 * Math.cos(sr);
                  const y1 = 50 - 40 * Math.sin(sr);
                  const x2 = 50 + 40 * Math.cos(er);
                  const y2 = 50 - 40 * Math.sin(er);
                  return (
                    <path
                      key={i}
                      d={`M50,50 L${x1},${y1} A40,40 0 ${largeArc} 0 ${x2},${y2} Z`}
                      fill={cat.color}
                      stroke="white"
                      strokeWidth="0.5"
                    />
                  );
                })}
                <circle cx="50" cy="50" r="8" fill="white"/>
              </svg>
            </div>
            
            {/* Floating icons */}
            <div className="absolute top-2 left-8 text-2xl opacity-60">🏆</div>
            <div className="absolute top-8 right-12 text-xl opacity-40">⭐</div>
            <div className="absolute bottom-4 left-4 text-lg opacity-50">🎲</div>
            <div className="absolute bottom-2 right-8 text-2xl opacity-60">🍪</div>
            <div className="absolute top-1/2 left-2 text-sm opacity-40">🥨</div>
            
            <h2 className="text-4xl font-black text-white mb-2 relative z-10">CLASSIC</h2>
          </button>

          {/* Topics Mode */}
          <button
            disabled
            className="w-full rounded-3xl bg-gradient-to-r from-emerald-400 to-emerald-500 p-6 text-left opacity-60"
          >
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">📱</div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">🇺🇸</div>
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">🦕</div>
              </div>
              <h3 className="text-2xl font-black text-white">TOPICS</h3>
            </div>
          </button>

          {/* Bottom row - 2x2 grid */}
          <div className="grid grid-cols-2 gap-4">
            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-yellow-400 to-orange-400 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">💀</div>
              <h4 className="text-lg font-black text-white">SURVIVAL</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-red-400 to-pink-500 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">💰</div>
              <h4 className="text-lg font-black text-white">TREASURE MINE</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-pink-500 to-purple-500 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">⚔️</div>
              <h4 className="text-lg font-black text-white">SURVIVAL ARENA</h4>
            </button>

            <button
              disabled
              className="aspect-square rounded-3xl bg-gradient-to-br from-blue-400 to-cyan-400 p-4 text-left opacity-60"
            >
              <div className="text-2xl mb-2">📱</div>
              <h4 className="text-lg font-black text-white">TRIVIA VIDEO</h4>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Wheel Screen (SS2 Design) */
function WheelClassic({ 
  run, 
  ownedCharacters, 
  onSpin, 
  onBack,
  spinning,
  angle,
  transition,
  result,
  showCallout,
  glowColor,
  soundOn,
  setSoundOn 
}) {
  const [progressSparkle, setProgressSparkle] = useState(-1);

  useEffect(() => {
    // Trigger sparkle animation when progress updates
    const filledCount = run.progress.filter(Boolean).length;
    if (filledCount > 0) {
      setProgressSparkle(filledCount - 1);
      setTimeout(() => setProgressSparkle(-1), 1000);
    }
  }, [run.progress]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-300 to-blue-200 relative overflow-hidden">
      {/* Clouds background */}
      <div className="absolute inset-0">
        <svg viewBox="0 0 400 300" className="w-full h-full">
          <path d="M0,100 Q50,80 100,100 T200,100 Q250,80 300,100 T400,100 L400,300 L0,300 Z" fill="white" opacity="0.8"/>
          <path d="M-50,150 Q0,130 50,150 T150,150 Q200,130 250,150 T350,150 Q400,130 450,150 L450,300 L-50,300 Z" fill="white" opacity="0.6"/>
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-md px-4 pt-12 pb-8">
        {/* Header with stats */}
        <header className="flex items-center justify-between mb-6">
          <button
            onClick={onBack}
            className="p-2 hover:bg-black/10 rounded-lg transition"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
              <span className="text-green-600">✓</span>
              <span className="font-bold text-gray-800">0</span>
            </div>
            <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
              <span className="text-purple-600">🎫</span>
              <span className="font-bold text-gray-800">50</span>
            </div>
            <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
              <span className="text-yellow-600">🪙</span>
              <span className="font-bold text-gray-800">{run.coinsEarned}</span>
            </div>
          </div>
        </header>

        {/* Character Shelf */}
        {ownedCharacters.length > 0 && (
          <div className="flex justify-center mb-4">
            <div className="flex gap-2 px-4 py-2 bg-white/30 rounded-2xl backdrop-blur">
              {ownedCharacters.map(charSlug => {
                const cat = CATEGORIES.find(c => c.slug === charSlug);
                return (
                  <div key={charSlug} className="w-10 h-10 rounded-full bg-white/40 flex items-center justify-center border-2 border-white/60">
                    <span className="text-lg">{cat?.icon}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Progress Arc */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <svg width="200" height="100" viewBox="0 0 200 100" className="overflow-visible">
              {/* Background arc */}
              <path
                d="M 30 80 A 70 70 0 0 1 170 80"
                fill="none"
                stroke="#ffffff40"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Progress segments */}
              {[0, 1, 2].map(i => {
                const segmentLength = 140 / 3; // Total arc length divided by 3
                const startX = 30 + (segmentLength * i * Math.cos(Math.PI / 140 * segmentLength * i));
                const startY = 80 - (segmentLength * i * Math.sin(Math.PI / 140 * segmentLength * i));
                
                let color = "#ffffff40";
                if (run.progress[i]) {
                  color = i === 0 ? "#FF9800" : i === 1 ? "#FFC107" : "#4CAF50";
                }

                return (
                  <g key={i}>
                    <path
                      d={`M ${30 + (segmentLength * i * 0.7)} ${80 - (segmentLength * i * 0.3)} A 70 70 0 0 1 ${30 + (segmentLength * (i + 1) * 0.7)} ${80 - (segmentLength * (i + 1) * 0.3)}`}
                      fill="none"
                      stroke={color}
                      strokeWidth="8"
                      strokeLinecap="round"
                      className="transition-all duration-500"
                    />
                    
                    {/* Sparkle effect */}
                    {progressSparkle === i && (
                      <g className="animate-ping">
                        <circle cx={30 + (segmentLength * (i + 0.5) * 0.7)} cy={80 - (segmentLength * (i + 0.5) * 0.3)} r="4" fill="white" opacity="0.8"/>
                        <circle cx={30 + (segmentLength * (i + 0.5) * 0.7)} cy={80 - (segmentLength * (i + 0.5) * 0.3)} r="2" fill={color}/>
                      </g>
                    )}
                  </g>
                );
              })}
            </svg>
            
            {/* Crown in center */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2">
              <div className="w-8 h-8 bg-white/40 rounded-full flex items-center justify-center border-2 border-white/60">
                <span className="text-lg">👑</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wheel */}
        <section className="flex flex-col items-center mb-8">
          <div className="relative w-80 h-80 rounded-full select-none">
            {/* Glow effect */}
            {glowColor && (
              <div
                className="pointer-events-none absolute -inset-4 rounded-full"
                style={{ boxShadow: `0 0 0 8px ${glowColor}40, 0 0 40px 12px ${glowColor}60` }}
              />
            )}

            <div
              className="absolute inset-0 rounded-full border-4 border-white shadow-2xl overflow-hidden will-change-transform"
              style={{ transform: `rotate(${angle}deg)`, transition }}
            >
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="block">
                {CATEGORIES.map((cat, i) => {
                  const start = i * sliceAngle;
                  const end = start + sliceAngle;
                  const largeArc = sliceAngle > 180 ? 1 : 0;
                  const sr = (Math.PI * start) / 180;
                  const er = (Math.PI * end) / 180;
                  const x1 = 50 + 45 * Math.cos(sr);
                  const y1 = 50 - 45 * Math.sin(sr);
                  const x2 = 50 + 45 * Math.cos(er);
                  const y2 = 50 - 45 * Math.sin(er);
                  
                  // Icon position
                  const iconAngle = start + sliceAngle / 2;
                  const iconRadius = 28;
                  const iconX = 50 + iconRadius * Math.cos((iconAngle * Math.PI) / 180);
                  const iconY = 50 - iconRadius * Math.sin((iconAngle * Math.PI) / 180);
                  
                  return (
                    <g key={cat.slug}>
                      <path
                        d={`M50,50 L${x1},${y1} A45,45 0 ${largeArc} 0 ${x2},${y2} Z`}
                        fill={cat.color}
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth="0.5"
                      />
                      <text
                        x={iconX}
                        y={iconY}
                        fill="#000000"
                        fontSize="8"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="font-bold"
                      >
                        {cat.icon}
                      </text>
                    </g>
                  );
                })}
                {/* Center hub */}
                <circle cx="50" cy="50" r="12" fill="white" stroke="#E0E0E0" strokeWidth="1" />
              </svg>

              {/* SPIN Button */}
              <button
                onClick={onSpin}
                disabled={spinning}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white text-black font-black text-lg shadow-lg transition-all ${
                  spinning ? "opacity-60 cursor-not-allowed scale-95" : "hover:scale-105 active:scale-95"
                }`}
              >
                SPIN
              </button>
            </div>

            {/* Pointer */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 -translate-y-2 z-20">
              <div className="w-6 h-8 bg-white rounded-lg shadow-md flex items-end justify-center pb-1">
                <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-600"/>
              </div>
            </div>

            {/* Result callout */}
            {showCallout && result && (
              <div className="absolute left-1/2 -translate-x-1/2 -bottom-16 z-30">
                <div className="px-4 py-2 rounded-2xl bg-white/90 backdrop-blur border border-white shadow-lg text-gray-800 font-semibold">
                  <span className="mr-2">{result.cat.icon}</span>
                  {result.cat.label}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom coin indicator */}
        <div className="fixed bottom-4 right-4 z-20">
          <div className="bg-black/80 backdrop-blur rounded-2xl px-4 py-2 flex items-center gap-2 border border-white/20">
            <span className="text-pink-400">🎫</span>
            <span className="text-white font-bold">60</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Result Interstitial (SS3 Design) */
function ResultInterstitial({ category, onComplete, isBonus = false }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  if (isBonus) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-blue-600 flex flex-col items-center justify-center text-white">
        <h2 className="text-5xl font-black mb-8">Bonus Question</h2>
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
          <span className="text-6xl">⭐</span>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{ backgroundColor: category.color }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}}/>
        <div className="absolute top-32 right-16 w-16 h-16 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}/>
        <div className="absolute bottom-32 left-20 w-12 h-12 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1s'}}/>
        <div className="absolute bottom-16 right-12 w-24 h-24 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}/>
      </div>

      <div className="relative z-10 text-center">
        <h2 className="text-6xl font-black mb-8 animate-fade-in">{category.label}</h2>
        <p className="text-2xl font-bold opacity-80">{CHARACTERS[category.slug]}</p>
        
        <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center mt-8 mx-auto animate-pulse">
          <span className="text-6xl">{category.icon}</span>
        </div>
      </div>
    </div>
  );
}

/** Question Card */
function QuestionCard({ question, category, onAnswer, run, onContinue, isBonus = false }) {
  const [timeLeft, setTimeLeft] = useState(30);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [usedLifeline, setUsedLifeline] = useState(null);
  const [hiddenOptions, setHiddenOptions] = useState([]);
  const [showAudience, setShowAudience] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const timerRef = useRef(null);

  // Mock question data
  const mockQuestion = {
    text: `What is a key concept in ${category.label}?`,
    options: [
      "Correct answer option",
      "Wrong answer A", 
      "Wrong answer B",
      "Wrong answer C"
    ],
    correctIndex: 0
  };

  const currentQ = question || mockQuestion;

  useEffect(() => {
    setTimeLeft(30);
    setSelectedAnswer(null);
    setShowResult(false);
    setUsedLifeline(null);
    setHiddenOptions([]);
    setShowAudience(false);
    setShowConfetti(false);

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          handleAnswer(null);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [question]);

  const handleAnswer = (optionIndex) => {
    if (showResult) return;
    
    clearInterval(timerRef.current);
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    setShowConfetti(true);
    
    const correct = optionIndex === currentQ.correctIndex;
    
    // Trigger confetti and haptic
    try {
      if (navigator.vibrate) {
        navigator.vibrate(correct ? [100, 50, 100] : [200]);
      }
    } catch {}
    
    setTimeout(() => {
      setShowConfetti(false);
      onAnswer(correct);
    }, 2000);
  };

  const use5050 = () => {
    if (run.lifelines.fifty || usedLifeline || isBonus) return;
    
    const wrongIndices = currentQ.options
      .map((_, i) => i)
      .filter(i => i !== currentQ.correctIndex);
    
    const toHide = wrongIndices.slice(0, 2);
    setHiddenOptions(toHide);
    setUsedLifeline('fifty');
  };

  const useAudience = () => {
    if (run.lifelines.audience || usedLifeline || isBonus) return;
    setShowAudience(true);
    setUsedLifeline('audience');
  };

  const isCorrect = selectedAnswer === currentQ.correctIndex;
  const motivator = showResult 
    ? MOTIVATORS[isCorrect ? 'correct' : 'wrong'][Math.floor(Math.random() * MOTIVATORS[isCorrect ? 'correct' : 'wrong'].length)]
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Confetti Effect */}
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50">
          {[...Array(isCorrect ? 30 : 10)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${isCorrect ? 'bg-yellow-400' : 'bg-blue-400'} rounded-full animate-bounce`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>
      )}

      <div className="mx-auto max-w-md px-5 pt-16 pb-8">
        {/* Header with timer */}
        <header className="text-center mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-gray-400">
              {isBonus ? "Bonus" : `Question ${run.qIndex + 1}/3`}
            </div>
            <div className={`text-3xl font-black ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {timeLeft}
            </div>
          </div>
          
          {/* Timer bar */}
          <div className="w-full bg-white/20 rounded-full h-2 mb-6 overflow-hidden">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-red-400' : 'bg-blue-400'
              }`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        </header>

        {/* Question */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white/60"
              style={{ backgroundColor: category.color }}
            >
              <span className="text-2xl">{category.icon}</span>
            </div>
            <div>
              <div className="text-sm text-gray-400">{category.label}</div>
              <div className="text-xs text-gray-500">{CHARACTERS[category.slug]}</div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold leading-relaxed">{currentQ.text}</h2>
        </div>

        {/* Options */}
        <div className="space-y-4 mb-8">
          {currentQ.options.map((option, index) => {
            if (hiddenOptions.includes(index)) return null;
            
            const selected = selectedAnswer === index;
            const correct = index === currentQ.correctIndex;
            
            let bgClass = "bg-white/10 border-white/20 text-white";
            let borderClass = "border-2";
            
            if (showResult && selected) {
              if (correct) {
                bgClass = "bg-green-500/30 border-green-400 text-green-100";
                borderClass = "border-4";
              } else {
                bgClass = "bg-red-500/30 border-red-400 text-red-100";
                borderClass = "border-4";
              }
            } else if (showResult && correct) {
              bgClass = "bg-green-500/30 border-green-400 text-green-100";
              borderClass = "border-4";
            } else if (selected) {
              bgClass = "bg-white/20 border-white/40 text-white";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full p-5 rounded-2xl ${borderClass} text-left transition-all duration-300 ${bgClass} ${
                  !showResult ? 'hover:bg-white/15 hover:scale-[1.02] active:scale-[0.98]' : ''
                }`}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideInUp 0.4s ease-out both'
                }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-black">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-semibold">{option}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Lifelines */}
        {!showResult && !isBonus && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={use5050}
              disabled={run.lifelines.fifty || usedLifeline}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                run.lifelines.fifty || usedLifeline 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95'
              }`}
            >
              50:50
            </button>
            <button
              onClick={useAudience}
              disabled={run.lifelines.audience || usedLifeline}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                run.lifelines.audience || usedLifeline 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95'
              }`}
            >
              👥 Ask
            </button>
          </div>
        )}

        {/* Audience Poll Overlay */}
        {showAudience && (
          <div className="mb-8 p-6 bg-white/10 rounded-2xl border border-white/20 backdrop-blur">
            <h4 className="text-lg font-bold mb-4 text-center">🎯 Audience Poll</h4>
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                if (hiddenOptions.includes(index)) return null;
                // Bias towards correct answer but add randomness
                const basePercentage = index === currentQ.correctIndex ? 40 + Math.random() * 25 : Math.random() * 20;
                const percentage = Math.min(basePercentage, 70);
                
                return (
                  <div key={index} className="flex items-center gap-3">
                    <span className="text-sm font-bold w-6">{String.fromCharCode(65 + index)}</span>
                    <div className="flex-1 bg-white/20 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full transition-all duration-2000 ease-out"
                        style={{ 
                          width: `${percentage}%`,
                          animationDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                    <span className="text-sm font-bold w-12 text-right">{Math.round(percentage)}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Result & Continue */}
        {showResult && (
          <div className="text-center">
            <div className="text-6xl mb-4 animate-bounce">
              {isCorrect ? '🎉' : '💭'}
            </div>
            <p className="text-2xl font-bold mb-6 text-center">{motivator}</p>
            
            {isBonus && (
              <div className="mb-4">
                {isCorrect ? (
                  <div className="text-green-400 font-bold">Character Unlocked! 🎉</div>
                ) : (
                  <div className="text-yellow-400 font-bold">Almost there—spin again to earn it! 💪</div>
                )}
              </div>
            )}
            
            <button
              onClick={onContinue}
              className="bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95"
            >
              Continue
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
}

/** Character Picker */
function CharacterPicker({ onSelect }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <div className="mx-auto max-w-md px-5 pt-16 pb-8">
        <header className="text-center mb-12">
          <div className="text-6xl mb-4">🏆</div>
          <h1 className="text-4xl font-black mb-4">Perfect Round!</h1>
          <p className="text-xl opacity-90">Choose a character to unlock</p>
        </header>

        <div className="grid grid-cols-2 gap-6">
          {Object.entries(CHARACTERS).map(([categorySlug, name]) => {
            const cat = CATEGORIES.find(c => c.slug === categorySlug);
            return (
              <button
                key={categorySlug}
                onClick={() => onSelect(categorySlug)}
                className="p-6 rounded-3xl border-2 border-white/20 bg-white/10 backdrop-blur text-center hover:bg-white/20 hover:scale-105 transition-all duration-300 active:scale-95"
              >
                <div className="text-4xl mb-3">{cat.icon}</div>
                <div className="font-black text-lg mb-1">{name}</div>
                <div className="text-sm opacity-75 capitalize">{cat.label}</div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------ Main Play Component ------------------------------ */
export default function Play() {
  const navigate = useNavigate();
  const location = useLocation();

  // Game state
  const [gameState, setGameState] = useState('modes');
  const [run, setRun] = useState({
    id: Date.now(),
    qIndex: 0,
    progress: [false, false, false],
    lifelines: { fifty: false, audience: false },
    coinsEarned: 0
  });
  const [lastResult, setLastResult] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [ownedCharacters, setOwnedCharacters] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(LS_OWNED_CHARS) || '[]');
    } catch {
      return [];
    }
  });

  // Wheel state
  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showCallout, setShowCallout] = useState(false);
  const [glowColor, setGlowColor] = useState(null);

  // Sound
  const [soundOn, setSoundOn] = useState(() => localStorage.getItem(LS_SOUND) !== "0");
  const spinAudioRef = useRef(null);
  const progressSoundRef = useRef(null);

  useEffect(() => localStorage.setItem(LS_SOUND, soundOn ? "1" : "0"), [soundOn]);
  useEffect(() => {
    try {
      localStorage.setItem(LS_OWNED_CHARS, JSON.stringify(ownedCharacters));
    } catch {}
  }, [ownedCharacters]);

  useEffect(() => {
    // Setup audio
    const spinAudio = new Audio("/sounds/spin.mp3");
    spinAudio.loop = true;
    spinAudio.volume = 0.7;
    spinAudioRef.current = spinAudio;

    const progressAudio = new Audio("/sounds/chime.mp3");
    progressAudio.volume = 0.5;
    progressSoundRef.current = progressAudio;

    return () => {
      try {
        spinAudio.pause();
        spinAudio.src = "";
        progressAudio.src = "";
      } catch {}
    };
  }, []);

  const prefersReduced = useMemo(
    () => (typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false),
    []
  );

  const tRef = useRef({ a: 0, b: 0, c: 0 });
  useEffect(() => {
    return () => {
      try {
        spinAudioRef.current?.pause();
      } catch {}
      Object.values(tRef.current).forEach((id) => id && clearTimeout(id));
    };
  }, []);

  // Wheel helpers
  const mod360 = (deg) => ((deg % 360) + 360) % 360;

  const startSpinSound = () => {
    if (!soundOn) return;
    try {
      spinAudioRef.current.currentTime = 0;
      spinAudioRef.current.play();
    } catch {}
  };

  const stopSpinSound = () => {
    try {
      spinAudioRef.current?.pause();
      spinAudioRef.current.currentTime = 0;
    } catch {}
  };

  const playProgressSound = () => {
    if (!soundOn) return;
    try {
      progressSoundRef.current.currentTime = 0;
      progressSoundRef.current.play();
    } catch {}
  };

  const spin = () => {
    if (spinning) return;
    setResult(null);
    setShowCallout(false);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    // Choose slice
    const index = Math.floor(Math.random() * CATEGORIES.length);
    const cat = CATEGORIES[index];

    // Calculate rotation
    const current = mod360(angle);
    const pointerAngle = 0; // Pointer at top
    const centerOfSlice = index * sliceAngle + sliceAngle / 2;
    const targetAngle = 360 - centerOfSlice; // Reverse for clockwise
    let deltaBase = mod360(targetAngle - current);
    
    // Add full rotations and jitter
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.3);
    const delta = FULL_TURNS * 360 + deltaBase + jitter;

    // Stage 1: main spin with overshoot
    const overshootTarget = angle + delta + OVERSHOOT_DEG;
    setTransition(`transform ${prefersReduced ? 800 : DURATION_MAIN}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`);
    setAngle(overshootTarget);

    try {
      if (navigator.vibrate && !prefersReduced) navigator.vibrate([20, 50, 20]);
    } catch {}

    // Stage 2: settle back
    tRef.current.a = setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 200 : DURATION_SETTLE}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`);
      setAngle((prev) => prev - OVERSHOOT_DEG);
    }, prefersReduced ? 800 : DURATION_MAIN);

    // Stage 3: reveal result
    tRef.current.b = setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat, index });
      setLastResult({ categorySlug: cat.slug, color: cat.color, icon: cat.icon });
      setGlowColor(cat.color);
      setShowCallout(true);
      
      // Auto-advance to interstitial
      setTimeout(() => {
        setShowCallout(false);
        setGameState('interstitial');
      }, 1200);
      
      tRef.current.c = setTimeout(() => setGlowColor(null), 800);
    }, (prefersReduced ? 800 : DURATION_MAIN) + (prefersReduced ? 200 : DURATION_SETTLE) + 100);
  };

  const handleAnswer = (correct) => {
    // Update run progress
    const newProgress = [...run.progress];
    newProgress[run.qIndex] = correct;
    
    const newRun = {
      ...run,
      progress: newProgress,
      coinsEarned: run.coinsEarned + (correct ? 5 : 0),
      qIndex: run.qIndex + 1
    };

    setRun(newRun);

    // Play progress sound and trigger animation
    if (correct) {
      playProgressSound();
    }

    // Check if run is complete
    if (run.qIndex >= 2) {
      // Run complete
      const perfectRun = newProgress.every(Boolean);
      if (perfectRun) {
        setTimeout(() => setGameState('characterPicker'), 1000);
      } else {
        // Return to modes
        setTimeout(() => setGameState('modes'), 1500);
      }
    } else {
      // Continue to next question
      setTimeout(() => setGameState('wheel'), 1000);
    }
  };

  const handleCharacterSelect = (category) => {
    setSelectedCharacter(category);
    setGameState('bonusInterstitial');
  };

  const handleBonusAnswer = (correct) => {
    if (correct && selectedCharacter) {
      // Unlock character
      setOwnedCharacters(prev => [...new Set([...prev, selectedCharacter])]);
    }
    
    // Return to modes after delay
    setTimeout(() => {
      setGameState('modes');
      resetRun();
    }, 3000);
  };

  const resetRun = () => {
    setRun({
      id: Date.now(),
      qIndex: 0,
      progress: [false, false, false],
      lifelines: { fifty: false, audience: false },
      coinsEarned: 0
    });
    setSelectedCharacter(null);
    setLastResult(null);
  };

  const handleModeSelect = (mode) => {
    if (mode === 'classic') {
      resetRun();
      setGameState('wheel');
    }
  };

  const handleBack = () => {
    setGameState('modes');
    resetRun();
  };

  const continueFromQuestion = () => {
    setGameState('wheel');
  };

  // Render current screen
  switch (gameState) {
    case 'modes':
      return <ModesGrid onModeSelect={handleModeSelect} />;
      
    case 'wheel':
      return (
        <WheelClassic 
          run={run}
          ownedCharacters={ownedCharacters}
          onSpin={spin}
          onBack={handleBack}
          spinning={spinning}
          angle={angle}
          transition={transition}
          result={result}
          showCallout={showCallout}
          glowColor={glowColor}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
        />
      );
      
    case 'interstitial':
      return (
        <ResultInterstitial 
          category={lastResult ? CATEGORIES.find(c => c.slug === lastResult.categorySlug) : CATEGORIES[0]}
          onComplete={() => setGameState('question')}
        />
      );
      
    case 'question':
      return (
        <QuestionCard
          question={null}
          category={lastResult ? CATEGORIES.find(c => c.slug === lastResult.categorySlug) : CATEGORIES[0]}
          onAnswer={handleAnswer}
          run={run}
          onContinue={continueFromQuestion}
        />
      );
      
    case 'characterPicker':
      return <CharacterPicker onSelect={handleCharacterSelect} />;
      
    case 'bonusInterstitial':
      return (
        <ResultInterstitial 
          category={CATEGORIES.find(c => c.slug === selectedCharacter)}
          onComplete={() => setGameState('bonusQuestion')}
          isBonus={true}
        />
      );
      
    case 'bonusQuestion':
      return (
        <QuestionCard
          question={null}
          category={CATEGORIES.find(c => c.slug === selectedCharacter) || CATEGORIES[0]}
          onAnswer={handleBonusAnswer}
          run={{ ...run, lifelines: { fifty: true, audience: true } }}
          onContinue={() => {
            setTimeout(() => {
              setGameState('modes');
              resetRun();
            }, 1000);
          }}
          isBonus={true}
        />
      );
      
    default:
      return <ModesGrid onModeSelect={handleModeSelect} />;
  }
}