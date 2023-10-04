import logofb from '../assets/svg/react.svg';
import logoig from '../assets/svg/react.svg';
import logoli from '../assets/svg/react.svg';
import logowa from '../assets/svg/react.svg';

const socialIcons = [
  { src: logofb, alt: 'Logo Facebook', url: 'URL_de_Facebook' },
  { src: logoig, alt: 'Logo Instagram', url: 'URL_de_Instagram' },
  { src: logoli, alt: 'Logo Linkedin', url: 'URL_de_Linkedin' },
  { src: logowa, alt: 'Logo Whatsapp', url: 'URL_de_Whatsapp' },
];

const SocialIcons = ({ icons }) => {
  return (
    <section className="flex justify-end gap-4 lg:gap-2">
      {icons.map((icon, index) => (
        <a href={icon.url} key={index}>
          <figure className="border-2 rounded-full p-2">
            <img src={icon.src} alt={icon.alt} className="h-10 w-10" />
          </figure>
        </a>
      ))}
    </section>
  );
};

export function Footer() {
  return (
    <footer className="flex flex-col text-base font-normal">
      <div className="bg-corporative-color2 text-white p-4 lg:px-48">
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

      <div className="w-full flex justify-center font-extrabold py-3 text-sm md:text-2xl lg:justify-around">
        <p className="mr-2 lg:mr-0">Grupo Spintos 2023©</p>
        <p>Desenvolvido por Forte Solutions</p>
      </div>
    </footer>
  );
}
