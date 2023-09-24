import { useState } from 'react';
import { Link } from 'react-router-dom';

export function NavResponsive() {
  const [openNav, setOpenNav] = useState(false);
  const [showSubLink1, setShowSubLink1] = useState(false);
  const [showSubLink2, setShowSubLink2] = useState(false);

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
    <>
      <section className="w-full bg-white fixed drop-shadow top-0 z-50">
        <button className="top-0" onClick={handleShowMenu}>
          <div className="w-10 h-1 bg-black m-2"></div>
          <div className="w-10 h-1 bg-black m-2"></div>
          <div className="w-10 h-1 bg-black m-2"></div>
        </button>

        <nav className={`${openNav ? 'h-screen transition-all duration-700  ' : 'h-0'} overflow-hidden bg-white text-blue-800`}>
          <ul className="m-3 " onClick={handleShowSubLink1}>
            <p className="font-bold">Sobre nós</p>

            <li className={`${showSubLink1 ? 'h-24 transition-all duration-700' : 'h-0'} overflow-hidden m-2`}>
              <section className="flex flex-col m-1">
                <Link to="/historia" className="border-b border-blue-200" onClick={handleShowMenu}>
                  Historia
                </Link>
                <Link className="border-b border-blue-200" onClick={handleShowMenu}>
                  Prémios
                </Link>
                <Link className="border-b border-blue-200" onClick={handleShowMenu}>
                  Responsabilidade
                </Link>
              </section>
            </li>
          </ul>

          <ul className="m-3" onClick={handleShowSubLink2}>
            <p className="font-bold">Áreas de negócio</p>

            <li className={`${showSubLink2 ? 'h-36 transition-all duration-700' : 'h-0'} overflow-hidden m-2`}>
              <section className="flex flex-col m-1">
                <Link to="/engenharia" className="border-b border-blue-200" onClick={handleShowMenu}>
                  Engenharia e Construção
                </Link>
                <Link to="/betao" className="border-b border-blue-200" onClick={handleShowMenu}>
                  Betaõ
                </Link>
                <Link to="/carpinteria" className="border-b border-blue-200" onClick={handleShowMenu}>
                  Carpintaria
                </Link>
                <Link to="/promoção" className="border-b border-blue-200" onClick={handleShowMenu}>
                  Promoção Imboliriária
                </Link>
                <Link to="/turismo" className="border-b border-blue-200" onClick={handleShowMenu}>
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

          <section className="flex space-x-4 font-bold justify-center items-center">
            <button>PT</button>
            <p>|</p>
            <button>IN</button>
          </section>
        </nav>
      </section>
    </>
  );
}
