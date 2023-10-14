import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import betao from '../assets/headers/betaoHeader.jpeg';
import home1 from '../assets/images/betao/20200819_100228.webp';
import home2 from '../assets/images/betao/20200819_100311.webp';
import home3 from '../assets/images/betao/20200819_100803.webp';
import home4 from '../assets/images/betao/20221027_142548.webp';
import home5 from '../assets/images/betao/IMG_20200701_162413.webp';

import { Sections } from '../components/Sections';
export function Concrete() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={betao} text={'Betão'} textSize="text-2xl lg:text-6xl" />
        </article>

        <article className="h-[90px] lg:h-[139px]">
          <img className="h-full w-full -mt-[70px] lg:-mt-[90px] object-cover" src={betao} alt="" />
          <section className="w-full px-4 absolute -mt-[60px] flex justify-between lg:justify-around p-1">
            <article className="lg:-mt-10">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white uppercase">Recarei</p>
            </article>

            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white uppercase">Vila Nova de Gaia</p>
            </article>
          </section>
        </article>


      </header>

      <main className="flex flex-col gap-8 border-t-2 border-corporative-color2">
        <Sections
          title="centrais"
          text="A empresa atua na produção e comercialização e transporte de betão pronto com 2 centrais em
          Portugal e uma na Costa do Marfim. Com elevada capacidade instalada de produção e com uma
          frota de autobetoneiras e camiões-bomba, permite resposta rápida e eficaz ao cliente."
          bg="bg-graycorporative-color2"
          underline="underline"
          textStyles="text-justify"
        />


     
          <Sections
            title=""
            text="As duas unidades de produção de betão obtiveram a “Certificação do Controlo de Produção” (NP
            EN 206:2013 +A2:2021) atribuída pela APCER. A capacidade instalada de produção de betão das
            duas centrais é superior a 10.000 m3/mês."
            underline="underline"
            textStyles="text-justify"
          />


          <section className="">
            <GalleryImages image1={home1} image2={home2} image3={home3} image4={home4} image5={home5} />
          </section>
        </main>

        <section className="flex flex-col items-center mt-16">
          <p className="font-bold text-3xl text-center border-b-2 lg:border-b-[4px] border-corporative-color2  px-4 lg:mb-16 lg:text-6xl text-corporative-color2">
            PRODUTOS
          </p>
          <article className="flex">
            <p className="w-[187px] h-[187px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
            <p className="w-[187px] h-[187px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
          </article>
          <article className="flex">
            <p className="w-[187px] h-[187px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
            <p className="w-[187px] h-[187px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
          </article>
        </section>
    </section>
  );
}
