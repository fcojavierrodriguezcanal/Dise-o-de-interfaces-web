
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        bebas: ['Bebas Neue', 'serif'],
      },

      colors: {
        'blue-ocean': '#37bcf9',
        transparent: 'transparent',
        current: 'currentColor',
        white: '#ffffff',
        purple: '#3f3cbb',
        midnight: '#121063',
        metal: '#565584',
        tahiti: '#3ab7bf',
        silver: '#ecebff',
        'bubble-gum': '#ff77e9',
        bermuda: '#78dcca',
        gray: '#ccc',
      },
      keyframes: {
        rotategear: {
          from: { transform: 'rotateZ(0deg)' },
          to: { transform: 'rotateZ(360deg)' },
        },
        fromBelow: {
          '0%': {
            transform: 'translateY(0%)',
          },
          '50%': {
            transform: 'translateY(200%)',
          },
          '100%': {
            transform: 'translateY(0%)',
          },
        },
        fromRight: {
          from: { transform: ' translateX(100%)' },
          to: { transform: ' translateX(0)' },
        },
      },
      animation: {
        rotategear: 'rotategear 1s infinite linear',
        fromBelow: 'fromBelow 500ms linear',
        fromRight: 'fromRight 300ms linear alternate',
      },
    },
    plugins: [],
  },
}