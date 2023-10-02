import { HeaderPages } from '../components/HeaderPages';
import historyHeader from '../assets/headers/historyHeader.jpeg';
import { FetchNews } from '../components/FetchNews';

export function History() {
  return (
    <main className="flex flex-col">
      <HeaderPages text={'História'} textSize="text-2xl lg:text-6xl" image={historyHeader} />

      <section className="flex flex-col justify-center items-center bg-corporative-color3 w-full mx-auto">
        <div className="m-10 lg:mx-80">
          <h2 className="text-corporative-color text-center text-4xl uppercase w-full border-b-4 border-corporative-color pb-3 font-bold lg:text-6xl">
            o grupo
          </h2>
          <p className="pt-6 text-justify text-lg font-extrabold lg:text-2xl">
            O Grupo SPintos, fundado em 1993, tem a sua origem na área da construção civil, agregando na sua matriz um vasto conjunto de empresas com
            sólida experiência e conhecimento nos diferentes sectores em que atua. Sob a liderança dos irmãos Fernando, Rui, Vasco e Berto Pinto, o
            Grupo SPintos alicerça os seus valores no desenvolvimento sustentado, na qualidade e na segurança dos projetos que desenvolve.Com um
            histórico comprovado na construção de edifícios residenciais, comerciais, industriais e infraestruturas públicas, o grupo especializou-se
            ainda no fornecimento de betão pronto.A oferta global das áreas de negócio SPintos abrange a construção civil, fornecimento de betão,
            carpintaria, promoção imobiliária e hotelaria. Além de Portugal, opera também no mercado internacional, nomeadamente, no Brasil e na Costa
            do Marfim.O Grupo SPintos aposta no crescimento sustentado e na melhoria contínua, investindo na formação qualificada dos seus
            colaboradores, na inovação e no investimento permanente na aquisição de novos e mais modernos equipamentos, procurando sempre superar as
            expectativas dos seus clientes.Com projetos diferenciadores, a SPintos viu já distinguidas as suas obras pelos prémios Habitar Portugal
            2008 e Secil Arquitetura 2008, entre outras distinções.
          </p>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full mx-auto lg:pt-36 ">
        <div className="m-10 flex flex-col items-center lg:px-36">
          <h2 className="text-corporative-color text-center text-4xl uppercase w-full  pb-3 font-bold lg:text-6xl">empresas do grupo</h2>
          <p className="bg-blue-300 w-full h-full text-xl font-extrabold m-10 text-center">componente logos</p>
        </div>
      </section>
      <FetchNews />
    </main>
  );
}
