export function Sections({ title, text, bg, underline, styles, textStyles }) {
  return (
    <section className={`flex flex-col py-4 px-3 gap-4 font-extrabold ${bg} ${styles} lg:px-80`}>
      <h2 className={`text-center text-3xl uppercase text-corporative-color2 ${underline} lg:text-6xl`}>{title}</h2>
      <p className={`text-center text-sm lg:text-xl lg:pt-4 ${textStyles}`}>{text}</p>
    </section>
  );
}