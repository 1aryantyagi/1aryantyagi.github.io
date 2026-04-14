/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          cyan: "#22d3ee",
          violet: "#a78bfa",
          magenta: "#e879f9",
        },
        surface: {
          DEFAULT: "rgba(15, 23, 42, 0.65)",
          strong: "rgba(15, 23, 42, 0.85)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(34, 211, 238, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.06) 1px, transparent 1px)",
      },
      animation: {
        "grid-pan": "grid-pan 80s linear infinite",
        shimmer: "shimmer 2.5s ease-in-out infinite",
      },
      keyframes: {
        "grid-pan": {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "48px 48px, 48px 48px" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
