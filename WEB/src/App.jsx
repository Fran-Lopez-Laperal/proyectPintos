import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

import { Home } from './pages/Home';
import { History } from './pages/History';
import { PlanAndbuild } from './pages/PlanAndbuild';

import { AreaNegocio } from './pages/AreaNegocio';
import { Promoçao } from './pages/Promoçao';
import { Contact } from './pages/Contact';
import { Noticias } from './pages/Noticias';
import { CreateNew } from './pages/CreateNew';
import { CreateTimeline } from './pages/CreateTimeline';
import { Login } from './pages/Login';
import { Betao } from './pages/Betao';
import { Timeline } from './pages/Timeline';
import { PrivateArea } from './pages/PrivateArea';

import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import './App.css';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <section className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/planejar-e-construir" element={<PlanAndbuild />} />

          <Route path="/betao" element={<Betao />} />
          <Route path="/promoçao" element={<Promoçao />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/privateArea" element={<PrivateArea />} />

          <Route path="/areaNegocio" element={<AreaNegocio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crearNoticia" element={token ? <CreateNew /> : <Navigate to="/login" />} />
          <Route path="/crearTimeline" element={token ? <CreateTimeline /> : <Navigate to="/login" />} />
          <Route path="/timeline" element={<Timeline />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
