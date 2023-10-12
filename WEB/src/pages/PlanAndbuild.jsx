import { HeaderPages } from '../components/HeaderPages';
import planearHeader from '../assets/headers/historyHeader.jpeg';
import { Award } from '../components/Award';
import { Sections } from '../components/Sections';

const PlanAndbuildSections = ({ title, text, styles }) => {
  return (
    <section className={`flex flex-col font-extrabold ${styles}`}>
      <h2 className="p-3 text-center text-3xl uppercase text-corporative-color2 bg-corporative-color3 lg:bg-white lg:text-6xl lg:py-6">{title}</h2>
      <p className="text-justify p-3 text-sm lg:text-xl lg:font-semibold lg:px-20 lg:py-8">{text}</p>
    </section>
  );
};

export function PlanAndbuild() {
  return (
    <main className="flex flex-col">
      <HeaderPages text={'planear e construir'} textSize="text-xl lg:text-4xl" image={planearHeader} />

      <header className="flex justify-center items-center relative lg:flex lg:justify-center mt-10 lg:mt-12 lg:mx-36">
        <h2 className="font-dancing text-xl pb-[6px] px-1 relative z-10 bg-white lg:text-5xl lg:px-4">
          Planeamos e construímos projestos para a vida
        </h2>
        <p className="absolute left-0 right-0 h-0.5 lg:h-1 bg-corporative-color2 z-0"></p>
      </header>

      <main className="flex flex-col gap-16">
        <section className="flex justify-center text-center font-extrabold text-xs uppercase px-6 pt-4 lg:text-2xl lg:mx-36 lg:py-20">
          <p>
            há mais de 30 anos que inspiramos confiança. conheça um pouco mais da nossa experiência e dos nossos projetos que são fruto da capacidade
            inovadora, sustentabilidade e excelência das nossas empresas.
          </p>
        </section>

        <Sections
          title="responsabilidade social"
          text="Ao serviço da sociedade procuramos criar um mundo melhor. No âmbito da responsabilidade social estabelecemos diversas parcerias com
            instituições nacionais e locais"
          bg="bg-corporative-color3"
          styles="lg:p-12"
          underline="border-b-2 border-corporative-color2 lg:border-b-4 lg:pt-4"
        />

        <Sections
          title="sustentabilidade"
          text="A sustentabilidade ambiental, social e económica faz parte da nossa estratégia e compromisso, integram as nossas práticas de gestão,
          princípios e valores que definem a comunidade SPintos."
          bg="lg:bg-[#62CB311A]"
          styles="lg:p-12"
        />

        <Sections
          title="certificações"
          text="“Certificação do Controlo de Produção” segundo a Norma Europeia NP EN 206:2013 + A2:2021 – Produção de Betão. Centrais de Betão
          de Recarei e de Vila Nova de Gaia"
          textStyles="lg:px-80"
        />

        <section className="flex flex-col gap-4 font-extrabold bg-corporative-color3">
          <h2 className="mx-3 pt-3 text-center text-3xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 lg:text-6xl lg:py-4 lg:mx-[800px]">
            prémios
          </h2>
          <section className="flex flex-col gap-12 pt-4 bg-white lg:grid lg:grid-cols-4 lg:gap-2 lg:px-80 lg:pt-12">
            <Award title="Prémio Habitar Portugal 2008" image={planearHeader} />
            <Award title="Edifício Sede do Grupo SPintos" image={planearHeader} />
            <Award title="Prémio SECIL Arquitetura 2008" image={planearHeader} />
            <Award title="Edifício Administrativo Móveis Viriato" image={planearHeader} />
          </section>
        </section>

        <section className="flex flex-col gap-8 pb-12 lg:grid lg:grid-cols-3 lg:px-48 lg:pb-24">
          <PlanAndbuildSections
            title="missão"
            text="Nos nossos projetos e negócios propomo-nos garantir qualidade, inovação e excelência, respeitando os clientes, os colaboradores e o meio
            ambiente. A nossa missão visa criar valor e sustentabilidade."
          />
          <PlanAndbuildSections
            title="visão"
            text="Ser uma referência no setor da engenharia e construção e promoção imobiliária pela experiência, excelência, qualidade, solidez e inovação."
            styles="lg:border-r-4 lg:border-l-4 lg:border-corporative-color2"
          />
          <PlanAndbuildSections
            title="valores"
            text="Pautamos os nossos valores pela Experiência e Conhecimento, Ética e Integridade, Ambição, Responsabilidade, Rigor, Cooperação,
            Flexibilidade, Resiliência e Humanismo."
          />
        </section>
      </main>
    </main>
  );
}
