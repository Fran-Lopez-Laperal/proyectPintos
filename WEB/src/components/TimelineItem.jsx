import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';
import ArrowNextSVG from '../assets/svg/button_arrow.svg'

export function TimelineItem({ image, title, text, year, onDelete, onEdit, currentIndex, setCurrentIndex, timelineData }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { token } = useContext(AuthContext);

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

  const handleNextClick = () => {
    if (currentIndex < timelineData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePreviousClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <article className="flex flex-col items-center">
      <main className="">
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-center" >
          <section className='w-auto mt-10 lg:w-96'>
            <figure className="mb-10">
              <img className="shadow-img w-[230px] h-[150px] lg:max-w-md lg:h-[350px] object-cover" src={`http://localhost:3000/public/${image}`} alt="" />
            </figure>
          </section>

          <div className="flex flex-col justify-center items-center px-1  ">
            <p className="uppercase text-sm text-center mb-5 font-extrabold text-corporative-color2 lg:text-2xl" >
              {title}
            </p>
            <div className='w-96 h-72 '>
              <p className='text-justify text-container'>{text}</p>
            </div>
          </div>
        </div>



        <div className="w-full">


          <div className="w-full flex items-center justify-between px-2">
            <div>
              {currentIndex > 0 && (
                <>
                  <div className="absolute -mt-3 left-3 fill-black text-white text-2xl ">{timelineData[currentIndex - 1].year}</div>
                  <button onClick={handlePreviousClick}>

                    <div>

                      <div className="flex rotate-180 items-center">
                        <img className="absolute w-20 h-14 -left-14" src={ArrowNextSVG} alt="" />
                        <div className="relative border border-none  bg-corporative-color2 w-[100px] h-[3px]"></div>
                      </div>
                    </div>
                  </button>
                </>

              )}
            </div>

            <div className='min-h-[35px]'>
              <p className="absolute text-container text-corporative-color2 left-[138px] -mt-1 text-justify font-bold text-5xl">{year}</p>
            </div>

            <div>
              {currentIndex < timelineData.length - 1 && (
                <>
                  <div className="absolute -mt-3 text-white right-3 text-2xl">{timelineData[currentIndex + 1].year}</div>
                  <button onClick={handleNextClick}>
                    <div>

                      <div className="flex items-center">
                        <img className="absolute w-20 h-14 right-20" src={ArrowNextSVG} alt="" />
                        <div className="relative border border-none bg-corporative-color2 w-[100px] h-[3px]"></div>
                      </div>
                    </div>
                  </button>
                </>

              )}
            </div>
          </div>


          {token && (
            <div className="">
              <button
                onClick={handleEditClick}
                className={`text-blue-500 hover-text-blue-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isDeleting}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </button>
              <button
                onClick={handleDeleteClick}
                className={`text-red-500 hover-text-red-700 ${isDeleting ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={isDeleting}
              >
                <FontAwesomeIcon icon={faTrashCan} style={{ color: '#d33333' }} />
              </button>
            </div>
          )}
        </div>

      </main>
    </article>
  );
}
