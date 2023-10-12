import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import './App.css';

//Home
import { Home } from './pages/Home';

//Sobre nos
import { History } from './pages/History';
import { PlanAndbuild } from './pages/PlanAndbuild';

//Areas de negocio
import { Engenharia } from './pages/Engenharia';
import { Betao } from './pages/Betao';
import { Carpinteria } from './pages/Carpinteria';
import { PromoçaoImobiliaria } from './pages/PromoçaoImobiliaria';
import { Turismo } from './pages/Turismo';

//Internacional
import { Internacional } from './pages/Internacional';

//Noticias
import { Noticias } from './pages/Noticias';

//Contacto
import { Contact } from './pages/Contact';

//Admin
import { Admin } from './pages/Admin';

function App() {
  return (
    <section className="min-h-screen flex flex-col">
      <Nav />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<History />} />
          <Route path="/planejar-e-construir" element={<PlanAndbuild />} />

          <Route path="/engenharia" element={<Engenharia />} />
          <Route path="/betão" element={<Betao />} />
          <Route path="/carpintaria" element={<Carpinteria />} />
          <Route path="/promoção-inmobiliaria" element={<PromoçaoImobiliaria />} />
          <Route path="/turismo" element={<Turismo />} />

          <Route path="/internacional" element={<Internacional />} />

          <Route path="/noticias" element={<Noticias />} />

          <Route path="/contacto" element={<Contact />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
