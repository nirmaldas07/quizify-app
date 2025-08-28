// src/components/Quiz/QuizSession.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import Toast from "../Toast";
import Modal from "../Modal";

const QuizSession = ({ 
  session, 
  mode, 
  category, 
  difficulty, 
  timerConfig,
  onComplete,
  onQuit 
}) => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skipped, setSkipped] = useState([]);
  const [remaining, setRemaining] = useState(timerConfig?.seconds || 45);
  const [paused, setPaused] = useState(false);
  const [timeUpFor, setTimeUpFor] = useState(null);
  
  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [usedAudience, setUsedAudience] = useState(false);
  const [elimMap, setElimMap] = useState({});
  const [audienceMap, setAudienceMap] = useState({});
  
  // Practice mode specifics
  const [lockedMap, setLockedMap] = useState([]);
  const [practiceSoundsOn, setPracticeSoundsOn] = useState(true);
  
  // UI states
  const [showSubmit, setShowSubmit] = useState(false);
  const [showQuit, setShowQuit] = useState(false);
  const [toast, setToast] = useState("");
  
  const autoNextRef = useRef(null);
  const isPractice = mode === "practice";
  const total = session.questions.length;
  const current = session.questions[index];
  const selected = answers[index];

  // Initialize arrays
  useEffect(() => {
    if (session.questions.length > 0) {
      setAnswers(new Array(session.questions.length).fill(null));
      setSkipped(new Array(session.questions.length).fill(false));
      setLockedMap(new Array(session.questions.length).fill(false));
    }
  }, [session.questions.length]);

  // Handle answer selection
  const onSelect = useCallback((optIdx, evt) => {
    if (!current) return;
    if (isPractice && lockedMap[index]) return;

    const nextAnswers = [...answers];
    nextAnswers[index] = answers[index] === optIdx ? null : optIdx;
    setAnswers(nextAnswers);

    // Reset skipped status if answered
    if (nextAnswers[index] !== null && skipped[index]) {
      const nextSkipped = [...skipped];
      nextSkipped[index] = false;
      setSkipped(nextSkipped);
    }

    // Lock in practice mode
    if (isPractice && nextAnswers[index] !== null) {
      setLockedMap(prev => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    }

    // Auto-advance in quiz mode
    if (!isPractice && nextAnswers[index] !== null) {
      clearTimeout(autoNextRef.current);
      autoNextRef.current = setTimeout(() => {
        if (index < total - 1) {
          goNext();
        } else {
          setShowSubmit(true);
          setPaused(true);
        }
      }, 2000);
    }
  }, [current, isPractice, lockedMap, index, answers, skipped, total]);

  // Navigation functions
  const goPrev = () => {
    clearTimeout(autoNextRef.current);
    setPaused(true);
    setTimeUpFor(null);
    setShowSubmit(false);
    if (index > 0) setIndex(i => i - 1);
    setTimeout(() => setPaused(false), 50);
  };

  const goNext = () => {
    clearTimeout(autoNextRef.current);
    
    // Lock current question in practice mode
    if (isPractice && answers[index] !== null) {
      setLockedMap(prev => {
        const copy = [...prev];
        copy[index] = true;
        return copy;
      });
    }

    setPaused(true);
    setTimeUpFor(null);
    setShowSubmit(false);

    // Mark as skipped if no answer
    if (answers[index] === null && !skipped[index]) {
      const next = [...skipped];
      next[index] = true;
      setSkipped(next);
    }

    if (index < total - 1) {
      setIndex(i => i + 1);
      setRemaining(timerConfig?.seconds || 45);
    } else {
      setShowSubmit(true);
    }
    setTimeout(() => setPaused(false), 50);
  };

  const onSkip = () => {
    if (answers[index] === null) {
      const next = [...skipped];
      next[index] = true;
      setSkipped(next);
    }
    goNext();
  };

  const onTimeUp = () => {
    const next = [...skipped];
    if (answers[index] === null) next[index] = true;
    setSkipped(next);
    setTimeUpFor(index);
    setPaused(true);
  };

  const handleSubmit = () => {
    const correct = session.questions.reduce(
      (sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0),
      0
    );
    
    onComplete({
      questions: session.questions,
      answers,
      skipped,
      correct,
      total,
      mode,
      category,
      difficulty
    });
  };

  // Lifeline handlers
  const use5050 = () => {
    if (used5050) {
      setToast("Once per quiz");
      return;
    }
    if (!current) return;
    
    const wrong = [0,1,2,3].filter(i => i !== current.answerIndex);
    const eliminated = wrong.sort(() => Math.random() - 0.5).slice(0, 2);
    setElimMap({ ...elimMap, [index]: eliminated });
    setUsed5050(true);
  };

  const useAudience = () => {
    if (usedAudience) {
      setToast("Once per quiz");
      return;
    }
    if (!current) return;
    
    const base = 40 + Math.floor(Math.random() * 26);
    let remain = 100 - base;
    const p = [0,0,0,0];
    p[current.answerIndex] = base;
    
    const others = [0,1,2,3].filter(i => i !== current.answerIndex);
    const a = Math.floor(Math.random() * (remain + 1));
    remain -= a;
    const b = Math.floor(Math.random() * (remain + 1));
    remain -= b;
    const c = remain;
    
    p[others[0]] += a;
    p[others[1]] += b;
    p[others[2]] += c;
    
    setAudienceMap({ ...audienceMap, [index]: p });
    setUsedAudience(true);
  };

  const attempted = answers.filter(a => a !== null).length;
  const skippedCount = skipped.filter(Boolean).length;
  const progress = ((index + 1) / total) * 100;

  if (!current) return null;

  return (
    <div className="quiz-session-container">
      <style jsx>{`
        .quiz-session-container {
          background: linear-gradient(180deg, #3d4491 0%, #6b63b5 50%, #8679c7 100%);
          min-height: 100vh;
          color: white;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', system-ui, sans-serif;
        }

        .header-section {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px 20px 20px;
          position: sticky;
          top: 0;
          z-index: 10;
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 12px;
          color: white;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .back-button:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateX(-2px);
        }

        .header-info {
          text-align: center;
          flex: 1;
          margin: 0 20px;
        }

        .category-title {
          font-size: 18px;
          font-weight: 700;
          color: white;
          margin-bottom: 4px;
        }

        .mode-info {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .practice-toggle {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 6px 12px;
          border-radius: 8px;
          font-size: 12px;
          color: rgba(255, 255, 255, 0.8);
        }

        .progress-section {
          margin-bottom: 12px;
        }

        .progress-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .progress-stats {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .progress-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
        }

        .progress-number {
          background: rgba(255, 255, 255, 0.2);
          padding: 2px 8px;
          border-radius: 12px;
          font-weight: 700;
        }

        .progress-percentage {
          font-size: 16px;
          font-weight: 700;
          background: linear-gradient(135deg, #FFD700, #FFA500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .progress-track {
          position: relative;
          background: rgba(255, 255, 255, 0.15);
          height: 8px;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 50%, #8b5cf6 100%);
          border-radius: 20px;
          transition: width 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          box-shadow: 0 0 10px rgba(102, 126, 234, 0.5);
        }

        .progress-fill::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer 2s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .question-progress {
          display: flex;
          gap: 4px;
          margin-top: 12px;
        }

        .question-dot {
          flex: 1;
          height: 6px;
          border-radius: 3px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .question-dot.current {
          background: #FFD700;
          box-shadow: 0 0 8px rgba(255, 215, 0, 0.6);
          transform: scale(1.2);
        }

        .question-dot.answered {
          background: linear-gradient(135deg, #10B981, #059669);
          box-shadow: 0 0 6px rgba(16, 185, 129, 0.4);
        }

        .question-dot.skipped {
          background: linear-gradient(135deg, #F59E0B, #D97706);
          box-shadow: 0 0 6px rgba(245, 158, 11, 0.4);
        }

        .question-dot.idle {
          background: rgba(255, 255, 255, 0.2);
        }

        .content-area {
          padding: 0;
          position: relative;
        }

        .controls-section {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 16px 20px;
          z-index: 10;
        }

        .lifelines {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .lifeline-btn {
          padding: 8px 16px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 80px;
        }

        .lifeline-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .lifeline-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .navigation {
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .nav-btn {
          flex: 1;
          max-width: 100px;
          padding: 12px;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .nav-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
        }

        .nav-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          border-radius: 16px;
          border: none;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 16px rgba(102, 126, 234, 0.3);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 20px;
        }

        .modal-content {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(248, 250, 252, 0.95));
          backdrop-filter: blur(20px);
          border-radius: 20px;
          padding: 24px;
          max-width: 360px;
          width: 100%;
          text-align: center;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .modal-text {
          color: #6b7280;
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .modal-buttons {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .modal-btn {
          padding: 10px 20px;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid;
        }

        .modal-btn.secondary {
          background: white;
          color: #6b7280;
          border-color: #d1d5db;
        }

        .modal-btn.secondary:hover {
          background: #f9fafb;
        }

        .modal-btn.primary {
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-color: transparent;
        }

        .modal-btn.primary:hover {
          transform: scale(1.05);
        }

        @media (max-width: 640px) {
          .header-top {
            margin-bottom: 12px;
          }

          .progress-stats {
            gap: 12px;
          }

          .progress-item {
            font-size: 12px;
          }
        }
      `}</style>

      {/* Header Section */}
      <div className="header-section">
        <div className="header-top">
          <button className="back-button" onClick={() => setShowQuit(true)}>
            ← Back
          </button>

          <div className="header-info">
            <div className="category-title">{category}</div>
            <div className="mode-info">
              Mode: {isPractice ? "Practice" : "Quiz"} • Difficulty: {difficulty}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {isPractice && (
              <div className="practice-toggle">
                <span>Sounds</span>
                <input
                  type="checkbox"
                  checked={practiceSoundsOn}
                  onChange={(e) => setPracticeSoundsOn(e.target.checked)}
                />
              </div>
            )}
            <Timer
              remaining={remaining}
              paused={paused}
              onTimeUp={onTimeUp}
              setRemaining={setRemaining}
              timerConfig={timerConfig}
            />
          </div>
        </div>

        {/* Enhanced Progress Section */}
        <div className="progress-section">
          <div className="progress-header">
            <div className="progress-stats">
              <div className="progress-item">
                <span>Question</span>
                <span className="progress-number">{index + 1}/{total}</span>
              </div>
              <div className="progress-item">
                <span>Attempted</span>
                <span className="progress-number">{attempted}</span>
              </div>
              <div className="progress-item">
                <span>Skipped</span>
                <span className="progress-number">{skippedCount}</span>
              </div>
            </div>
            <div className="progress-percentage">
              {Math.round(progress)}%
            </div>
          </div>

          {/* Main Progress Bar */}
          <div className="progress-track">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Question Dots */}
          <div className="question-progress">
            {Array.from({ length: total }).map((_, i) => {
              const isCurrent = i === index;
              const status = answers[i] !== null ? "answered" : 
                           skipped[i] ? "skipped" : "idle";
              
              return (
                <div
                  key={i}
                  className={`question-dot ${isCurrent ? 'current' : status}`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="content-area">
        <QuestionCard
          question={current}
          selected={selected}
          onSelect={onSelect}
          isPractice={isPractice}
          isLocked={isPractice && lockedMap[index]}
          eliminated={elimMap[index] || []}
          audiencePercentages={audienceMap[index] || null}
          practiceSoundsOn={practiceSoundsOn}
        />
      </div>

      {/* Controls Section */}
      <div className="controls-section">
        {/* Lifelines */}
        {!isPractice && (
          <div className="lifelines">
            <button
              className="lifeline-btn"
              onClick={use5050}
              disabled={used5050 || lockedMap[index]}
            >
              50:50
            </button>
            <button
              className="lifeline-btn"
              onClick={useAudience}
              disabled={usedAudience || lockedMap[index]}
            >
              Audience
            </button>
          </div>
        )}

        {/* Navigation */}
        <div className="navigation">
          <button
            className="nav-btn"
            onClick={goPrev}
            disabled={index === 0}
          >
            Prev
          </button>
          <button
            className="nav-btn"
            onClick={onSkip}
            disabled={selected !== null}
          >
            Skip
          </button>
          <button
            className="nav-btn"
            onClick={goNext}
          >
            Next
          </button>
        </div>

        {/* Submit Button */}
        <button
          className="submit-btn"
          onClick={() => setShowSubmit(true)}
        >
          Submit Quiz
        </button>
      </div>

      {/* Modals */}
      {showQuit && (
        <div className="modal-overlay" onClick={() => setShowQuit(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Quit Quiz?</h2>
            <p className="modal-text">Your progress will be lost if you quit now.</p>
            <div className="modal-buttons">
              <button
                className="modal-btn secondary"
                onClick={() => setShowQuit(false)}
              >
                Continue
              </button>
              <button
                className="modal-btn primary"
                onClick={onQuit}
              >
                Quit
              </button>
            </div>
          </div>
        </div>
      )}

      {showSubmit && (
        <div className="modal-overlay" onClick={() => setShowSubmit(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Submit Quiz?</h2>
            <p className="modal-text">
              You've attempted {attempted} out of {total} questions.
              {skippedCount > 0 && ` ${skippedCount} questions were skipped.`}
            </p>
            <div className="modal-buttons">
              <button
                className="modal-btn secondary"
                onClick={() => setShowSubmit(false)}
              >
                Review
              </button>
              <button
                className="modal-btn primary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {timeUpFor === index && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">Time's Up!</h2>
            <p className="modal-text">Don't worry, let's move to the next question.</p>
            <button
              className="modal-btn primary"
              onClick={() => { setTimeUpFor(null); goNext(); }}
              style={{ width: '100%' }}
            >
              {index < total - 1 ? "Next Question" : "Finish Quiz"}
            </button>
          </div>
        </div>
      )}

      {toast && (
        <Toast
          message={toast}
          onClose={() => setToast("")}
          duration={1000}
        />
      )}
    </div>
  );
};

export default QuizSession;