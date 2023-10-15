import imgCompany from '../assets/headers/historyHeader.jpeg';
import { FetchNews } from '../components/FetchNews';

export function News() {
  return (
    <section className="flex flex-col m-6 mt-12 px-1 sm:px-10 lg:px-16">
      <article className="flex flex-col justify-center items-center shadow-lg rounded-lg font-extrabold">
        <figure className="flex justify-center w-3/4">
          <img className="rounded-lg" src={imgCompany} alt="" />
        </figure>
        <main className="flex flex-col gap-2 items-center p-4 ">
          <p className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:py-6">Titulo</p>
          <p className="text-sm text-justify lg:text-lg lg:px-48">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
            fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
            lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
            egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem.
            Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
          </p>
        </main>
      </article>
      <section className="lg:pt-24">
        <FetchNews />
      </section>
    </section>
  );
}
