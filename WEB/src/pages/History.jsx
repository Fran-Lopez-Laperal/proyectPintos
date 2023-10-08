import { HeaderPages } from '../components/HeaderPages';
import { FetchNews } from '../components/FetchNews';
import historyHeader from '../assets/headers/historyHeader.jpeg';

export function History() {
  return (
    <main className="flex flex-col gap-12">
      <HeaderPages text={'História'} textSize="text-2xl lg:text-6xl" image={historyHeader} />
      <section className="text-justify font-extrabold text-sm mx-6 lg:text-xl lg:mx-80">
        <p>
          O grupo SPintos, fundado em 1993, tem a sua origem na área da construção civil. A sua matriz agrega um conjunto de empresas com sólida
          experiência e conhecimento em diferentes setores de atividade.
        </p>
        <p>
          Sob a liderança dos quatro irmãos Fernando, Rui, Vasco e Berto Pinto, o grupo SPintos alicerça os seus valores no desenvolvimento
          sustentado, na qualidade, na inovação e na segurança dos projetos que desenvolve.
        </p>
        <p>
          Com um histórico comprovado na construção de edifícios residenciais, comerciais, industriais e infraestruturas públicas, o grupo
          especializou-se, ainda, no fornecimento de betão pronto.
        </p>
        <p>
          A oferta global das áreas de negócio SPintos abrange a construção civil, fornecimento de betão, carpintaria, promoção imobiliária e
          hotelaria. Além de Portugal, opera também no mercado internacional, nomeadamente, no Brasil e na Costa do Marfim.
        </p>
        <p>
          O grupo SPintos aposta no crescimento sustentado e na melhoria contínua, na formação qualificada dos seus colaboradores, na inovação e no
          investimento permanente na aquisição de novos e mais modernos equipamentos, procurando sempre superar as expectativas dos seus clientes.
        </p>
        <p>
          Com projetos diferenciadores, a SPintos viu já distinguidas as suas obras pelos prémios Habitar Portugal 2008 e Secil Arquitetura 2008,
          entre outras distinções.
        </p>
      </section>

      <section className="flex flex-col p-6 gap-5 font-extrabold bg-corporative-color3 lg:bg-graycorporative-color lg:px-80 lg:p-0 lg:py-8">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 px-20 border-b-2 border-corporative-color2 lg:text-6xl">o grupo</h2>
        <p className="text-justify text-sm lg:text-xl">
          O Grupo SPintos, fundado em 1993, tem a sua origem na área da construção civil, agregando na sua matriz um vasto conjunto de empresas com
          sólida experiência e conhecimento nos diferentes sectores em que atua.Sob a liderança dos irmãos Fernando, Rui, Vasco e Berto Pinto, o Grupo
          SPintos alicerça os seus valores no desenvolvimento sustentado, na qualidade e na segurança dos projetos que desenvolve.Com um histórico
          comprovado na construção de edifícios residenciais, comerciais, industriais e infraestruturas públicas, o grupo especializou-se ainda no
          fornecimento de betão pronto.A oferta global das áreas de negócio SPintos abrange a construção civil, fornecimento de betão, carpintaria,
          promoção imobiliária e hotelaria. Além de Portugal, opera também no mercado internacional, nomeadamente, no Brasil e na Costa do Marfim.O
          Grupo SPintos aposta no crescimento sustentado e na melhoria contínua, investindo na formação qualificada dos seus colaboradores, na
          inovação e no investimento permanente na aquisição de novos e mais modernos equipamentos, procurando sempre superar as expectativas dos seus
          clientes.Com projetos diferenciadores, a SPintos viu já distinguidas as suas obras pelos prémios Habitar Portugal 2008 e Secil Arquitetura
          2008, entre outras distinções.
        </p>
        <h2 className="text-2xl uppercase text-corporative-color2 border-b-2 border-corporative-color2 mr-[140px] pt-6 lg:text-6xl lg:mr-[760px]">
          o que fazemos
        </h2>
        <p className="text-justify text-sm lg:text-xl">
          Desenvolvemos a nossa principal atividade nas áreas da Construção Civil, em Portugal, no Brasil e Costa do Marfim. Atuamos na produção de
          Carpintaria para os nossos projetos e clientes externos. A nossa experiência de produção e fornecimento de Betão pronto é certificada.
          Destacamo-nos, ainda, na gestão e promoção imobiliária. No âmbito da Hotelaria construímos e exploramos projetos na área do Turismo,
          Alojamento e Lazer.
        </p>
      </section>

      <section className="flex flex-col gap-5 p-6 font-extrabold text-justify lg:px-80 lg:text-center">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 lg:text-6xl">fundaçao</h2>
        <div>
          <p>FERNANDO DA SILVA NOGUEIRA PINTO INICIOU A SUA CARREIRA DE EMPRESÁRIO COMO CONSTRUTOR CIVIL.</p>
          <p>CRIOU A SUA PRIMEIRA EMPRESA, EM XXX, DENOMINADA CONSTRUÇÕES PINTOS & PINHO, LDA.</p>
          <p>
            MOVIDO PELO ESPÍRITO EMPREENDEDOR, PELA LONGA EXPERIÊNCIA COMPROVADA, PELA CAPACIDADE DE LIDERANÇA E SUCESSO, FUNDOU COM OS SEUS QUATRO
            FILHOS A S. PINTOS – ENGENHARIA E CONSTRUÇÃO, S.A., A PRIMEIRA DO GRUPO.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center font-extrabold text-justify lg:px-80">
        <h2 className="text-center text-3xl uppercase text-corporative-color2 lg:text-6xl">timeline</h2>
      </section>

      <FetchNews />
    </main>
  );
}
