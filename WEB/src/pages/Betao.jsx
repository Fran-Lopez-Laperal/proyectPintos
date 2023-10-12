import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import betao from '../assets/headers/betaoHeader.jpeg';
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';

import { Sections } from '../components/Sections';
export function Betao() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={betao} text={'Betão'} textSize="text-2xl lg:text-6xl" />
        </article>

        <article className="h-[90px] lg:h-[139px]">
          <img className="h-full w-full -mt-[70px] lg:-mt-[90px] object-cover" src={betao} alt="" />
          <section className="w-full absolute -mt-[60px] flex justify-between lg:justify-around p-1">
            <article className="lg:-mt-10">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">COSTA DE MARFIM</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>

            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">COSTA DE MARFIM</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>
          </section>
        </article>

        <article className="h-[90px] lg:h-[139px] mt-28 ">
          <img className="h-full w-full -mt-[80px] object-cover" src={betao} alt="" />
          <section className="w-full h-full absolute -mt-[60px] flex justify-center p-1">
            <article className="flex flex-col items-center lg:-mt-10">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white mb-2">RECAREI</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>
          </section>
        </article>
      </header>

      <main className="flex flex-col gap-8 border-t-2 border-corporative-color2">
        <Sections
          title="centrais"
          text="Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
          bg="bg-corporative-color3"
          underline="underline"
          textStyles="text-justify"
        />

        <section className="flex flex-col py-4 gap-4 font-extrabold">
          <h2 className="text-center text-3xl uppercase text-corporative-color2 underline lg:text-6xl">laboratório</h2>
          <img className="h-24 w-full object-cover" src={betao} alt="" />
          <p className="text-sm px-5 text-justify lg:text-xl lg:pt-6">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </section>

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
