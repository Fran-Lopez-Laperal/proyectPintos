import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import betao from '../assets/images/carpintaria/4carpintaria.jpg';
import home1 from '../assets/images/carpintaria/IMG_5366.jpg';
import home2 from '../assets/images/carpintaria/a (14).jpg';
import home3 from '../assets/images/carpintaria/IMG_3608.jpg';
import home4 from '../assets/images/carpintaria/IMG_3611.jpg';
import home5 from '../assets/images/carpintaria/IMG_5339.jpg';

import { Sections } from '../components/Sections';
export function Carpentry() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={betao} text={'Carpinteria'} textSize="text-2xl lg:text-4xl" />
        </article>

      
      </header>

      <main className="flex flex-col gap-8 mt-20 border-t-2 border-corporative-color2">
        <Sections
          title="Lorem ipsum"
          text="Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus."
          bg="bg-graycorporative-color2"
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
