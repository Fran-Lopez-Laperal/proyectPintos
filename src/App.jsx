import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="">
      <article>
        <Routes>
          <Route path="/" />
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
