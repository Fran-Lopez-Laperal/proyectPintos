import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export function NavDesktop() {
  const links = [
    { to: '/', text: 'GRUPO PINTOS' },
    { to: '/areaNegocio', text: 'ÁREAS DE NEGOCIO' },
    { to: '/historia', text: 'HISTORIA' },
    { to: '/noticias', text: 'NOTÍCIAS' },
    { to: '/contacto', text: 'CONTACTO' },
  ];

  const { token, logOut } = useContext(AuthContext);

  function handleLogOut() {
    logOut();
  }
  return (
    <section>
      <section className="flex justify-between h-[100px]">
        <header className="flex">
          <Link to="/" className=" w-1/4 h-18 flex justify-center items-center">
            <img className="w-48" src={logo} alt={logo} />
          </Link>
          <menu className="flex-1 flex justify-center">
            {links.map((link) => (
              <div key={link.to}>
                <Link
                  className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
                  to={link.to}
                >
                  <p style={{ backgroundColor: 'none' }}>{link.text}</p>
                </Link>
              </div>
            ))}
          </menu>
        </header>
        <main className="flex">
          {token && (
            <div className="flex">
              <Link
                className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
                to={'/crearNoticia'}
              >
                Crear noticia
              </Link>
              <Link
                onClick={handleLogOut}
                className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
                to={'/crearNoticia'}
              >
                Cerrar sesión
              </Link>
            </div>
          )}
          {token ? null : (
            <Link
              className="  flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500 no-underline"
              to={'/areaPrivada'}
            >
              Área privada
            </Link>
          )}
        </main>
      </section>
    </section>
  );
}
