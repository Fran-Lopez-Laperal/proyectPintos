import imgCompany from '../assets/imgCompany.png';

export function Promoçao() {
  return (
    <>
      <section>
        <article>
          <figure>
            <img src={imgCompany} alt={imgCompany} />
          </figure>
        </article>

        <article className="w-full flex justify-center mb-20 lg:mb-44">
          <section className="w-60  h-24 lg:w-auto lg:h-auto  flex flex-col items-center absolute top-[190px] lg:top-[700px]">
            <div className="w-16 lg:w-44  h-16 lg:h-44 border-4 border-current"></div>
            <p className="lg:font-bold lg:text-4xl lg:mt-5">LOUNGE TERRACE</p>
          </section>
        </article>

        <article className="border-b-[1px] border-sky-600 lg:bg-gray-50 lg:h-72 lg:flex lg:items-center w-auto">
          <article className="flex items-center h-20 relative w-full justify-around mb-4">
            <section className=" z-10 w-80 lg:w-[700px] lg:bg-transparent">
              <section className="flex  justify-around bg-white w-full background lg:bg-gray-50 ">
                <p className="text-base relative z-10 bg-blue-50 p-2 w-16 h-16 lg:w-36 lg:h-36 border-2 border-current"></p>
                <p className="text-base relative z-10 bg-blue-50 p-2 w-16 h-16 lg:w-36 lg:h-36 border-2 border-current"></p>
                <p className="text-base relative z-10 bg-blue-50 p-2 w-16 h-16 lg:w-36 lg:h-36 border-2 border-current"></p>
                <p className="text-base relative z-10 bg-blue-50 p-2 w-16 h-16 lg:w-36 lg:h-36 border-2 border-current"></p>
              </section>
            </section>
            <p className="absolute left-1 right-1 h-0.5 bg-sky-500 z-0 "></p>
          </article>
        </article>

        <article className=" flex justify-center mt-10 lg:w-full">
          <section className="w-80 lg:w-2/3">
            <p className="font-bold text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni necessitatibus vitae. Numquam debitis tenetur hic architecto
              blanditiis enim totam excepturi dicta a quo quas quibusdam ut mollitia, itaque inventore. Illo aliquid consectetur eaque similique nihil
              ea adipisci pariatur quibusdam iusto possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni necessitatibus vitae.
              Numquam debitis tenetur hic architecto blanditiis enim totam excepturi dicta a quo quas quibusdam ut mollitia, itaque inventore. Illo
              aliquid consectetur eaque similique nihil ea adipisci pariatur quibusdam iusto possimus.
            </p>
          </section>
        </article>
      </section>

      <section className="flex flex-col items-start mt-5 p-1">
        <article className="flex justify-around w-full border-b-2 border-current ">
          <img className="w-44 h-44  lg:w-[650px] lg:h-[650px]" src={imgCompany} alt="" />
          <img className="w-44 h-44  mb-2 lg:w-[650px] lg:h-[650px]" src={imgCompany} alt="" />
        </article>

        <article className="mt-5 mb-2 border-b-2 border-sky-600">
          <img className=" mb-1 w-auto h-auto" src={imgCompany} alt="" />
        </article>

        <article className="flex justify-start w-96 lg:w-[800px] lg:h-auto  border-current border-r-[10px] border-sky-600">
          <div className="border-b-4 border-sky-600 w-[310px] lg:w-auto flex items-center">
            <img className="w-80 h-96 lg:w-[640px] lg:h-[720px]  mb-1 " src={imgCompany} alt="" />
          </div>
        </article>

        <article className="flex justify-center mt-1">
          <img className="w-auto h-auto  mt-1" src={imgCompany} alt="" />
        </article>
      </section>

      <section className="mb-20 relative">
        <div className="bg-blue-200 h-20 absolute inset-0 top-36"></div>
        <header className="text-center mt-10 mb-10 w-64 border-b-4 border-sky-600">
          <p className="text-sky-700 font-bold text-2xl  w-60 flex ml-5">MAIS PROJETOS</p>
        </header>

        <article className="flex justify-around mb-4 relative card">
          <div className="w-44 h-32 object-cover bg-gray-300"></div>
          <div className="w-44 h-32 object-cover bg-gray-300"></div>
          <div className="hidden lg:block w-44 h-32 object-cover bg-gray-300"></div>
          <div className="hidden lg:block w-44 h-32 object-cover bg-gray-300"></div>
        </article>
      </section>
    </>
  );
}
