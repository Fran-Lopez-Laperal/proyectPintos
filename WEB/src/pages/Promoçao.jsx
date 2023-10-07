import Addres from '../assets/icons/Address.svg'
import Sky from '../assets/icons/Skyscrapers.svg'
import Studio from '../assets/icons/Studio Floor Plan.svg'
import PromoçaoHeader from '../assets/headers/promoçaoHeader.jpeg'
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';

import { GalleryImages } from '../components/GaleryImages';

export function Promoçao() {

  return (
    <>
      <section>
        <article>
          <figure>
            <img src={PromoçaoHeader} alt={PromoçaoHeader} />
          </figure>
        </article>

        <article className="w-full flex justify-center mb-10 lg:mb-52">
          <section className="w-60  h-24 lg:w-auto lg:h-auto  flex flex-col items-center relative top-[-50px] lg:top-[1030px]">

            <p className='z-10 w-0 h-0 lg:border-r-[80px] lg:border-t-[80px] lg:border-l-[80px] lg:border-b-[80px] border-r-[40px] border-l-[40px] border-t-[40px] border-b-[40px] border-solid   border-r-white border-t-white 
            border-l-black border-b-black'></p>
            <p className="text-lg font-bold lg:text-[64px] mt-5 lg:mt-5">LOUNGE TERRACE</p>
          </section>
        </article>

        <article className="border-b-[1px] border-sky-600 lg:bg-gray-50 lg:h-72 lg:flex lg:items-center w-auto">
          <article className="flex items-center  relative w-full justify-around mb-4">
            <section className=" z-10 w-80 lg:w-[900px] sm:flex sm:flex-col lg:bg-transparent">
              <section className="flex items-center justify-around bg-white w-full background lg:bg-gray-50 ">

                <section className='flex flex-col items-center'>
                  <img src={Sky} alt='' className="text-base relative z-10 h-16 lg:w-[101px] lg:h-36" />
                  <p className='text-sm font-extrabold text-corporative-color2'>3</p>
                </section>

                <section className='flex flex-col items-center'>
                  <img src={Studio} alt='' className="text-base relative z-10 h-16 lg:w-[101px] lg:h-36" />
                  <p className='text-sm font-extrabold text-corporative-color2'>71</p>
                </section>

                <section className='flex flex-col items-center'>
                  <img src={Addres} alt='' className="text-base relative z-10 h-16 lg:w-[101px] lg:h-36" />
                  <p className='text-sm font-extrabold text-corporative-color2'>Direçáo</p>
                  <p className='text-sm font-extrabold text-corporative-color2'>da moradia</p>
                </section>

                <section className='lg:flex lg:flex-col lg:justify-center lg:items-center relative z-10 h-16 lg:w-[101px]  lg:border-4 border-corporative-color2'>
                  <p className="text-sm lg:text-xl font-extrabold text-corporative-color2">Vendido</p>
                  <p className="text-sm lg:text-xl font-extrabold text-corporative-color2">Ver mais</p>
                </section>

              </section>
            </section>
            <p className="absolute left-1 lg:left-10 lg:right-10 right-1 h-1 bg-sky-500 z-0 "></p>
          </article>
        </article>

        <article className=" flex justify-center mt-8 lg:w-full">
          <section className="w-80 lg:w-2/3">
            <p className="font-bold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni necessitatibus vitae. Numquam debitis tenetur hic architecto
              blanditiis enim totam excepturi dicta a quo quas quibusdam ut mollitia, itaque inventore. Illo aliquid consectetur eaque similique nihil
              ea adipisci pariatur quibusdam iusto possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni necessitatibus vitae.
              Numquam debitis tenetur hic architecto blanditiis enim totam excepturi dicta a quo quas quibusdam ut mollitia, itaque inventore. Illo
              aliquid consectetur eaque similique nihil ea adipisci pariatur quibusdam iusto possimus.
            </p>
          </section>
        </article>
      </section>

      <section className='mt-16'>

        <GalleryImages image1={home1} image2={home2} image3={home3} image4={home4} image5={home5} />

      </section>


      <section className='mb-20'>
        <header className='px-5 lg:px-20'>
          <p className='text-xl lg:text-5xl font-semibold text-gray-400  mt-7'>MAIS PROJETOS</p>
          <div className='border-b-2 border-corporative-color2 w-2/3'></div>
        </header>

        <article className='flex justify-evenly mt-5'>
          <figure className='border border-current w-[172px] lg:w-[304px] lg:h-[202px] h-[108px] bg-gray-300'>

            <p>PROMOÇAO</p>
          </figure>

          <figure className='border border-current w-[172px] lg:w-[304px] lg:h-[202px] h-[108px] bg-gray-300'>

            <p>PROMOÇAO</p>
          </figure>
        </article>

      </section>

    </>
  );
}
