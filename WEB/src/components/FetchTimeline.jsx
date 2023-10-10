import React, { useEffect, useState } from 'react';
import { deleteTimelineService, getTimelineService, updateTimelineService } from '../services/timelineService';
import { Timeline } from './Timeline';

export function FetchTimeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  getTimelineService()
      .then((data) => {
        setTimelineData(data);
    
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching timeline data:', error);
        setLoading(false);
      });
  }, []);

  console.log("Viene el timeline por aqui???",timelineData)

  const handleDeleteTimeline = (timelineId) => {
    deleteTimelineService(timelineId)
      .then(() => {
        setTimelineData((prevTimelineData) => prevTimelineData.filter((item) => item.id !== timelineId));
      })
      .catch((error) => {
        console.error('Error deleting timeline:', error);
      });
  };

  const handleEditTimeline = async (timelineId, newTitle, newText) => {
    try {
      await updateTimelineService({ title: newTitle, text: newText }, timelineId);

      const updatedTimelineData = timelineData.map((timelineItem) => {
        if (timelineItem.id === timelineId) {
          return {
            ...timelineItem,
            title: newTitle,
            text: newText,
          };
        }
        return timelineItem;
      });

      setTimelineData(updatedTimelineData);

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
        {timelineData.map((timelineItem) => (
          <Timeline
            key={timelineItem.id}
            image={timelineItem.image}
            title={timelineItem.title}
            text={timelineItem.text}
            year={timelineItem.year}
            onDelete={() => handleDeleteTimeline(timelineItem.id)}
            onEdit={(newTitle, newText) => handleEditTimeline(timelineItem.id, newTitle, newText)}
          />
        ))}
      </main>
    </div>
  );
}
