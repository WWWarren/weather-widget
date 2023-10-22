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

