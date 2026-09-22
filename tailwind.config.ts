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
          50: "#eef5f6",
          100: "#d7e8ea",
          200: "#b0d1d6",
          300: "#82b3ba",
          400: "#4f8b95",
          500: "#2c6b76",
          600: "#1c5a69",
          700: "#164854",
          800: "#123a43",
          900: "#0f2f36",
          950: "#081b1f",
        },
        gold: {
          50: "#fdf6ec",
          100: "#faebd2",
          200: "#f3d3a1",
          300: "#eab871",
          400: "#dfa04c",
          500: "#c9822f",
          600: "#b06923",
          700: "#8f531f",
          800: "#74431f",
          900: "#61391e",
          950: "#361d0e",
        },
        magenta: {
          50: "#fdf1f6",
          400: "#dc6ba1",
          500: "#c64588",
          600: "#a92e6f",
        },
        mint: {
          50: "#f1faf7",
          300: "#a9dccf",
          400: "#7cbeb2",
          500: "#57a397",
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
