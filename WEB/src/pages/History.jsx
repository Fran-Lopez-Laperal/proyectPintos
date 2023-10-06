import { HeaderPages } from '../components/HeaderPages';
// import { FetchNews } from '../components/FetchNews';
import historyHeader from '../assets/headers/historyHeader.jpeg';

export function History() {
  return (
    <main className="flex flex-col">
      <HeaderPages text={'História'} textSize="text-2xl lg:text-6xl" image={historyHeader} />
      <section className="text-justify m-10 lg:mx-80 font-extrabold text-xs lg:text-xl">
        <p>
          O grupo SPintos, fundado em 1993, tem a sua origem na área da construção civil. A sua matriz agrega um conjunto de empresas com sólida
          experiência e conhecimento em diferentes setores de atividade. Sob a liderança dos quatro irmãos Fernando, Rui, Vasco e Berto Pinto, o grupo
          SPintos alicerça os seus valores no desenvolvimento sustentado, na qualidade, na inovação e na segurança dos projetos que desenvolve. Com um
          histórico comprovado na construção de edifícios residenciais, comerciais, industriais e infraestruturas públicas, o grupo especializou-se,
          ainda, no fornecimento de betão pronto. A oferta global das áreas de negócio SPintos abrange a construção civil, fornecimento de betão,
          carpintaria, promoção imobiliária e hotelaria. Além de Portugal, opera também no mercado internacional, nomeadamente, no Brasil e na Costa
          do Marfim. O grupo SPintos aposta no crescimento sustentado e na melhoria contínua, na formação qualificada dos seus colaboradores, na
          inovação e no investimento permanente na aquisição de novos e mais modernos equipamentos, procurando sempre superar as expectativas dos seus
          clientes. Com projetos diferenciadores, a SPintos viu já distinguidas as suas obras pelos prémios Habitar Portugal 2008 e Secil Arquitetura
          2008, entre outras distinções.
        </p>
      </section>
      <section className="flex flex-col justify-center items-center bg-corporative-color3 w-full mx-auto lg:bg-graycorporative-color">
        <div className="m-10 lg:mx-80">
          <h2 className="text-corporative-color2 text-center text-2xl uppercase w-full border-b-2 border-corporative-color2 pb-1 font-extrabold lg:text-6xl">
            o grupo
          </h2>
          <p className="pt-6 text-justify text-sm font-extrabold lg:text-xl">
            O Grupo SPintos, fundado em 1993, tem a sua origem na área da construção civil, agregando na sua matriz um vasto conjunto de empresas com
            sólida experiência e conhecimento nos diferentes sectores em que atua.Sob a liderança dos irmãos Fernando, Rui, Vasco e Berto Pinto,
            o Grupo SPintos alicerça os seus valores no desenvolvimento sustentado, na qualidade e na segurança dos projetos que desenvolve.Com
            um histórico comprovado na construção de edifícios residenciais, comerciais, industriais e infraestruturas públicas, o grupo especializou-se
            ainda no fornecimento de betão pronto.A oferta global das áreas de negócio SPintos abrange a construção civil, fornecimento de betão, carpintaria,
            promoção imobiliária e hotelaria. Além de Portugal, opera também no mercado internacional, nomeadamente, no Brasil e na Costa do Marfim.O Grupo
            SPintos aposta no crescimento sustentado e na melhoria contínua, investindo na formação qualificada dos seus colaboradores, na inovação e no
            investimento permanente na aquisição de novos e mais modernos equipamentos, procurando sempre superar as expectativas dos seus clientes.Com
            projetos diferenciadores, a SPintos viu já distinguidas as suas obras pelos prémios Habitar Portugal 2008 e Secil Arquitetura 2008, entre outras
            distinções.

          </p>
          <h3 className=" text-corporative-color2  text-2xl uppercase   font-extrabold lg:text-5xl border-b-2 border-corporative-color2 mt-16">o que fazemos</h3>
          <p className='pt-6 text-justify text-sm font-extrabold lg:text-xl'>
            Desenvolvemos a nossa principal atividade nas áreas da Construção Civil, em Portugal, no Brasil e Costa do Marfim. Atuamos na produção de Carpintaria
            para os nossos projetos e clientes externos. A nossa experiência de produção e fornecimento de Betão pronto é certificada. Destacamo-nos, ainda,
            na gestão e promoção imobiliária. No âmbito da Hotelaria construímos e exploramos projetos na área do Turismo, Alojamento e Lazer.
          </p>
        </div>

      </section>

      <section className='flex flex-col justify-center items-center mx-auto'>
        <h3 className=" text-corporative-color2  text-2xl uppercase   font-extrabold lg:text-5xl mt-16 lg:mb-10">fundaçao</h3>
        <p className='p-7 text-justify lg:p-0 lg:text-center text-sm font-extrabold lg:text-xl -mb-14 lg:mb-10'>
          FERNANDO DA SILVA NOGUEIRA PINTO INICIOU A SUA CARREIRA DE EMPRESÁRIO COMO CONSTRUTOR CIVIL.
        </p>
        <p className='p-7 lg:p-0 text-justify lg:text-center text-sm font-extrabold lg:text-xl '>
          CRIOU A SUA PRIMEIRA EMPRESA, EM XXX, DENOMINADA CONSTRUÇÕES PINTOS & PINHO, LDA.
          MOVIDO PELO ESPÍRITO EMPREENDEDOR, PELA LONGA EXPERIÊNCIA COMPROVADA, PELA CAPACIDADE DE LIDERANÇA E SUCESSO, FUNDOU COM OS SEUS QUATRO FILHOS A S. PINTOS – ENGENHARIA E CONSTRUÇÃO, S.A., A PRIMEIRA DO GRUPO.
        </p>
      </section>

      <section className="flex flex-col justify-center items-center w-full mx-auto lg:pt-36 ">
        <div className="m-10 flex flex-col items-center lg:px-36">
          <h2 className="text-corporative-color text-center text-4xl uppercase w-full  pb-3 font-bold lg:text-6xl">timeline</h2>
        </div>
      </section>

      <section className="flex flex-col justify-center items-center w-full mx-auto lg:pt-36 ">
        <div className="m-10 flex flex-col items-center lg:px-36">
          <h2 className="text-corporative-color text-center text-4xl uppercase w-full  pb-3 font-bold lg:text-6xl">noticias</h2>
        </div>
      </section>
      {/* <FetchNews /> */}
    </main>
  );
}
