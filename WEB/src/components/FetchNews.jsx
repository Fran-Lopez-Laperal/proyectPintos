import React, { useEffect, useState } from 'react';
import { getNewsService, deleteNewsService, updateNewsService } from '../services';
import { Noticia } from './Noticia';

export function FetchNews() {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNewsService()
      .then((data) => {
        setNewsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
        setLoading(false);
      });
  }, []);

  const handleDeleteNews = (newsId) => {
    deleteNewsService(newsId)
      .then(() => {
        setNewsData((prevNewsData) => prevNewsData.filter((item) => item.id !== newsId));
      })
      .catch((error) => {
        console.error('Error deleting news:', error);
      });
  };

  const handleEditNews = async (newsId, newTitle, newText) => {
    try {
      await updateNewsService({ title: newTitle, text: newText }, newsId);

      const updatedNewsData = newsData.map((newsItem) => {
        if (newsItem.id === newsId) {
          return {
            ...newsItem,
            title: newTitle,
            text: newText,
          };
        }
        return newsItem;
      });

      setNewsData(updatedNewsData);

      Swal.close();
    } catch (error) {
      console.error('Error al editar la noticia:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col font-extrabold py-8 lg:flex">
      <h2 className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:pb-6">Noticias</h2>
      <main className="grid grid-cols-2 gap-6 py-4 lg:grid-cols-4 lg:gap-12 lg:px-36">
        {newsData.map((newsItem) => (
          <Noticia
            key={newsItem.id}
            image={newsItem.image}
            title={newsItem.title}
            text={newsItem.text}
            onDelete={() => handleDeleteNews(newsItem.id)}
            onEdit={(newTitle, newText) => handleEditNews(newsItem.id, newTitle, newText)}
          />
        ))}
      </main>
    </div>
  );
}
