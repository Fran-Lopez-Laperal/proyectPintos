import { HeaderPages } from '../components/HeaderPages';
import areaNegocioHeader from '../assets/headers/areaNegocioHeader.jpeg';
import { useEffect, useState } from 'react';
import { PromoçaoImages } from '../components/PromoçaoImages';
import { ResponsivePromoçaoImages } from '../components/ResponsivePromoçaoImages';

export function AreaNegocio() {
  const [showImages, setshowImages] = useState(false);

  useEffect(() => {
    const responsiveMovil = () => (window.innerWidth > 840 ? setshowImages(true) : setshowImages(false));

    responsiveMovil();

    window.addEventListener('resize', () => responsiveMovil());
  }, []);

  return (
    <main className="flex flex-col">
      <HeaderPages text={'Imobiliária'} textSize="text-xl lg:text-4xl" image={areaNegocioHeader} />

      <article className="bg-corporative-color3 w-auto px-8 lg:bg-graycorporative-color mt-10 lg:mt-24 flex justify-center">
        <section className="flex flex-col items-center lg:px-40 ">
          <h1 className="mt-10 border-b-[1px] w-full text-center border-corporative-color2 text-[28px] font-bold text-corporative-color2 text-2x1 md:hidden">
            PROMOÇÃO IMOBILIÁRIA
          </h1>
          <h1 className="mt-10 border-b-4 border-corporative-color2 text-2xl font-bold text-corporative-color2 text-4x1 hidden md:block lg:text-6xl w-full text-center">
            PROMOÇÃO
          </h1>
          <p className="mt-8 font-bold lg:text-xl text-justify">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
          <section className=" w-full">
            <button className="bg-corporative-color rounded lg:float-left float-right p-3 mt-3 mb-10 text-white font-extrabold bg-gradient-to-t from-white to-blue-500 ">
              Bolsa imobiliária
            </button>
          </section>
        </section>
      </article>

      <section>{showImages ? <PromoçaoImages /> : <ResponsivePromoçaoImages />}</section>
    </main>
  );
}