import Location from '../assets/location.svg';
import Mail from '../assets/mail.svg';
import Phone from '../assets/phone.svg';

import { ContactInfo } from '../components/ContactInfo';

export function Contact() {
  return (
    <section>
      <header>
        <div className="flex justify-center items-center bg-bg-corporative-color2 text-white text-4xl w-full h-44 font-medium lg:h-[810px] lg:text-[100px]">
          CONTACTOS
        </div>
      </header>

      <main className="flex flex-col justify-center lg:flex-row lg:justify-around lg:max-w-screen-2xl lg:mx-auto lg:py-36">
        <ContactInfo
          imgSrc={Location}
          altText="location-logo"
          infoText="Rua Fernando da Silva Nogueira Pinto,"
          infoText2="187 4585-645 Recarei-Paredes"
        />
        <ContactInfo imgSrc={Mail} altText="mail-logo" infoText="geral@spintos.pt" />
        <ContactInfo imgSrc={Phone} altText="phone-logo" infoText="+ 351 22 415 7710" infoText2="Chamada para a rede fixa nacional" />
      </main>

      <footer className="mb-52">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12006.774960091525!2d-8.2706642!3d41.2066501!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2491a26cfeda19%3A0xfec37cbb21b5677c!2sAEP%20-%20Business%20Association%20De%20Penafiel!5e0!3m2!1ses!2ses!4v1695555765385!5m2!1ses!2ses"
          width="100%"
          height="500"
        ></iframe>
      </footer>
    </section>
  );
}
