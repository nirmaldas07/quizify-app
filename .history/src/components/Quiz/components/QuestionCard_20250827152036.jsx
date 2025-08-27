// src/components/Quiz/components/QuestionCard.jsx
import { useEffect, useRef, useState } from "react";
import useSound from "use-sound";

const QuestionCard = ({
  question,
  selected,
  onSelect,
  isPractice,
  isLocked,
  eliminated,
  audiencePercentages,
  practiceSoundsOn = true
}) => {
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.7, interrupt: true });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.7, interrupt: true });
  const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.3, interrupt: true });
  const [playClick] = useSound("/sounds/click.mp3", { volume: 0.5, interrupt: true });
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [bounceOption, setBounceOption] = useState(null);
  const [sparkles, setSparkles] = useState([]);
  const [showCharacter, setShowCharacter] = useState(false);
  
  const cardRef = useRef(null);
  const optionsRef = useRef([]);

  // Character reactions based on performance
  const getCharacterEmoji = () => {
    if (selected === null) return "🤔";
    if (selected === question.answerIndex) return "🎉";
    return "😅";
  };

  const getEncouragementMessage = () => {
    if (selected === null) return "Take your time! You've got this!";
    if (selected === question.answerIndex) {
      const messages = [
        "Amazing! You're so smart!",
        "Fantastic! Keep it up!",
        "Brilliant! You're on fire!",
        "Awesome! You rock!",
        "Perfect! You're a star!"
      ];
      return messages[Math.floor(Math.random() * messages.length)];
    }
    const messages = [
      "Good try! Let's learn together!",
      "Almost there! You're getting better!",
      "Nice effort! Learning is fun!",
      "Keep going! You're doing great!"
    ];
    return messages[Math.floor(Math.random() * messages.length)];
  };

  // Enhanced confetti animation
  const createMagicConfetti = (buttonRect) => {
    if (!buttonRect) return;

    const colors = ["#FFD700", "#FF69B4", "#00CED1", "#32CD32", "#FF6347", "#9370DB"];
    const shapes = ["🌟", "⭐", "✨", "🎊", "🎉"];
    
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "999";
    document.body.appendChild(container);

    const cx = buttonRect.left + buttonRect.width / 2;
    const cy = buttonRect.top + buttonRect.height / 2;

    // Create confetti particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement("div");
      particle.textContent = Math.random() > 0.7 ? shapes[Math.floor(Math.random() * shapes.length)] : "";
      
      if (!particle.textContent) {
        const size = 6 + Math.random() * 6;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = colors[i % colors.length];
        particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "20%";
      } else {
        particle.style.fontSize = "16px";
      }
      
      particle.style.position = "fixed";
      particle.style.left = `${cx}px`;
      particle.style.top = `${cy}px`;
      particle.style.transform = "translate(-50%, -50%)";
      
      container.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 20 + Math.random() * 0.5;
      const velocity = 80 + Math.random() * 60;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 50;

      particle.animate([
        { 
          transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
          opacity: 1 
        },
        { 
          transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1.2) rotate(360deg)`,
          opacity: 1,
          offset: 0.7
        },
        { 
          transform: `translate(calc(-50% + ${tx * 1.5}px), calc(-50% + ${ty * 1.5}px)) scale(0) rotate(720deg)`,
          opacity: 0 
        }
      ], {
        duration: 1200,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
    }

    setTimeout(() => container.remove(), 1300);
  };

  // Sparkle animation for hover
  const createSparkle = (x, y) => {
    const sparkle = {
      id: Math.random(),
      x: x + Math.random() * 40 - 20,
      y: y + Math.random() * 40 - 20,
      size: Math.random() * 8 + 4,
      opacity: 1
    };
    
    setSparkles(prev => [...prev, sparkle]);
    
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== sparkle.id));
    }, 1000);
  };

  // Play sounds and effects
  useEffect(() => {
    if (!isPractice || !practiceSoundsOn || selected === null) return;
    
    setTimeout(() => {
      if (selected === question.answerIndex) {
        playCorrect();
        setShowCharacter(true);
        setTimeout(() => setShowCharacter(false), 2000);
      } else {
        playWrong();
      }
      setShowFeedback(true);
    }, 300);
  }, [selected, isPractice, practiceSoundsOn, question.answerIndex, playCorrect, playWrong]);

  const handleOptionClick = (optIndex, event) => {
    if (isLocked) return;
    
    if (practiceSoundsOn) {
      playClick();
    }
    
    // Bounce animation
    setBounceOption(optIndex);
    setTimeout(() => setBounceOption(null), 600);
    
    onSelect(optIndex, event);
    
    // Magic effects for correct answers
    if (isPractice && optIndex === question.answerIndex && selected === null) {
      setTimeout(() => {
        createMagicConfetti(event.currentTarget.getBoundingClientRect());
      }, 200);
    }
    
    // Haptic feedback
    try { 
      if (optIndex === question.answerIndex) {
        navigator.vibrate?.([50, 30, 50]); // Success pattern
      } else {
        navigator.vibrate?.(100); // Single vibration
      }
    } catch {}
  };

  const handleOptionHover = (event) => {
    if (isLocked || selected !== null) return;
    
    if (practiceSoundsOn) {
      playHover();
    }
    
    // Create sparkle at cursor position
    const rect = event.currentTarget.getBoundingClientRect();
    createSparkle(
      event.clientX - rect.left,
      event.clientY - rect.top
    );
  };

  const getOptionClassName = (optIndex) => {
    const isSelected = selected === optIndex;
    const isCorrect = optIndex === question.answerIndex;
    const isEliminated = eliminated.includes(optIndex);
    const isBouncing = bounceOption === optIndex;
    
    let baseClass = "relative w-full text-left px-4 py-4 rounded-2xl border-2 transition-all duration-300 transform ";
    
    // Add bounce animation
    if (isBouncing) {
      baseClass += "animate-bounce ";
    }
    
    if (isPractice && selected !== null) {
      // Practice mode with answer selected
      if (isSelected && isCorrect) {
        baseClass += "bg-gradient-to-r from-green-500/30 to-emerald-500/30 border-green-400 text-green-100 shadow-lg shadow-green-500/20 scale-105";
      } else if (isSelected && !isCorrect) {
        baseClass += "bg-gradient-to-r from-red-500/30 to-rose-500/30 border-red-400 text-red-100 shadow-lg shadow-red-500/20";
      } else if (!isSelected && selected !== question.answerIndex && isCorrect) {
        baseClass += "bg-gradient-to-r from-green-500/20 to-emerald-500/20 border-green-400/60 text-green-200 animate-pulse";
      } else {
        baseClass += "bg-slate-600/30 border-slate-500/50 text-slate-300";
      }
    } else {
      // Quiz mode or no selection yet
      if (isSelected) {
        baseClass += "bg-gradient-to-r from-blue-500/30 to-purple-500/30 border-blue-400 text-white shadow-lg shadow-blue-500/20 scale-105";
      } else {
        baseClass += "bg-gradient-to-r from-slate-700/50 to-slate-600/50 border-slate-500/50 text-white hover:from-slate-600/60 hover:to-slate-500/60 hover:border-slate-400/70 hover:scale-102 hover:shadow-lg cursor-pointer";
      }
    }
    
    if (isEliminated) {
      baseClass += " opacity-40 grayscale line-through pointer-events-none";
    } else if (isLocked && !isSelected) {
      baseClass += " opacity-60 pointer-events-none";
    }
    
    return baseClass;
  };

  const getOptionLabel = (index) => {
    const labels = ["🅰️", "🅱️", "🅲️", "🅳️"];
    return labels[index];
  };

  const getDifficultyEmoji = () => {
    const diff = question.difficulty?.toLowerCase() || "medium";
    if (diff === "easy") return "🌟";
    if (diff === "medium") return "⭐";
    if (diff === "hard") return "🏆";
    return "⭐";
  };

  return (
    <div className="relative">
      {/* Floating character */}
      {showCharacter && (
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 shadow-lg">
            <div className="text-2xl">{getCharacterEmoji()}</div>
          </div>
        </div>
      )}

      {/* Sparkles overlay */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {sparkles.map(sparkle => (
          <div
            key={sparkle.id}
            className="absolute animate-ping"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
            }}
          >
            ✨
          </div>
        ))}
      </div>

      {/* Main card with enhanced styling */}
      <div 
        ref={cardRef}
        className="relative card rounded-3xl p-6 mt-6 mx-4 sm:mx-3 bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-2 border-slate-600/50 shadow-2xl backdrop-blur-sm"
        style={{
          background: `linear-gradient(135deg, 
            rgba(30, 41, 59, 0.95) 0%, 
            rgba(15, 23, 42, 0.95) 100%),
            radial-gradient(circle at 20% 50%, rgba(120, 113, 218, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)`
        }}
      >
        {/* Question header with fun styling */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="text-2xl">{getDifficultyEmoji()}</div>
            <div className="text-xs bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-3 py-1 rounded-full border border-purple-400/30 text-purple-200">
              {question.category} • {question.difficulty || "Medium"}
            </div>
          </div>
          
          <div className="relative">
            <h2 className="text-lg font-bold text-white leading-relaxed mb-2">
              {question.prompt}
            </h2>
            
            {/* Fun progress indicator */}
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span>Think carefully!</span>
              <div className="flex gap-1">
                {Array.from({length: 3}).map((_, i) => (
                  <div 
                    key={i} 
                    className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Answer options with enhanced interactivity */}
        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              ref={el => optionsRef.current[index] = el}
              disabled={eliminated.includes(index) || isLocked}
              onClick={(e) => handleOptionClick(index, e)}
              onMouseEnter={handleOptionHover}
              className={getOptionClassName(index)}
              aria-label={`Option ${getOptionLabel(index).replace(/[🅰️🅱️🅲️🅳️]/g, ['A', 'B', 'C', 'D'][index])}: ${option}`}
              aria-pressed={selected === index}
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl flex-shrink-0">
                  {getOptionLabel(index)}
                </div>
                <div className="flex-1 text-left font-medium">
                  {option}
                </div>
                
                {/* Audience percentage with fun styling */}
                {audiencePercentages && (
                  <div className="flex-shrink-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 px-2 py-1 rounded-full border border-yellow-400/30">
                    <span className="text-xs text-yellow-200 font-bold">
                      {audiencePercentages[index]}%
                    </span>
                  </div>
                )}
                
                {/* Visual indicators for practice mode */}
                {isPractice && selected !== null && (
                  <div className="flex-shrink-0">
                    {selected === index && index === question.answerIndex && (
                      <div className="text-2xl animate-spin">🎉</div>
                    )}
                    {selected === index && index !== question.answerIndex && (
                      <div className="text-xl">😔</div>
                    )}
                    {selected !== null && selected !== index && index === question.answerIndex && (
                      <div className="flex items-center gap-1 text-green-300">
                        <span className="text-lg">👈</span>
                        <span className="text-xs font-bold">Correct!</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Eliminated overlay */}
              {eliminated.includes(index) && (
                <div className="absolute inset-0 bg-black/60 rounded-2xl flex items-center justify-center">
                  <div className="text-4xl opacity-80">❌</div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Enhanced Practice Mode Feedback */}
        {isPractice && showFeedback && selected !== null && (
          <div className="mt-6 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border-2 border-indigo-400/30 rounded-2xl p-4 animate-slideInUp backdrop-blur-sm">
              {/* Character and message */}
              <div className="flex items-start gap-4 mb-3">
                <div className="text-4xl animate-bounce">
                  {getCharacterEmoji()}
                </div>
                <div>
                  <div className="text-lg font-bold mb-1">
                    {selected === question.answerIndex ? (
                      <span className="text-green-300">🌟 Amazing!</span>
                    ) : (
                      <span className="text-yellow-300">🤔 Let's learn!</span>
                    )}
                  </div>
                  <div className="text-sm text-slate-200">
                    {getEncouragementMessage()}
                  </div>
                </div>
              </div>
              
              {/* Explanation with fun styling */}
              {question.explanation && (
                <div className="bg-slate-700/50 rounded-xl p-3 mb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">🧠</span>
                    <span className="text-sm font-bold text-blue-200">Did you know?</span>
                  </div>
                  <div className="text-sm text-slate-200 leading-relaxed">
                    {question.explanation}
                  </div>
                </div>
              )}
              
              {/* Correct answer highlight */}
              {selected !== question.answerIndex && (
                <div className="bg-green-500/20 border border-green-400/30 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">💡</span>
                    <span className="text-sm text-green-200">
                      The correct answer is: <strong>{getOptionLabel(question.answerIndex).replace(/[🅰️🅱️🅲️🅳️]/g, ['A', 'B', 'C', 'D'][question.answerIndex])}</strong>
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Locked indicator with fun styling */}
        {isLocked && (
          <div className="mt-4 text-center">
            <div className="inline-flex items-center gap-2 bg-slate-600/50 px-4 py-2 rounded-full border border-slate-500/50">
              <span className="text-lg">🔒</span>
              <span className="text-sm text-slate-300">Answer saved!</span>
            </div>
          </div>
        )}
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.5s ease-out;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
};

export default QuestionCard;