import { Link } from 'react-router-dom';
import imgCompany from '../assets/imgCompany.png';
import logo from '../assets/logo.png'
import Marquee from 'react-fast-marquee';

export function Home() {


  return (
    <>
      <section>
        <figure className='mt-12'>
          <img className='' src={imgCompany} alt={imgCompany} />
        </figure>
      </section>
      <section>
        <menu className="w-full p-1  mt-10">
          <ul className="lg:flex grid grid-cols-2">

            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-br rounded-tr " to='/'>
              <li className="" >
                TURISMO
              </li>
            </Link>
            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-bl rounded-tl" to='/'>
              <li className="" >
                CARPINTARIA
              </li>
            </Link>
            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-br rounded-tr" to='/'>
              <li className="" >
                CONSTRUÇAO
              </li>
            </Link>
            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-bl rounded-tl" to='/'>
              <li className="" >
                BETÃO
              </li>
            </Link>
            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-br rounded-tr" to='/'>
              <li className="" >
                IMOBILIARIA
              </li>
            </Link>
            <Link className="flex justify-center border border-blue-400 h-24 items-center lg:w-full bg-blue-100 lg:m-0 m-0.5 rounded-bl rounded-tl" to='/'>
              <li className="" >
                INTERNACIONAL
              </li>
            </Link>

          </ul>
        </menu>
      </section>

      <section className='bg-blue-50 '>

        <article className='flex justify-center items-center h-20 relative'>
          <p className='text-base relative z-10 bg-blue-50 p-2'>A inovação nos torna diferenes</p>
          <p className='absolute left-1 right-1 h-0.5 bg-gray-500 z-0'></p>
        </article>

        <article className='bg-blue-200 h-auto border font-bold text-sky-700 '>
          <section className='mt-5 mb-8'>
            <header className='flex flex-col items-center'>
              <p className='font-extrabold text-3xl'>30</p>
              <p className='underline text-lg'>ANOS DE EXPERIENCIA</p>
            </header>

            <section className='lg:flex justify-around  grid grid-cols-2 mt-5'>
              <article className='flex flex-col items-center mt-3 '>
                <p>120</p>
                <p className='underline'>COLABORADORES</p>
              </article>
              <article className='flex flex-col items-center  mt-3'>
                <p>+500</p>
                <p className='underline '>OBRAS CONCLUÍDAS</p>
              </article>
              <article className='flex flex-col items-center  mt-3'>
                <p>12</p>
                <p className='underline'>EMPRESAS</p>
              </article>
              <article className='flex flex-col items-center  mt-3'>
                <p>15</p>
                <p className='underline'>PROJETOS EM CURSO</p>
              </article>
            </section>
          </section>

        </article>
      </section>

      <section className='mt-20 '>
        <header>
          <p className='text-sky-700 font-extrabold text-3xl flex justify-center'>EMPRESAS DO GRUPO</p>
        </header>
        <article>
          <Marquee className='mb-4 mt-5' pauseOnHover={true} speed={25} direction='right' gradientWidth={5}>
            <section className='nav-section flex'>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
            </section>
          </Marquee>

          <Marquee className='mb-4' pauseOnHover={true} speed={25} direction='left' gradientWidth={5}>
            <section className='nav-section flex'>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
              <Link className='w-28 md:w-96  h-20 ml-1' target='_blank' rel="noreferrer" href='https://attisbyv.es/'>
                <img className='w-32 md:w-96 w-full h-full' src={logo} alt={logo} />
              </Link>
            </section>
          </Marquee>
        </article>
      </section>


      <section className='mt-20 sm:bg-blue-200 bg-gray-200 bg-blue-200 mb-20 flex flex-col sm:flex-row'>
        <article className='w-full sm:w-1/2  hidden sm:block'>
          <img src={logo} alt="" className='w-full h-auto' />
        </article>
        <article className='border w-full sm:w-1/2'>
          <header className='flex flex-col items-center'>
            <p className='mt-5 font-bold'>Lorem ipsum dolor sit.</p>
            <p className='text-sky-700 font-extrabold text-3xl underline mt-5'>Adipisci rem consequatur</p>
          </header>
          <section className='m-5'>
            <p className='mt-10'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis enim aspernatur nostrum,
              cum suscipit minima amet exercitationem? Ex numquam praesentium quod amet impedit, deserunt rem nemo vel aperiam.
              In ratione soluta debitis. Aspernatur vel, doloremque, perspiciatis quae illo facere quia amet ipsam repudiandae
            </p>
            <p className='mt-5 '>
              officiis eaque quidem esse iste. Assumenda accusamus perferendis unde dolor facere officia, iste quisquam
              doloremque voluptate fugit illum? Officia voluptate maiores doloribus perferendis ratione, sapiente sequi
              id quos
            </p>
          </section>
        </article>

      </section>

      <section className='mb-20 relative'>
        <div className='bg-blue-200 h-20 absolute inset-0 top-40'></div>
        <header className='text-center mt-10 mb-5'>
          <p className='text-sky-700 font-bold text-3xl'>Noticias</p>
        </header>

        <article className='flex justify-around mb-5 relative'>
          <figure className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-40 h-24 object-cover bg-gray-300"
              src="IMAGEN"
              alt="Imagen"
            />
            <footer className="px-4 py-2">
              <p className="text-gray-700 text-base">
                Frase uno.
              </p>
              <p className="text-gray-700 text-base">
                Frase dos.
              </p>
            </footer>
          </figure>

          <figure className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <img
              className="w-40 h-24 object-cover bg-gray-300"
              src="IMAGEN"
              alt="Imagen"
            />
            <footer className="px-4 py-2">
              <p className="text-gray-700 text-base">
                Frase uno.
              </p>
              <p className="text-gray-700 text-base">
                Frase dos.
              </p>
            </footer>
          </figure>

        </article>

      </section>
    </>

  );
}

