import logofb from '../assets/svg/facebook.svg';
import logoig from '../assets/svg/instagram.svg';
import logoli from '../assets/svg/linkedin.svg';
import logowa from '../assets/svg/whatsapp.svg';
import sPintos from '../assets/svg/s_bg_footer.svg';

const socialIcons = [
  { src: logofb, alt: 'Logo Facebook', url: 'URL_de_Facebook' },
  { src: logoig, alt: 'Logo Instagram', url: 'URL_de_Instagram' },
  { src: logoli, alt: 'Logo Linkedin', url: 'URL_de_Linkedin' },
  { src: logowa, alt: 'Logo Whatsapp', url: 'URL_de_Whatsapp' },
];

const SocialIcons = ({ icons }) => {
  return (
    <section className="flex justify-end gap-3 lg:gap-2">
      {icons.map((icon, index) => (
        <a href={icon.url} key={index}>
          <figure className="border-2 rounded-full p-2">
            <img src={icon.src} alt={icon.alt} className="h-8 w-8" />
          </figure>
        </a>
      ))}
    </section>
  );
};

export function Footer() {
  return (
    <footer className="flex flex-col text-base font-normal">
      <img src={sPintos} alt={sPintos} className="absolute w-[235px] right-0 opacity-10 lg:w-[150px]" />

      <div className="text-white bg-corporative-gradient-footer p-4 lg:px-48">
        <section className="lg:flex justify-between">
          <article className="mb-6 lg:w-20%">
            <h2 className="text-xl font-bold border-b-2 mb-3 lg:text-2xl">ENDEREÇO</h2>
            <p>Rua Fernando da Silva</p>
            <p>Nogueira Pinto, 187</p>
            <p>4585-645 Recarei-Paredes</p>
          </article>

          <article className="mb-6 lg:w-20%">
            <h2 className="text-xl font-bold border-b-2 mb-3 lg:text-2xl">TELEFONE</h2>
            <a href="tel:+351224157710">+351 22 415 7710</a>

            <p className="text-xs">(Chamada para rede fixa nacional)</p>
          </article>

          <article className="mb-6 lg:w-20%">
            <h2 className="text-xl font-bold border-b-2 mb-3 lg:text-2xl">MAIL</h2>
            <p>
              <a href="mailto:geral@spintos.pt">geral@spintos.pt</a>
            </p>
          </article>
        </section>

        <SocialIcons icons={socialIcons} />

        <section className="flex justify-between font-extralight pt-7 text-sm text-center lg:text-2xl lg:pt-10">
          <p>
            <a href="">Política de privacidade</a>
          </p>
          <p>
            <a href="">Resolução de conflitos</a>
          </p>
          <p>
            <a href="">Livro de Reclamações online</a>
          </p>
        </section>
      </div>

      <div className="w-[95%] flex justify-between font-extrabold py-2 text-sm lg:text-lg m-auto">
        <p className="mr-2 lg:mr-0">Grupo Spintos 2023©</p>
        <a href="https://www.fortesolutions.pt">Desenvolvido por Forte Solutions</a>
      </div>
    </footer>
  );
}
