/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '280px'
      },
      colors: {
        'transparent': 'transparent',
        'space': '#080D13',
        'white-opacy': 'rgba(255, 255, 255, 0.1)'
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      boxShadow: {
        "custom": "0 0px 25px -2px rgb(0 0 0 / 0.8)"
      }
    },
  },
  plugins: [],
}
