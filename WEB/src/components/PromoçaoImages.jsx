import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

export function PromoçaoImages({ imoData }) {
  console.log(imoData)
  return (
    <>
      <section className="h-auto">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 900: 2 }}>
          <Masonry columnsCount={5} gutter="">
            {imoData.map(({img,text, id}) => (
              <div>
                <img className="border-r-2 border-b-2 py-[11px] px-[11px] border-corporative-color2" key={id} src={img} alt="" />
                <p>{text}</p>
              </div>

            ))}
          </Masonry>
        </ResponsiveMasonry>
      </section>
    </>
  );
}

