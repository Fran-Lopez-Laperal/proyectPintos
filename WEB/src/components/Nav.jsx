import { useEffect, useState } from 'react';
import { NavDesktop } from './NavDesktop';
import { NavResponsive } from './NavResponsive';

export function Nav() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <section>{windowWidth < 768 ? <NavResponsive /> : <NavDesktop />}</section>;
}
