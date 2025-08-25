// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Play from "./components/Play.jsx";
import Quiz from "./components/Quiz";
import PartySpin from "./components/PartySpin.jsx";

// 🔽 CORRECTED imports - match your actual file names
import ProfileHome from "./components/Profile/ProfileHome.jsx";
import Leaderboard from "./components/Profile/Leaderboard.jsx";  // Note: not "ProfileLeaderboard"
import History from "./components/Profile/History.jsx";          // Note: not "ProfileHistory"
import Settings from "./components/Profile/Settings.jsx";        // Note: not "ProfileSettings"
import Streaks from "./components/Profile/Streaks.jsx";          // Note: not "ProfileStreaks"

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/party" element={<PartySpin />} />
        
        {/* Profile routes - using correct component names */}
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/profile/leaderboard" element={<Leaderboard />} />
        <Route path="/profile/history" element={<History />} />
        <Route path="/profile/settings" element={<Settings />} />
        <Route path="/profile/streaks" element={<Streaks />} />

        {/* Old leaders path -> redirect to new */}
        <Route path="/leaders" element={<Navigate to="/profile/leaderboard" replace />} />

        {/* Quiz flow */}
        <Route path="/quiz/:category/start" element={<Quiz />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}