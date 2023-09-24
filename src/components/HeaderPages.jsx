export function HeaderPages({ text, textSize, image }) {
  return (
    <header>
      <figure className="w-full h-[850px] bg-red-200 border-b-8 border-corporative-color">
        <img className="w-full h-full object-cover" src={image} alt={image} />
      </figure>

      <div className="flex justify-center items-center mt-[-100px] pb-48">
        <div className="uppercase relative rotate-45 border-[15px] rounded border-white">
          <span className="bg-corporative-gradient w-60 h-60  inset-0 flex justify-center items-center rounded">
            <h1 className={`text-center text-white -rotate--45 font-extrabold ${textSize}`}>{text}</h1>
          </span>
        </div>
      </div>
    </header>
  );
}
