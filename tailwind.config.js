/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '20%': '20%',
      },
      colors: {
        'corporative-color': '#13679F',
      },
      backgroundImage: {
        'corporative-gradient': 'linear-gradient(135deg, #1267A0, #FFFFFF)',
      },
      rotate: {
        '--45': '-45deg',
      },
    },
  },
  plugins: [],
};
