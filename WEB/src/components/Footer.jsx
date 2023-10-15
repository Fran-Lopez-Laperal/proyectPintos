import fb from '../assets/svg/facebook.svg';
import ig from '../assets/svg/instagram.svg';
import link from '../assets/svg/linkedin.svg';
import wa from '../assets/svg/whatsapp.svg';
import sPintos from '../assets/svg/s_bg_footer.svg';

const socialIcons = [
  { src: fb, alt: 'Logo Facebook', url: 'https://www.facebook.com/SPintos.engenhariaeconstrucao/' },
  { src: ig, alt: 'Logo Instagram', url: 'https://www.instagram.com/spintos.grupo/' },
  { src: link, alt: 'Logo Linkedin', url: 'https://www.linkedin.com/company/spintossa/' },
  { src: wa, alt: 'Logo Whatsapp', url: 'URL_de_Whatsapp' },
];

const SocialIcons = ({ icons }) => {
  return (
    <section className="flex justify-end gap-3 py-2 lg:py-0 z-20 relative">
      {icons.map((icon, index) => (
        <a href={icon.url} key={index} target="_blank">
          <figure>
            <img src={icon.src} alt={icon.alt} className="w-[9vw] max-w-[40px] aspect-square" />
          </figure>
        </a>
      ))}
    </section>
  );
};

export function Footer() {
  return (
    <footer className="flex flex-col min-h-[260px] text-base relative overflow-hidden">
      <img src={sPintos} alt={sPintos} className="absolute top-[-60px] right-[-10px] opacity-5 w-[180px]" />

      <div className="text-white bg-corporative-gradient-footer px-3 pt-1 lg:pt-4 lg:px-10 [&>section>article>p]:font-NS_L ">
        <section className="flex flex-col justify-between gap-2 lg:flex-row">
          <div className="lg:w-[300px] text-xs lg:text-base">
            <h2 className="font-NS_SB lg:text-2xl">ENDEREÇO</h2>
            <hr className="border-b-[1px] mb-1" />
            <a href="https://maps.app.goo.gl/zPYgbEbJZxhf5YeL9">
              <p>Rua Fernando da Silva</p>
              <p>Nogueira Pinto, 187</p>
              <p>4585-645 Recarei-Paredes</p>
            </a>
          </div>

          <div className="lg:w-[300px] text-xs lg:text-base">
            <h2 className="font-NS_SB lg:text-2xl">TELEFONE</h2>
            <hr className="border-b-[1px] mb-1" />

            <a href="tel:+351224157710">+351 22 415 7710</a>

            <p className="text-xs">(Chamada para rede fixa nacional)</p>
          </div>

          <div className="lg:w-[300px] text-xs lg:text-base">
            <h2 className="font-NS_SB lg:text-2xl">MAIL</h2>
            <hr className="border-b-[1px] mb-1" />

            <p>
              <a href="mailto:geral@spintos.pt">geral@spintos.pt</a>
            </p>
          </div>
        </section>

        <SocialIcons icons={socialIcons} />

        <section className="flex justify-between font-NS_L text-[8px] text-center lg:text-xl lg:pt-5">
          <p>
            <a href="">Política de privacidade</a>
          </p>
          <p>
            <a href="">Resolução de conflitos</a>
          </p>
          <p>
            <a href="https://www.livroreclamacoes.pt/Inicio/">Livro de Reclamações</a>
          </p>
        </section>
      </div>

      <div className="w-[90%] m-auto flex justify-between font-NS_B text-[3vw]  lg:text-lg">
        <p className="mr-1 lg:mr-0">Grupo Spintos 2023©</p>
        <a href="https://www.fortesolutions.pt">Desenvolvido por Forte Solutions</a>
      </div>
    </footer>
  );
}
