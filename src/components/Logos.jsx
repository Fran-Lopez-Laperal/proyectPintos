import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';

export function Logos() {
  return (
    <section>
      <header>
        <p className="text-sky-700 font-extrabold text-3xl flex justify-center lg:text-[64px] lg:mb-24">EMPRESAS DO GRUPO</p>
      </header>
      <article>
        <Marquee className="mb-4 mt-5" pauseOnHover={true} speed={25} direction="right" gradientWidth={5}>
          <section className="nav-section flex">
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
          </section>
        </Marquee>

        <Marquee className="mb-4" pauseOnHover={true} speed={25} direction="left" gradientWidth={5}>
          <section className="nav-section flex">
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
            <Link className="w-28 md:w-96  h-20 ml-1" target="_blank" rel="noreferrer" href="https://attisbyv.es/">
              <img className=" lg:w-64 w-full h-full" src={logo} alt={logo} />
            </Link>
          </section>
        </Marquee>
      </article>
    </section>
  );
}
