import { Luckiest_Guy } from "next/font/google";

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        luckiestGuy: ["var(--font-luckiest-guy)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
