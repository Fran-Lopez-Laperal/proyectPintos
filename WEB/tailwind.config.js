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
        'corporative-color': '#092172',
        'corporative-color2': '#1272AB',
        'corporative-color3': '#C9E5FD',
        'corporative-color4': '#7D7773',
        'graycorporative-color': '#F1F6F9',
        'graycorporative-color2': '#F2F2F2',
        'contactHeader-color': '#113c9280',
        'sustentabilidade-color': 'rgba(98,203,49,0.03)',
      },
      backgroundImage: {
        'corporative-gradient': 'linear-gradient(135deg, #1272AB, #FFFFFF)',
        'corporative-gradient-footer': 'linear-gradient(90deg, #1267A0, #243877)',
      },
      rotate: {
        '--45': '-45deg',
      },
      dropShadow: {
        'shadow-img': ' box-shadow: 10px 10px 10px black;',
      },
    },
  },
  plugins: [],
};
