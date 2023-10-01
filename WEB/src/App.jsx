import './App.css';
import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Home } from './pages/Home';
import { History } from './pages/History';
import { AreaNegocio } from './pages/AreaNegocio';
import { Promoçao } from './pages/Promoçao';
import { Contact } from './pages/Contact';

import { NavDesktop } from './components/NavDesktop';
import { NavResponsive } from './components/NavResponsive';
import { Footer } from './components/Footer';

import { Noticia } from './components/Noticia';
import {AreaPrivada} from './components/AreaPrivada';
import { CreateNew } from './components/CreateNew';
import { FetchNews } from './components/fetchNews';

function App() {
  const [showNav, setshowNav] = useState(false);

  useEffect(() => {
    const responsiveMovil = () => (window.innerWidth > 840 ? setshowNav(true) : setshowNav(false));

    responsiveMovil();

    window.addEventListener('resize', () => responsiveMovil());
  }, []);
  return (
    <main className="mt-12 lg:mt-0">
      <article>
        {showNav ? <NavDesktop /> : <NavResponsive />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/areaNegocio" element={<AreaNegocio />} />
          <Route path="/promoçao" element={<Promoçao />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/noticia" element={<Noticia/>} />
          <Route path="/areaprivada" element={<AreaPrivada/>} />
          <Route path="/crearNoticia" element={<CreateNew/>} />
          <Route path="/noticias" element={<FetchNews/>} />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
