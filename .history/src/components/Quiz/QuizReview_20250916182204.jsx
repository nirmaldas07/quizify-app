// src/components/Quiz/QuizReview.jsx
import { useNavigate } from "react-router-dom";

const QuizReview = ({ 
  questions, 
  answers, 
  skipped,
  onBack,
  onRetake,
  fromHistory = false 
}) => {
  const navigate = useNavigate();

  // Handle back navigation
  const handleBack = () => {
    if (fromHistory) {
      navigate("/profile/history", { replace: true });
    } else if (onBack) {
      onBack();
    } else {
      navigate(-1);
    }
  };

  // Calculate stats
  const correctCount = questions.reduce(
    (sum, q, i) => sum + (answers[i] === q.answerIndex ? 1 : 0),
    0
  );
  const skippedCount = skipped?.filter(Boolean).length || 0;
  const incorrectCount = questions.length - correctCount - skippedCount;

  return (
    <div className="mt-2 card rounded-3xl p-5 w-full max-w-none mx-auto pb-24 h-full overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 pt-6">
        <button
          className="px-3 py-1 rounded-xl border border-base-border bg-white/5"
          onClick={handleBack}
        >
          ← Back
        </button>
        <h2 className="text-lg font-semibold">Review Answers</h2>
        <div className="w-16" /> {/* Spacer for centering */}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="rounded-xl bg-green-600/10 border border-green-500/30 p-2 text-center">
          <div className="text-xs text-green-400">Correct</div>
          <div className="text-lg font-bold text-green-400">{correctCount}</div>
        </div>
        <div className="rounded-xl bg-red-600/10 border border-red-500/30 p-2 text-center">
          <div className="text-xs text-red-400">Incorrect</div>
          <div className="text-lg font-bold text-red-400">{incorrectCount}</div>
        </div>
        <div className="rounded-xl bg-amber-600/10 border border-amber-500/30 p-2 text-center">
          <div className="text-xs text-amber-400">Skipped</div>
          <div className="text-lg font-bold text-amber-400">{skippedCount}</div>
        </div>
      </div>

      {/* Questions List */}
      <ol className="space-y-4">
        {questions.map((question, index) => {
          const userAnswer = answers[index];
          const isSkipped = !userAnswer && userAnswer !== 0;
          const isCorrect = userAnswer === question.answerIndex;
          
          return (
            <li 
              key={question.id || index} 
              className="rounded-2xl border border-base-border bg-white/5 p-4 md:p-5"
            >
              {/* Question Header */}
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="text-sm md:text-base font-medium">
                    Q{index + 1}. {question.prompt}
                  </div>
                  {question.category && (
                    <div className="text-xs text-base-muted mt-1">
                      Category: {question.category} • Difficulty: {question.difficulty || "Medium"}
                    </div>
                  )}
                </div>
                <div className="ml-2">
                  {isSkipped ? (
                    <span className="px-2 py-1 rounded text-xs bg-amber-600/20 text-amber-400">
                      Skipped
                    </span>
                  ) : isCorrect ? (
                    <span className="px-2 py-1 rounded text-xs bg-green-600/20 text-green-400">
                      ✓ Correct
                    </span>
                  ) : (
                    <span className="px-2 py-1 rounded text-xs bg-red-600/20 text-red-400">
                      ✗ Wrong
                    </span>
                  )}
                </div>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {question.options.map((option, optIndex) => {
                  const isUserChoice = userAnswer === optIndex;
                  const isCorrectAnswer = optIndex === question.answerIndex;
                  
                  // Determine styling
                  let optionClass = "w-full text-left px-3 py-2 rounded-xl border transition-all ";
                  
                  if (isCorrectAnswer) {
                    // Always highlight correct answer in green
                    optionClass += "bg-green-600/20 border-green-500/50 text-green-300";
                  } else if (isUserChoice && !isCorrectAnswer) {
                    // User's wrong choice in red
                    optionClass += "bg-red-600/20 border-red-500/50 text-red-300";
                  } else {
                    // Other options
                    optionClass += "bg-base-bg/40 border-base-border text-base-muted";
                  }
                  
                  return (
                    <div key={optIndex} className={optionClass}>
                      <span className="font-semibold mr-2">
                        {["A", "B", "C", "D"][optIndex]}.
                      </span>
                      {option}
                      {isCorrectAnswer && (
                        <span className="ml-2 text-green-400">✓</span>
                      )}
                      {isUserChoice && !isCorrectAnswer && (
                        <span className="ml-2 text-red-400">✗</span>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation */}
              {question.explanation && (
                <div className="mt-3 p-3 rounded-xl bg-white/5 border border-base-border">
                  <div className="text-xs font-semibold text-brand-blue mb-1">
                    Explanation:
                  </div>
                  <div className="text-sm text-base-muted">
                    {question.explanation}
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ol>

      {/* Action Buttons */}
      <div className="mt-6 flex gap-2 justify-center sticky bottom-4">
        <button
          className="px-4 py-2.5 rounded-xl border border-base-border bg-base-card backdrop-blur"
          onClick={handleBack}
        >
          Back to Results
        </button>
        {onRetake && (
          <button 
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-purple text-white font-medium"
            onClick={onRetake}
          >
            Retake Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizReview;