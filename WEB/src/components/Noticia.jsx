import imgCompany from '../assets/headers/historyHeader.jpeg';

export function Noticia() {
  return (
    <>
      <section className='px-10 mt-32  mb-32 flex justify-center'>
        <section className='h-full flex justify-center lg:w-[1000px] shadow-lg rounded-lg shadow-gray-300'>
          <article className="relative -top-10 flex flex-col  w-3/4 lg:w-[720px]  justify-center">
            <figure className="flex justify-center">
              <img className=" rounded-lg  w-full" src={imgCompany} alt="" />
            </figure>
            <main className="flex flex-col items-center px-2 py-2">
              <p className="text-3xl text-center font-bold text-sky-600 lg:mt-10 lg:mb-10 lg:text-[48px]">Titulo</p>
              <p className="text-xs text-justify font-normal lg:text-lg lg:mb-20">
                Korem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
                molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan,
                risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget
                condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora
                torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
                enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac
                rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis
                convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
            </main>
          </article>
        </section>
      </section>
      

    </>



  );
}
