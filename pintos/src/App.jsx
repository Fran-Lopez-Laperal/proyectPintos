import "./index.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="flex flex-col justify-start items-center min-h-screen">
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
