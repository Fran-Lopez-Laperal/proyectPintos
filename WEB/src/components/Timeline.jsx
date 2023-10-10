import { useState } from 'react';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export function Timeline({ image, title, text, year, onDelete, onEdit }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        setIsDeleting(true);
        onDelete();
      }
    });
  };

  const handleEditClick = () => {
    Swal.fire({
      title: 'Editar Noticia',
      html: `
      <input id="title" class="swal2-input" style="border: 1px solid #ccc; border-radius: 5px; background-color: #f5f5f5;" placeholder="Título" value="${title}">
      <textarea id="text" class="swal2-textarea" style="border: 1px solid #ccc; border-radius: 5px; background-color: #f5f5f5; resize: none;" placeholder="Texto">${text}</textarea>
      <input id="year" class="swal2-input" style="border: 1px solid #ccc; border-radius: 5px; background-color: #f5f5f5;" placeholder="Año" value="${year}">
      `,
      showCancelButton: true,
      confirmButtonText: 'Guardar',
      confirmButtonColor: '#1272AB',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const newTitle = Swal.getPopup().querySelector('#title').value;
        const newText = Swal.getPopup().querySelector('#text').value;
        const newYear = Swal.getPopup().querySelector('#year').value;

        onEdit(newTitle, newText, newYear);
      },
    });
  };

  return (
    <article className="flex flex-col justify-center rounded-lg border">
      <figure className="flex justify-center">
        <img className="rounded-t-lg h-auto w-full" src={`http://localhost:3000/public/${image}`} alt="" />
      </figure>
      <main className="flex flex-col items-center px-2 py-2 bg-green-600">
        <div className="flex flex-col justify-center items-center w-60">
          <p className="text-sm text-center max-w-full truncate font-extrabold text-sky-600 lg:text-2xl" style={{ textOverflow: 'ellipsis' }}>
            {title}
          </p>
          <p className="text-container truncate max-w-full text-justify font-normal lg:text-lg bg-red-400">{text}</p>
          <p className="text-container truncate max-w-full text-justify font-normal lg:text-lg bg-red-400">{year}</p>
        </div>
        <div className="mt-2 flex space-x-2">
          <button
            onClick={handleEditClick}
            className={`text-blue-500 hover:text-blue-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDeleting}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button
            onClick={handleDeleteClick}
            className={`text-red-500 hover:text-red-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isDeleting}
          >
            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#d33333' }} />
          </button>
        </div>
      </main>
    </article>
  );
}
