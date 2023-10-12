export function GalleryImages({ image1, image2, image3, image4, image5 }) {
  return (
    <section>
      <article className="flex justify-evenly p-1 ">
        <img className="w-[185px] lg:w-[693px] lg:h-[670px] object-cover h-[149px]  bg-gray-300 " src={image1} alt="" />
        <img className="w-[185px] lg:w-[693px] lg:h-[670px] h-[149px] object-cover  bg-gray-300" src={image2} alt="" />
      </article>
      <div className="m-10 mt-0  h-1"></div>
      <article className="p-1 -mt-10">
        <img className="w-full  h-[149px] lg:h-[670px] object-cover bg-gray-300" src={image3} alt="" />
      </article>

      <article className="p-1">
        <div className="ml-1  w-[230px] mb-1"></div>
        <img className="w-[240px] lg:w-[1077px] lg:h-[1556px] h-[346px] object-cover bg-gray-300 " src={image4} alt="" />
        <div className=" w-[230px] object-cover  mt-1"></div>
      </article>

      <article className="p-1">
        <img className="w-full lg:h-[670px] h-[149px] object-cover bg-gray-300" src={image5} alt="" />
      </article>
    </section>
  );
}
