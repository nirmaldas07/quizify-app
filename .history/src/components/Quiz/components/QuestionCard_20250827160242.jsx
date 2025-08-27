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
  
  const cardRef = useRef(null);

  // Subtle particle effects
  const createParticles = (buttonRect, isCorrect) => {
    if (!buttonRect) return;
    
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "1000";
    document.body.appendChild(container);

    const cx = buttonRect.left + buttonRect.width / 2;
    const cy = buttonRect.top + buttonRect.height / 2;

    const count = isCorrect ? 8 : 4;
    const colors = isCorrect ? ["#10B981", "#34D399", "#6EE7B7"] : ["#6B7280", "#9CA3AF"];

    for (let i = 0; i < count; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "4px";
      particle.style.height = "4px";
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = "50%";
      particle.style.left = `${cx}px`;
      particle.style.top = `${cy}px`;
      particle.style.transform = "translate(-50%, -50%)";
      
      container.appendChild(particle);

      const angle = (Math.PI * 2 * i) / count;
      const distance = isCorrect ? (40 + Math.random() * 30) : (20 + Math.random() * 15);
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
          transform: `translate(calc(-50% + ${tx * 1.3}px), calc(-50% + ${ty * 1.3}px)) scale(0)`,
          opacity: 0 
        }
      ], {
        duration: 600,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
    }

    setTimeout(() => container.remove(), 700);
  };

  // Handle feedback
  useEffect(() => {
    if (!isPractice || selected === null) return;
    
    const isCorrect = selected === question.answerIndex;
    
    setTimeout(() => {
      if (isCorrect && practiceSoundsOn) {
        playCorrect();
      } else if (practiceSoundsOn) {
        playWrong();
      }
      setShowFeedback(true);
    }, 300);
  }, [selected, isPractice, question.answerIndex, playCorrect, playWrong, practiceSoundsOn]);

  const handleOptionClick = (optIndex, event) => {
    if (isLocked || isAnimating) return;
    
    setIsAnimating(true);
    
    if (practiceSoundsOn) {
      playClick();
    }
    
    // Haptic feedback
    try { 
      navigator.vibrate?.(15);
    } catch {}
    
    setTimeout(() => {
      onSelect(optIndex, event);
      
      // Particle effect for practice mode
      if (isPractice && selected === null) {
        const isCorrect = optIndex === question.answerIndex;
        createParticles(event.currentTarget.getBoundingClientRect(), isCorrect);
      }
      
      setIsAnimating(false);
    }, 100);
  };

  const handleOptionHover = () => {
    if (isLocked || selected !== null || !practiceSoundsOn) return;
    playHover();
  };

  const getOptionClasses = (optIndex) => {
    const isSelected = selected === optIndex;
    const isCorrect = optIndex === question.answerIndex;
    const isEliminated = eliminated.includes(optIndex);
    
    let baseClasses = "w-full text-left p-4 rounded-xl transition-all duration-200 border-2 transform";
    
    if (isPractice && selected !== null) {
      if (isSelected && isCorrect) {
        return `${baseClasses} bg-emerald-50 border-emerald-300 text-emerald-800 scale-105 shadow-lg`;
      }
      if (isSelected && !isCorrect) {
        return `${baseClasses} bg-red-50 border-red-300 text-red-800 shadow-md`;
      }
      if (!isSelected && isCorrect && selected !== question.answerIndex) {
        return `${baseClasses} bg-emerald-50 border-emerald-200 text-emerald-700 animate-pulse`;
      }
      return `${baseClasses} bg-gray-100 border-gray-200 text-gray-600`;
    }
    
    if (isSelected) {
      return `${baseClasses} bg-blue-50 border-blue-300 text-blue-800 scale-105 shadow-lg`;
    }
    
    if (isEliminated) {
      return `${baseClasses} bg-gray-200 border-gray-300 text-gray-500 opacity-50 line-through pointer-events-none`;
    }
    
    return `${baseClasses} bg-white border-gray-200 text-gray-800 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md active:scale-98 cursor-pointer`;
  };

  const getDifficultyStyle = () => {
    const diff = question.difficulty?.toLowerCase() || "medium";
    if (diff === "easy") return "bg-green-100 text-green-700 border-green-200";
    if (diff === "medium") return "bg-amber-100 text-amber-700 border-amber-200";
    if (diff === "hard") return "bg-red-100 text-red-700 border-red-200";
    return "bg-blue-100 text-blue-700 border-blue-200";
  };

  const optionLabels = ["A", "B", "C", "D"];

  return (
    <div className="question-card-container">
      <style jsx>{`
        .question-card-container {
          height: 100vh;
          background: linear-gradient(180deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .main-card {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 20px;
          position: relative;
          overflow: hidden;
        }

        .header::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100px;
          height: 100px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          transform: translate(30px, -30px);
        }

        .header-content {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .difficulty-badge {
          padding: 6px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          border: 1px solid;
        }

        .category-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 500;
        }

        .question-section {
          padding: 24px;
          text-align: center;
        }

        .question-text {
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          line-height: 1.4;
          margin-bottom: 24px;
        }

        .options-grid {
          display: grid;
          gap: 12px;
        }

        .option-button {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 500;
          min-height: 60px;
        }

        .option-label {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #f3f4f6;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #374151;
          flex-shrink: 0;
        }

        .option-label.selected {
          background: white;
          color: inherit;
        }

        .option-text {
          flex: 1;
          text-align: left;
        }

        .audience-poll {
          background: rgba(249, 115, 22, 0.1);
          color: #ea580c;
          padding: 4px 8px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 600;
        }

        .feedback-section {
          background: #f8fafc;
          border-top: 1px solid #e5e7eb;
          padding: 20px 24px;
        }

        .feedback-content {
          max-height: 120px;
          overflow-y: auto;
        }

        .feedback-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }

        .feedback-icon {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        .feedback-icon.correct {
          background: #10b981;
          color: white;
        }

        .feedback-icon.incorrect {
          background: #ef4444;
          color: white;
        }

        .feedback-text {
          font-weight: 600;
          color: #1f2937;
        }

        .explanation-box {
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 12px;
          padding: 12px;
          margin-top: 12px;
        }

        .explanation-text {
          color: #1e40af;
          font-size: 14px;
          line-height: 1.5;
        }

        .correct-answer-hint {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          padding: 12px;
          margin-top: 8px;
          color: #065f46;
          font-size: 14px;
          text-align: center;
        }

        .lock-indicator {
          background: #f3f4f6;
          border-top: 1px solid #e5e7eb;
          padding: 16px 24px;
          text-align: center;
          font-size: 14px;
          color: #6b7280;
        }

        .eliminated-overlay {
          position: absolute;
          inset: 0;
          background: rgba(107, 114, 128, 0.8);
          backdrop-filter: blur(2px);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          color: white;
        }
      `}</style>

      <div className="main-card">
        {/* Header */}
        <div className="header">
          <div className="header-content">
            <div className={`difficulty-badge ${getDifficultyStyle()}`}>
              {question.difficulty || "Medium"}
            </div>
            <div className="category-badge">
              {question.category}
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="question-section">
          <h2 className="question-text">{question.prompt}</h2>
          
          <div className="options-grid">
            {question.options.map((option, index) => {
              const isDisabled = eliminated.includes(index) || isLocked;
              const isSelected = selected === index;
              
              return (
                <button
                  key={index}
                  disabled={isDisabled}
                  onClick={(e) => handleOptionClick(index, e)}
                  onMouseEnter={handleOptionHover}
                  className={`option-button ${getOptionClasses(index)}`}
                >
                  <div className={`option-label ${isSelected ? 'selected' : ''}`}>
                    {optionLabels[index]}
                  </div>
                  <div className="option-text">{option}</div>
                  
                  {audiencePercentages && audiencePercentages[index] > 0 && (
                    <div className="audience-poll">
                      {audiencePercentages[index]}%
                    </div>
                  )}
                  
                  {/* Eliminated overlay */}
                  {eliminated.includes(index) && (
                    <div className="eliminated-overlay">✕</div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Practice Feedback - Compact */}
        {isPractice && showFeedback && selected !== null && (
          <div className="feedback-section">
            <div className="feedback-content">
              <div className="feedback-header">
                <div className={`feedback-icon ${selected === question.answerIndex ? 'correct' : 'incorrect'}`}>
                  {selected === question.answerIndex ? '✓' : '✕'}
                </div>
                <div className="feedback-text">
                  {selected === question.answerIndex ? 'Correct!' : 'Not quite right'}
                </div>
              </div>
              
              {question.explanation && (
                <div className="explanation-box">
                  <div className="explanation-text">{question.explanation}</div>
                </div>
              )}
              
              {selected !== question.answerIndex && (
                <div className="correct-answer-hint">
                  The correct answer was {optionLabels[question.answerIndex]}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Lock Indicator */}
        {isLocked && (
          <div className="lock-indicator">
            Answer locked - Good job!
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;