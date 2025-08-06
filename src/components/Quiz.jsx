import React, { useEffect, useState, useRef } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import Papa from 'papaparse';
import Confetti from 'react-confetti';
import useSound from 'use-sound';
import correctSound from '../assets/correct.mp3';
import wrongSound from '../assets/wrong.mp3';

const Quiz = () => {
  const { category } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const difficulty = location.state?.difficulty || 'easy';

  const [quizData, setQuizData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [skipped, setSkipped] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showSadEmoji, setShowSadEmoji] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [showSubmitPopup, setShowSubmitPopup] = useState(false);
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [questionTime, setQuestionTime] = useState(30);
  const [timePerQuestion, setTimePerQuestion] = useState([]);
  const [totalTimeTaken, setTotalTimeTaken] = useState(0);
  const [averageTime, setAverageTime] = useState(0);
  const answerRef = useRef(null);
  const [confettiBox, setConfettiBox] = useState({ width: 0, height: 0, x: 0, y: 0 });

  const [playCorrect] = useSound(correctSound);
  const [playWrong] = useSound(wrongSound);

  useEffect(() => {
    fetch('/data/quiz_questions_bank.csv')
      .then(res => res.text())
      .then(csv => {
        const parsed = Papa.parse(csv, { header: true }).data;
        const filtered = parsed.filter(q => q.subject === category && q.difficulty === difficulty);
        const shuffled = filtered
          .sort(() => 0.5 - Math.random())
          .slice(0, 5)
          .map(q => {
            const options = [q.option1, q.option2, q.option3, q.option4];
            const shuffledOptions = options.sort(() => 0.5 - Math.random());
            return {
              ...q,
              options: shuffledOptions,
            };
          });
        setQuizData(shuffled);
        setAnswers(Array(shuffled.length).fill(null));
        setTimePerQuestion(Array(shuffled.length).fill(0));
        setStartTime(Date.now());
      });
  }, [category, difficulty]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuestionTime(prev => {
        if (prev > 0) return prev - 1;
        handleNext(true);
        return 30;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (answerRef.current) {
      const rect = answerRef.current.getBoundingClientRect();
      setConfettiBox({
        width: rect.width,
        height: rect.height,
        x: rect.left,
        y: rect.top + window.scrollY,
      });
    }
  }, [showConfetti, currentIndex]);

  const handleOptionClick = (opt) => {
    if (answers[currentIndex]) return;
    setSelectedOption(opt);
    const updated = [...answers];
    updated[currentIndex] = opt;
    setAnswers(updated);

    const isCorrect = opt === quizData[currentIndex].answer;
    if (isCorrect) {
      playCorrect();
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 1500);
    } else {
      playWrong();
      setShowSadEmoji(true);
      setTimeout(() => setShowSadEmoji(false), 1500);
    }
  };

  const handleNext = (auto = false) => {
    const updatedTime = [...timePerQuestion];
    updatedTime[currentIndex] += 30 - questionTime;
    setTimePerQuestion(updatedTime);

    if (!auto && !answers[currentIndex] && !skipped.includes(currentIndex)) {
      setSkipped(prev => [...prev, currentIndex]);
    }

    if (currentIndex < quizData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOption(answers[currentIndex + 1]);
      setQuestionTime(30);
    } else {
      setShowSubmitPopup(true);
    }
  };

  const handleSubmit = () => {
    const correct = answers.filter((ans, i) => ans === quizData[i].answer).length;
    const totalTime = Math.floor((Date.now() - startTime) / 1000);
    setScore(correct);
    setTotalTimeTaken(totalTime);
    setAverageTime(Math.round(timePerQuestion.reduce((a, b) => a + b, 0) / quizData.length));
    setShowSubmitPopup(false);
    setShowResult(true);
  };

  const formatTime = (sec) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const getScoreRank = () => {
    const pct = (score / quizData.length) * 100;
    if (pct >= 90) return 'Top 10%';
    if (pct >= 80) return 'Top 20%';
    if (pct >= 70) return 'Top 30%';
    if (pct >= 60) return 'Top 40%';
    return 'Top 50%';
  };

  const current = quizData[currentIndex];

  return (
    <div className="min-h-screen bg-white p-6">
      {!showResult && current && (
        <>
          <h1 className="text-2xl font-bold mb-2 text-blue-600 capitalize">
            {category.replace(/-/g, ' ')}
          </h1>

          <p className="text-sm text-gray-500 mb-2">
            Total Time: {formatTime(Math.floor((Date.now() - startTime) / 1000))}
          </p>

          <div className="flex gap-2 mb-4">
            {quizData.map((_, i) => {
              const bg = answers[i]
                ? 'bg-blue-500 text-white'
                : skipped.includes(i)
                ? 'bg-yellow-400 text-white'
                : 'bg-red-500 text-white';
              return (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-8 h-8 rounded-full text-sm font-medium ${bg}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="bg-gray-100 p-4 rounded" ref={answerRef}>
            <div className="flex justify-between mb-3">
              <h2 className="text-lg font-semibold">
                Q{currentIndex + 1}. {current.question}
              </h2>
              <div className="bg-blue-100 text-blue-800 w-8 h-8 flex items-center justify-center rounded-full font-bold">
                {questionTime}
              </div>
            </div>

            {current.options.map((opt, idx) => {
              const isCorrect = answers[currentIndex] && opt === current.answer;
              const isWrong = answers[currentIndex] === opt && opt !== current.answer;

              return (
                <div key={idx} ref={isCorrect ? answerRef : null}>
                  <button
                    onClick={() => handleOptionClick(opt)}
                    disabled={answers[currentIndex]}
                    className={`block w-full text-left px-4 py-2 border rounded mb-2 
                      ${isCorrect ? 'bg-green-300 border-green-500' : ''}
                      ${isWrong ? 'bg-red-300 border-red-500' : ''}
                      ${!answers[currentIndex] ? 'hover:bg-gray-50' : ''}`}
                  >
                    {opt}
                  </button>
                </div>
              );
            })}

            {showConfetti && (
              <Confetti
                width={confettiBox.width}
                height={confettiBox.height}
                numberOfPieces={1000}
                gravity={0.2}
                initialVelocityY={10}
                recycle={false}
                run
                style={{
                  position: 'absolute',
                  top: confettiBox.y,
                  left: confettiBox.x,
                  pointerEvents: 'none',
                  zIndex: 9999,
                }}
              />
            )}

            {showSadEmoji && (
              <div
                style={{
                  position: 'absolute',
                  top: confettiBox.y + 40,
                  left: confettiBox.x + 40,
                }}
                className="text-4xl animate-bounce"
              >
                😢
              </div>
            )}

            {answers[currentIndex] && (
              <p className="mt-4 text-sm">
                <strong>Explanation:</strong> {current.explanation}
              </p>
            )}

            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                className="bg-gray-300 px-4 py-2 rounded"
              >
                Prev
              </button>
              <button
                onClick={() => handleNext()}
                disabled={answers[currentIndex]}
                className="bg-yellow-400 px-4 py-2 rounded"
              >
                Skip
              </button>
              <button
                onClick={() => handleNext()}
                disabled={!answers[currentIndex]}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                {currentIndex === quizData.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </div>
        </>
      )}

      {showSubmitPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">🎯 Submit Quiz?</h2>
            <p>Total Questions: {quizData.length}</p>
            <p>Attempted: {answers.filter(Boolean).length}</p>
            <p>Skipped: {skipped.length}</p>

            <div className="flex justify-center gap-4 mt-6">
              <button
                className="bg-gray-400 text-white px-4 py-2 rounded"
                onClick={() => setShowSubmitPopup(false)}
              >
                Back to Quiz
              </button>
              <button
                className="bg-blue-600 text-white px-4 py-2 rounded"
                onClick={handleSubmit}
              >
                Submit Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {showResult && (
        <div className="text-center mt-10">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Quiz Completed!</h2>
            <div className="space-y-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-lg font-semibold text-blue-800">
                  Score: {score}/{quizData.length} ({Math.round((score / quizData.length) * 100)}%)
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                ⏱ Time Taken: <strong className="text-green-700">{formatTime(totalTimeTaken)}</strong>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                📊 Avg. Time per Question: <strong className="text-purple-700">{formatTime(averageTime)}</strong>
              </div>
              <div className="bg-yellow-50 p-3 rounded-lg">
                🏆 Your Rank: <strong className="text-yellow-700">{getScoreRank()}</strong>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button onClick={() => window.location.reload()} className="bg-green-500 text-white py-2 rounded">
                🔄 Retake Quiz
              </button>
              <a
                href={`https://wa.me/?text=I scored ${score}/${quizData.length} on this awesome quiz!`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white py-2 rounded"
              >
                🟢 Share on WhatsApp
              </a>
              <button onClick={() => navigate('/')} className="bg-gray-600 text-white py-2 rounded">
                🏠 Back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
