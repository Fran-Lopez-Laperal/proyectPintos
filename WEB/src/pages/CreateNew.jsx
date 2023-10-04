import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { createNewService } from '../services';

export function CreateNew() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [text, setText] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    setIntroduction(event.target.value);
  };

  const handleIntroductionChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataNews = {
        title,
        introduction,
        text,
      };

      await createNewService({
        formDataNews,
        token,
      });

      // Navegar a la página de historias después de crear la noticia
      navigate('/historia');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <section className="p-4">
      <div className="flex flex-col justify-center items-center pt-8 bg-corporative-color3">
        <h1 className="text-corporative-color2 text-center text-2xl uppercase w-full font-bold pb-8 lg:text-5xl">Crea tu noticia</h1>
        <form onSubmit={handleSubmit} className="flex flex-col justify-center w-auto gap-4">
          <div className="flex flex-col gap-2">
            <label className="lg:w-28 lg:text-xl" htmlFor="title">
              Título
            </label>
            <input className="w-96 h-10 p-3" type="text" id="title" value={title} onChange={handleTitleChange} required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="w-28 lg:text-xl" htmlFor="introduction">
              Introducción
            </label>
            <textarea className="w-96 h-20 p-3" id="introduction" value={introduction} onChange={handleIntroductionChange} required />
          </div>
          <div className="flex flex-col gap-2">
            <label className="w-28 lg:text-xl" htmlFor="text">
              Texto
            </label>
            <textarea className="w-96 h-20 p-3" id="text" value={text} onChange={handleTextChange} required />
          </div>
          <div className="flex justify-center h-12 mt-10 mb-12 font-bold text-lg text-white bg-corporative-color2 hover:bg-corporative-color transition-all duration-500">
            <button type="submit">Crear noticia</button>
          </div>
        </form>
        {error && <p>{error}</p>}
      </div>
    </section>
  );
}
