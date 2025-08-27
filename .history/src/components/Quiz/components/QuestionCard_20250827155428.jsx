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
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.6, interrupt: true });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.6, interrupt: true });
  const [playHover] = useSound("/sounds/hover.mp3", { volume: 0.2, interrupt: true });
  const [playClick] = useSound("/sounds/click.mp3", { volume: 0.4, interrupt: true });
  
  const [showFeedback, setShowFeedback] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [feedbackDelay, setFeedbackDelay] = useState(false);
  
  const cardRef = useRef(null);
  const selectedRef = useRef(null);

  // Minimal confetti for correct answers
  const createSubtleConfetti = (buttonRect) => {
    if (!buttonRect) return;
    
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "1000";
    document.body.appendChild(container);

    const cx = buttonRect.left + buttonRect.width / 2;
    const cy = buttonRect.top + buttonRect.height / 2;

    // Create 8 subtle particles
    for (let i = 0; i < 8; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "3px";
      particle.style.height = "3px";
      particle.style.backgroundColor = "#10B981";
      particle.style.borderRadius = "50%";
      particle.style.left = `${cx}px`;
      particle.style.top = `${cy}px`;
      particle.style.transform = "translate(-50%, -50%)";
      
      container.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 8;
      const distance = 40 + Math.random() * 20;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance - 10;

      particle.animate([
        { 
          transform: "translate(-50%, -50%) scale(0)",
          opacity: 1 
        },
        { 
          transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(1)`,
          opacity: 1,
          offset: 0.6
        },
        { 
          transform: `translate(calc(-50% + ${tx * 1.2}px), calc(-50% + ${ty * 1.2}px)) scale(0)`,
          opacity: 0 
        }
      ], {
        duration: 800,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
    }

    setTimeout(() => container.remove(), 900);
  };

  // Handle feedback timing
  useEffect(() => {
    if (!isPractice || selected === null) return;
    
    setFeedbackDelay(true);
    const timer = setTimeout(() => {
      if (selected === question.answerIndex && practiceSoundsOn) {
        playCorrect();
      } else if (practiceSoundsOn) {
        playWrong();
      }
      setShowFeedback(true);
      setFeedbackDelay(false);
    }, isPractice ? 600 : 0);

    return () => clearTimeout(timer);
  }, [selected, isPractice, question.answerIndex, playCorrect, playWrong, practiceSoundsOn]);

  const handleOptionClick = (optIndex, event) => {
    if (isLocked || isAnimating) return;
    
    setIsAnimating(true);
    
    if (practiceSoundsOn) {
      playClick();
    }
    
    // Subtle haptic feedback
    try { 
      navigator.vibrate?.(20);
    } catch {}
    
    // Delay for animation
    setTimeout(() => {
      onSelect(optIndex, event);
      
      // Confetti for correct answers in practice mode
      if (isPractice && optIndex === question.answerIndex && selected === null) {
        setTimeout(() => {
          createSubtleConfetti(event.currentTarget.getBoundingClientRect());
        }, 100);
      }
      
      setIsAnimating(false);
    }, 150);
  };

  const handleOptionHover = () => {
    if (isLocked || selected !== null || !practiceSoundsOn) return;
    playHover();
  };

  const getOptionState = (optIndex) => {
    const isSelected = selected === optIndex;
    const isCorrect = optIndex === question.answerIndex;
    const isEliminated = eliminated.includes(optIndex);
    
    if (isPractice && selected !== null) {
      if (isSelected && isCorrect) return "correct";
      if (isSelected && !isCorrect) return "incorrect";
      if (!isSelected && isCorrect && selected !== question.answerIndex) return "reveal";
      return "neutral";
    }
    
    if (isSelected) return "selected";
    if (isEliminated) return "eliminated";
    return "default";
  };

  const getOptionClasses = (optIndex) => {
    const state = getOptionState(optIndex);
    const baseClasses = "group relative w-full text-left rounded-2xl transition-all duration-300 ease-out transform-gpu will-change-transform";
    
    const stateClasses = {
      correct: "bg-emerald-50/95 border-2 border-emerald-200 shadow-lg shadow-emerald-500/10 scale-[1.02]",
      incorrect: "bg-red-50/95 border-2 border-red-200 shadow-lg shadow-red-500/10",
      reveal: "bg-emerald-50/80 border-2 border-emerald-200/60 animate-pulse",
      selected: "bg-blue-50/95 border-2 border-blue-200 shadow-lg shadow-blue-500/10 scale-[1.02]",
      eliminated: "bg-gray-100/50 border border-gray-200/50 opacity-40 line-through pointer-events-none",
      default: "bg-white/95 border border-gray-200/80 hover:bg-gray-50/95 hover:border-gray-300 hover:shadow-md hover:scale-[1.01] active:scale-[0.99]"
    };
    
    return `${baseClasses} ${stateClasses[state]}`;
  };

  const getTextColor = (optIndex) => {
    const state = getOptionState(optIndex);
    const colors = {
      correct: "text-emerald-800",
      incorrect: "text-red-800", 
      reveal: "text-emerald-700",
      selected: "text-blue-800",
      eliminated: "text-gray-400",
      default: "text-gray-900"
    };
    return colors[state];
  };

  const getDifficultyColor = () => {
    const diff = question.difficulty?.toLowerCase() || "medium";
    if (diff === "easy") return "bg-green-100 text-green-700 border-green-200";
    if (diff === "medium") return "bg-amber-100 text-amber-700 border-amber-200";
    if (diff === "hard") return "bg-red-100 text-red-700 border-red-200";
    return "bg-blue-100 text-blue-700 border-blue-200";
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Main Card */}
      <div 
        ref={cardRef}
        className="bg-white/98 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 border border-white/20 overflow-hidden"
        style={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(255, 255, 255, 0.1)"
        }}
      >
        {/* Header */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-100/50">
          <div className="flex items-center justify-between mb-4">
            <div className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${getDifficultyColor()}`}>
              {question.difficulty || "Medium"}
            </div>
            <div className="text-xs font-medium text-gray-500 bg-gray-100/80 px-3 py-1.5 rounded-full">
              {question.category}
            </div>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 leading-relaxed tracking-tight">
            {question.prompt}
          </h2>
        </div>

        {/* Options */}
        <div className="p-8 space-y-4">
          {question.options.map((option, index) => {
            const optionLetter = String.fromCharCode(65 + index);
            const isDisabled = eliminated.includes(index) || isLocked;
            
            return (
              <button
                key={index}
                ref={selected === index ? selectedRef : null}
                disabled={isDisabled}
                onClick={(e) => handleOptionClick(index, e)}
                onMouseEnter={handleOptionHover}
                className={getOptionClasses(index)}
                style={{ 
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  minHeight: "60px"
                }}
              >
                <div className="flex items-center p-5">
                  {/* Option Letter */}
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold mr-4 transition-colors duration-200 ${
                    getOptionState(index) === "correct" ? "bg-emerald-500 text-white" :
                    getOptionState(index) === "incorrect" ? "bg-red-500 text-white" :
                    getOptionState(index) === "selected" ? "bg-blue-500 text-white" :
                    "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                  }`}>
                    {optionLetter}
                  </div>
                  
                  {/* Option Text */}
                  <div className={`flex-1 text-left font-medium ${getTextColor(index)}`}>
                    {option}
                  </div>
                  
                  {/* Audience Poll */}
                  {audiencePercentages && audiencePercentages[index] > 0 && (
                    <div className="flex-shrink-0 ml-4">
                      <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded-lg text-xs font-medium">
                        {audiencePercentages[index]}%
                      </div>
                    </div>
                  )}
                  
                  {/* State Indicators */}
                  {isPractice && selected !== null && (
                    <div className="flex-shrink-0 ml-3">
                      {selected === index && index === question.answerIndex && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {selected === index && index !== question.answerIndex && (
                        <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                      {selected !== null && selected !== index && index === question.answerIndex && (
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-xs font-medium text-emerald-600">Correct</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Eliminated Overlay */}
                {eliminated.includes(index) && (
                  <div className="absolute inset-0 bg-gray-100/80 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <div className="text-gray-400 text-2xl">✕</div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Practice Feedback */}
        {isPractice && showFeedback && selected !== null && !feedbackDelay && (
          <div className="border-t border-gray-100/50 p-8 bg-gray-50/30">
            <div className="space-y-4">
              {/* Result Header */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  selected === question.answerIndex 
                    ? "bg-emerald-500 text-white" 
                    : "bg-red-500 text-white"
                }`}>
                  {selected === question.answerIndex ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className={`font-semibold ${
                    selected === question.answerIndex ? "text-emerald-800" : "text-red-800"
                  }`}>
                    {selected === question.answerIndex ? "Well done!" : "Not quite right"}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selected === question.answerIndex 
                      ? "You got it correct!" 
                      : `The correct answer is ${String.fromCharCode(65 + question.answerIndex)}`
                    }
                  </p>
                </div>
              </div>
              
              {/* Explanation */}
              {question.explanation && (
                <div className="bg-blue-50/80 border border-blue-200/50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5">
                      <svg fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="text-sm text-blue-800 leading-relaxed">
                      {question.explanation}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lock Indicator */}
        {isLocked && (
          <div className="border-t border-gray-100/50 p-4 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-100/80 px-4 py-2 rounded-full">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Answer locked
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;