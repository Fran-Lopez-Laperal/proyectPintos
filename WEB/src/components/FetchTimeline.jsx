import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
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

  const handleDeleteTimeline = (timelineId) => {
    deleteTimelineService(timelineId)
      .then(() => {
        setTimelineData((prevTimelineData) => prevTimelineData.filter((item) => item.id !== timelineId));
      })
      .catch((error) => {
        console.error('Error deleting timeline:', error);
      });
  };

  const handleEditTimeline = async (timelineId, newTitle, newText, newYear) => {
    try {
      await updateTimelineService(
        { title: newTitle, text: newText, year: newYear }, // Incluye el campo 'year' en el objeto de actualización
        timelineId
      );

      const updatedTimelineData = timelineData.map((timelineItem) => {
        if (timelineItem.id === timelineId) {
          return {
            ...timelineItem,
            title: newTitle,
            text: newText,
            year: newYear, // Actualiza el campo 'year'
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
    <div className="flex flex-col font-extrabold py-8">
      <h2 className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:pb-6">Timeline</h2>
      <main className="grid grid-col lg:grid-cols-2 gap-6 py-4 ">
        {timelineData.map((timelineItem) => (
          <Timeline
            key={timelineItem.id}
            image={timelineItem.image}
            title={timelineItem.title}
            text={timelineItem.text}
            year={timelineItem.year}
            onDelete={() => handleDeleteTimeline(timelineItem.id)}
            onEdit={(newTitle, newText, newYear) => handleEditTimeline(timelineItem.id, newTitle, newText, newYear)}
          />
        ))}
      </main>
    </div>
  );
}
