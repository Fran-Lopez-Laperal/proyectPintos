export function GalleryImages({ image1, image2, image3, image4, image5 }) {
  return (
    <section>
      <article className="flex justify-evenly p-1 ">
        <img className="w-[185px] sm:w-[400px]  lg:w-[693px] sm:h-[310px]  lg:h-[670px] object-cover h-[149px]  bg-gray-300 " src={image1} alt="" />
        <img className="w-[185px] sm:w-[400px] lg:w-[693px]  sm:h-[310px] lg:h-[670px] h-[149px] object-cover  bg-gray-300" src={image2} alt="" />
      </article>
      <div className="m-10 mt-0  h-1"></div>
      <article className="p-1 -mt-10">
        <img className="w-full sm:h-[310px]  h-[200px] lg:h-[670px] object-cover bg-gray-300" src={image3} alt="" />
      </article>

      <article className="p-1">
        <img className="w-[240px] sm:h-[510px] sm:w-[390px]  lg:w-[1077px] lg:h-[1556px] h-[346px] object-cover bg-gray-300 " src={image4} alt="" />
      </article>

      <article className="p-1">
      <img className="w-full sm:h-[310px]  h-[200px] lg:h-[670px] object-cover bg-gray-300" src={image5} alt="" />
      </article>
    </section>
  );
}
