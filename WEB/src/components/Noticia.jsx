import imgCompany from '../assets/headers/historyHeader.jpeg';

export function Noticia() {
  return (
    <article className="flex flex-col justify-center rounded-lg">
      <figure className="flex justify-center">
        <img className="rounded-t-lg h-auto w-full" src={imgCompany} alt="" />
      </figure>
      <main className="flex flex-col items-center px-2 py-2">
        <p className="text-sm text-center font-extrabold text-sky-600 lg:text-2xl">Qorem ipsum dolor</p>
        <p className="text-xs text-justify font-normal lg:text-lg">Lorem ipsum dolor...</p>
      </main>
    </article>
  );
}
