import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export function PromoçaoImages() {

    const images = [
        "https://picsum.photos/1000/2000",
        "https://picsum.photos/2000/2000",
        "https://picsum.photos/1000/2000",
        "https://picsum.photos/1500/3000",
        "https://picsum.photos/2000/2000",
        "https://picsum.photos/2000/1500",
        "https://picsum.photos/2000/2000",
        "https://picsum.photos/1500/3000",
        "https://picsum.photos/2000/1000",
    ]

    return (
        <>
            <section className="p-5 h-auto">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
                    <Masonry columnsCount={5} gutter="10px">
                        {images.map((image, i) => (
                            <img
                            className="w-full block p-1"
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