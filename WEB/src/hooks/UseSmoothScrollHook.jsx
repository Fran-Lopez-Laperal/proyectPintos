import { useEffect } from 'react';

function UseSmoothScrollHook(sectionId) {
  useEffect(() => {
    const fragment = window.location.hash;
    if (fragment === `#${sectionId}`) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [sectionId]);
}

export default UseSmoothScrollHook;