import { HeaderPages } from '../components/HeaderPages';
import { HomeLinks } from '../components/HomeLinks';
import { Logos } from '../components/Logos';
import logo2 from '../assets/logo2.png';
import imgHome from '../assets/img-home.jpeg';
import { Noticia } from '../components/Noticia';

import companyHeader from '../assets/headers/companyHeader.jpeg';

const StatCard = ({ number, text }) => {
  return (
    <article className="flex flex-col items-center">
      <p className="font-black text-xl pb-1 md:text-2xl lg:text-4xl">{number}</p>
      <p className="px-1 font-extrabold border-b-[2px] border-corporative-color2 lg:text-2xl lg:border-b-[3px]">{text}</p>
    </article>
  );
};

export function Home() {
  return (
    <main className="flex flex-col">
      <HeaderPages image={companyHeader} logo={logo2} />
      <HomeLinks />

      <section className="h-28 flex justify-center items-center relative -mt-[68px] lg:flex lg:justify-center lg:mt-10 lg:mb-28 lg:mx-36">
        <p className="font-dancing text-2xl pb-2 px-3 relative z-10 bg-white lg:text-5xl lg:px-8">A inovação nos torna diferenes</p>
        <p className="absolute left-0 right-0 h-0.5 lg:h-1 bg-corporative-color2 z-0"></p>
      </section>

      <section className="font-bold py-5 text-corporative-color2 bg-corporative-color3 lg:py-16">
        <section>
          <header className="flex flex-col items-center lg:pb-4">
            <p className="font-black text-4xl md:text-6xl lg:text-8xl">30</p>
            <p className="text-xs px-1 border-b-[2px] border-corporative-color2 font-extrabold md:text-xl lg:text-5xl lg:border-b-[3px] lg:mb-8">
              ANOS DE EXPERIENCIA
            </p>
          </header>

          <section className="grid grid-cols-2 text-xs text-center pt-5 gap-y-8 md:text-xl lg:flex lg:m-auto lg:justify-between lg:max-w-full lg:mx-36">
            <StatCard number="120" text="COLABORADORES" />
            <StatCard number="+500" text="OBRAS CONCLUÍDAS" />
            <StatCard number="12" text="EMPRESAS" />
            <StatCard number="15" text="PROJETOS EM CURSO" />
          </section>
        </section>
      </section>

      <section className="lg:pt-24 lg:px-36">
        <header>
          <h2 className="text-corporative-color2 font-extrabold text-3xl flex justify-center pt-6 lg:text-6xl lg:pb-6">EMPRESAS DO GRUPO</h2>
        </header>
        <Logos />
      </section>

      <section className="flex flex-col font-extrabold bg-corporative-color3 p-6 py-8 lg:flex-row lg:px-36">
        <article className="hidden lg:block lg:w-1/2 lg:pr-8 lg:border-r-[3px] lg:border-corporative-color2 lg:mt-24">
          <img src={imgHome} alt="" className="h-auto" />
        </article>
        <article className="lg:w-1/2 lg:pl-8">
          <header className="flex flex-col items-center">
            <p className="text-xs pb-1 lg:text-lg">Lorem ipsum dolor sit.</p>
            <h2 className="text-corporative-color2 text-center text-3xl border-b-[2px] border-corporative-color2 lg:border-none lg:text-5xl">
              Rorem ipsum dolor
            </h2>
          </header>
          <section className="text-justify lg:text-lg">
            <p className="pt-2">
              Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
              fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
              lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
              egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
              Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Curabitur tempor quis eros tempus lacinia. Nam bibendum
              pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean
              feugiat ex eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus, porttitor eu mauris a, blandit ultrices nibh. Mauris sit
              amet magna non ligula vestibulum eleifend. Nulla varius volutpat turpis sed lacinia. Nam eget mi in purus lobortis eleifend. Sed nec
              ante dictum sem condimentum ullamcorper quis venenatis nisi. Proin vitae facilisis nisi, ac posuere leo.
            </p>
          </section>
        </article>
      </section>

      <section className="flex flex-col font-extrabold p-6 py-8 lg:flex lg:px-44">
        <h2 className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:pb-6">Noticias</h2>
        <div className="grid grid-cols-2 gap-6 py-4 lg:grid-cols-4 lg:gap-12">
          <Noticia />
          <Noticia />
          <Noticia />
          <Noticia />
        </div>
      </section>
    </main>
  );
}
