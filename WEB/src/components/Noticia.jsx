import { useState } from 'react';

export function Noticia({ image, title, text, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);

    onDelete(() => {
      setIsDeleting(false);
    });
  };

  return (
    <article className="flex flex-col justify-center rounded-lg border">
      <figure className="flex justify-center">
        <img className="rounded-t-lg h-auto w-full" src={`http://localhost:3000/public/${image}`} alt="" />
      </figure>
      <main className="flex flex-col items-center px-2 py-2">
        <p className="text-sm text-center font-extrabold text-sky-600 lg:text-2xl">{title}</p>
        <p className="text-xs text-justify font-normal lg:text-lg">{text}</p>
        {onDelete && (
          <button
            onClick={handleDeleteClick}
            className={`mt-2 text-red-500 hover:text-red-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDeleting}
          >
            Eliminar
          </button>
        )}
      </main>
    </article>
  );
}
