import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteTimelineService, getTimelineService, updateTimelineService } from "../services/timelineService";
import { TimelineItem } from "./TimelineItem";
import { Link } from "react-router-dom";

export function FetchTimeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    getTimelineService()
      .then((data) => {
        const sortData = data.sort((a, b) => a.year - b.year);
        setTimelineData(sortData);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching timeline data:", error);
        setLoading(false);
      });
  }, []);

  const handleDeleteTimeline = (timelineId) => {
    deleteTimelineService(timelineId)
      .then(() => {
        setTimelineData((prevTimelineData) => prevTimelineData.filter((item) => item.id !== timelineId));
      })
      .catch((error) => {
        console.error("Error deleting timeline:", error);
      });
  };

  const handleEditTimeline = async (timelineId, newTitle, newText, newYear) => {
    try {
      await updateTimelineService(
        { title: newTitle, text: newText, year: newYear },
        timelineId
      );

      const updatedTimelineData = timelineData.map((timelineItem) => {
        if (timelineItem.id === timelineId) {
          return {
            ...timelineItem,
            title: newTitle,
            text: newText,
            year: newYear,
          };
        }
        return timelineItem;
      });
      updatedTimelineData.sort((a, b) => a.year - b.year);
      setTimelineData(updatedTimelineData);

      Swal.close();
    } catch (error) {
      console.error("Error al editar la noticia:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center flex-col font-extrabold py-8">
      <main className="w-full h-[437px]">
     
          <TimelineItem
            key={timelineData[currentIndex].id}
            image={timelineData[currentIndex].image}
            title={timelineData[currentIndex].title}
            text={timelineData[currentIndex].text}
            year={timelineData[currentIndex].year}
            onDelete={() => handleDeleteTimeline(timelineData[currentIndex].id)}
            onEdit={(newTitle, newText, newYear) =>
              handleEditTimeline(timelineData[currentIndex].id, newTitle, newText, newYear)
            }
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            timelineData={timelineData}
          />

      </main>
    </div>
  );
}
