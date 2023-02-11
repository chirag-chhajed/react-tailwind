/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'raleway': ["Raleway", 'sans-serif']
      },
      colors:{
        "pink": '#fcb0f3',
        'violet': '#3e04dc'
      }
    },
    
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  },
}
