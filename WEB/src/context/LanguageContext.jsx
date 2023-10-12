import React, { createContext, useContext, useState } from 'react';
import { useI18n } from '../hooks/useI18n';

export const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const { i18n } = useI18n();
  const [language, setLanguage] = useState(i18n.language);

  const changeLanguage = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    setLanguage(newLanguage);
  };

  return <LanguageContext.Provider value={{ language, changeLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
