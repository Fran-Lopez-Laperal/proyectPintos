import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/AuthContext';
import ArrowNextSVG from '../assets/svg/button_arrow.svg'
import ArrowDeskSVG from '../assets/svg/arrow_large_stick.svg'
import './TimeLineItem.css'



export function TimelineItem({ image, title, text, year, onDelete, onEdit, currentIndex, setCurrentIndex, timelineData }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const { token } = useContext(AuthContext);



  const [arrow, setArrowWidth] = useState(false)
  useEffect(() => {

    const responsiveMovil = () => window.innerWidth < 459 ? setArrowWidth(true) : setArrowWidth(false)
    responsiveMovil()
    window.addEventListener('resize', () => responsiveMovil())

  }, [])


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
    <article className="flex flex-col items-center lg:w-full">
      <main className="lg:w-full">
        <div className="flex flex-col items-center lg:flex lg:flex-row lg:items-start lg:justify- lg:px-24 mt-10" >
          <section className='w-auto  lg:w-96 '>
            <figure className="mb-10 shadow-img w-full">
              <img className=" w-[230px] h-[200px] sm:h-[380px] sm:w-[380px] lg:max-w-md lg:h-[350px] object-cover" src={`http://localhost:3000/public/${image}`} alt="" />
            </figure>
          </section>

          <div className="flex  flex-col justify-center items-center ">
            <p className="uppercase text-sm text-center mb-5 font-extrabold text-corporative-color2 sm:text-2xl lg:text-2xl" >
              {title}
            </p>
            <div className='h-56 px-10 sm:px-20 sm:h-40 '>
              <p className='uppercase font-normal sm:text-xl text-justify text-container'>{text}</p>
            </div>
          </div>
        </div>

        <div className="w-full">

            <div className="w-full h-full flex items-center justify-center lg:flex lg:justify-around lg:items-center mt-10 lg:mt-14">

              <div className="flex flex-col h-full justify-center">
                <div className="h-5 flex justify-start lg:px-16 text-4xl">
                  <p className="year text-white  text-xl sm:text-3xl px-5">{timelineData[currentIndex - 1] && timelineData[currentIndex - 1].year}</p>
                </div>
                <div className="h-16">
                  <button onClick={handlePreviousClick} disabled={currentIndex === 0}>
                    <img className="w-40 sm:w-[500px] lg:w-[600px] rotate-180" src={ArrowDeskSVG} alt="" />
                  </button>
                </div>
              </div>
              <div className="text-2xl m-1 sm:m-3 sm:mt-0 -mt-5 h-full lg:mt-4 sm:text-5xl lg:text-5xl  text-corporative-color2">
                {year}
              </div>

              <div className="flex flex-col h-full">
                <div className="h-5 flex justify-end lg:px-16 text-4xl">
                  <p className="year text-white text-xl sm:text-3xl px-5">{timelineData[currentIndex + 1] && timelineData[currentIndex + 1].year}</p>
                </div>
                <div className="h-16">
                  <button onClick={handleNextClick} disabled={currentIndex === timelineData.length - 1}>
                    <img className="w-40 sm:w-[500px] lg:w-[600px]" src={ArrowDeskSVG} alt="" />
                  </button>
                </div>
              </div>

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
      </main>
    </article>
  );
}
