import { HeaderPages } from '../components/HeaderPages';
import { GalleryImages } from '../components/GalleryImages';
import betao from '../assets/images/internacionalizaçao/IMG-20181024-WA0006.webp';
import home1 from '../assets/images/internacionalizaçao/20151104_174048.webp';
import home2 from '../assets/images/internacionalizaçao/20170420_110641.webp';
import home3 from '../assets/images/internacionalizaçao/20180219_175026.webp';
import home4 from '../assets/images/internacionalizaçao/27355513_10159925223885301_4889473843126091397_o.webp';
import home5 from '../assets/images/internacionalizaçao/DSCN0158.webp';

import { Sections } from '../components/Sections';
export function International() {
  return (
    <section className="flex flex-col gap-12">
      <header>
        <article>
          <HeaderPages image={betao} text={'Internacional'} textSize="text-lg lg:text-4xl" />
        </article>

        <article className="h-[90px] lg:h-[139px]">
          <img className="h-full w-full -mt-[70px] lg:-mt-[90px] object-cover" src={home4} alt="" />
          <section className="w-full absolute -mt-[60px] flex justify-between lg:justify-around p-1">
            <article className="lg:-mt-10 flex flex-col items-center justify-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">BRASIL</p>
            </article>

            <article className="lg:-mt-10 flex flex-col justify-center items-center">
              <p className="text-[10px] lg:text-2xl font-extrabold text-white">COSTA DE MARFIL</p>

            </article>
          </section>
        </article>


      </header>

      <main className="flex flex-col gap-8 border-t-2 border-corporative-color2">
        <Sections
          title="brasil"
          text="A estratégia de internacionalização do grupo SPintos iniciou no Brasil, em 2012, mercado onde
          já se encontra com bastante sucesso.
          Através da Porto5, uma empresa de construção civil, que atua fundamentalmente no Rio Grande
          do Sul, tendo o conhecimento e a experiência de 30 anos em Portugal, garante a qualidade do
          padrão de construção europeu.
          Os empreendimentos no Brasil destacam-se no segmento médio e médio/alto, sendo os últimos
          anos, anos de grande expansão, onde a PORTO 5 já chegou a noutros estados e espera-se um
          maior crescimento no futuro. Conta com mais de x empreendimentos lançados e com 500
          colaboradores ativos."
          bg="bg-corporative-color3"
          underline="underline"
          textStyles="text-justify"
        />

        <Sections
          title="costa de marfil"
          text="Na Costa do Marfim, em 2012, o grupo SPintos iniciou a atividade com a construção de um Hotel
          e de um Hospital, obras de grande referência. Posteriormente, iniciou a atividade com grandes
          investimentos na EXPERT BETON, em 2018, uma empresa especializada na produção e
          comercialização de tijolos e produtos de betão. A EXPERT BETON assegura uma produção de
          qualidade superior e proporciona uma satisfação total a todos os seus clientes e parceiros."
          underline="underline"
          textStyles="text-justify"
        />



        <section className="">
          <GalleryImages image1={home5} image2={home2} image3={home3} image4={home4} image5={home1} />
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
