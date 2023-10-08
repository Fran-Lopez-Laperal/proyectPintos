export function Noticia({ image, title, text }) {
  return (
    <article className="flex flex-col justify-center rounded-lg border">
      <figure className="flex justify-center">
        <img className="rounded-t-lg h-auto w-full" src={image} alt="" />
      </figure>
      <main className="flex flex-col items-center px-2 py-2">
        <p className="text-sm text-center font-extrabold text-sky-600 lg:text-2xl">{title}</p>
        <p className="text-xs text-justify font-normal lg:text-lg">{text}</p>
      </main>
    </article>
  );
}
