import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { logos } from './LogosImages';

const logoGroups = {
  line1: ['spintos', 'urbigandra', 'gandralar', 'propiso', 'caisdafurada', 'sobrevale'],
  line2: ['spintosCarpinteria', 'euHotel', 'euStudio', 'jardins', 'porto5', 'expertBeton'],
};

const Logo = ({ logoName }) => {
  return (
    <Link className="px-2 lg:px-10" target="_blank" rel="" href="/">
      <img className="w-36 md:w-56 lg:w-64" src={logoName} alt={logoName} />
    </Link>
  );
};

const LogoList = ({ logoNames, direction }) => (
  <Marquee pauseOnHover={true} speed={25} direction={direction} gradientWidth={5}>
    <section className="flex">
      {logoNames.map((logoName) => (
        <Logo key={logoName} logoName={logos[logoName]} />
      ))}
    </section>
  </Marquee>
);

export function Logos() {
  return (
    <section>
      <header>
        <p className="text-sky-700 font-extrabold text-3xl flex justify-center lg:text-[64px] lg:mb-24">EMPRESAS DO GRUPO</p>
      </header>
      <article>
        <LogoList logoNames={logoGroups.line1} direction="right" />
        <LogoList logoNames={logoGroups.line2} direction="left" />
      </article>
    </section>
  );
}
