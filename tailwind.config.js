/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html","./build/js/*.js"],
  theme: {
    extend: {
      screens: {
        'widesreen': {'raw': '(min-aspect-ratio: 16/9)'},
        'tallscreen': {'raw': '(min-aspect-ratio: 9/16)'}
      },
      animation:{
        'drop-down': 'drop-down 0.5s ease-in-out forwards',
      },
      keyframes: {
        'drop-down': {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        }
      }
    },
  },
  plugins: [],
}

