import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderComponent } from './context/AuthContext';

import { LanguageProvider } from './context/LanguageContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderComponent>
        <I18nextProvider i18n={i18n}>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </I18nextProvider>
      </AuthProviderComponent>
    </BrowserRouter>
  </React.StrictMode>
);
