// src/components/SurpriseZone.jsx
import { useState } from "react";
import Confetti from "react-confetti";

export default function SurpriseZone() {
  const [tab, setTab] = useState("box"); // "box" | "avatar" | "facts"
  const [showConfetti, setShowConfetti] = useState(false);
  const [reward, setReward] = useState(null);

  /* ----- Mystery Box Logic ----- */
  const openBox = () => {
    const rewards = ["+50 Coins 💰", "Cool Hat 🎩", "Funny Sticker 🎉", "Fun Fact Card 💡"];
    const randomReward = rewards[Math.floor(Math.random() * rewards.length)];
    setReward(randomReward);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-4">
      {/* Confetti */}
      {showConfetti && <Confetti />}

      {/* Tab Navigation */}
      <div className="flex justify-around mb-6">
        <button
          className={`px-4 py-2 rounded-xl font-bold ${
            tab === "box" ? "bg-purple-600 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setTab("box")}
        >
          📦 Box
        </button>
        <button
          className={`px-4 py-2 rounded-xl font-bold ${
            tab === "avatar" ? "bg-purple-600 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setTab("avatar")}
        >
          🎭 Avatar
        </button>
        <button
          className={`px-4 py-2 rounded-xl font-bold ${
            tab === "facts" ? "bg-purple-600 text-white" : "bg-white text-gray-700"
          }`}
          onClick={() => setTab("facts")}
        >
          💡 Facts
        </button>
      </div>

      {/* ----- Mystery Box Tab ----- */}
      {tab === "box" && (
        <div className="flex flex-col items-center">
          <div className="w-40 h-40 bg-yellow-400 rounded-2xl shadow-lg flex items-center justify-center animate-bounce">
            <span className="text-6xl">📦</span>
          </div>
          <button
            className="mt-6 px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:scale-105 transition"
            onClick={openBox}
          >
            Open with Key 🔑
          </button>
          {reward && (
            <p className="mt-4 text-lg font-bold text-purple-800 animate-pulse">
              You got: {reward}
            </p>
          )}
        </div>
      )}

      {/* ----- Avatar Room Tab ----- */}
      {tab === "avatar" && (
        <div className="flex flex-col items-center">
          {/* Avatar Display */}
          <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-6xl">🧒</span>
          </div>

          {/* Gear Options */}
          <div className="flex gap-4 mt-6">
            <button className="text-4xl hover:scale-125 transition">🎩</button>
            <button className="text-4xl hover:scale-125 transition">👓</button>
            <button className="text-4xl hover:scale-125 transition">🦸</button>
          </div>

          <p className="mt-4 text-sm text-gray-700">Tap items to dress your avatar!</p>
        </div>
      )}

      {/* ----- Fun Facts Tab ----- */}
      {tab === "facts" && (
        <div className="flex flex-col items-center">
          <div
            className="w-72 h-44 bg-white rounded-2xl shadow-lg flex items-center justify-center p-6 cursor-pointer hover:rotate-1 transition"
            onClick={() =>
              setReward("Owls fly without making a sound 🦉")
            }
          >
            <p className="text-lg font-semibold text-gray-800 text-center">
              {reward?.includes("🦉") ? reward : "💡 Tap to reveal a fun fact!"}
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-600">Collect fact cards for badges!</p>
        </div>
      )}
    </div>
  );
}
