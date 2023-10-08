import { HeaderPages } from '../components/HeaderPages';
import areaNegocioHeader from '../assets/headers/areaNegocioHeader.jpeg';
import model from '../assets/model.jpg';
import { useEffect, useState } from 'react';
import { PromoçaoImages } from '../components/PromoçaoImages';
import { ResponsivePromoçaoImages } from '../components/ResponsivePromoçaoImages';
import { Link } from 'react-router-dom';
import data from '../assets/docs/ImobiliariaDocs.json'

export function AreaNegocio() {
  const [showImages, setshowImages] = useState(false);
  const [imoData, setImoData] = useState([]);

  useEffect(() => {
    const responsiveMovil = () => (window.innerWidth > 840 ? setshowImages(true) : setshowImages(false));

    responsiveMovil();

    window.addEventListener('resize', () => responsiveMovil());
  }, []);

  

  useEffect(() => {
    setImoData(data)
  }, []);
  console.log(data)

  return (
    <main className="flex flex-col">
      <HeaderPages text={'Imobiliária'} textSize="lg:text-5xl" textSizeR="text-xl" image={areaNegocioHeader} />

      <article className="bg-corporative-color3 w-auto px-8 lg:bg-graycorporative-color mt-10 lg:mt-24 flex justify-center">
        <section className="flex flex-col items-center lg:px-40 ">
          <h1 className="mt-10 border-b-[1px] w-full text-center border-corporative-color2 text-[28px] font-bold text-corporative-color2 text-2x1 md:hidden">PROMOÇÃO IMOBILIÁRIA</h1>
          <h1 className="mt-10 border-b-4 border-corporative-color2 text-2xl font-bold text-corporative-color2 text-4x1 hidden md:block lg:text-6xl w-full text-center">
            PROMOÇÃO
          </h1>
          <p className="mt-8 font-bold lg:text-xl text-justify">
            A dinâmica do grupo SPintos no mercado imobiliário tem crescido ao longo dos últimos 30 anos.
            A evolução é notória. A posição do grupo empresarial consolidou-se com uma carteira
            diversificada de empreendimentos. De sublinhar a abrangência geográfica: Paredes, Valongo,
            Vila Nova de Gaia, Porto, Almada (Capuchos - Setúbal) e mais recentemente no Algarve, em
            Armação de Pera.
            Cedo a empresa identificou a oportunidade de aliar à construção a gestão e a promoção
            imobiliária dos empreendimentos. Tendo, assim, a oportunidade de valorização no curto prazo
            dos investimentos.
            Através da Propiso, S.A., a principal imobiliária, é gerida uma forte carteira de compra e venda
            de terrenos e imóveis. Trabalhando, ainda, com as principais imobiliárias que são os parceiros
            de confiança.

          </p>
          <section className=" w-full">
            <Link to={'https://www.imovirtual.com'} className="bg-corporative-color rounded lg:float-left float-right p-3 mt-3 mb-10 text-white font-extrabold bg-gradient-to-t from-white to-blue-500 ">
              Bolsa imobiliária
            </Link>
          </section>
        </section>
      </article>

      <section>
        {showImages ?
          <PromoçaoImages imoData={imoData}/>
          :
          <ResponsivePromoçaoImages  imoData={imoData}/>
        }

      </section>
    </main>
  );
}
