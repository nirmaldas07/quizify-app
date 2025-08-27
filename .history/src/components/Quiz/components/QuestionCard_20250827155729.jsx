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
  const [floatingElements, setFloatingElements] = useState([]);
  const [isShaking, setIsShaking] = useState(false);
  const [showStars, setShowStars] = useState(false);
  
  const cardRef = useRef(null);

  // Create magical particles
  const createMagicalParticles = (buttonRect, isCorrect) => {
    if (!buttonRect) return;
    
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "1000";
    document.body.appendChild(container);

    const cx = buttonRect.left + buttonRect.width / 2;
    const cy = buttonRect.top + buttonRect.height / 2;

    const particles = isCorrect ? 
      ["⭐", "✨", "🌟", "💫", "🎉"] : 
      ["💭", "🤔", "💡"];
    
    const count = isCorrect ? 15 : 8;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.textContent = particles[Math.floor(Math.random() * particles.length)];
      particle.style.position = "fixed";
      particle.style.fontSize = isCorrect ? "20px" : "16px";
      particle.style.left = `${cx}px`;
      particle.style.top = `${cy}px`;
      particle.style.transform = "translate(-50%, -50%)";
      particle.style.userSelect = "none";
      
      container.appendChild(particle);

      const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
      const distance = isCorrect ? (60 + Math.random() * 80) : (30 + Math.random() * 40);
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - (isCorrect ? 30 : 15);

      particle.animate([
        { 
          transform: "translate(-50%, -50%) scale(0) rotate(0deg)",
          opacity: 1 
        },
        { 
          transform: `translate(calc(-50% + ${tx * 0.5}px), calc(-50% + ${ty * 0.5}px)) scale(1.2) rotate(180deg)`,
          opacity: 1,
          offset: 0.3
        },
        { 
          transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0.8) rotate(360deg)`,
          opacity: 0.8,
          offset: 0.7
        },
        { 
          transform: `translate(calc(-50% + ${tx * 1.2}px), calc(-50% + ${ty * 1.2}px)) scale(0) rotate(540deg)`,
          opacity: 0 
        }
      ], {
        duration: isCorrect ? 1500 : 1000,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
    }

    setTimeout(() => container.remove(), isCorrect ? 1600 : 1100);
  };

  // Handle feedback and effects
  useEffect(() => {
    if (!isPractice || selected === null) return;
    
    const isCorrect = selected === question.answerIndex;
    
    setTimeout(() => {
      if (isCorrect) {
        if (practiceSoundsOn) playCorrect();
        setShowStars(true);
        setTimeout(() => setShowStars(false), 2000);
      } else {
        if (practiceSoundsOn) playWrong();
        setIsShaking(true);
        setTimeout(() => setIsShaking(false), 500);
      }
      setShowFeedback(true);
    }, 400);
  }, [selected, isPractice, question.answerIndex, playCorrect, playWrong, practiceSoundsOn]);

  const handleOptionClick = (optIndex, event) => {
    if (isLocked) return;
    
    if (practiceSoundsOn) playClick();
    
    // Create particles effect
    const isCorrect = optIndex === question.answerIndex;
    setTimeout(() => {
      createMagicalParticles(event.currentTarget.getBoundingClientRect(), isCorrect);
    }, 200);
    
    // Haptic feedback
    try { 
      navigator.vibrate?.(isCorrect ? [30, 10, 30] : [50]);
    } catch {}
    
    onSelect(optIndex, event);
  };

  const handleOptionHover = () => {
    if (isLocked || selected !== null) return;
    if (practiceSoundsOn) playHover();
  };

  const getOptionStyle = (optIndex) => {
    const isSelected = selected === optIndex;
    const isCorrect = optIndex === question.answerIndex;
    const isEliminated = eliminated.includes(optIndex);
    
    if (isPractice && selected !== null) {
      if (isSelected && isCorrect) {
        return {
          bg: "bg-gradient-to-br from-green-400 via-green-500 to-emerald-600",
          border: "border-2 border-green-300",
          shadow: "shadow-2xl shadow-green-500/30",
          text: "text-white",
          transform: "scale-105",
          glow: "animate-pulse"
        };
      }
      if (isSelected && !isCorrect) {
        return {
          bg: "bg-gradient-to-br from-red-400 via-red-500 to-rose-600", 
          border: "border-2 border-red-300",
          shadow: "shadow-xl shadow-red-500/20",
          text: "text-white",
          transform: "",
          glow: ""
        };
      }
      if (!isSelected && isCorrect && selected !== question.answerIndex) {
        return {
          bg: "bg-gradient-to-br from-green-200 via-green-300 to-emerald-400",
          border: "border-2 border-green-400",
          shadow: "shadow-lg shadow-green-400/20",
          text: "text-green-900",
          transform: "",
          glow: "animate-pulse"
        };
      }
      return {
        bg: "bg-gradient-to-br from-gray-200 to-gray-300",
        border: "border border-gray-300",
        shadow: "",
        text: "text-gray-600",
        transform: "",
        glow: ""
      };
    }
    
    if (isSelected) {
      return {
        bg: "bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600",
        border: "border-2 border-blue-300",
        shadow: "shadow-xl shadow-blue-500/30",
        text: "text-white",
        transform: "scale-105",
        glow: ""
      };
    }
    
    if (isEliminated) {
      return {
        bg: "bg-gray-300/50",
        border: "border border-gray-400/50", 
        shadow: "",
        text: "text-gray-500",
        transform: "opacity-40",
        glow: ""
      };
    }
    
    return {
      bg: "bg-gradient-to-br from-white to-gray-50",
      border: "border-2 border-gray-200",
      shadow: "shadow-lg hover:shadow-xl",
      text: "text-gray-800",
      transform: "hover:scale-102 active:scale-98",
      glow: ""
    };
  };

  const getDifficultyTheme = () => {
    const diff = question.difficulty?.toLowerCase() || "medium";
    if (diff === "easy") return {
      bg: "from-green-400 to-emerald-500",
      icon: "🌱",
      text: "Easy Peasy!"
    };
    if (diff === "medium") return {
      bg: "from-yellow-400 to-orange-500", 
      icon: "⚡",
      text: "Challenge Time!"
    };
    if (diff === "hard") return {
      bg: "from-red-400 to-pink-500",
      icon: "🔥", 
      text: "Expert Level!"
    };
    return {
      bg: "from-blue-400 to-purple-500",
      icon: "⭐",
      text: "Let's Go!"
    };
  };

  const difficultyTheme = getDifficultyTheme();
  const optionLabels = ["🅰️", "🅱️", "🅲️", "🅳️"];

  return (
    <div className="relative max-w-2xl mx-auto p-4">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20 bg-purple-300/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-blue-300/20 rounded-full blur-lg animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-pink-300/20 rounded-full blur-lg animate-bounce"></div>
      </div>

      {/* Stars for correct answers */}
      {showStars && (
        <div className="absolute inset-0 pointer-events-none z-20">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute text-4xl animate-ping"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                animationDelay: `${i * 200}ms`,
                animationDuration: "1s"
              }}
            >
              ⭐
            </div>
          ))}
        </div>
      )}

      {/* Main Card */}
      <div 
        ref={cardRef}
        className={`relative bg-white rounded-3xl shadow-2xl border-4 border-white/50 overflow-hidden transition-all duration-500 ${
          isShaking ? "animate-shake" : ""
        }`}
        style={{
          background: "linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)",
          boxShadow: "0 20px 60px -10px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.8)"
        }}
      >
        {/* Header with difficulty badge */}
        <div className={`relative px-6 py-6 bg-gradient-to-r ${difficultyTheme.bg} text-white overflow-hidden`}>
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          
          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-3xl">{difficultyTheme.icon}</div>
              <div>
                <div className="text-lg font-bold">{difficultyTheme.text}</div>
                <div className="text-sm opacity-90">{question.category}</div>
              </div>
            </div>
            {audiencePercentages && (
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                👥 Poll Active
              </div>
            )}
          </div>
        </div>

        {/* Question */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-800 leading-relaxed mb-8 text-center">
            {question.prompt}
          </h2>

          {/* Options */}
          <div className="space-y-4">
            {question.options.map((option, index) => {
              const style = getOptionStyle(index);
              const isDisabled = eliminated.includes(index) || isLocked;
              
              return (
                <button
                  key={index}
                  disabled={isDisabled}
                  onClick={(e) => handleOptionClick(index, e)}
                  onMouseEnter={handleOptionHover}
                  className={`
                    relative w-full p-5 rounded-2xl transition-all duration-300 transform
                    ${style.bg} ${style.border} ${style.shadow} ${style.text} ${style.transform} ${style.glow}
                    ${!isDisabled ? "cursor-pointer" : "cursor-not-allowed"}
                    group
                  `}
                  style={{ minHeight: "70px" }}
                >
                  <div className="flex items-center gap-4">
                    {/* Option label */}
                    <div className="text-3xl flex-shrink-0 transition-transform group-hover:scale-110">
                      {optionLabels[index]}
                    </div>
                    
                    {/* Option text */}
                    <div className="flex-1 text-left font-semibold text-lg">
                      {option}
                    </div>
                    
                    {/* Audience percentage */}
                    {audiencePercentages && audiencePercentages[index] > 0 && (
                      <div className="flex-shrink-0 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold">
                        {audiencePercentages[index]}%
                      </div>
                    )}
                    
                    {/* Status indicators for practice mode */}
                    {isPractice && selected !== null && (
                      <div className="flex-shrink-0">
                        {selected === index && index === question.answerIndex && (
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center animate-spin-slow">
                            <div className="text-2xl">🎉</div>
                          </div>
                        )}
                        {selected === index && index !== question.answerIndex && (
                          <div className="w-8 h-8 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center">
                            <div className="text-xl">😅</div>
                          </div>
                        )}
                        {selected !== null && selected !== index && index === question.answerIndex && (
                          <div className="flex items-center gap-2 bg-white/30 backdrop-blur-sm px-3 py-1 rounded-full">
                            <div className="text-lg">👆</div>
                            <span className="text-sm font-bold">This one!</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Eliminated overlay */}
                  {eliminated.includes(index) && (
                    <div className="absolute inset-0 bg-gray-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <div className="text-4xl">❌</div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Practice feedback */}
        {isPractice && showFeedback && selected !== null && (
          <div className="border-t-4 border-gray-100 bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
            <div className="text-center space-y-4">
              {/* Character reaction */}
              <div className="text-6xl animate-bounce">
                {selected === question.answerIndex ? "🎊" : "🤗"}
              </div>
              
              {/* Message */}
              <div className={`text-xl font-bold ${
                selected === question.answerIndex ? "text-green-600" : "text-blue-600"
              }`}>
                {selected === question.answerIndex ? 
                  "Awesome job! You're a star!" : 
                  "Good try! Let's learn together!"
                }
              </div>
              
              {/* Explanation */}
              {question.explanation && (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border-2 border-blue-200 text-left">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">🧠</div>
                    <div>
                      <div className="font-bold text-blue-700 mb-2">Fun Fact!</div>
                      <div className="text-gray-700 leading-relaxed">
                        {question.explanation}
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Wrong answer guidance */}
              {selected !== question.answerIndex && (
                <div className="bg-green-100 border-2 border-green-300 rounded-2xl p-4">
                  <div className="flex items-center justify-center gap-2 text-green-700 font-bold">
                    <span className="text-2xl">💡</span>
                    <span>The right answer was {optionLabels[question.answerIndex]}!</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lock indicator */}
        {isLocked && (
          <div className="border-t-4 border-gray-100 p-4 text-center bg-gray-50">
            <div className="inline-flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-full text-gray-600 font-medium">
              <span className="text-lg">🔒</span>
              Answer saved! Great job!
            </div>
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 2s linear infinite;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        .active\\:scale-98:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
};

export default QuestionCard;