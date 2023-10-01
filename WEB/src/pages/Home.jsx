import { HeaderPages } from '../components/HeaderPages';
import { HomeLinks } from '../components/HomeLinks';
import { Logos } from '../components/Logos';
import { FetchNews } from '../components/FetchNews'
import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

import companyHeader from '../assets/headers/companyHeader.jpeg';

const StatCard = ({ number, text }) => {
  return (
    <article className="flex flex-col items-center mt-3">
      <p className="font-extrabold text-lg lg:text-4xl">{number}</p>
      <p className="px-1 border-b-[2px] border-corporative-color2 lg:text-2xl lg:border-b-[3px]">{text}</p>
    </article>
  );
};

export function Home(props) {


  const { newsData } = props;


  const newArray = newsData || [];
  console.log(newArray)
  return (
    <main className="flex flex-col">
      <HeaderPages image={companyHeader} logo={logo2} />
      <HomeLinks />

      <section className="m-4 flex justify-center items-center h-20 relative mt-[-30px] lg:flex lg:justify-center lg:mt-10 lg:mb-28 ">
        <p className="text-xl relative z-10 bg-white p-2 font-dancing lg:text-5xl ">A inovação nos torna diferenes</p>
        <p className="absolute left-1 right-1 h-0.5 bg-corporative-color z-0"></p>
      </section>

      <section className="my-4 mb-20 bg-blue-200 h-auto border font-bold text-sky-700">
        <section className="py-4 my-4">
          <header className=" flex flex-col items-center">
            <p className="font-extrabold text-3xl lg:text-5xl">30</p>
            <p className="text-xs px-1 border-b-[2px] border-corporative-color2 lg:text-3xl lg:border-b-[3px]">ANOS DE EXPERIENCIA</p>
          </header>

          <section className="grid grid-cols-2 text-xs text-center pt-2">
            <StatCard number="120" text="COLABORADORES" />
            <StatCard number="+500" text="OBRAS CONCLUÍDAS" />
            <StatCard number="12" text="EMPRESAS" />
            <StatCard number="15" text="PROJETOS EM CURSO" />
          </section>
        </section>
      </section>

      <section>
        <header>
          <p className="text-sky-700 font-extrabold text-3xl flex justify-center lg:text-[64px] lg:mb-24">EMPRESAS DO GRUPO</p>
        </header>
        <Logos />
      </section>

      <section className="mt-20 bg-blue-200 lg:bg-gray-100 mb-20 flex flex-col sm:flex-row">
        <article className="w-full sm:w-1/2  hidden sm:block">
          <img src={logo} alt="" className="h-auto" />
        </article>
        <article className="border w-full sm:w-1/2">
          <header className="flex flex-col items-center">
            <p className="mt-5 font-bold">Lorem ipsum dolor sit.</p>
            <p className="text-sky-700 font-extrabold text-3xl underline mt-5">Adipisci rem consequatur</p>
          </header>
          <section className="m-5 font-bold text-justify">
            <p className="mt-10">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim aspernatur nostrum, cum suscipit minima amet exercitationem? Ex
              numquam praesentium quod amet impedit, deserunt rem nemo vel aperiam. In ratione soluta debitis. Aspernatur vel, doloremque,
              perspiciatis quae illo facere quia amet ipsam repudiandae
            </p>
            <p className="mt-5 ">
              officiis eaque quidem esse iste. Assumenda accusamus perferendis unde dolor facere officia, iste quisquam doloremque voluptate fugit
              illum? Officia voluptate maiores doloribus perferendis ratione, sapiente sequi id quos
            </p>
          </section>
        </article>
      </section>

     <FetchNews/>
    </main>
  );
}
