import imgCompany from '../assets/headers/imgCompany.png';
// import { FetchNews } from '../components/FetchNews';
import { Noticia } from '../components/Noticia';
export function Noticias() {
  return (
    <>
      <section className="">
        <article className="flex justify-center mt-28 mb-20 lg:w-auto ">
          <figure className="w-4/5 lg:w-2/6 lg:h-[600px] shadow-2xl p-5 lg:mt-[-10px] rounded-2xl lg:flex lg:flex-col  lg:items-center ">
            <header className="flex justify-center mt-5 lg:mt-0">
              <img className="w-60 h-40 lg:w-96 lg:h-60 rounded-xl shadow-2xl" src={imgCompany} alt="" />
            </header>
            <Noticia />
          </figure>
        </article>
      </section>
      {/* <FetchNews /> */}
    </>
  );
}
