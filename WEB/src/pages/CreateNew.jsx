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

  const handleIntroductionChange = (event) => {
    setIntroduction(event.target.value);
  };

  const handleTextChange = (event) => {
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

      await createNewService(formDataNews, token);

      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-4 items-center m-10 py-10 px-6 lg:px-48 border rounded-md">
        <h1 className="text-corporative-color2 text-center text-2xl uppercase w-full font-bold lg:text-4xl">Crear nueva noticia</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:w-80">
          <label htmlFor="title">Título</label>
          <input className="border px-3" type="text" id="title" value={title} onChange={handleTitleChange} required />

          <label htmlFor="introduction">Introducción</label>
          <textarea className="border px-3" id="introduction" value={introduction} onChange={handleIntroductionChange} required />

          <label htmlFor="text">Texto</label>
          <textarea className="border px-3" id="text" value={text} onChange={handleTextChange} required />

          <section className="flex flex-col justify-center">
            <button
              className="border p-1 mt-2 text-white bg-corporative-color2 rounded hover:bg-corporative-color transition-all duration-500"
              type="submit"
            >
              Crear noticia
            </button>
            {error && <p className="text-red-600 text-left text-xs font-bold p-1">*{error}</p>}
          </section>
        </form>
      </section>
    </div>
  );
}
