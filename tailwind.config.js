/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          dark: '#111111',
          gray: '#1E1E1E',
          accent: '#E5A93C',
        }
      }
    },
  },
  plugins: [],
}