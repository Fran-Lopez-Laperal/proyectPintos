import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../context/AuthContext';
import { LanguageContext } from '../context/LanguageContext';

import { useI18n } from '../hooks/useI18n';

import closeMenu from '../assets/svg/close.svg';
import menu from '../assets/svg/menu.svg';
import logo from '../assets/logo.png';

export function NavResponsive() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t, i18n } = useI18n();

  const [openNav, setOpenNav] = useState(false);
  const [showSubLink1, setShowSubLink1] = useState(false);
  const [showSubLink2, setShowSubLink2] = useState(false);

  const { token, logOut } = useContext(AuthContext);

  function handleShowMenu() {
    setOpenNav(!openNav);
  }

  function handleShowSubLink1() {
    setShowSubLink1(!showSubLink1);
  }

  function handleShowSubLink2() {
    setShowSubLink2(!showSubLink2);
  }
  function handleLogOut() {
    logOut();
  }
  return (
    <main>
      <section className="w-full drop-shadow z-50">
        <menu className="flex">
          <button className="pl-4 w-1/4" onClick={handleShowMenu}>
            {openNav ? (
              <figure className="">
                <img src={closeMenu} alt="Close Menu" />
              </figure>
            ) : (
              <figure className="ml-[5px]">
                <img src={menu} alt="Menu" />
              </figure>
            )}
          </button>
          <Link to="/" className="w-3/4 flex justify-left items-center pl-4">
            <img className="h-16" src={logo} alt={logo} />
          </Link>
        </menu>

        <nav
          className={`${
            openNav ? 'h-screen transition-all duration-700  ' : 'h-0'
          } overflow-hidden bg-white font-black text-weight text-corporative-color2`}
        >
          <ul onClick={handleShowSubLink1}>
            <p className="flex  items-center h-10 pl-2 border-y bg-gray-100">{t('nav.sobreNos')}</p>
            <li className={`${showSubLink1 ? 'h-auto transition-all duration-700' : 'h-0 overflow-hidden'}`}>
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-7 border-b" to="/historia" onClick={handleShowMenu}>
                  {t('nav.historia')}
                </Link>
                <Link className="flex items-center h-10 pl-7 border-b" to="/planejar-e-construir" onClick={handleShowMenu}>
                  {t('nav.planearConstruir')}
                </Link>
              </section>
            </li>
          </ul>

          <ul onClick={handleShowSubLink2}>
            <p className="flex items-center h-10 pl-2 border-b bg-gray-100">{t('nav.areasNegocio')}</p>

            <li className={`${showSubLink2 ? 'transition-all duration-700' : 'h-0'} overflow-hidden`}>
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-7 border-b" to="/engenharia" onClick={handleShowMenu}>
                  {t('nav.engharia')}
                </Link>
                <Link className="flex items-center h-10 pl-7 border-b" to="/betão" onClick={handleShowMenu}>
                  {t('nav.betao')}
                </Link>
                <Link className="flex items-center h-10 pl-7 border-b" to="/carpintaria" onClick={handleShowMenu}>
                  {t('nav.carpintaria')}
                </Link>
                <Link className="flex items-center h-10 pl-7 border-b" to="/promoção-inmobiliaria" onClick={handleShowMenu}>
                  {t('nav.promocaoImobiliaria')}
                </Link>
                <Link className="flex items-center h-10 pl-7 border-b" to="/turismo" onClick={handleShowMenu}>
                  {t('nav.turismo')}
                </Link>
              </section>
            </li>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b bg-gray-100" onClick={handleShowMenu}>
            <Link to="/internacional">{t('nav.internacional')}</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b bg-gray-100" onClick={handleShowMenu}>
            <Link to="/noticias">{t('nav.noticias')}</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b bg-gray-100" onClick={handleShowMenu}>
            <Link to="/contacto">{t('nav.contacto')}</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b bg-gray-100" onClick={handleShowMenu}>
            <Link to="/admin">{t('nav.iniciarSessao')}</Link>
          </ul>

          <ul onClick={handleShowMenu}>
            {token && (
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-6 border-b" to={'/crearNoticia'}>
                  {t('nav.criarNoticia')}
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" onClick={handleLogOut}>
                  {t('nav.cerrarSessao')}
                </Link>
              </section>
            )}
          </ul>

          <section className="flex items-center justify-center h-10 space-x-4">
            <button onClick={() => changeLanguage('pt')}>PT</button>
            <p>|</p>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </section>
        </nav>
      </section>
    </main>
  );
}
