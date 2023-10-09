import { useState } from 'react';
import Swal from 'sweetalert2';

export function Noticia({ image, title, text, onDelete, onEdit }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleting(true);

    onDelete(() => {
      setIsDeleting(false);
    });
  };

  const handleEditClick = () => {
    Swal.fire({
      title: 'Editar Noticia',
      html: `
        <input id="title" class="swal2-input" placeholder="Título" value="${title}">
        <input id="text" class="swal2-input" placeholder="Texto" value="${text}">
      `,
      confirmButtonText: 'Guardar',
      preConfirm: () => {
        const newTitle = Swal.getPopup().querySelector('#title').value;
        const newText = Swal.getPopup().querySelector('#text').value;

        if (onEdit) {
          onEdit(newTitle, newText);
        }
      },
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
        <div className="mt-2 flex space-x-2">
          <button
            onClick={handleEditClick}
            className={`text-blue-500 hover:text-blue-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDeleting}
          >
            Editar
          </button>
          <button
            onClick={handleDeleteClick}
            className={`text-red-500 hover:text-red-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDeleting}
          >
            Eliminar
          </button>
        </div>
      </main>
    </article>
  );
}
