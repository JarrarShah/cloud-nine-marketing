const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'rotate': 'rotate 30s linear infinite',

      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'rotate': {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)'},
          '100%': { transform: 'perspective(1000px) rotateY(360deg)'}
        }
      } ,                   
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', 'cursive'],
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#DC4465',
        secondary: '#2A086A',
        neutral: '#0FA3B1',
        dark: '#232323',
        darksecondary: '#56445D',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: "#0A1045",
        offwhite: "#F8FFE5",
        lightgreen: "#06D6A0"
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontSize: {
        'xs': '0.75rem',     // Extra Small
        'sm': '0.875rem',    // Small
        'base': '1rem',      // Base
        'lg': '1.125rem',    // Large
        'xl': '1rem',        // Extra Large
        '1xl': '1rem',       // 1 Extra Large
        '2xl': '1.5rem',     // 2 Extra Large
        'special' : '1.50rem',
        '3xl': '1.875rem',   // 3 Extra Large
        '4xl': '2.25rem',    // 4 Extra Large
        '5xl': '3rem',       // 5 Extra Large
        '6xl': '4rem',       // 6 Extra Large
      },
      borderRadius: {
        '3xl': '50px',       // Custom rounded-3xl with 50px radius
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
    },
    typography: ['dark'],
  },
  plugins: [require('@tailwindcss/typography')],
};
