import { HeaderPages } from '../components/HeaderPages';
import { HomeLinks } from '../components/HomeLinks';
import { Logos } from '../components/Logos';
import { FetchNews } from '../components/FetchNews';
import logo2 from '../assets/logo2.png';
import imgHome from '../assets/img-home.jpeg';

import companyHeader from '../assets/headers/companyHeader.jpeg';

const StatCard = ({ number, text }) => {
  return (
    <article className="flex flex-col items-center mt-3">
      <p className="font-extrabold text-lg md:text-2xl lg:text-4xl">{number}</p>
      <p className="px-1 border-b-[2px] border-corporative-color2 lg:text-2xl lg:border-b-[3px]">{text}</p>
    </article>
  );
};

export function Home() {
  // const { newsData } = props;

  // const newArray = newsData || [];
  // console.log(newArray)
  return (
    <main className="flex flex-col">
      <HeaderPages image={companyHeader} logo={logo2} />
      <HomeLinks />

      <section className="flex justify-center items-center relative lg:flex lg:justify-center lg:mt-10 lg:mb-28 lg:mx-36">
        <p className="text-xl relative z-10 bg-white px-8 font-dancing lg:text-5xl">A inovação nos torna diferenes</p>
        <p className="absolute left-1 right-1 h-1 bg-corporative-color2 z-0"></p>
      </section>

      <section className="my-4 lg:py-6 lg:my-28 h-auto font-bold text-corporative-color2 bg-corporative-color3">
        <section className="py-4 my-4">
          <header className="flex flex-col items-center lg:pb-4">
            <p className="font-extrabold text-3xl md:text-4xl lg:text-8xl">30</p>
            <p className="text-xs md:text-xl px-1 border-b-[2px] border-corporative-color2 lg:text-5xl lg:border-b-[3px]">ANOS DE EXPERIENCIA</p>
          </header>

          <section className="grid grid-cols-2 text-xs text-center pt-8 md:text-xl lg:flex lg:m-auto lg:justify-between lg:max-w-full lg:mx-48">
            <StatCard number="120" text="COLABORADORES" />
            <StatCard number="+500" text="OBRAS CONCLUÍDAS" />
            <StatCard number="12" text="EMPRESAS" />
            <StatCard number="15" text="PROJETOS EM CURSO" />
          </section>
        </section>
      </section>

      <section className="my-12 lg:px-44">
        <header>
          <p className="text-corporative-color2 font-extrabold text-3xl flex justify-center lg:text-6xl lg:mb-24">EMPRESAS DO GRUPO</p>
        </header>
        <Logos />
      </section>

      <section className="flex flex-col bg-corporative-color3 lg:flex-row lg:px-44">
        <article className="hidden lg:block">
          <img src={imgHome} alt="" className="h-auto" />
        </article>
        <article className="m-4">
          <header className="flex flex-col items-center">
            <p className="pt-5 font-bold">Lorem ipsum dolor sit.</p>
            <p className="text-corporative-color2 text-center font-extrabold text-3xl border-b-[2px] border-corporative-color2">Rorem ipsum dolor</p>
          </header>
          <section className="font-bold text-justify">
            <p className="pt-4 pb-6">
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

      <section>noticias</section>

      {/* <FetchNews /> */}
    </main>
  );
}
