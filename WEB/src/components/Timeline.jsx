import React, { useState } from 'react';
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';
import home6 from '../assets/home/home6.jpeg';

export function Timeline () {
  const images = [home1, home2, home3, home4, home5, home6]; // Agrega todas tus imágenes aquí

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button onClick={prevImage}>Anterior</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage}>Siguiente</button>
    </div>
  );
};


