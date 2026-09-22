import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fef6ed",
          100: "#fde9d1",
          200: "#fbd0a3",
          300: "#f8ae6a",
          400: "#f5842f",
          500: "#ef6111",
          600: "#d6470c",
          700: "#b1330d",
          800: "#8e2911",
          900: "#742411",
          950: "#3f0f06",
        },
        ink: {
          50: "#f5f6f8",
          100: "#e7e9ee",
          200: "#cdd2dc",
          300: "#a6adbe",
          400: "#78829b",
          500: "#5b6480",
          600: "#484f69",
          700: "#3c4157",
          800: "#2b2f40",
          900: "#191b26",
          950: "#0e0f16",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 15, 25, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
