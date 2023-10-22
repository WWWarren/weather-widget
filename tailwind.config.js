/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'black': '#020617',
      'yellow': '#fec013',
      'blue': '#015d9c',
      'green': '#41803c',
      'light-grey': '#bbbbbb',
      'grey': '#aaaaaa',
      'weather-clear': '#00CCFF',
      'weather-cloudy': '#F1F1F1',
      'weather-rainy': '#7F9BA6',
      'weather-thunder': '#4E6969',
      'weather-other': '#eee',
    },
    extend: {
      fontFamily: {
        'jost': ['Jost', 'Inter', 'sans-serif']
      },
    },
  },
  plugins: [
    require('tailwindcss-animated'),
  ]
}

