import { Link } from 'react-router-dom';

import home2 from '../assets/home/home2.jpeg';
import home1 from '../assets/home/home1.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';
import home6 from '../assets/home/home6.jpeg';

const links = [
  { to: '/engenharia', text: 'ENGENHARIA E CONSTRUÇÃO', bgImg: home1 },
  { to: '/betao', text: 'BETÃO', bgImg: home2 },
  { to: '/contruçao', text: 'CONSTRUÇAO', bgImg: home3 },
  { to: '/carpinteria', text: 'CARPINTARIA', bgImg: home4 },
  { to: '/promoção', text: 'IMOBILIARIA', bgImg: home5 },
  { to: '/turismo', text: 'INTERNACIONAL', bgImg: home6 },
];

export function HomeLinks() {
  return (
    <>
      <ul className="m-4 grid grid-cols-2 gap-2 items-center content-center mt-[-55px] lg:flex lg:justify-center lg:mt-[-100px]">
        {links.map((link, index) => (
          <li key={index} className={'h-20 md:h-52 lg:w-full lg:text-center lg:h-36 '}>
            <Link
              to={link.to}
              className={`flex items-center justify-center w-full h-full text-white font-bold text-sm md:text-xl ${
                index === 0 ? 'pl-4' : index === 1 ? 'pl-8' : index === 4 ? 'pr-14' : index === 5 ? 'pl-10' : ''
              } lg:pl-0 lg:pr-0`}
              style={{
                backgroundImage: `url(${link.bgImg || ''})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center items-center mt-[-76px] lg:mt-[-100px] lg:hidden">
        <div className="uppercase relative rotate-45">
          <span className="bg-white w-32 h-32 inset-0 flex justify-center items-center rounded lg:w-60 lg:h-60 ">
            <h1 className={'text-center text-white -rotate--45 font-extrabold'}></h1>
          </span>
        </div>
      </div>
    </>
  );
}
