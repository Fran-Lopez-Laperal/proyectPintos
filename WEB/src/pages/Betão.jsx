import { HeaderPages } from "../components/HeaderPages";
import betão from "../assets/headers/betaoHeader.jpeg"
import { GalleryImages } from "../components/GaleryImages";
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';

export function Betão() {
  return (
    <>
      <section>
        <article>
          <HeaderPages image={betão} text={'Betão'} textSize="text-2xl lg:text-6xl" />
        </article>

        <article className="h-[90px] lg:h-[139px] lg:px-20">
          <img className="h-full w-full -mt-[70px] lg:-mt-[90px] object-cover" src={betão} alt="" />
          <section className="w-full absolute -mt-[60px] flex justify-between lg:justify-around px-5">
            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">COSTA DE MARFIM</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>

            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">COSTA DE MARFIM</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>
          </section>
        </article>

        <article className="h-[90px] lg:h-[139px] mt-24 lg:px-20">
          <img className="h-full w-full -mt-[80px] object-cover" src={betão} alt="" />
          <section className="w-full h-full absolute -mt-[60px] flex justify-center p-1">
            <article className="flex flex-col items-center lg:-mt-10">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white mb-2">RECAREI</p>
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">DIREÇAO</p>
            </article>
          </section>
        </article>



      </section>

      <section className="h-auto lg:border-none border-t-2 border-corporative-color2 lg:w-full p-5 bg-corporative-color3 mt-40 mb-10 lg:bg-graycorporative-color lg:flex lg:flex-col lg:items-center">
        <section className="lg:px-40 lg:flex lg:flex-col lg:justify-center">
          <article className="flex justify-center mb-5">
            <p
              className="font-bold text-3xl text-center border-b-2 lg:border-b-[4px] border-corporative-color2 pb-1 px-4 lg:w-full lg:text-6xl text-corporative-color2">
              CENTRAIS
            </p>
          </article>

          <p className="text-justify font-extrabold text-[12px] lg:text-[22px] ">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
            molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
            risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
            condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
            rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
            convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </section>
          <div className=" lg:h-1 lg:w-1/4 lg:bg-corporative-color2"></div>
      </section>

      <section className="mb-20 lg:flex lg:mb-40 lg:mt-20  lg:justify-center">
        <section className=" lg:flex lg:flex-col lg:justify-center items-center">
          <article className="flex justify-center mb-5">
            <p
              className="font-bold text-3xl text-center lg:border-none border-b-2 border-corporative-color2 pb-1 lg:px-4 lg:w-full lg:text-6xl text-corporative-color2">
              LABORATÓRIO
            </p>
          </article>
          <img className="h-[82px] lg:h-[374px] w-full object-cover" src={betão} alt="" />
          <p className=" text-justify text-[12px] lg:text-[22px] m-10 h-[95px] font-bold lg:mt-16 lg:px-40">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus.

          </p>
        </section>
      </section>

      <section className="">
        <GalleryImages image1={home1} image2={home2} image3={home3} image4={home4} image5={home5} />
      </section>


      <section className="flex flex-col items-center mt-16">
        <p
          className="font-bold text-3xl text-center border-b-2 lg:border-b-[4px] border-corporative-color2  px-4 lg:mb-16 lg:text-6xl text-corporative-color2">
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
    </>
  )
}
