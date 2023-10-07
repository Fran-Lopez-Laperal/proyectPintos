import { useEffect, useState } from 'react';
import { getNewsService } from '../services';

export function FetchNews() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getNewsService();
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="mb-20 lg:mb-32 relative">
        <div className="bg-blue-200 h-32 absolute inset-0 lg:top-64 top-48"></div>
        <header className="text-center mt-10 mb-5">
        <p
              className="font-bold text-3xl text-center lg:border-none border-b-2 border-corporative-color2 pb-1 lg:px-4 lg:w-full lg:text-6xl text-corporative-color2">
              Noticias
            </p>
        </header>
        <article className="flex justify-around mb-5 relative">
          {data
            .map(({ title, introduction, text, id }) => (
              <figure key={id} className={`max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden ${id < 3 ? '' : 'hidden lg:block'}`}>
                <img className="w-40 h-24 lg:w-64 lg:h-36 object-cover bg-gray-300" src="{newItem.imageSrc}" alt="{newItem.title}" />
                <footer className="px-4 py-2 flex flex-col items-center">
                  <p className="text-gray-700 text-base">{title.length > 10 ? title.slice(0, 18) : title}</p>
                  <p className="text-gray-700 text-base">{introduction.length > 10 ? introduction.slice(0, 13) : introduction}</p>
                </footer>
              </figure>
            ))
            .slice(0, 4)}
        </article>
      </section>
    </>
  );
}
