import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false,
    },
  });
export default i18n;

// import enTranslation from '../src/assets/languages/en.json';

// import ptTranslation from '../src/assets/languages/pt.json';

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     pt: { translation: ptTranslation },
//   },
//   lng: 'pt',
//   fallbackLng: 'pt',
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
