import { HeaderPages } from '../components/HeaderPages';
import planearHeader from '../assets/headers/historyHeader.jpeg';

export function PlanAndbuild() {
  return (
    <main>
      <HeaderPages text={'planear e construir'} textSize="text-xl lg:text-4xl" image={planearHeader} />

      <section className="flex justify-center items-center relative lg:flex lg:justify-center mt-10 lg:mt-12 lg:mx-36">
        <p className="font-dancing text-xl pb-[6px] px-1 relative z-10 bg-white lg:text-5xl lg:px-4">Planeamos e construímos projestos para a vida</p>
        <p className="absolute left-0 right-0 h-0.5 lg:h-1 bg-corporative-color2 z-0"></p>
      </section>

      <section className="flex justify-center">
        <p className="text-center font-extrabold text-xs p-4 lg:text-2xl ">
          HÁ MAIS DE 30 ANOS QUE INSPIRAMOS CONFIANÇA. CONHEÇA UM POUCO MAIS DA NOSSA EXPERIÊNCIA E DOS NOSSOS PROJETOS QUE SÃO FRUTO DA CAPACIDADE
          INOVADORA, SUSTENTABILIDADE E EXCELÊNCIA DAS NOSSAS EMPRESAS.
        </p>
      </section>

      <section className="flex flex-col px-8  items-center justify-center lg:bg-graycorporative-color bg-corporative-color3 mt-10 h-auto lg:h-[296px]">
        <article className="">
          <section className=" text-center lg:h-[87px]">
            <p className="text-xl font-bold lg:text-[64px] border-b-[1px]  border-corporative-color2 pb-2 text-corporative-color2 mt-7">
              RESPONSABILIDADE SOCIAL
            </p>
          </section>
          <section className="lg:h-[126px]">
            <p className="text-center font-bold text-xs mt-5 lg:text-xl">Ao serviço da sociedade procuramos criar um mundo melhor.</p>
            <p className="text-center font-bold text-xs mb-7 lg:text-xl">
              No âmbito da responsabilidade social estabelecemos diversas parcerias com instituições nacionais e locais
            </p>
          </section>
        </article>
      </section>

      <section className="flex flex-col items-center justify-center bg-sustentabilidade-color mt-10 lg:h-[230px]">
        <article className="px-11 lg:px-60">
          <section className=" text-center">
            <p className="text-2xl font-bold lg:text-[64px]  text-corporative-color2 mt-7">SUSTENTABILIDADE</p>
          </section>

          <p className="text-center font-bold text-xs mt-4 mb-7 lg:text-xl">
            A sustentabilidade ambiental, social e económica faz parte da nossa estratégia e compromisso, integram as nossas práticas de gestão,
            princípios e valores que definem a comunidade SPintos.
          </p>
        </article>
      </section>

      <section className="flex flex-col  items-center mt-10">
        <article className="">
          <section className=" text-center">
            <p className="text-2xl font-bold  text-corporative-color2 mt-7 lg:text-[64px]">CERTIFICAÇÕES</p>
          </section>
          <article className="px-10 lg:h-[90px] flex flex-col items-center">
            <p className="text-center lg:w-6/12  font-bold text-xs mt-3 lg:text-xl">
              “Certificação do Controlo de Produção” segundo a Norma Europeia NP EN 206:2013 + A2:2021 – Produção de Betão.
            </p>
            <p className="text-center  font-bold text-xs lg:text-xl">Centrais de Betão de Recarei e de Vila Nova de Gaia</p>
          </article>
        </article>
      </section>

      <section className="mt-10 lg:mt-40">
        <section className="px-7 flex w-full items-center justify-center text-center mt-10 bg-corporative-color3 h-[49px] lg:h-[110px]">
          <p className="w-full text-2xl font-bold text-corporative-color2 lg:text-6xl border-b-[1px]  lg:border-b-[4px] border-corporative-color2">
            PRÉMIOS
          </p>
        </section>

        <section className="lg:flex justify-evenly">
          <article className="">
            <figure className="flex flex-col items-center">
              <p className="font-bold mt-8 mb-2">Prémio Habitar Portugal 2008</p>
              <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
            </figure>
          </article>

          <article className="">
            <figure className="flex flex-col items-center">
              <p className="font-bold mt-8 mb-2">Edifício Sede do Grupo SPintos</p>
              <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
            </figure>
          </article>

          <article className="">
            <figure className="flex flex-col items-center">
              <p className="font-bold mt-8 mb-2">Prémio SECIL Arquitetura 2008</p>
              <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
            </figure>
          </article>

          <article className="">
            <figure className="flex flex-col items-center">
              <p className="font-bold mt-8 mb-2">Edifício Administrativo Móveis Viriato</p>
              <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
            </figure>
          </article>
        </section>
      </section>

      <section className="lg:flex items-center mb-10 mt-10 lg:mb-20 lg:mt-40 lg:h-[259px] lg:px-10">
        <article className="h-full mb-16 lg:mb-0">
          <header className="flex justify-center bg-graycorporative-color items-center h-[41px] lg:h-[87px]">
            <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">MISSÃO</p>
          </header>

          <article className="px-5 lg:px-10">
            <p className="text-justify text-sm   mt-10">
              Nos nossos projetos e negócios propomo-nos garantir qualidade, inovação e excelência, respeitando os clientes, os colaboradores e o meio
              ambiente.
            </p>
            <p className="text-justify text-sm  ">A nossa missão visa criar valor e sustentabilidade.</p>
          </article>
        </article>

        <article className="h-full  mb-16 lg:mb-0 border-r-[3px] border-l-[3px] border-corporative-color2 ">
          <header className="flex justify-center bg-graycorporative-color items-center h-[41px] lg:h-[87px]">
            <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">VISÃO</p>
          </header>

          <article className=" px-5">
            <p className="text-justify text-sm   mt-10">
              Ser uma referência no setor da engenharia e construção e promoção imobiliária pela experiência, excelência, qualidade, solidez e
              inovação.
            </p>
          </article>
        </article>

        <article className="h-full mb-16 lg:mb-0">
          <header className="flex justify-center bg-graycorporative-color items-center h-[41px] lg:h-[87px]">
            <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">VALORES</p>
          </header>

          <article className=" px-5">
            <p className="text-justify text-sm   mt-10">
              Pautamos os nossos valores pela Experiência e Conhecimento, Ética e Integridade, Ambição, Responsabilidade, Rigor, Cooperação,
              Flexibilidade, Resiliência e Humanismo.
            </p>
          </article>
        </article>
      </section>
    </main>
  );
}
