/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-dark-blue": "rgba(53,35,103,255)",
      },
      boxShadow: {
        "neon-purple-initial": "0 0 5px 2px rgba(128, 0, 255, 0.4)",
        "neon-purple-hover":
          "0 0 15px 5px rgba(128, 0, 255, 0.8), 0 0 30px 10px rgba(128, 0, 255, 0.6)",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
