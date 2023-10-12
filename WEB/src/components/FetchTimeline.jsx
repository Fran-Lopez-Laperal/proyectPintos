import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { deleteTimelineService, getTimelineService, updateTimelineService } from "../services/timelineService";
import { TimelineItem } from "./TimelineItem";
import { Link } from "react-router-dom";
import ArrowNextSVG from "../assets/svg/timelineArrowNext.svg"

export function FetchTimeline() {
  const [timelineData, setTimelineData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    getTimelineService()
      .then((data) => {
        const sortData = data.sort((a, b) => a.year - b.year)
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
        { title: newTitle, text: newText, year: newYear }, // Incluye el campo "year" en el objeto de actualización
        timelineId
      );

      const updatedTimelineData = timelineData.map((timelineItem) => {
        if (timelineItem.id === timelineId) {
          return {
            ...timelineItem,
            title: newTitle,
            text: newText,
            year: newYear, // Actualiza el campo "year"
          };
        }
        return timelineItem;
      });

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
    <div className="flex items-center flex-col font-extrabold py-8 ">
      <h2 className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:pb-6">Timeline</h2>
      <main className="  w-[320px] h-[437px] ">
        <TimelineItem
          key={timelineData[currentIndex].id}
          image={timelineData[currentIndex].image}
          title={timelineData[currentIndex].title}
          text={timelineData[currentIndex].text}
          year={timelineData[currentIndex].year}
          onDelete={() => handleDeleteTimeline(timelineData[currentIndex].id)}
          onEdit={(newTitle, newText, newYear) => handleEditTimeline(timelineData[currentIndex].id, newTitle, newText, newYear)}
        />
        <div className="flex justify-between px-2">
          {
            currentIndex > 0 && (
              <div>
                <Link

                  onClick={() => setCurrentIndex(currentIndex - 1)}
                >
                  <div>
                    <div className="relative left-1 top-5">{timelineData[currentIndex - 1].year}</div>
                    <div className="flex items-center rotate-180">
                      <img className="" src={ArrowNextSVG} alt="" />
                      <div className="border border-none bg-corporative-color2 w-[70px] h-[3px] -ml-[4.3px]"></div>
                    </div>
                  </div>

                </Link>
              </div> // Renderizar el primer enlace solo si currentIndex no está en la primera posición

            )
          }
          {

            currentIndex < timelineData.length - 1 && (
              <div className="fixed right-44">
                <Link
                  disabled={currentIndex === timelineData.length - 1} // Desactivar el segundo enlace cuando estás en la última posición
                  onClick={() => setCurrentIndex(currentIndex + 1)}
                >
                  <div>
                    <div className="relative top-5 left-12">{timelineData[currentIndex + 1].year}</div>
                    <div className="flex items-center">
                      <img className="" src={ArrowNextSVG} alt="" />
                      <div className="border border-none bg-corporative-color2 w-[70px] h-[3px] -ml-[4.3px]"></div>
                    </div>
                  </div>

                </Link>
              </div>

            )
          }



        </div>

      </main>
    </div>
  );
}

// Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam inventore ipsam quod dolore labore ipsum perferendis a, consequatur dolor atque!