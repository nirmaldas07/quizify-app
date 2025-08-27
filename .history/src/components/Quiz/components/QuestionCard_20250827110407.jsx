// src/components/Quiz/components/QuestionCard.jsx
import { useEffect, useRef } from "react";
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
  const [playCorrect] = useSound("/sounds/correct.mp3", { volume: 0.65, interrupt: true });
  const [playWrong] = useSound("/sounds/wrong.mp3", { volume: 0.65, interrupt: true });
  const confettiContainerRef = useRef(null);

  // Play sound effects in practice mode
  useEffect(() => {
    if (!isPractice || !practiceSoundsOn || selected === null) return;
    
    if (selected === question.answerIndex) {
      playCorrect();
    } else {
      playWrong();
    }
  }, [selected, isPractice, practiceSoundsOn, question.answerIndex, playCorrect, playWrong]);

  // Mini confetti animation for correct answers
  const createConfetti = (buttonRect) => {
    if (!buttonRect) return;

    const colors = ["#22c55e", "#60a5fa", "#f59e0b", "#eab308", "#a78bfa"];
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.inset = "0";
    container.style.pointerEvents = "none";
    container.style.zIndex = "999";
    document.body.appendChild(container);

    const cx = buttonRect.left + buttonRect.width / 2;
    const cy = buttonRect.top + buttonRect.height / 2;

    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("div");
      const size = 4 + Math.random() * 4;
      
      particle.style.position = "fixed";
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.backgroundColor = colors[i % colors.length];
      particle.style.borderRadius = "50%";
      particle.style.left = `${cx}px`;
      particle.style.top = `${cy}px`;
      particle.style.transform = "translate(-50%, -50%)";
      
      container.appendChild(particle);

      const angle = (Math.PI * 2 * i) / 12;
      const velocity = 50 + Math.random() * 50;
      const tx = Math.cos(angle) * velocity;
      const ty = Math.sin(angle) * velocity - 30;

      particle.animate([
        { 
          transform: "translate(-50%, -50%) scale(1)",
          opacity: 1 
        },
        { 
          transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0.5)`,
          opacity: 0 
        }
      ], {
        duration: 600,
        easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)"
      });
    }

    setTimeout(() => container.remove(), 700);
  };

  const handleOptionClick = (optIndex, event) => {
    if (isLocked) return;
    
    onSelect(optIndex, event);
    
    // Trigger confetti for correct answers in practice mode
    if (isPractice && optIndex === question.answerIndex && selected === null) {
      createConfetti(event.currentTarget.getBoundingClientRect());
    }
    
    // Haptic feedback
    try { 
      navigator.vibrate?.(24); 
    } catch {}
  };

  const getOptionClassName = (optIndex) => {
    const isSelected = selected === optIndex;
    const isCorrect = optIndex === question.answerIndex;
    const isEliminated = eliminated.includes(optIndex);
    
    let baseClass = "w-full text-left px-3 py-3 rounded-xl border transition-all duration-200 ";
    
    if (isPractice && selected !== null) {
      // Practice mode with answer selected
      if (isSelected && isCorrect) {
        baseClass += "bg-green-600/20 border-green-500/50 text-green-300 ring-2 ring-green-500/30";
      } else if (isSelected && !isCorrect) {
        baseClass += "bg-red-600/20 border-red-500/50 text-red-300 ring-2 ring-red-500/30";
      } else if (!isSelected && selected !== question.answerIndex && isCorrect) {
        // Show correct answer if user selected wrong
        baseClass += "bg-green-600/10 border-green-500/40 text-green-300/90";
      } else {
        baseClass += "bg-base-bg/50 border-base-border";
      }
    } else {
      // Quiz mode or no selection yet
      if (isSelected) {
        baseClass += "bg-white/10 border-brand-blue ring-2 ring-brand-blue/30";
      } else {
        baseClass += "bg-base-bg/50 border-base-border hover:bg-white/5";
      }
    }
    
    if (isEliminated || isLocked) {
      baseClass += " opacity-60 pointer-events-none";
    }
    
    return baseClass;
  };

  const getOptionLabel = (index) => {
    return ["A", "B", "C", "D"][index];
  };

  return (
    <div className="card rounded-3xl p-5 mt-6 mx-4 sm:mx-3 max-h-[65vh] overflow-y-auto">
      {/* Question Text */}
      <div className="mb-4">
        <p className="text-base font-semibold">{question.prompt}</p>
        {question.category && (
          <div className="mt-2 text-xs text-base-muted">
            {question.category} • {question.difficulty || "Medium"}
          </div>
        )}
      </div>

      {/* Answer Options */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            disabled={eliminated.includes(index) || isLocked}
            onClick={(e) => handleOptionClick(index, e)}
            className={getOptionClassName(index)}
            aria-label={`Option ${getOptionLabel(index)}: ${option}`}
            aria-pressed={selected === index}
          >
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">
                {getOptionLabel(index)}.
              </span>
              <span className="flex-1">{option}</span>
              
              {/* Audience percentage */}
              {audiencePercentages && (
                <span className="text-xs text-base-muted bg-white/5 px-2 py-1 rounded">
                  {audiencePercentages[index]}%
                </span>
              )}
              
              {/* Visual indicators for practice mode */}
              {isPractice && selected !== null && (
                <>
                  {selected === index && index === question.answerIndex && (
                    <span className="text-green-400">✓</span>
                  )}
                  {selected === index && index !== question.answerIndex && (
                    <span className="text-red-400">✗</span>
                  )}
                  {selected !== null && selected !== index && index === question.answerIndex && (
                    <span className="text-green-400 text-sm">← Correct</span>
                  )}
                </>
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Practice Mode Feedback */}
      {isPractice && selected !== null && (
        <div className="mt-4 p-3 rounded-xl bg-white/5 border border-base-border animate-fadeIn">
          <div className="text-sm mb-2">
            {selected === question.answerIndex ? (
              <span className="text-green-400 font-semibold">✓ Correct!</span>
            ) : (
              <span className="text-red-400 font-semibold">✗ Incorrect</span>
            )}
          </div>
          
          {question.explanation && (
            <div className="text-sm text-base-muted">
              <span className="font-semibold">Explanation:</span> {question.explanation}
            </div>
          )}
          
          {selected !== question.answerIndex && (
            <div className="text-sm text-green-300/80 mt-2">
              The correct answer is: <strong>{getOptionLabel(question.answerIndex)}</strong>
            </div>
          )}
        </div>
      )}

      {/* Locked indicator for practice mode */}
      {isLocked && (
        <div className="mt-3 text-center text-xs text-base-muted">
          🔒 Answer locked
        </div>
      )}
    </div>
  );
};

export default QuestionCard;