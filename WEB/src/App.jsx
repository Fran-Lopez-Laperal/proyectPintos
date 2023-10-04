import { useEffect, useState, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { Home } from './pages/Home';
import { History } from './pages/History';
import { AreaNegocio } from './pages/AreaNegocio';
import { Promoçao } from './pages/Promoçao';
import { Contact } from './pages/Contact';
import { Noticias } from './pages/Noticias';
import { CreateNew } from './pages/CreateNew';
import { AreaPrivada } from './pages/AreaPrivada';
import { PlanearConstruir } from './pages/PlanearConstruir';
import { NavDesktop } from './components/NavDesktop';
import { NavResponsive } from './components/NavResponsive';
import { Footer } from './components/Footer';

function App() {
  const [showNav, setshowNav] = useState(false);
  const { token } = useContext(AuthContext);

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
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/areaprivada" element={<AreaPrivada />} />
          <Route path="/crearNoticia" element={token ? <CreateNew /> : <Navigate to="/areaprivada" />} />
          <Route path="/planearConstruir" element={<PlanearConstruir />} />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
