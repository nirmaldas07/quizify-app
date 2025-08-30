// src/components/Play/modes/classic/QuestionScreen.jsx

import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";
import { vibrate, playSound } from "./config";

export default function QuestionScreen({ 
  question, 
  category, 
  onAnswer, 
  run, 
  timeLeft, 
  usedLifelines, 
  onUseLifeline,
  eliminatedOptions,
  audienceData,
  onBack,
  timeUp,
  onTimeUpBackToWheel,
  soundOn
}) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [confirmQuit, setConfirmQuit] = useState(false);
  const promptRef = useRef(null);
  const questionBoxRef = useRef(null);
  const [confettiBox, setConfettiBox] = useState(null);

  useEffect(() => {
    if (!showResult || !promptRef.current) return;
    const r = promptRef.current.getBoundingClientRect();
    setConfettiBox({
      x: r.left,
      y: r.top - 300,
      w: r.width,
      h: 8
    });
  }, [showResult]);

  const handleAnswer = (optionIndex) => {
    if (showResult) return;
    
    setSelectedAnswer(optionIndex);
    setShowResult(true);
    
    const correct = optionIndex === question.correctIndex;
    
    vibrate(correct ? [50, 30, 50] : [200]);
    if (soundOn) playSound(correct ? "/sounds/correct.mp3" : "/sounds/wrong.mp3", 0.7);

    setTimeout(() => {
      onAnswer(correct, null);
    }, 1500);
  };

  const isCorrect = selectedAnswer === question.correctIndex;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      <div ref={questionBoxRef} className="relative h-full overflow-y-auto px-5 pt-16 pb-[calc(env(safe-area-inset-bottom)+5.25rem)]">
        <div className="mb-4">
          <button
            onClick={() => setConfirmQuit(true)}
            className="h-10 w-10 rounded-full border border-base-border grid place-items-center bg-white/5 hover:bg-white/10 transition"
          >
            ←
          </button>
        </div>

        <div className="text-center mb-6">
          <div className={`text-4xl font-black mb-2 ${timeLeft <= 10 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
            {timeLeft}
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className={`h-full rounded-full transition-all duration-1000 ${
                timeLeft <= 10 ? 'bg-red-400' : 'bg-blue-400'
              }`}
              style={{ width: `${(timeLeft / 30) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 mb-6">
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
            style={{ backgroundColor: category.color }}
          >
            {category.icon}
          </div>
          <div>
            <div className="text-lg font-bold">{category.name}</div>
            <div className="text-sm text-gray-400">Question {run.qIndex + 1}/3</div>
          </div>
        </div>

        <h2 ref={promptRef} className="text-xl font-semibold mb-6 leading-relaxed">
          {question.prompt}
        </h2>

        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isEliminated = eliminatedOptions.includes(index);
            const selected = selectedAnswer === index;
            const correct = index === question.correctIndex;
            
            let bgClass = "bg-white/10 border-white/20";
            let opacity = "opacity-100";
            
            if (isEliminated) {
              opacity = "opacity-30";
            } else if (showResult && selected) {
              bgClass = correct 
                ? "bg-green-500/30 border-green-400" 
                : "bg-red-500/30 border-red-400";
            } else if (showResult && correct) {
              bgClass = "bg-green-500/30 border-green-400";
            } else if (selected) {
              bgClass = "bg-white/20 border-white/40";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult || isEliminated}
                className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-300 ${bgClass} ${opacity} ${
                  !showResult && !isEliminated ? 'hover:bg-white/15 active:scale-98' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-sm">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="font-medium flex-1">{option}</span>
                  {audienceData && (
                    <span className="text-xs text-base-muted">{Math.round(audienceData[index])}%</span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {!showResult && (
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => onUseLifeline('fifty')}
              disabled={usedLifelines.fifty}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                usedLifelines.fifty 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-purple-600 border-purple-400 text-white hover:bg-purple-500 active:scale-95'
              }`}
            >
              50:50
            </button>
            <button
              onClick={() => onUseLifeline('audience')}
              disabled={usedLifelines.audience}
              className={`flex-1 p-4 rounded-2xl border-2 font-bold transition-all ${
                usedLifelines.audience 
                  ? 'bg-gray-700 border-gray-600 text-gray-400' 
                  : 'bg-blue-600 border-blue-400 text-white hover:bg-blue-500 active:scale-95'
              }`}
            >
              👥 Ask
            </button>
          </div>
        )}

        {showResult && (
          <div className="relative text-center">
            {isCorrect && (
              <div className="absolute inset-0 pointer-events-none">
                <Confetti
                  recycle={false}
                  numberOfPieces={120}
                  gravity={0.9}
                  tweenDuration={1800}
                  confettiSource={confettiBox || {
                    x: 0,
                    y: 0,
                    w: (typeof window !== "undefined" ? window.innerWidth : 320),
                    h: 1
                  }}
                />
              </div>
            )}
            
            <button
              onClick={() => onAnswer(isCorrect, null, true)}
              className="relative z-10 bg-white text-black font-black py-4 px-8 rounded-2xl text-lg hover:bg-gray-100 transition-all active:scale-95"
            >
              Continue
            </button>
          </div> 
        )}

        {timeUp && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6">
            <div className="w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center">
              <div className="text-lg font-bold mb-2">Time's up</div>
              <p className="text-base-muted mb-5">You ran out of time.</p>
              <button
                onClick={onTimeUpBackToWheel}
                className="mx-auto w-48 py-3 rounded-xl bg-brand-blue text-white font-semibold hover:bg-brand-blue/90 transition"
              >
                Back to Wheel
              </button>
            </div>
          </div>
        )}

        {confirmQuit && (
          <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-6">
            <div className="w-full max-w-sm rounded-2xl bg-base-card border border-base-border p-5 text-center">
              <div className="text-lg font-bold mb-2">Want to quit?</div>
              <p className="text-base-muted mb-5">You'll lose this question's progress.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setConfirmQuit(false)}
                  className="flex-1 py-3 rounded-xl border border-base-border bg-white/5 hover:bg-white/10 transition"
                >
                  No
                </button>
                <button
                  onClick={onBack}
                  className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}