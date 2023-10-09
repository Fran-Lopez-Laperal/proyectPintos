import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AuthContext } from '../context/AuthContext';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';
import CustomHomeLink from './CustomHomeLink';

export function NavDesktop() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const { token, logOut } = useContext(AuthContext);

  function handleLogOut() {
    logOut();
  }

  return (
    <section>
      <section className="flex justify-between h-[100px]">
        <header className="flex">
          <Link to="/" className="h-18 flex justify-center items-center">
            <img className="w-48" src={logo} alt={logo} />
          </Link>
        </header>
        <menu className="flex-1 flex justify-center">
          <CustomHomeLink to={'/'} text={t('nav.sobreNos')} />
          <CustomHomeLink to={'/'} text={t('nav.areasNegocio')} />
          <CustomHomeLink to={'/'} text={t('nav.internacional')} />
          <CustomHomeLink to={'/'} text={t('nav.noticias')} />
          <CustomHomeLink to={'/'} text={t('nav.contacto')} />
        </menu>
        <main className="flex">
          {token && (
            <div className="flex">
              <Link
                className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
                to={'/crearNoticia'}
              >
                {t('nav.criarNoticia')}
              </Link>
              <Link
                onClick={handleLogOut}
                className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
                to={'/'}
              >
                {t('nav.cerrarSessao')}
              </Link>
            </div>
          )}
          {!token && (
            <Link
              className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline uppercase"
              to={'/areaPrivada'}
            >
              {t('nav.areaPrivada')}
            </Link>
          )}
        </main>
        <section className="flex items-center justify-center px-4 space-x-4">
          <button className="hover:underline" onClick={() => handleLanguageChange('pt')}>
            PT
          </button>
          <p>|</p>
          <button className="hover:underline" onClick={() => handleLanguageChange('en')}>
            EN
          </button>
        </section>
      </section>
    </section>
  );
}
