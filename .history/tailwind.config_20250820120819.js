/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // App-wide container defaults (nice centered mobile width)
    container: {
      center: true,
      padding: "1.25rem", // 20px
    },
    extend: {
      // Design tokens
      colors: {
        base: {
          bg:    "#0B0B0F",                     // near-black background
          card:  "#0F1117",                     // card surface
          text:  "#F8FAFC",                     // main text
          muted: "#9CA3AF",                     // secondary text
          border:"rgba(255,255,255,0.10)",      // subtle borders
        },
        brand: {
          blue:   "#2563EB",
          purple: "#7C3AED",
        },
      },
      // Softer corners than default
      borderRadius: {
        "2xl": "1.25rem", // overrides default
        "3xl": "1.75rem",
      },
      // Gentle shadow
      boxShadow: {
        soft: "0 8px 28px rgba(0,0,0,.35)",
      },
      // System/Inter/SF stack
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
      },
    },
  },
  plugins: [],
};
