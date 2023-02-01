
module.exports = {
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'group-hover'],
      fontSize: ['responsive', 'hover', 'group-hover'],
      transform: ['responsive', 'hover', 'group-hover'],
      scale: ['responsive', 'hover', 'group-hover'],
    }
  },
  theme: {
    extend: {
      
      fontFamily: {
        bebas: ['Bebas Neue', 'serif'],
      },
      borderWidth: {
        '10': '10px',
      },
      boxShadow: {
        'cartashadow': '1px 1px 2px #ddd',
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
        showCategory: {
          from: {
              transform: 'translateY(-300%) color:black',
              
          },
          to: {
              transform: 'translateY(0%) color: white',
              
          },
        },
        showDescription: {
          from: {
            transform: 'translateX(-300%)',
            color: 'black',
          },
          to: {
            transform: 'translateX(0%)',
          }
        },
        backBanner: {
            '0%': {
              'background-position': '0 0',
            },
            '100%': {
              'background-position': '-200px -200px',
            },
          },
          showIcon: {
            from: {
              transform: 'translateY(-200%)',
            },
            to: {
              transform: 'translateY(0%)'
            }
          },


      
      },
      animation: {
        rotategear: 'rotategear 1s infinite linear',
        fromBelow: 'fromBelow 500ms linear',
        fromRight: 'fromRight 300ms linear alternate',
        showCategory: 'showCategory 400ms linear',
        backBanner: 'backBanner 10s linear',
        showDescription: 'showDescription 400ms linear',
      },
    },
    plugins: [],
  },
}