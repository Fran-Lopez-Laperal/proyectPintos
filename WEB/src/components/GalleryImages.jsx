export function GalleryImages({ image1, image2, image3, image4, image5 }) {
  return (
    <section className="px-2">
      <article className="flex justify-between">
        <img className="w-[185px] sm:w-[400px]  lg:w-[693px] sm:h-[310px]  lg:h-[670px] object-cover h-[149px]  bg-gray-300 " src={image1} alt="" />
        <img className="w-[185px] sm:w-[400px] lg:w-[693px]  sm:h-[310px] lg:h-[670px] h-[149px] object-cover  bg-gray-300" src={image2} alt="" />
      </article>
     
      <article className="mt-2 lg:mt-5">
        <img className="w-full sm:h-[310px]  h-[200px] lg:h-[670px] object-cover bg-gray-300" src={image3} alt="" />
      </article>

      <article className="mt-2 lg:mt-5">
        <img className="w-[240px] sm:h-[510px] sm:w-[390px]  lg:w-[1077px] lg:h-[1556px] h-[346px] object-cover bg-gray-300 " src={image4} alt="" />
      </article>

      <article className="mt-2 lg:mt-5">
      <img className="w-full sm:h-[310px]  h-[200px] lg:h-[670px] object-cover bg-gray-300" src={image5} alt="" />
      </article>
    </section>
  );
}
