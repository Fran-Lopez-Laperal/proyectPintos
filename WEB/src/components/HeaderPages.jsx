export function HeaderPages({ text, textSize,textSizeR, image, logo }) {
  return (
    <header>
      <figure className="w-full h-64 bg-red-200 border-b-8 border-corporative-color lg:h-[850px]">
        <img className="w-full h-full object-cover" src={image} alt={image} />
      </figure>
      {/* pb-24 lg:pb-48 */}
      {/* mt-[-30px] lg:mt-[-100px] */}
      <div className="flex justify-center items-center mt-[-30px] lg:mt-[-100px]">
        <div className="uppercase relative rotate-45 border-8 lg:border-[15px] rounded border-white">
          <span className="bg-corporative-gradient w-32 h-32 inset-0 flex justify-center items-center rounded lg:w-60 lg:h-60 ">
            <h1 className={`text-center text-white -rotate--45 font-extrabold ${textSizeR} ${textSize} `}>{text}</h1>
            <img className="text-center filter brightness-0 invert -rotate--45 font-extrabold" src={logo} alt={logo} />
          </span>
        </div>
      </div>
    </header>
  );
}
