import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { NavDesktop } from './components/NavDesktop';
import { Home } from './components/Home';
import { useEffect, useState } from 'react';
import { NavResponsive } from './components/NavResponsive';
import { History } from './pages/history';
import { AreaNegocio } from './components/AreaNegocio';
import { Promoçao } from './components/promoçao';

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
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
