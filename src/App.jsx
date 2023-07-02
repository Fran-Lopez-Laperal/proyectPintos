import './App.css';
import { Routes, Route } from 'react-router-dom';

import { Footer } from './components/Footer';
import { NavDesktop } from './components/NavDesktop';
import { Home } from './components/Home';

function App() {
  return (
    <main className="">
      <article>
        <NavDesktop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
