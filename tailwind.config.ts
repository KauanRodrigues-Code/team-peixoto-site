import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        black: {
          DEFAULT: "#050505",
          secondary: "#0D0D0D",
        },
        gold: {
          DEFAULT: "#C9A227",
          light: "#E5C45A",
        },
        red: {
          brand: "#B51218",
        },
        gray: {
          brand: "#A1A1A1",
        },
      },
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #C9A227 0%, #E5C45A 100%)",
        "dark-gradient": "linear-gradient(180deg, rgba(5,5,5,0) 0%, #050505 100%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.7s ease-out forwards",
        fadeIn: "fadeIn 0.9s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
