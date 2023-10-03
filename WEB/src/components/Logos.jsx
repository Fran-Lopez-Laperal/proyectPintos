import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import { logos } from './LogosImages';

const logoGroups = {
  line1: ['spintos', 'urbigandra', 'gandralar', 'propiso', 'caisdafurada', 'sobrevale'],
  line2: ['spintosCarpinteria', 'euHotel', 'euStudio', 'jardins', 'porto5', 'expertBeton'],
};

const Logo = ({ logoName }) => {
  return (
    <Link className="" target="_blank" rel="" href="/">
      <img className="w-36 md:w-56 lg:w-64" src={logoName} alt={logoName} />
    </Link>
  );
};

const LogoList = ({ logoNames, direction }) => (
  <Marquee pauseOnHover={true} speed={25} direction={direction} gradientWidth={5} className="my-8">
    <section className="flex">
      {logoNames.map((logoName) => (
        <Logo key={logoName} logoName={logos[logoName]} />
      ))}
    </section>
  </Marquee>
);

export function Logos() {
  return (
    <article>
      <LogoList logoNames={logoGroups.line1} direction="right" />
      <LogoList logoNames={logoGroups.line2} direction="left" />
    </article>
  );
}
