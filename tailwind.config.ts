import type { Config } from "tailwindcss";
import { pretendard } from './app/util/fonts';

const config: Config = {
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
        montserrat: ['var(--font-montserrat)'],
        pretendard: ['var(--font-pretendard)'],
      }
    },
  },
  plugins: [],
};
export default config;
