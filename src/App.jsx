import "./index.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" />
      </Routes>
      <h1>FUnciona?</h1>
      <Footer />
    </main>
  );
}

export default App;
