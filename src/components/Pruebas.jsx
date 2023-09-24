import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Pruebas() {
  const links = [
    { to: '/', text: 'GRUPO PINTOS' },
    { to: '/areaNegocio', text: 'ÁREAS DE NEGOCIO' },
    { to: '/historia', text: 'HISTORIA' },
    { to: '/', text: 'NOTÍCIAS' },
    { to: '/contacto', text: 'CONTACTO' },
  ];

  return (
    <header className="bg-green-300 flex">
      <Link to="/" className="">
        <img className="w-32" src={logo} alt={logo} />
      </Link>
      <ul className="">
        {links.map((link, index) => (
          <Link
            key={index}
            className="flex justify-center items-center w-full h-full hover:bg-blue-400 transition-all duration-700"
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
