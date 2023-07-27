/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html", "./dist/"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        dmserif: ["DM Serif", "serif"],
        com: ["Comfortaa", "cursive"],
      },
      colors: {
        primary: "#0a0a0a",
        accent: "#000099",
      },
    },
  },
  plugins: [],
};
