/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#FFD345',
        goldText: '#FFF6DA',
        blackText: '#D0D1D3',
      }
    },
  },
  plugins: [],
}

