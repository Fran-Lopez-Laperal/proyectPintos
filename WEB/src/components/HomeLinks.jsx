import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';
import home6 from '../assets/home/home6.jpeg';

const links = [
  { to: '/contruçao', text: 'ENGENHARIA E CONSTRUÇÃO', bgImg: home1 },
  { to: '/betão', text: 'BETÃO', bgImg: home2 },
  { to: '/carpinteria', text: 'CARPINTARIA', bgImg: home3 },
  { to: '/promoção', text: 'PROMOÇÃO IMOBILIÁRIA', bgImg: home4 },
  { to: '/turismo', text: 'TURISMO', bgImg: home5 },
  { to: '/internacional', text: 'INTERNACIONAL', bgImg: home6 },
];

const reorderedLinks = [links[4], links[2], links[0], links[1], links[3], links[5]];

function SmallScreenLinks({ links }) {
  return (
    <ul className="m-4 grid grid-cols-2 gap-2 mt-[-55px]">
      {links.map((link, index) => (
        <li
          key={index}
          className={`flex items-center justify-center text-center h-20 md:h-52 ${
            index === 0 ? 'pr-11' : index === 1 ? 'pl-6' : index === 4 ? 'pr-9' : index === 5 ? 'pl-11' : ''
          }`}
          style={{
            backgroundImage: `url(${link.bgImg || ''})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Link to={link.to} className={`text-white font-bold text-xs md:text-sm`}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function LargeScreenLinks({ links }) {
  return (
    <ul className="m-4 grid grid-cols-2 gap-2 mt-[-55px] lg:flex lg:justify-center lg:mt-[-100px]">
      {links.map((link, index) => (
        <li
          key={index}
          className={`flex items-center justify-center text-center h-36 w-full`}
          style={{
            backgroundImage: `url(${link.bgImg || ''})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          }}
        >
          <Link to={link.to} className={`text-white font-bold text-xs md:text-sm`}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HomeLinks() {
  const isLargeScreen = useMediaQuery({ minWidth: 1279 });

  return (
    <>
      {isLargeScreen ? <LargeScreenLinks links={reorderedLinks} /> : <SmallScreenLinks links={links} />}
      <div className="flex justify-center items-center mt-[-76px] lg:mt-[-100px] lg:hidden">
        <div className="uppercase relative rotate-45">
          <span className="bg-white w-32 h-32 inset-0 flex justify-center items-center rounded lg:w-60 lg:h-60 ">
            <h1 className="text-center text-white -rotate--45 font-extrabold"></h1>
          </span>
        </div>
      </div>
    </>
  );
}
