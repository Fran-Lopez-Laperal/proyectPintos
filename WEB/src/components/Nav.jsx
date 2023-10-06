import { NavDesktop } from './NavDesktop';
import { NavResponsive } from './NavResponsive';

export function Nav() {
  return (
    <section className="bg-blue-600">
      <NavDesktop></NavDesktop>
      <NavResponsive></NavResponsive>
    </section>
  );
}
