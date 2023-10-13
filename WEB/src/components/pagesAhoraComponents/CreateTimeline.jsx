import { useState, useContext, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import dragDrop from '../assets/svg/dragdrop.svg';

import { AuthContext } from '../context/AuthContext';

import { CountdownTimer } from '../components/CountdownTimer';
import { DataInput } from '../components/DataInput';
import { createTimelineService } from '../services/timelineService';
import { NumberInput } from '../components/NumberInput';

export function CreateTimeline() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState('');
  const [timelineCreated, setTimelineCreated] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataNews = {
        title,
        year,
        text,
        image,
        token,
      };

      await createTimelineService(formDataNews);

      setTimelineCreated(true);
    } catch (error) {
      setError(error.message);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleTimeout = () => {
    navigate('/');
  };

  return (
    <div className="flex justify-center">
      <section className="flex flex-col gap-4 items-center m-10 py-10 px-6 lg:px-48 border rounded-md">
        {timelineCreated ? (
          <div>
            <p className="text-green-600 text-center text-xl font-bold">Timeline creado con éxito.</p>
            <CountdownTimer initialCountdown={5} onTimeout={handleTimeout} />
          </div>
        ) : (
          <main className="flex flex-col justify-center items-center">
            <h1 className="text-corporative-color2 text-center text-2xl uppercase w-full font-bold lg:text-4xl pb-3">Crear nuevo timeline</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:w-80">
              <DataInput label="Título" value={title} onChange={handleTitleChange} />
              <NumberInput type="number" label="Ano" value={year} onChange={handleYearChange} />
              <DataInput label="Texto" type="text" value={text} onChange={handleTextChange} />
              <label htmlFor="image"></label>
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="flex flex-col justify-center items-center border cursor-pointer p-2">
                  <p className="font-semibold">Arrastre la imagen</p>
                  <img className="h-8 m-2" src={dragDrop} alt="" />
                  <p className="font-semibold">
                    o haga click <span className="underline">aquí</span>
                  </p>
                  {selectedFile && <p className="text-gray-400 text-center">{selectedFile.name}</p>}
                </div>
              </div>

              <section className="flex flex-col justify-center">
                <button
                  className="border p-1 mt-2 text-white bg-corporative-color2 rounded hover:bg-corporative-color transition-all duration-500"
                  type="submit"
                >
                  Crear timeline
                </button>
                {error && <p className="text-red-600 text-left text-xs font-bold p-1">*{error}</p>}
              </section>
            </form>
          </main>
        )}
      </section>
    </div>
  );
}
