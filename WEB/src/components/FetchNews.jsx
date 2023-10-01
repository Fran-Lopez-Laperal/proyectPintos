import { useEffect, useState } from "react"
import { getNewsService } from "../../service"
import { Home } from "../pages/Home"

export function FetchNews() {
    const [data, setData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getNewsService();
                setData(result)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()
    }, [])
console.log(data)

    return (
        <>
            <Home newsData={data}/>
        </>
    )
}