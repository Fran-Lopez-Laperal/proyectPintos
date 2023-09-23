import imgCompany from '../assets/imgCompany.png';



export function Promoçao() {
  return (
    <section>
      <article>
        <figure>
          <img src={imgCompany} alt={imgCompany} />
        </figure>
      </article>

      <article className='w-full flex justify-center mb-20'>
        <section className='w-60 h-24  flex flex-col items-center absolute top-[190px]'>
          <div className='w-16 h-16 border-2 border-red-500'></div>
          <p className=''>LOUNGE TERRACE</p>
        </section>
      </article>

      <article className='border-b-[1px] border-sky-600'>
        <article className='flex items-center h-20 relative w-full justify-around mb-4'>
          <section className=' z-10 w-80 '>
            <section className='flex  justify-around bg-white w-full background '>
              <p className='text-base relative z-10 bg-blue-50 p-2 w-16 h-16 border-2 border-current'></p>
              <p className='text-base relative z-10 bg-blue-50 p-2 w-16 h-16 border-2 border-current'></p>
              <p className='text-base relative z-10 bg-blue-50 p-2 w-16 h-16 border-2 border-current'></p>
              <p className='text-base relative z-10 bg-blue-50 p-2 w-16 h-16 border-2 border-current'></p>
            </section>
          </section>
          <p className='absolute left-1 right-1 h-0.5 bg-sky-500 z-0 '></p>
        </article>
      </article>

      <article className=' flex justify-center mt-10'>
        <section className='w-80'>
          <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde magni necessitatibus vitae. Numquam debitis
            tenetur hic architecto blanditiis enim totam excepturi dicta a quo quas quibusdam ut mollitia, itaque
            inventore. Illo aliquid consectetur eaque similique nihil ea adipisci pariatur quibusdam iusto possimus.
          </p>
        </section>
      </article>

      <section className='mb-20 relative'>
        <div className='bg-blue-200 h-20 absolute inset-0 top-36'></div>
        <header className='text-center mt-10 mb-10'>
          <p className='text-sky-700 font-bold text-3xl border-b-4 border-sky-600'>MAIS PROJETOS</p>
        </header>

        <article className='flex justify-around mb-4 relative'>
          <div className="w-44 h-32 object-cover bg-gray-300"></div>
          <div className="w-44 h-32 object-cover bg-gray-300"></div>
        </article>

      </section>
    </section>
  )
}
