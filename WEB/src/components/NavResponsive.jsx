import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import menu from '../assets/svg/menu.svg';
import closeMenu from '../assets/svg/close.svg';
import { LanguageContext } from '../context/LanguageContext';
import { useTranslation } from 'react-i18next';

export function NavResponsive() {
  const [openNav, setOpenNav] = useState(false);
  const [showSubLink1, setShowSubLink1] = useState(false);
  const [showSubLink2, setShowSubLink2] = useState(false);
  const { token, logOut } = useContext(AuthContext);
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
  };

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

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
    <main className="">
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
            <p className="flex items-center h-10 pl-2 border-y bg-gray-100">{t('nav.sobreNos')}</p>

            <li className={`${showSubLink1 ? 'h-30 transition-all duration-700' : 'h-0'}overflow-hidden`}>
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-6 border-b" to="/historia" onClick={handleShowMenu}>
                  Historia
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" onClick={handleShowMenu}>
                  Planear e Contruir
                </Link>
              </section>
            </li>
          </ul>

          <ul onClick={handleShowSubLink2}>
            <p className="flex items-center h-10 pl-2 border-b bg-gray-100">Áreas de negócio</p>

            <li className={`${showSubLink1 ? 'h-30 transition-all duration-700' : 'h-0'}overflow-hidden`}>
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-6 border-b" to="/engenharia" onClick={handleShowMenu}>
                  Engenharia e Construção
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" to="/betao" onClick={handleShowMenu}>
                  Betaõ
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" to="/carpinteria" onClick={handleShowMenu}>
                  Carpintaria
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" to="/promoção" onClick={handleShowMenu}>
                  Promoção Imboliriária
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" to="/turismo" onClick={handleShowMenu}>
                  Turismo
                </Link>
              </section>
            </li>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b" onClick={handleShowMenu}>
            <Link to="/internacionalizacion">Internacional</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b" onClick={handleShowMenu}>
            <Link to="/noticias">Notícias</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b" onClick={handleShowMenu}>
            <Link to="/contacto">Contactos</Link>
          </ul>

          <ul className="flex items-center h-10 pl-2 border-b" onClick={handleShowMenu}>
            <Link to="/areaPrivada">Área privada</Link>
          </ul>

          <ul onClick={handleShowMenu}>
            {token && (
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-6 border-b" to={'/crearNoticia'}>
                  Crear noticia
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" onClick={handleLogOut}>
                  Cerrar sesión
                </Link>
              </section>
            )}
          </ul>

          <section className="flex space-x-4 font-bold justify-center items-center">
            <button onClick={() => handleLanguageChange('pt')}>PT</button>
            <p>|</p>
            <button onClick={() => handleLanguageChange('en')}>EN</button>
          </section>
        </nav>
      </section>
    </main>
  );
}
