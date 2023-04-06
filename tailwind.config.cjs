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
      spacing: {
        '100': '25rem',
      },
      borderWidth: {
        '25': '25px',
        '50': '40px'
      }
    },
  },
  plugins: [],
}
