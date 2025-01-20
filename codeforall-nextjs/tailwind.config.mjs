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
    },
  },
  plugins: [
    heroui(),
    // Add a custom plugin to re-register your custom boxShadow
    function ({ addUtilities }) {
      addUtilities(
        {
          ".shadow-neon-purple-initial": {
            boxShadow: "0 0 5px 2px rgba(128, 0, 255, 0.4)",
          },
          ".shadow-neon-purple-hover": {
            boxShadow:
              "0 0 15px 5px rgba(128, 0, 255, 0.8), 0 0 30px 10px rgba(128, 0, 255, 0.6)",
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
