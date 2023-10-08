import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import menu from '../assets/svg/menu.svg';
import closeMenu from '../assets/svg/close.svg';

export function NavResponsive() {
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
            <p className="flex items-center h-10 pl-2 border-y">Sobre nós</p>

            <li className={`${showSubLink1 ? 'h-30 transition-all duration-700' : 'h-0'}overflow-hidden`}>
              <section className="flex flex-col font-semibold">
                <Link className="flex items-center h-10 pl-6 border-b" to="/historia" onClick={handleShowMenu}>
                  Historia
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" onClick={handleShowMenu}>
                  Prémios
                </Link>
                <Link className="flex items-center h-10 pl-6 border-b" onClick={handleShowMenu}>
                  Responsabilidade
                </Link>
              </section>
            </li>
          </ul>

          <ul className="" onClick={handleShowSubLink2}>
            <p className="font-bold">Áreas de negócio</p>

            <li className={`${showSubLink2 ? 'h-36 transition-all duration-700' : 'h-0'} overflow-hidden m-2`}>
              <section className="flex flex-col m-1">
                <Link to="/engenharia" onClick={handleShowMenu}>
                  Engenharia e Construção
                </Link>
                <Link to="/betao" onClick={handleShowMenu}>
                  Betaõ
                </Link>
                <Link to="/carpinteria" onClick={handleShowMenu}>
                  Carpintaria
                </Link>
                <Link to="/promoção" onClick={handleShowMenu}>
                  Promoção Imboliriária
                </Link>
                <Link to="/turismo" onClick={handleShowMenu}>
                  Turismo
                </Link>
              </section>
            </li>
          </ul>

          <ul className="m-3 font-bold" onClick={handleShowMenu}>
            <Link to="/internacionalizacion">Internacionalización</Link>
          </ul>

          <ul className="m-3 font-bold" onClick={handleShowMenu}>
            <Link to="/noticias">Notícias</Link>
          </ul>

          <ul className="m-3 font-bold" onClick={handleShowMenu}>
            <Link to="/contacto">Contactos</Link>
          </ul>

          <ul className="m-3 font-bold" onClick={handleShowMenu}>
            <Link to="/areaPrivada">Área privada</Link>
          </ul>

          <ul className="m-3" onClick={handleShowMenu}>
            {token && (
              <div className="flex flex-col">
                <Link className="" to={'/crearNoticia'}>
                  Crear noticia
                </Link>
                <Link onClick={logOut} className="b">
                  Cerrar sesión
                </Link>
              </div>
            )}
          </ul>

          <section className="flex space-x-4 font-bold justify-center items-center">
            <button>PT</button>
            <p>|</p>
            <button>IN</button>
          </section>
        </nav>
      </section>
    </main>
  );
}
