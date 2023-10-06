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
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Betão } from './pages/Betão';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <main className="mt-12 lg:mt-0">
      <article>
        <Nav />
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
          <Route path="/betão" element={<Betão/>} />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
