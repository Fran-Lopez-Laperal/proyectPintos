export function ContactInfo({ imgSrc, altText, infoText, infoText2 }) {
  return (
    <article className="flex flex-col  justify-start items-center text-center text-lg my-10 lg:font-light lg:text-2xl ">
      <img className="pb-4 lg:pb-8 lg:w-20" src={imgSrc} alt={altText} />
      <p className="w-80 lg:w-64">{infoText}</p>
      <p>{infoText2}</p>
    </article>
  );
}
