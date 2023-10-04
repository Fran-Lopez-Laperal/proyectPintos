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
  const { token } = useContext(AuthContext);

  function handleShowMenu() {
    setOpenNav(!openNav);
  }

  function handleShowSubLink1() {
    setShowSubLink1(!showSubLink1);
  }

  function handleShowSubLink2() {
    setShowSubLink2(!showSubLink2);
  }

  return (
    <main className="">
      <section className="w-full bg-white fixed drop-shadow z-50">
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

        <nav className={`${openNav ? 'h-screen transition-all duration-700  ' : 'h-0'} overflow-hidden bg-white text-blue-800`}>
          <ul className="" onClick={handleShowSubLink1}>
            <p className="font-bold">Sobre nós</p>

            <li className={`${showSubLink1 ? 'h-24 transition-all duration-700' : 'h-0'} overflow-hidden m-2`}>
              <section className="flex flex-col m-1 border-b border-blue-200">
                <Link to="/historia" onClick={handleShowMenu}>
                  Historia
                </Link>
                <Link onClick={handleShowMenu}>Prémios</Link>
                <Link onClick={handleShowMenu}>Responsabilidade</Link>
              </section>
            </li>
          </ul>

          <ul className="m-3" onClick={handleShowSubLink2}>
            <p className="font-bold">Áreas de negócio</p>

            <li className={`${showSubLink2 ? 'h-36 transition-all duration-700' : 'h-0'} overflow-hidden m-2`}>
              <section className="flex flex-col m-1 border-b border-blue-200">
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
              <Link className="border-b border-blue-200" to={'/crearNoticia'}>
                Crear noticia
              </Link>
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
