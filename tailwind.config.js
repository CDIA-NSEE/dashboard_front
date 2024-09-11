/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-maua': '#004785'
      },
      backgroundImage: {
        'hero-back': "url('/src/assets/hero-back.svg')"
      }
    },
  },
  plugins: [],
}