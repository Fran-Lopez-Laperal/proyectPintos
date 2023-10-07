import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';

export function ResponsivePromoçaoImages() {

    const images = [
       home1,
       home2,
       home3,
       home4
    ]

    return (
        <>
            <section className="p-5 h-auto">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
                    <Masonry columnsCount={5} gutter="10px">
                        {images.map((image, i) => (
                            <img
                                className="h-[300px] w-full block p-1 shadow-lg shadow-gray"
                                key={i}
                                src={image}
                                alt="" />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </section>

        </>

    )
}