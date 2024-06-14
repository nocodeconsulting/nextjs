// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Use class-based dark mode
  theme: {
    extend: {
      colors: {
        'custom-bg': {
          light: '#ffffff', // White for light mode
          dark: '#000000' // Black for dark mode
        },
        'custom-text': {
          light: '#000000', // Black for light mode text
          dark: '#ffffff' // White for dark mode text
        },
        'card': {
          DEFAULT: '#FFFFFF', // default to light mode background
          dark: '#1A202C', // darker background for dark mode
          foreground: '#111827', // text color for light mode
          darkForeground: '#E2E8F0' // text color for dark mode
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")], // Make sure to correctly configure your path if needed
};

export default config;
