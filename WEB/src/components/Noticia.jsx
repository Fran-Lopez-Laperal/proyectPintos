import imgCompany from '../assets/headers/imgCompany.png';

export function Noticia() {
  return (
    <>
      <section className="">
        <article className="flex justify-center mt-28 mb-20 lg:w-auto ">
          <figure className="w-4/5 lg:w-2/6 lg:h-[600px] shadow-2xl p-5 lg:mt-[-10px] rounded-2xl lg:flex lg:flex-col  lg:items-center ">
            <header className="flex justify-center mt-5 lg:mt-0">
              <img className="w-60 h-40 lg:w-96 lg:h-60 rounded-xl shadow-2xl" src={imgCompany} alt="" />
            </header>
            <article className="flex flex-col items-center lg:w-96 lg:flex lg:justify-center">
              <p className="mt-5 text-4xl font-bold text-sky-600">Titulo</p>
              <p className="text-justify text-sm font-bold mb-5">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem atque quos nesciunt cumque ducimus quis voluptates consequatur fugit
                voluptatum doloremque sed unde ex quisquam natus perferendis a est accusantium, beatae blanditiis corporis ipsa dolorum nostrum quia
                facilis. Ratione accusantium ipsa unde id obcaecati commodi aliquam quisquam laborum ea tempora ducimus ullam iusto, esse consectetur
                eligendi provident ipsum, aspernatur quos saepe?
              </p>
            </article>
          </figure>
        </article>
      </section>

      <section className="mb-20 lg:mb-32 relative">
        <div className="bg-blue-200 h-20 absolute inset-0 lg:top-64 top-44"></div>
        <header className="text-center mt-10 mb-5">
          <p className="text-sky-700 font-bold text-3xl lg:mb-10">Noticias</p>
        </header>

        <article className="flex justify-around mb-5 relative">
          <figure className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-40 h-24 lg:w-64 lg:h-44 object-cover bg-gray-300" src="IMAGEN" alt="Imagen" />
            <footer className="px-4 py-2">
              <p className="text-gray-700 text-base">Frase uno.</p>
              <p className="text-gray-700 text-base">Frase dos.</p>
            </footer>
          </figure>

          <figure className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-40 h-24 lg:w-64 lg:h-44 object-cover bg-gray-300" src="IMAGEN" alt="Imagen" />
            <footer className="px-4 py-2">
              <p className="text-gray-700 text-base">Frase uno.</p>
              <p className="text-gray-700 text-base">Frase dos.</p>
            </footer>
          </figure>
          <figure className="hidden lg:block max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img className="w-40 h-24 lg:w-64 lg:h-44 object-cover bg-gray-300" src="IMAGEN" alt="Imagen" />
            <footer className="px-4 py-2">
              <p className="text-gray-700 text-base">Frase uno.</p>
              <p className="text-gray-700 text-base">Frase dos.</p>
            </footer>
          </figure>
        </article>
      </section>
    </>
  );
}
