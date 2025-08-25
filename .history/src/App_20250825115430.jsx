// src/App.jsx
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Play from "./components/Play.jsx";
import Quiz from "./components/Quiz";
import PartySpin from "./components/PartySpin.jsx";

// ✅ import only from Profile folder now
import {
  ProfileHome,
  Leaderboard,
  History,
  Rewards,
  Badges,
  Achievements,
  Streaks,
  Quests,
  Settings,
} from "./components/Profile";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/party" element={<PartySpin />} />

        {/* Profile routes */}
        <Route path="/profile" element={<ProfileHome />} />
        <Route path="/profile/leaderboard" element={<Leaderboard />} />
        <Route path="/profile/history" element={<History />} />
        <Route path="/profile/rewards" element={<Rewards />} />
        <Route path="/profile/badges" element={<Badges />} />
        <Route path="/profile/achievements" element={<Achievements />} />
        <Route path="/profile/streaks" element={<Streaks />} />
        <Route path="/profile/quests" element={<Quests />} />
        <Route path="/profile/settings" element={<Settings />} />

        {/* Quiz flow */}
        <Route path="/quiz/:category/start" element={<Quiz />} />

        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
