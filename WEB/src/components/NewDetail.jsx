import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getNewDetailService } from "../services"

export function NewDetail() {
    const [newsDetail, setNewsDetail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        getNewDetailService(id).then((detail) => {
            setNewsDetail(detail)
        })
    }, [id])

    console.log(newsDetail)

    if (!newsDetail) {
        return null
    }

    return (
        <>
            {newsDetail.map((item) => (
                <section className="flex flex-col m-6 mt-20">
                    <article className="flex flex-col justify-center items-center shadow-lg rounded-lg font-extrabold lg:mx-52">
                        <figure className="flex justify-center w-3/4">
                            <img className="rounded-lg"  src={`http://localhost:3000/public/${item.image}`} alt="" />
                        </figure>
                        <main className="flex flex-col gap-2 items-center p-4 ">
                            <p className="text-corporative-color2 text-center text-3xl lg:text-6xl lg:py-6">{item.title}</p>
                            <p className="text-sm text-justify lg:text-lg lg:px-48">
                                {item.text}
                            </p>
                        </main>
                    </article>
                    </section>
            ))}
            
        </>
    )
}