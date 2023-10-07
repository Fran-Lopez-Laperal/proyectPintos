import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProviderComponent } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import './i18n'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProviderComponent>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </AuthProviderComponent>
    </BrowserRouter>
  </React.StrictMode>
);
