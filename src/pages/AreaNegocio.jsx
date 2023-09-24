import { HeaderPages } from '../components/HeaderPages';
import areaNegocioHeader from '../assets/headersImages/areaNegocioHeader.jpeg';
import model from '../assets/model.jpg';

export function AreaNegocio() {
  return (
    <main className="flex flex-col">
      <HeaderPages text={'Imobiliária'} textSize="text-5xl" image={areaNegocioHeader} />

      <article className="bg-blue-200 w-auto p-8 lg:bg-gray-100 mt-10 flex justify-center">
        <section className="flex flex-col items-center md:w-1/2">
          <h1 className="border-b-2 border-sky-600 text-2xl font-bold text-sky-600 text-2x1 md:hidden">PROMOÇÃO IMOBILIÁRIA</h1>
          <h1 className="border-b-4 border-sky-600 text-2xl font-bold text-sky-600 text-4x1 hidden md:block lg:text-6xl w-full text-center">
            PROMOÇÃO
          </h1>
          <p className="mt-8 font-bold lg:text-xl text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil nam quis recusandae cum soluta accusantium beatae odio rerum, quod cumque.
            Exercitationem hic magni nostrum veritatis aliquam quisquam atque officia, voluptas esse in ex quidem quo tenetur provident quasi culpa
            nam quos animi doloribus at accusantium illo quas! Aperiam incidunt ipsa reprehenderit, reiciendis voluptate quidem nam molestiae quasi
            porro, fugiat sequi blanditiis aspernatur a, iste distinctio iure est enim voluptates obcaecati beatae harum. Iste, in alias numquam iure
            sapiente vero eligendi. In non dolor, animi magni, quos tempore quae repellendus illo nobis id ab autem similique repudiandae vero impedit
            iure commodi.
          </p>
          <section className=" w-full">
            <button className="bg-blue-400 rounded lg:float-left float-right p-3 mt-3 text-white font-extrabold bg-gradient-to-t from-white to-blue-500 ">
              Bolsa imobiliária
            </button>
          </section>
        </section>
      </article>

      <article className=" flex flex-col items-center mb-20">
        <figure className="border-b-4 border-blue-400 mt-7">
          <article className="h-64 w-96 bg-gray-400 mb-4">
            <img className="w-full h-full" src={model} alt={model} />
          </article>
        </figure>

        <figure className="border-b-4 border-blue-400 mt-7">
          <article className="h-64 w-96 bg-gray-400 mb-4">
            <img className="w-full h-full" src={model} alt={model} />
          </article>
        </figure>

        <figure className="border-b-4 border-blue-400 mt-7">
          <article className="h-64 w-96 bg-gray-400 mb-4">
            <img className="w-full h-full" src={model} alt={model} />
          </article>
        </figure>

        <figure className="border-b-4 border-blue-400 mt-7">
          <article className="h-64 w-96 bg-gray-400 mb-4">
            <img className="w-full h-full" src={model} alt={model} />
          </article>
        </figure>
      </article>
    </main>
  );
}
