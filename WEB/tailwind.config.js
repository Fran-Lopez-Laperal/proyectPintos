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
        'graycorporative-color': '#F3F3F3',
        'sustentabilidade-color': 'rgba(98,203,49,0.03)',
      },
      backgroundImage: {
        'corporative-gradient': 'linear-gradient(135deg, #1272AB, #FFFFFF)',
        facebook: 'url("../assets/facebook-bg.jpg")',
        instagram: 'url("../assets/instagram-bg.jpg")',
        linkedin: 'url("../assets/linkedin-bg.jpg")',
        whatsapp: 'url("../assets/whatsapp-bg.jpg")',
      },
      rotate: {
        '--45': '-45deg',
      },
    },
  },
  plugins: [],
};
