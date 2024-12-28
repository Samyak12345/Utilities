import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#9ca3af', // Light Gray
          DEFAULT: '#6b7280', // Gray
          dark: '#4b5563', // Dark Gray
        },
        secondary: {
          light: '#1f2937', // Light Black
          DEFAULT: '#111827', // Black
          dark: '#0f172a', // Dark Black
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
        heading: [
          "Poppins",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb',
            a: {
              color: '#9ca3af',
              '&:hover': {
                color: '#6b7280',
              },
            },
            h1: {
              fontFamily: 'Poppins',
              fontWeight: '700',
            },
            h2: {
              fontFamily: 'Poppins',
              fontWeight: '600',
            },
            h3: {
              fontFamily: 'Poppins',
              fontWeight: '500',
            },
            p: {
              fontFamily: 'Inter',
              fontWeight: '400',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
} satisfies Config;