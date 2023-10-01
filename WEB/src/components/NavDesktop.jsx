import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function NavDesktop() {
  const links = [
    { to: '/', text: 'GRUPO PINTOS' },
    { to: '/areaNegocio', text: 'ÁREAS DE NEGOCIO' },
    { to: '/historia', text: 'HISTORIA' },
    { to: '/noticias', text: 'NOTÍCIAS' },
    { to: '/contacto', text: 'CONTACTO' },
  ];

  return (
    <header className="flex shadow-sky-100 shadow">
      <Link to="/" className=" w-1/4 h-18 flex justify-center items-center">
        <img className="w-48" src={logo} alt={logo} />
      </Link>
      <ul className="flex-1 flex justify-center">
        {links.map((link, index) => (
          <Link
            key={index}
            className="flex justify-center items-center w-48 h-full hover:bg-corporative-color2 transition-all duration-500"
            to={link.to}
            style={{ textDecoration: 'none' }}
          >
            <li>
              <p className="" style={{ backgroundColor: 'none' }}>
                {link.text}
              </p>
            </li>
          </Link>
        ))}
      </ul>
    </header>
  );
}
