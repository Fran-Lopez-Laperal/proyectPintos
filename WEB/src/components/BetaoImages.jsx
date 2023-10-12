import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import data from '../assets/docs/ImobiliariaDocs.json';

const PUBLIC_URL = 'http://127.0.0.1:5173';

export function BetaoImages() {
  return (
    <section className="h-auto">
      <ResponsiveMasonry columnsCountBreakPoints={{ 900: 2 }}>
        <Masonry columnsCount={2} gutter="10px">
          {data.map((item) => (
            <div key={item.id} className="masonry-item">
              <img src={`${PUBLIC_URL}/public/home/${item.img}`} alt={item.title} />
              {/* <p>{item.text}</p> */}
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </section>
  );
}
