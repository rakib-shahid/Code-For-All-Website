/** @type {import('tailwindcss').Config} */
const { heroui } = require("@heroui/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-dark-blue": "rgba(53,35,103,255)",
      },
      boxShadow: {
        "neon-purple-initial": "0 0 5px 2px rgba(128, 0, 255, 0.4)",
        "neon-purple-hover":
          "0 0 15px 5px rgba(128, 0, 255, 0.8), 0 0 30px 10px rgba(128, 0, 255, 0.6)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Helvetica",
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
    },
  },
  plugins: [heroui()],
};
