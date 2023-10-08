// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

// export function PromoçaoImages({ imoData }) {
//   console.log(imoData)
//   return (
//     <>
//       <section className="h-auto">
//         <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
//           <Masonry columnsCount={5} gutter="">
//             {imoData.map(({img,text, id}) => (
//               <div>
//                 <img className="border-r-2 border-b-2 py-[11px] px-[11px] border-corporative-color2" key={id} src={img} alt="" />
//                 <p>{text}</p>
//               </div>

//             ))}
//           </Masonry>
//         </ResponsiveMasonry>
//       </section>
//     </>
//   );
// }

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';

export function PromoçaoImages() {
  const images = [home1, home2, home3, home4, home1, home2, home3, home4, home1, home1];
  return (
    <>
      <section className="h-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry columnsCount={2} gutter="10px">
            {images.map((image, i) => (
              <img className="" key={i} src={image} alt="" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
}
