import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6', // Tailwind Blue
          DEFAULT: '#1e3a8a', // Dark Blue
          dark: '#1e40af', // Darker Blue
        },
        secondary: {
          light: '#64748b', // Cool Gray
          DEFAULT: '#334155', // Dark Cool Gray
          dark: '#1e293b', // Darker Cool Gray
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;