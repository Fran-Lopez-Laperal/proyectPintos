export const HistoryHeader = () => {
  return (
    <main className="flex flex-col">
      <header>
        <figure className="w-full h-[810px] bg-red-200 border-b-8 border-corporative-color">
          <img src="" alt="" />
        </figure>

        <div className="flex justify-center items-center mt-[-100px] pb-48">
          <div className="text-6xl uppercase relative rotate-45 border-[14px] rounded border-white">
            <span className="bg-corporative-gradient w-60 h-60  inset-0 flex justify-center items-center rounded border-xl">
              <h1 className="text-center text-white -rotate--45 font-extrabold">História</h1>
            </span>
          </div>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center bg-[#F1F6F9] w-full mx-auto">
        <div className="mx-80">
          <h2 className="text-corporative-color text-center text-6xl uppercase w-full border-b-4 border-corporative-color pb-3 font-bold">o grupo</h2>
          <p className="pt-6 text-justify text-xl font-extrabold">
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

      <section className="flex flex-col justify-center items-center bg-[#F1F6F9] w-full mx-auto pt-36 ">
        <div className="w-full h-[400px] px-36 bg-red-200 flex flex-col items-center">
          <h2 className=" text-corporative-color text-center text-6xl uppercase pb-3 font-bold">empresas do grupo</h2>
          <p className="bg-blue-300 w-full h-full text-xl font-extrabold m-10 text-center">componente logos</p>
        </div>
      </section>
    </main>
  );
};
