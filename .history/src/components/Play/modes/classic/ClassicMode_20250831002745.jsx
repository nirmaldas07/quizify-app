// src/components/Play/modes/classic/ClassicMode.jsx

import { useEffect, useMemo, useRef, useState } from "react";
import Papa from "papaparse";
import { useGameData } from "../../shared/hooks/useGameData.js";
import WheelScreen from "./WheelScreen.js";
import QuestionScreen from "./QuestionScreen.jsx";
import { ResultInterstitial, ThreeStreakFlash, CharacterPicker } from "./ResultScreen.jsx";
import { 
  WHEEL_CATEGORIES, 
  SPIN_CONFIG, 
  sliceAngle, 
  toSlug, 
  mod360, 
  vibrate, 
  playSound 
} from "./config.js";

export default function ClassicMode({ onBack }) {
  const { 
    coins, 
    xp, 
    level, 
    ownedCharacters, 
    soundOn, 
    addCoins, 
    addXp, 
    unlockCharacter, 
    setSoundOn 
  } = useGameData();

  const [gameState, setGameState] = useState('wheel');
  const [run, setRun] = useState({
    qIndex: 0,
    progress: [false, false, false],
    lifelines: { fifty: false, audience: false }
  });

  const [allQuestions, setAllQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [timeLeft, setTimeLeft] = useState(30);
  const [eliminatedOptions, setEliminatedOptions] = useState([]);
  const [audienceData, setAudienceData] = useState(null);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  const [angle, setAngle] = useState(0);
  const [transition, setTransition] = useState("none");
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState(null);
  const [showCallout, setShowCallout] = useState(false);
  const [glowColor, setGlowColor] = useState(null);
  const [showSparkle, setShowSparkle] = useState(-1);
  const [coinBurstTick, setCoinBurstTick] = useState(0);
  const [pendingProgressIdx, setPendingProgressIdx] = useState(null);
  const [nextProgressIdx, setNextProgressIdx] = useState(null);
  const [lastAnswerWasCorrect, setLastAnswerWasCorrect] = useState(false);
  const [postWheelNext, setPostWheelNext] = useState(null);
  const [pulseIdx, setPulseIdx] = useState(-1);
  const [runResults, setRunResults] = useState([false, false, false]);
  const [pendingCoinBurst, setPendingCoinBurst] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);

  const timerRef = useRef(null);
  const spinAudioRef = useRef(null);
  const spinSoundTimerRef = useRef(null);

  const prefersReduced = useMemo(
    () => window.matchMedia?.("(prefers-reduced-motion: reduce)").matches || false,
    []
  );

  // Load questions on mount
  useEffect(() => {
    loadQuestions();
    setupAudio();
    return () => cleanup();
  }, []);

  // Timer logic
  useEffect(() => {
    if (gameState === 'question' && timeLeft > 0 && !timerPaused) {
      timerRef.current = setTimeout(() => {
        setTimeLeft(prev => {
          const next = prev - 1;
          if (next === 10 && soundOn) {
            playSound("/sounds/tick.mp3", 0.8);
          }
          return next;
        });
      }, 1000);
    } else if (gameState === 'question' && timeLeft === 0) {
      setTimeUp(true);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [gameState, timeLeft, soundOn, timerPaused]);

  // Progress animation logic
  useEffect(() => {
    if (gameState !== "wheel" || pendingProgressIdx == null) return;

    setShowSparkle(pendingProgressIdx);
    if (soundOn) playSound("/sounds/progress.mp3", 0.6);
    setPulseIdx(pendingProgressIdx);

    const t0 = setTimeout(() => setPulseIdx(-1), 900);
    const t1 = setTimeout(() => setShowSparkle(-1), 900);
    const t2 = setTimeout(() => {
      if (postWheelNext) {
        if (postWheelNext === "streakFlash") {
          setGameState("streakFlash");
        } else if (postWheelNext === "characterPicker") {
          setGameState("characterPicker");
        } else {
          onBack();
          resetRun();
        }
        setPostWheelNext(null);
      }
      setPendingProgressIdx(null);
    }, 1800);

    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); };
  }, [gameState, pendingProgressIdx, postWheelNext, soundOn, onBack]);

  // Coin burst logic
  useEffect(() => {
    if (gameState !== 'wheel' || !pendingCoinBurst) return;
    setCoinBurstTick(t => t + 1);
    setPendingCoinBurst(false);
  }, [gameState, pendingCoinBurst]);

  // Trigger progress animation after returning to wheel
  useEffect(() => {
    if (gameState !== 'wheel' || nextProgressIdx == null) return;
    const delay = lastAnswerWasCorrect ? 1800 : 0;
    const t = setTimeout(() => {
      setPendingProgressIdx(nextProgressIdx);
      setNextProgressIdx(null);
    }, delay);
    return () => clearTimeout(t);
  }, [gameState, nextProgressIdx, lastAnswerWasCorrect]);

  const loadQuestions = async () => {
    try {
      const response = await fetch("/data/quiz_questions_bank.csv");
      const csvText = await response.text();
      const { data } = Papa.parse(csvText, { 
        header: true, 
        skipEmptyLines: true,
        transformHeader: h => h.trim().toLowerCase()
      });

      const processedQuestions = data.map((row, index) => {
        const options = [row.option1, row.option2, row.option3, row.option4].map(opt => 
          (opt || "").trim()
        ).filter(Boolean);

        if (options.length < 4) return null;

        const answerMap = { a: 0, b: 1, c: 2, d: 3 };
        let correctIndex = answerMap[row.answer?.toLowerCase()];
        
        if (correctIndex === undefined) {
          correctIndex = options.findIndex(opt => 
            opt.toLowerCase() === (row.answer || "").toLowerCase()
          );
        }
        
        if (correctIndex === -1) correctIndex = 0;

        return {
          id: row.id || `q_${index}`,
          prompt: (row.question || "").trim(),
          options,
          correctIndex,
          category: (row.category || row.subject || "general knowledge").trim(),
          difficulty: (row.difficulty || "medium").toLowerCase(),
          explanation: (row.explanation || "").trim()
        };
      }).filter(Boolean);

      setAllQuestions(processedQuestions);
    } catch (error) {
      console.error("Failed to load questions:", error);
      setAllQuestions([]);
    }
  };

  const setupAudio = () => {
    const audio = new Audio("/sounds/spin.mp3");
    audio.loop = true;
    audio.volume = 0.6;
    spinAudioRef.current = audio;
  };

  const cleanup = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (spinSoundTimerRef.current) {
      clearTimeout(spinSoundTimerRef.current);
      spinSoundTimerRef.current = null;
    }
    if (spinAudioRef.current) {
      try { spinAudioRef.current.pause(); } catch {}
      spinAudioRef.current = null;
    }
  };

  const resetRun = () => {
    setRun({
      qIndex: 0,
      progress: [false, false, false],
      lifelines: { fifty: false, audience: false }
    });
    setRunResults([false, false, false]);
    setCurrentQuestion(null);
    setCurrentCategory(null);
    setSelectedCharacter(null);
    setEliminatedOptions([]);
    setAudienceData(null);
    setTimeUp(false);
    setCoinBurstTick(0);
  };

  const startSpinSound = () => {
    if (soundOn && spinAudioRef.current) {
      try {
        spinAudioRef.current.currentTime = 0;
        spinAudioRef.current.play();
      } catch {}
      if (spinSoundTimerRef.current) clearTimeout(spinSoundTimerRef.current);
      spinSoundTimerRef.current = setTimeout(() => {
        stopSpinSound();
      }, 2000);
    }
  };

  const stopSpinSound = () => {
    if (spinSoundTimerRef.current) {
      clearTimeout(spinSoundTimerRef.current);
      spinSoundTimerRef.current = null;
    }
    if (spinAudioRef.current) {
      try {
        spinAudioRef.current.pause();
        spinAudioRef.current.currentTime = 0;
      } catch {}
    }
  };

  const spin = () => {
    if (spinning) return;

    setResult(null);
    setShowCallout(false);
    setGlowColor(null);
    setSpinning(true);
    startSpinSound();

    const categoryIndex = Math.floor(Math.random() * WHEEL_CATEGORIES.length);
    const selectedCategory = WHEEL_CATEGORIES[categoryIndex];

    const currentAngle = mod360(angle);
    const targetSliceCenter = categoryIndex * sliceAngle + sliceAngle / 2;
    const jitter = (Math.random() - 0.5) * (sliceAngle * 0.3);
    const targetAngle = 360 - targetSliceCenter + jitter;
    let deltaBase = mod360(targetAngle - currentAngle);
    const totalRotation = SPIN_CONFIG.FULL_TURNS * 360 + deltaBase;

    const overshootTarget = angle + totalRotation + SPIN_CONFIG.OVERSHOOT;
    setTransition(`transform ${prefersReduced ? 1000 : SPIN_CONFIG.DURATION}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`);
    setAngle(overshootTarget);

    vibrate([20, 50, 20]);

    setTimeout(() => {
      setTransition(`transform ${prefersReduced ? 200 : SPIN_CONFIG.SETTLE_DURATION}ms cubic-bezier(0.68, -0.55, 0.265, 1.55)`);
      setAngle(prev => prev - SPIN_CONFIG.OVERSHOOT);
    }, prefersReduced ? 1000 : SPIN_CONFIG.DURATION);

    setTimeout(() => {
      stopSpinSound();
      setSpinning(false);
      setResult({ cat: selectedCategory, index: categoryIndex });
      setCurrentCategory(selectedCategory);
      setGlowColor(selectedCategory.color);
      setShowCallout(true);

      setTimeout(() => {
        setShowCallout(false);
        setGameState('interstitial');
      }, 1500);

      setTimeout(() => setGlowColor(null), 1000);
    }, (prefersReduced ? 1000 : SPIN_CONFIG.DURATION) + (prefersReduced ? 200 : SPIN_CONFIG.SETTLE_DURATION) + 100);
  };

  const startQuestion = () => {
    const categoryQuestions = allQuestions.filter(q => {
      const qCat = q.category.toLowerCase();
      const targetCat = currentCategory.name.toLowerCase();
      return qCat.includes(targetCat) || targetCat.includes(qCat);
    });

    let question;
    if (categoryQuestions.length > 0) {
      question = categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)];
    } else {
      question = allQuestions[Math.floor(Math.random() * allQuestions.length)];
    }

    if (question) {
      setCurrentQuestion(question);
      setTimeLeft(30);
      setEliminatedOptions([]);
      setAudienceData(null);
      setTimeUp(false);
      setTimerPaused(false);
      setGameState('question');
    } else {
      setGameState('wheel');
    }
  };

  const handleAnswer = (correct, motivator, isContinue = false) => {
    if (!isContinue) {
      setTimerPaused(true);
      return;
    }

    const currentIdx = run.qIndex;
    const nextProgress = [...run.progress];
    nextProgress[currentIdx] = true;

    const updatedResults = [...runResults];
    updatedResults[currentIdx] = !!correct;
    setRunResults(updatedResults);

    setRun(prev => ({
      ...prev,
      progress: nextProgress,
      qIndex: prev.qIndex + 1
    }));

    if (correct) {
      addCoins(5);
      addXp(1);
      setPendingCoinBurst(true);
    }

    setNextProgressIdx(currentIdx);
    setLastAnswerWasCorrect(!!correct);

    if (currentIdx === 2) {
      const perfect = updatedResults.every(Boolean);
      setPostWheelNext(perfect ? "streakFlash" : "modes");
    } else {
      setPostWheelNext(null);
    }

    setGameState("wheel");
  };

  const handleUseLifeline = (type) => {
    if (run.lifelines[type] || !currentQuestion) return;

    setRun(prev => ({
      ...prev,
      lifelines: { ...prev.lifelines, [type]: true }
    }));

    if (type === 'fifty') {
      const wrongOptions = currentQuestion.options
        .map((_, index) => index)
        .filter(index => index !== currentQuestion.correctIndex);
      
      const toEliminate = wrongOptions.slice(0, 2);
      setEliminatedOptions(toEliminate);
    } else if (type === 'audience') {
      const base = 40 + Math.random() * 25;
      let remaining = 100 - base;
      const poll = [0, 0, 0, 0];
      poll[currentQuestion.correctIndex] = Math.round(base);
      
      const others = [0, 1, 2, 3].filter(i => i !== currentQuestion.correctIndex);
      others.forEach((index, i) => {
        if (i === others.length - 1) {
          poll[index] = remaining;
        } else {
          const amount = Math.floor(Math.random() * remaining);
          poll[index] = amount;
          remaining -= amount;
        }
      });
      
      setAudienceData(poll);
    }
  };

  const handleCharacterSelect = (characterSlug) => {
    setSelectedCharacter(characterSlug);
    setGameState('bonusInterstitial');
  };

  const handleBonusAnswer = (correct) => {
    if (correct && selectedCharacter) {
      unlockCharacter(selectedCharacter);
      if (soundOn) playSound("/sounds/coin.mp3", 1.0);
    }
    
    setTimeout(() => {
      onBack();
      resetRun();
    }, 3000);
  };

  const handleBackToWheel = () => {
    setGameState('wheel');
  };

  // Render game states
  switch (gameState) {
    case 'wheel':
      return (
        <WheelScreen 
          run={run}
          coins={coins}
          xp={xp}
          level={level}
          ownedCharacters={ownedCharacters}
          onSpin={spin}
          onBack={onBack}
          spinning={spinning}
          angle={angle}
          transition={transition}
          result={result}
          showCallout={showCallout}
          glowColor={glowColor}
          soundOn={soundOn}
          setSoundOn={setSoundOn}
          showSparkle={showSparkle}
          pulseIdx={pulseIdx}
          coinBurstTick={coinBurstTick}
          pendingProgressIdx={pendingProgressIdx}
          lastAnswerWasCorrect={lastAnswerWasCorrect}
          nextProgressIdx={nextProgressIdx}
        />
      );
      
    case 'interstitial':
      return (
        <ResultInterstitial 
          category={currentCategory}
          onComplete={startQuestion}
          soundOn={soundOn}
        />
      );

    case 'streakFlash':
      return (
        <ThreeStreakFlash onDone={() => setGameState('characterPicker')} />
      );
      
    case 'question':
      return (
        <QuestionScreen
          question={currentQuestion}
          category={currentCategory}
          onAnswer={handleAnswer}
          run={run}
          timeLeft={timeLeft}
          usedLifelines={run.lifelines}
          onUseLifeline={handleUseLifeline}
          eliminatedOptions={eliminatedOptions}
          audienceData={audienceData}
          onBack={handleBackToWheel}
          timeUp={timeUp}
          onTimeUpBackToWheel={() => { setTimeUp(false); setGameState('wheel'); }}
          soundOn={soundOn}
        />
      );
      
    case 'characterPicker':
      return (
        <CharacterPicker onSelect={handleCharacterSelect} />
      );
      
    case 'bonusInterstitial':
      return (
        <ResultInterstitial 
          category={WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter)}
          onComplete={() => setGameState('bonusQuestion')}
          isBonus={true}
          soundOn={soundOn}
        />
      );
      
    case 'bonusQuestion':
      if (!currentQuestion) {
        const bonusCategory = WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter);
        if (bonusCategory && allQuestions.length > 0) {
          const categoryQuestions = allQuestions.filter(q => {
            const qCat = q.category.toLowerCase();
            const targetCat = bonusCategory.name.toLowerCase();
            return qCat.includes(targetCat) || targetCat.includes(qCat);
          });
          
          const question = categoryQuestions.length > 0 
            ? categoryQuestions[Math.floor(Math.random() * categoryQuestions.length)]
            : allQuestions[Math.floor(Math.random() * allQuestions.length)];
            
          setCurrentQuestion(question);
          setTimeLeft(30);
        }
        return (
          <div className="min-h-screen bg-base-bg text-base-text flex items-center justify-center">
            <div className="text-lg">Loading bonus question...</div>
          </div>
        );
      }
      
      return (
        <QuestionScreen
          question={currentQuestion}
          category={WHEEL_CATEGORIES.find(c => toSlug(c.name) === selectedCharacter) || WHEEL_CATEGORIES[0]}
          onAnswer={handleBonusAnswer}
          run={{ ...run, lifelines: { fifty: true, audience: true } }}
          timeLeft={timeLeft}
          usedLifelines={{ fifty: true, audience: true }}
          onUseLifeline={() => {}}
          eliminatedOptions={[]}
          audienceData={null}
          onBack={onBack}
          soundOn={soundOn}
        />
      );
      
    default:
    return (
        <div className="min-h-screen bg-base-bg text-white flex items-center justify-center">
        <div className="text-center">
            <div className="text-2xl mb-4">Unknown State</div>
            <button 
            onClick={() => setGameState('wheel')}
            className="px-6 py-3 bg-blue-600 rounded-lg"
            >
            Back to Wheel
            </button>
        </div>
        </div>
    );
    }
    }