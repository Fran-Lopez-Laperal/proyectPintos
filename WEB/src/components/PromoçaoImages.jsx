import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export function PromoçaoImages() {
  const images = [
    'https://picsum.photos/1000/2000',
    'https://picsum.photos/2000/2000',
    'https://picsum.photos/1000/2000',
    'https://picsum.photos/1500/3000',
    'https://picsum.photos/2000/2000',
    'https://picsum.photos/2000/1500',
    'https://picsum.photos/2000/2000',
    'https://picsum.photos/1500/3000',
    'https://picsum.photos/2000/1000',
  ];

  return (
    <>
      <section className="h-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry columnsCount={5} gutter="">
            {images.map((image, i) => (
              <img className="border-r-2 border-b-2 py-[11px]  px-[11px] border-corporative-color2" key={i} src={image} alt="" />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
}
