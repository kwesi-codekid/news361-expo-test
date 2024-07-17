/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        'montserrat-bold': ['Montserrat-Bold', 'sans-serif'],
        'montserrat-semibold': ['Montserrat-Semibold', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

