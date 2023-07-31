/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'brand' : '#ff0000'
      },
      fontFamily: {
        LeagueGothic: ['League Gothic', 'sans-serif']
      }
    },
  },
  plugins: [],
}

