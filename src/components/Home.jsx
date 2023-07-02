import { Link } from 'react-router-dom';
import imgCompany from '../assets/imgCompany.png';

export function Home() {
  const links = [
    { to: '/', text: 'TURISMO' },
    { to: '/', text: 'CARPINTARIA' },
    { to: '/', text: 'ENGENHARIA E CONSTRUÇAO' },
    { to: '/', text: 'BETÃO' },
    { to: '/', text: 'PROMOÇÃO IMOBILIÁRIA' },
    { to: '/', text: 'INTERNACIONAL' },
  ];

  return (
    <section>
      <figure>
        <img src={imgCompany} alt={imgCompany} />
      </figure>

      <menu className="w-full border border-pink-800">
        <ul className="flex w-auto border-green-800">
          {links.map(({ to, text }, index) => (
            <Link className="flex justify-center items-center w-full bg-slate-400 m-1" to={to} key={index}>
              <li className="" key={index}>
                {text}
              </li>
            </Link>
          ))}
        </ul>
      </menu>
    </section>
  );
}
