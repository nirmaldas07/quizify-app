import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Screen from "./Screen.jsx";

export default function Settings() {
  const navigate = useNavigate();
  const [sound, setSound]     = useState(true);
  const [haptics, setHaptics] = useState(true);
  const [notifications, setNotifications] = useState(true);

  return (
    <Screen title="Settings" subtitle="Make it yours">
      <div className="rounded-2xl border border-white/10 bg-white/5 divide-y divide-white/10">
        <Row
          label="Sound"
          right={<Toggle on={sound} set={setSound} />}
        />
        <Row
          label="Haptics"
          right={<Toggle on={haptics} set={setHaptics} />}
        />
        <Row
          label="Notifications"
          right={<Toggle on={notifications} set={setNotifications} />}
        />
        <Row
          label="Edit Profile"
          right={<span className="text-white/60">→</span>}
          onClick={() => navigate("/profile")}
        />
        <Row
          label="Privacy Policy"
          right={<span className="text-white/60">→</span>}
          onClick={() => window.open("#", "_blank")}
        />
      </div>

      <button
        className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 py-3 text-red-300 font-semibold
                   transition-transform duration-150 active:scale-[0.99]"
        onClick={() => alert("Sign out hook here")}
      >
        Sign out
      </button>
    </Screen>
  );
}

function Row({ label, right, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full flex items-center justify-between px-4 py-4 text-left
                 hover:bg-white/5 first:rounded-t-2xl last:rounded-b-2xl transition"
    >
      <span className="text-sm font-semibold">{label}</span>
      {right}
    </button>
  );
}

function Toggle({ on, set }) {
  return (
    <span
      onClick={(e) => { e.stopPropagation(); set(v => !v); if (navigator.vibrate) navigator.vibrate(10); }}
      className={[
        "inline-flex w-11 h-6 items-center rounded-full border transition px-0.5",
        on
          ? "bg-lime-400 border-lime-400 justify-end"
          : "bg-white/10 border-white/10 justify-start",
      ].join(" ")}
      role="switch"
      aria-checked={on}
    >
      <span className={["w-5 h-5 rounded-full bg-white", on ? "" : "bg-white"].join(" ")} />
    </span>
  );
}
