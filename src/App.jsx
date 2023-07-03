import "./App.css";
import { Routes, Route } from "react-router-dom";

import { Footer } from "./components/Footer";
import { NavDesktop } from "./components/NavDesktop";
import { Home } from "./pages/Home";
import { useEffect, useState } from "react";
import { NavMovil } from "./components/NavMovil";


function App() {

  const [showNav, setshowNav] = useState(false)

  useEffect(() => {
    const responsiveMovil = () => window.innerWidth > 640 ? setshowNav(true) : setshowNav(false);

    responsiveMovil()

    window.addEventListener("resize", () => responsiveMovil())


  }, [])
  
  
  return (
    <main className="">
      <article>
      {showNav ?  <NavDesktop /> : <NavMovil/>}
       
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </article>
      <Footer />
    </main>
  );
}

export default App;
