export function Award({ title, image }) {
  return (
    <article className="flex flex-col gap-3 text-center px-12 lg:px-6">
      <h3>{title}</h3>
      <figure className="px-10 lg:px-0">
        <img className="object-cover rounded-xl" src={image} alt="" />
      </figure>
    </article>
  );
}
