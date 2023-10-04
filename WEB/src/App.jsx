import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useEffect, useState } from 'react';

import { Home } from './pages/Home';
import { History } from './pages/History';
import { AreaNegocio } from './pages/AreaNegocio';
import { Promoçao } from './pages/Promoçao';
import { Contact } from './pages/Contact';
import { Noticias } from './pages/Noticias';
import { CreateNew } from './pages/CreateNew';
import { AreaPrivada } from './pages/AreaPrivada';

import { NavDesktop } from './components/NavDesktop';
import { NavResponsive } from './components/NavResponsive';
import { Footer } from './components/Footer';

function App() {
  const [showNav, setshowNav] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const responsiveMovil = () => (window.innerWidth > 840 ? setshowNav(true) : setshowNav(false));

    responsiveMovil();

    window.addEventListener('resize', () => responsiveMovil());
  }, []);

  useEffect(() => {
    console.log(!localStorage.getItem('token'));
    if (location.pathname === '/crearNoticia' && !localStorage.getItem('token') === false) {
      navigate('/areaPrivada');
    }
  }, [location]);

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
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/areaprivada" element={<AreaPrivada />} />
          <Route path="/crearNoticia" element={<CreateNew />} />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
