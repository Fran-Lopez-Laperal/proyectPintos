import home1 from '../assets/home/home1.jpeg';
import home2 from '../assets/home/home2.jpeg';
import home3 from '../assets/home/home3.jpeg';
import home4 from '../assets/home/home4.jpeg';
import home5 from '../assets/home/home5.jpeg';

export function ResponsivePromoçaoImages() {
    return (
        <>
            <section>
                <article className="flex justify-evenly p-1 ">
                    <img className="w-[155px] object-cover h-[149px]  bg-gray-300 border-r-2 border-corporative-color2" src={home1} alt="" />
                    <img className="w-[155px] h-[149px] object-cover  bg-gray-300" src={home2} alt="" />

                </article>
                <div className='m-10 mt-0 border-b-2 border-gray-400 h-1'></div>

                <article className="p-1 -mt-10">

                    <img className="w-full h-[149px] object-cover bg-gray-300" src={home3} alt="" />

                </article>

                <article className="p-1">
                    <div className="ml-1 border-b-4 border-corporative-color2 w-[230px] mb-1"></div>
                    <img className="w-[240px] h-[346px] object-cover bg-gray-300 border-r-[10px] border-corporative-color2" src={home4} alt="" />
                    <div className="border-t-[3px] w-[230px] object-cover border-corporative-color2 mt-1"></div>
                </article>

                <article className="p-1">

                    <img className="w-full h-[149px] object-cover bg-gray-300" src={home5} alt="" />
                </article>

            </section>
        </>
    )
}