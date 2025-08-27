// src/components/Quiz/QuizSession.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import QuestionCard from "./components/QuestionCard";
import Timer from "./components/Timer";
import Toast from "../Toast"; // Assuming Toast is a shared component
import Modal from "../Modal"; // Assuming Modal is a shared component

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
  const [remaining, setRemaining] = useState(timerConfig.seconds || 45);
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
      setRemaining(timerConfig.seconds || 45);
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

  if (!current) return null;

  return (
    <div className="quiz-session">
      {/* Header */}
      <div className="mb-2 mt-6 mx-4 sm:mx-3 grid grid-cols-[auto,1fr,auto] items-center">
        <button
          onClick={() => setShowQuit(true)}
          className="px-3 py-1.5 rounded-xl border border-base-border bg-white/5 text-sm"
        >
          ← Back
        </button>

        <div className="text-center justify-self-center">
          <div className="text-base font-semibold">
            {category}
          </div>
          <div className="text-xs text-base-muted">
            Mode: {isPractice ? "Practice" : "Quiz"} • Difficulty: {difficulty}
          </div>
        </div>

        <Timer
          remaining={remaining}
          paused={paused}
          onTimeUp={onTimeUp}
          setRemaining={setRemaining}
          timerConfig={timerConfig}
        />
      </div>

      {/* Practice mode sound toggle */}
      {isPractice && (
        <div className="mb-2 mx-4 sm:mx-3 flex items-center justify-end text-xs text-base-muted">
          <label className="flex items-center gap-2 cursor-pointer">
            <span>Sounds</span>
            <input
              type="checkbox"
              checked={practiceSoundsOn}
              onChange={(e) => setPracticeSoundsOn(e.target.checked)}
            />
          </label>
        </div>
      )}

      {/* Progress bar */}
      <div className="mb-2 px-4 sm:px-3 flex w-full gap-[2px]">
        {Array.from({ length: total }).map((_, i) => {
          const isCurrent = i === index;
          const status = skipped[i] ? "skipped" : (answers[i] !== null ? "attempted" : "idle");
          let color =
            status === "attempted" ? "bg-brand-blue" :
            status === "skipped" ? "bg-amber-400" :
            isCurrent ? "bg-white/30" : "bg-white/15";
          const h = isCurrent ? "h-1.5" : "h-1";
          const ring = isCurrent ? "ring-1 ring-white/40" : "";
          return <div key={i} className={`${h} flex-1 rounded ${color} ${ring}`} />;
        })}
      </div>

      <div className="mb-4 px-4 sm:px-3 text-xs text-base-muted flex items-center justify-between">
        <span>Q{index + 1} / {total}</span>
        <span>Attempted {attempted} • Skipped {skippedCount}</span>
      </div>

      {/* Question Card */}
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

      {/* Lifelines */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          onClick={use5050}
          disabled={used5050 || (isPractice && lockedMap[index])}
          className={`px-3 py-2 rounded-xl border border-base-border bg-white/5 ${
            used5050 || (isPractice && lockedMap[index]) ? "opacity-60" : ""
          }`}
        >
          50:50
        </button>
        <button
          onClick={useAudience}
          disabled={usedAudience || (isPractice && lockedMap[index])}
          className={`px-3 py-2 rounded-xl border border-base-border bg-white/5 ${
            usedAudience || (isPractice && lockedMap[index]) ? "opacity-60" : ""
          }`}
        >
          Audience
        </button>
      </div>

      {/* Navigation */}
      <div className="mt-4 max-w-sm mx-auto grid grid-cols-3 gap-3">
        <button
          onClick={goPrev}
          disabled={index === 0}
          className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50"
        >
          Prev
        </button>
        <button
          onClick={onSkip}
          disabled={selected !== null}
          className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5 disabled:opacity-50"
        >
          Skip
        </button>
        <button
          onClick={goNext}
          className="w-full px-3 py-2 rounded-xl border border-base-border bg-white/5"
        >
          Next
        </button>
      </div>

      {/* Submit Button */}
      <div className="mt-4 flex justify-center">
        <button
          onClick={() => setShowSubmit(true)}
          className="px-5 py-2.5 rounded-2xl text-white bg-gradient-to-r from-brand-blue to-brand-purple"
        >
          Submit
        </button>
      </div>

      {/* Modals */}
      {showQuit && (
        <Modal onClose={() => setShowQuit(false)}>
          <div className="text-center p-4">
            <h2 className="text-lg font-bold mb-1">Quit quiz?</h2>
            <p className="text-sm text-base-muted mb-4">Your progress will be lost.</p>
            <div className="flex justify-center gap-3">
              <button
                className="px-3 py-2 rounded-xl border border-base-border bg-white/5"
                onClick={() => setShowQuit(false)}
              >
                No
              </button>
              <button
                className="btn-primary px-3 py-2 rounded-xl"
                onClick={onQuit}
              >
                Yes
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showSubmit && (
        <Modal onClose={() => setShowSubmit(false)}>
          <div className="text-center p-4">
            <h2 className="text-lg font-bold mb-1">Submit quiz?</h2>
            <p className="text-sm text-base-muted mb-4">
              Attempted {attempted}/{total} • Skipped {skippedCount}
            </p>
            <div className="flex justify-center gap-3">
              <button
                className="px-3 py-2 rounded-xl border border-base-border bg-white/5"
                onClick={() => setShowSubmit(false)}
              >
                Back
              </button>
              <button
                className="btn-primary px-3 py-2 rounded-xl"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </Modal>
      )}

      {timeUpFor === index && (
        <Modal onClose={() => { setTimeUpFor(null); goNext(); }}>
          <div className="text-center p-4">
            <h2 className="text-lg font-bold mb-1">Time's up</h2>
            <p className="text-sm text-base-muted mb-4">Let's move on.</p>
            <button
              className="btn-primary px-3 py-2 rounded-xl"
              onClick={() => { setTimeUpFor(null); goNext(); }}
            >
              {index < total - 1 ? "Next question" : "Submit"}
            </button>
          </div>
        </Modal>
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