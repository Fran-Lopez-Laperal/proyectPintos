import { HeaderPages } from '../components/HeaderPages';
import areaNegocioHeader from '../assets/headers/areaNegocioHeader.jpeg';
import { PromoçaoImages } from '../components/PromoçaoImages';

export function AreaNegocio() {
  return (
    <main className="flex flex-col gap-12 lg:gap-14">
      <HeaderPages text={'Imobiliária'} textSize="text-xl lg:text-5xl" image={areaNegocioHeader} />

      <section className="text-justify text-sm font-extrabold px-6 py-4 bg-corporative-color3 lg:text-xl lg:px-80 lg:py-12">
        <h1 className="text-center text-2xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 lg:text-6xl">
          promoção imobiliária
        </h1>

        <p className="mt-8 font-bold lg:text-xl text-justify">
          Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi
          convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
        </p>
        <section className=" w-full">
          <button className="bg-corporative-color2 rounded float-right p-3 text-white font-extrabold hover:bg-corporative-color transition-all duration-500 lg:float-left ">
            Bolsa imobiliária
          </button>
        </section>
      </section>
      <PromoçaoImages />
    </main>
  );
}
