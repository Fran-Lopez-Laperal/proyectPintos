/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '20%': '20%',
      },
      fontFamily: {
        dancing: 'Dancing Script',
      },
      colors: {
        // 'corporative-color': '#13679F',
        'corporative-color': '#092172',
        'corporative-color2': '#1272AB',
        'corporative-color3': '#C9E5FD',
        'corporative-color4': '#7D7773',
        'contactHeader-color': '#113c9280',
      },
      backgroundImage: {
        'corporative-gradient': 'linear-gradient(135deg, #1272AB, #FFFFFF)',
      },
      rotate: {
        '--45': '-45deg',
      },
    },
  },
  plugins: [],
};
