import { HeaderPages } from "../components/HeaderPages";
import planearHeader from '../assets/headers/historyHeader.jpeg';

export function PlanearConstruir() {


    return (
        <>
            <main>
                <HeaderPages text={'PLANEAR E CONSTRUIR'} textSize={'text-1xl'} image={planearHeader} />
            </main>

            <section className="flex justify-center items-center relative lg:flex lg:justify-center lg:mt-10 lg:mb-28 lg:mx-36 mt-5">
                <p className="text-xl relative z-10 bg-white px-3 font-dancing lg:text-5xl">Planeamos e construímos projestos para a vida</p>
                <p className="absolute left-1 right-1 h-[2px] bg-corporative-color2 z-0"></p>
            </section>

            <section className="flex justify-center mt-5">
                <p className="w-5/6 text-center font-extrabold text-xs p-4 lg:text-[22px] lg:leading-8">
                    HÁ MAIS DE 30 ANOS QUE INSPIRAMOS CONFIANÇA. CONHEÇA UM POUCO MAIS DA NOSSA EXPERIÊNCIA E DOS NOSSOS PROJETOS QUE SÃO
                    FRUTO DA CAPACIDADE  INOVADORA, SUSTENTABILIDADE E EXCELÊNCIA DAS NOSSAS EMPRESAS.
                </p>
            </section>

            <section className="flex flex-col  items-center justify-center bg-corporative-color3 mt-10 h-[158px] lg:h-[296px]">
                <article className="w-5/6">
                    <section className=" text-center lg:h-[87px]">
                        <p className="text-xl font-extrabold lg:text-[64px]  text-corporative-color2 mt-7">
                            RESPONSABILIDADES SOCIAL
                        </p>
                        <p className="lg:border-b-4 border-b-2 border-corporative-color2 lg:mt-4"></p>
                    </section>
                    <section className="lg:h-[126px]">
                        <p className="text-center font-extrabold text-xs mt-5 lg:text-xl">
                            Ao serviço da sociedade procuramos criar um mundo melhor.

                        </p>
                        <p className="text-center font-extrabold text-xs mb-7 lg:text-xl">
                            No âmbito da responsabilidade social estabelecemos diversas parcerias com instituições nacionais e locais
                        </p>
                    </section>

                </article>

            </section>

            <section className="flex flex-col items-center justify-center bg-sustentabilidade-color mt-10 lg:h-[230px]">
                <article className="w-5/6">
                    <section className=" text-center">
                        <p className="text-2xl font-extrabold lg:text-[64px]  text-corporative-color2 mt-7">
                            SUSTENTABILIDADE
                        </p>
                    </section>

                    <p className="text-center font-extrabold text-xs mt-5 mb-7 lg:text-xl">
                        A sustentabilidade ambiental, social e económica faz parte da nossa estratégia e compromisso, integram as
                        nossas práticas de gestão, princípios e valores que definem a comunidade SPintos.
                    </p>
                </article>

            </section>

            <section className="flex flex-col  items-center mt-10">
                <article className="w-5/6">
                    <section className=" text-center">
                        <p className="text-2xl font-extrabold  text-corporative-color2 mt-7 lg:text-[64px]">
                            CERTIFICAÇÕES
                        </p>
                    </section>
                    <article className="p-4 lg:h-[90px] flex flex-col items-center">
                        <p className="text-center lg:w-6/12  font-extrabold text-xs mt-3 lg:text-xl">
                            “Certificação do Controlo de Produção” segundo a
                            Norma Europeia NP EN 206:2013 + A2:2021 – Produção de Betão.
                        </p>
                        <p className="text-center  font-extrabold text-xs lg:text-xl">
                            Centrais de Betão de Recarei e de Vila Nova de Gaia
                        </p>
                    </article>
                </article>
            </section>

            <section className="mt-10 lg:mt-20">
                <section className=" flex w-full items-center justify-center text-center mt-10 bg-corporative-color3 h-[49px] lg:h-[110px]">
                    <p className=" text-2xl font-extrabold text-corporative-color2 lg:text-6xl border-b-[4px] border-corporative-color2">
                        PRÉMIOS
                    </p>
                    <p className="absolute left-3 right-3 h-[1px] mt-10 bg-corporative-color2  z-0 lg:left-auto "></p>
                </section>

                <section className="lg:flex justify-evenly">
                    <article className="">
                        <figure className="flex flex-col items-center">
                            <p className="font-extrabold mt-8 mb-2">
                                Prémio Habitar Portugal 2008
                            </p>
                            <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
                        </figure>

                    </article>

                    <article className="">
                        <figure className="flex flex-col items-center">
                            <p className="font-extrabold mt-8 mb-2">
                                Edifício Sede do Grupo SPintos
                            </p>
                            <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
                        </figure>

                    </article>

                    <article className="">
                        <figure className="flex flex-col items-center">
                            <p className="font-extrabold mt-8 mb-2">
                                Prémio SECIL Arquitetura 2008
                            </p>
                            <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
                        </figure>

                    </article>

                    <article className="">
                        <figure className="flex flex-col items-center">
                            <p className="font-extrabold mt-8 mb-2">
                                Edifício Administrativo Móveis Viriato
                            </p>
                            <img className="h-[200px] w-[200px] object-cover rounded-xl border-none " src={planearHeader} alt="" />
                        </figure>

                    </article>
                </section>

            </section>

            <section className="mt-10 lg:flex items-center mb-10">
                <article className="mt-20">
                    <header className="flex justify-center bg-corporative-color3 items-center h-[41px] lg:h-[87px]">
                        <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">
                            MISSÃO
                        </p>
                    </header>

                    <article className="p-10">
                        <p className="text-justify">
                            Nos nossos projetos e negócios propomo-nos garantir qualidade, inovação e excelência,
                            respeitando os clientes, os colaboradores e o meio ambiente.
                        </p>
                        <p className="text-justify">
                            A nossa missão visa criar valor e sustentabilidade.
                        </p>
                    </article>
                </article>

                <article className="mt-14 border-r-[3px] border-l-[3px] border-corporative-color2 ">
                    <header className="flex justify-center bg-corporative-color3 items-center h-[41px] lg:h-[87px]">
                        <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">
                            VISÃO
                        </p>
                    </header>

                    <article className="p-10">
                        <p className="text-justify">
                            Ser uma referência no setor da engenharia e construção e promoção imobiliária pela experiência,
                            excelência, qualidade, solidez e inovação.
                        </p>

                    </article>
                </article>

                <article className="mt-14">
                    <header className="flex justify-center bg-corporative-color3 items-center h-[41px] lg:h-[87px]">
                        <p className="font-bold text-corporative-color2 text-2xl lg:text-[61px]">
                            VALORES
                        </p>
                    </header>

                    <article className="p-10">
                        <p className="text-justify">
                            Pautamos os nossos valores pela Experiência e Conhecimento, Ética e Integridade, Ambição, Responsabilidade, Rigor, Cooperação, Flexibilidade, Resiliência e Humanismo.
                        </p>

                    </article>
                </article>


            </section>
        </>
    )
}