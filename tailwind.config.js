const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  content: ['./layouts/**/*.html', './content/**/*.md'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'rotate': 'rotate 30s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'rotate': {
          '0%': { transform: 'perspective(1000px) rotateY(0deg)' },
          '100%': { transform: 'perspective(1000px) rotateY(360deg)' },
        },
        'wiggle': {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily: {
        sans: ['Mukta', ...defaultTheme.fontFamily.sans],
        poppins: ['"Poppins"', 'cursive'],
        chillax: ['Chillax', 'sans-serif'],
      },
      container: {
        padding: '2rem',
      },
      colors: {
        primary: '#DC4465',
        secondary: '#2A086A',
        neutral: '#03a9f4',
        dark: '#232323',
        darksecondary: '#56445D',
        hoverprimary: '#E45310',
        green: '#56E39F',
        blue: '#0A1045',
        offwhite: '#F8FFE5',
        lightgreen: '#06D6A0',
      },
      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      fontSize: {
        'xs': '0.75rem', // Extra Small
        'sm': '0.875rem', // Small
        'base': '1rem', // Base
        'lg': '1.125rem', // Large
        'xl': '1rem', // Extra Large
        '1xl': '1rem', // 1 Extra Large
        '2xl': '1.5rem', // 2 Extra Large
        'special': '1.50rem',
        '3xl': '1.875rem', // 3 Extra Large
        '4xl': '2.25rem', // 4 Extra Large
        '5xl': '3rem', // 5 Extra Large
        '6xl': '4rem', // 6 Extra Large
      },
      borderRadius: {
        '3xl': '50px', // Custom rounded-3xl with 50px radius
      },
      borderWidth: {
        '10': '10px',
        '20': '20px', // Huge border
        '50': '50px',
      },
      scrollbar: {
        DEFAULT: {
          thumb: 'bg-primary', // Color of the scrollbar thumb
          track: 'bg-black', // Color of the scrollbar track
        },
      },
      cursor: {
        'custom': 'url(/images/normal-cursor-small.png), auto',
        'pointer': 'url(/images/active-cursor-small.png), pointer',
      },
      left: {
        '112': '28rem', // Adjust the value as per your requirement
      },
      scale: {
        150: '1.5', // Custom scale value
      },
    },
  },
  variants: {
    extend: {
      width: ['responsive'],
      scrollbar: ['rounded'], // Optional: Add variants if needed
    },
    typography: ['dark'],
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwind-scrollbar'), // Ensure you have the tailwind-scrollbar plugin installed
  ],
};
