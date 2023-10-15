import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import construçao from '../assets/images/engineering/edificio sede.webp';
import image1 from '../assets/images/engineering/campo-futebol-sobrosa (3).webp';
import image2 from '../assets/images/engineering/campo-futebol-vandoma (3).webp';
import image3 from '../assets/images/engineering/Edificio sede spintos banner.webp';
import image4 from '../assets/images/engineering/IMG_6992.webp';
import image5 from '../assets/images/engineering/IMG_7133.webp';

import { Sections } from '../components/Sections';
export function Engineering() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={construçao} text={'Engenharia'} textSize="text-2xl lg:text-4xl" />
        </article>


      </header>

      <main className="flex flex-col gap-8 border-t-2 border-corporative-color2 sm:mt-10 lg:mt-10">
        <Sections
          title="CONSTRUÇÃO"
          text="Experiência de mais de 30 anos no sector da construção civil e obras públicas posiciona a
          empresa S. Pintos – Engenharia e Construção, S.A. no mercado da excelência da engenharia e
          construção e dá garantias de qualidade na execução das obras, cumprimento de prazos e
          acompanhamento no pós-venda."
          bg="bg-graycorporative-color"
          underline="underline"
          textStyles="text-justify"
        />

        <Sections
          title=""
          text="O portefólio de obras é extenso e abrange a área residencial, escolas, estádios de futebol,
          campos de padel, armazéns, fábricas, unidades de saúde, igrejas e hotéis."
          underline="underline"
          textStyles="text-justify"
        />


        <section className="">
          <GalleryImages image1={image1} image2={image2} image3={image3} image4={image4} image5={image5} />
        </section>
      </main>

      <section className="flex flex-col items-center">
        <p className="font-bold text-3xl text-center border-b-2 lg:border-b-[4px] border-corporative-color2  px-4 lg:mb-16 lg:text-6xl text-corporative-color2">
          PRODUTO
        </p>
        <article className="flex gap-1">
          <p className="w-[187px] h-[187px] sm:h-[400px] sm:w-[400px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
          <p className="w-[187px] h-[187px] sm:h-[400px] sm:w-[400px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
        </article>
        <article className="flex gap-1">
          <p className="w-[187px] h-[187px] sm:h-[400px] sm:w-[400px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
          <p className="w-[187px] h-[187px] sm:h-[400px] sm:w-[400px] lg:w-[711px] lg:h-[711px] bg-corporative-color4 m-1"></p>
        </article>
      </section>
    </section>
  );
}
