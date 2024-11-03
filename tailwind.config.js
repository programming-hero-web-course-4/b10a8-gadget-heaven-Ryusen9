/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
    },
    extend: {},
  },
  daisyui: {
    themes: ["light", "business"],
  },
  plugins: [require('daisyui'),],
} 