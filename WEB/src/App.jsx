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
import { Engineering } from './pages/Engineering';
import { Concrete } from './pages/Concrete';
import { Carpentry } from './pages/Carpentry';
import { PromoçaoImobiliaria } from './pages/PromoçaoImobiliaria';
import { Tourism } from './pages/Tourism';

//Internacional
import { International } from './pages/International';

//Noticias
import { News } from './pages/News';

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

          <Route path="/engenharia" element={<Engineering />} />
          <Route path="/betão" element={<Concrete />} />
          <Route path="/carpintaria" element={<Carpentry />} />
          <Route path="/promoção-inmobiliaria" element={<PromoçaoImobiliaria />} />
          <Route path="/turismo" element={<Tourism />} />

          <Route path="/internacional" element={<International />} />

          <Route path="/noticias" element={<News />} />

          <Route path="/contacto" element={<Contact />} />

          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </section>
  );
}

export default App;
