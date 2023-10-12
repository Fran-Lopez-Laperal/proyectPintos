import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { LanguageContext } from '../context/LanguageContext';
import { useI18n } from '../hooks/useI18n';

import logo from '../assets/logo.png';

import Dropdown from './Dropdown';

export function NavDesktop() {
  const { language, changeLanguage } = useContext(LanguageContext);
  const { t, i18n } = useI18n();

  const itemsSobreNos = [
    {
      slug: '/historia',
      anchor: 'historia',
    },
    {
      slug: '/planejar-e-construir',
      anchor: 'Planear e Construir',
    },
  ];

  const itemsAreaNegocio = [
    {
      slug: '/engenharia',
      anchor: 'Engenharia e Construção',
    },
    {
      slug: '/betão',
      anchor: 'Betaõ',
    },
    {
      slug: '/carpintaria',
      anchor: 'Carpintaria',
    },
    {
      slug: '/promoção-inmobiliaria',
      anchor: 'Promoção Imboliriária',
    },
    {
      slug: '/turismo',
      anchor: 'Turismo',
    },
  ];

  return (
    <section>
      <section className="flex justify-between h-24">
        <header className="flex">
          <Link to="/" className="flex justify-center items-center">
            <figure>
              <img className="w-64" src={logo} alt={logo} />
            </figure>
          </Link>
        </header>
        <menu className="flex-1 flex justify-center uppercase font-bold">
          <Dropdown dropdownTitle="Sobre nos" items={itemsSobreNos} />
          <Dropdown dropdownTitle="Áreas de negócio" items={itemsAreaNegocio} />

          <Link
            className="flex justify-center items-center w-52 h-full hover:bg-corporative-color2 hover:text-white transition-all duration-100 ease-linear"
            to="/internacional"
          >
            Internacional
          </Link>
          <Link
            className="flex justify-center items-center w-52 h-full hover:bg-corporative-color2 hover:text-white transition-all duration-100 ease-linear"
            to="/noticias"
          >
            Notícias
          </Link>
          <Link
            className="flex justify-center items-center w-52 h-full hover:bg-corporative-color2 hover:text-white transition-all duration-100 ease-linear"
            to="/contactos"
          >
            Contactos
          </Link>
          <Link
            className="flex justify-center items-center w-52 h-full hover:bg-corporative-color2 hover:text-white transition-all duration-100 ease-linear"
            to="/admin"
          >
            Admin
          </Link>
        </menu>
        <section className="flex items-center justify-center px-4 space-x-4">
          <button className="hover:underline" onClick={() => changeLanguage('pt')}>
            PT
          </button>
          <p>|</p>
          <button className="hover:underline" onClick={() => changeLanguage('en')}>
            EN
          </button>
        </section>
      </section>
    </section>
  );
}
