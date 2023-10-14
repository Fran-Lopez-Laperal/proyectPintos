import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import betao from '../assets/images/turismo/pvstudio Meu Studio 001.jpg';
import home1 from '../assets/images/turismo/pvstudio 008.jpg';
import home2 from '../assets/images/turismo/pvstudio 012.jpg';
import home3 from '../assets/images/turismo/pvstudio 031.jpg';
import home4 from '../assets/images/turismo/pvstudio Meu Studio 007.jpg';
import home5 from '../assets/images/turismo/pvstudio Meu Studio 017.jpg';
import home6 from '../assets/images/turismo/pvstudio Meu Studio 020.jpg';

import { Sections } from '../components/Sections';
export function Tourism() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={betao} text={'Turismo'} textSize="text-2xl lg:text-6xl" />
        </article>

        <article className="h-[90px] lg:h-[139px]">
          <img className="h-full w-full -mt-[70px] lg:-mt-[90px] object-cover" src={home4} alt="" />
          <section className="w-full absolute -mt-[60px] flex justify-between lg:justify-around p-1">
            <article className="lg:-mt-10 flex flex-col items-center justify-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">MEU HOTEL</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">Porto Gandra</p>
            </article>

            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">MEU STUDIO</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">Student Residence</p>
            </article>
          </section>
        </article>

      </header>

      <main className="flex flex-col gap-8 border-t-2 border-corporative-color2">
        <Sections
         bg="bg-graycorporative-color"
          text="O grupo SPintos aposta na diversificação dos negócios e além da construção e da promoção
          imobiliária, opera desde 2020 na área da hotelaria e turismo, alojamento local e residência
          universitária, com o lançamento e a gestão das marcas: MEU HOTEL Porto Gandra e MEU STUDIO
          – Student Residence."
          underline="underline"
          textStyles="text-justify"
        />

        <Sections
        
          text="Através da implantação e da consolidação da marca MEU que se pretende atuar como player na
          exploração e gestão dos ativos na área do alojamento e turismo, onde prevê continuar com os
          investimentos que tem planificados, sendo este um setor económico sinalizado de forte
          crescimento nos próximos anos. Com equipas multidisciplinares e qualificadas, aposta na
          qualidade, na diferenciação e no rigor dos serviços.    "
          underline="underline"
          textStyles="text-justify"
        />



        <section className="">
          <GalleryImages image1={home1} image2={home2} image3={home3} image4={home6} image5={home5} />
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
