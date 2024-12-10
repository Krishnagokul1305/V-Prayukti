/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#b7ab98",
        secondary: "#eb5939",
        bg: "#0d0d0d",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        marquee: "marquee 15s linear infinite",
      },

      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
