/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        secondary: "#1e40af",
        accent: "#60a5fa",
      },
      fontFamily: {
        squidFont: ['GameOfSquids', 'sans-serif'],
      },
    },
  },
  plugins: [],
}