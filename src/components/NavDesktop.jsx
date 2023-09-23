import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function NavDesktop() {
  const links = [
    { to: '/', text: 'GRUPO PINTOS' },
    { to: '/areaNegocio', text: 'ÁREAS DE NEGOCIO' },
    { to: '/historia', text: 'HISTORIA' },
    { to: '/', text: 'NOTÍCIAS' },
    { to: '/', text: 'CONTACTO' },
  ];

  console.log(links);

  return (
    <div className="w-full">
      <div className="flex bg-transparen w-auto h-16 ">
        <Link to="/" className='flex items-center'>
          <img className="w-32" src={logo} alt={logo} />
        </Link>
        <ul className="flex h-full w-full justify-around">
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
      </div>
    </div>
  );
}
