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

      <FetchNews />
    </>
  );
}
