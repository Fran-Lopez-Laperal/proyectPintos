// import { FetchNews } from '../components/FetchNews';
import { FetchNews } from '../components/FetchNews';
import { Noticia } from '../components/Noticia';

export function Noticias() {
  return (
    <>
      <section className="">
        <Noticia />
        {/* <Noticia /> */}
      </section>
      <section className='mb-96'>
        <FetchNews />
      </section>

    </>
  );
}
