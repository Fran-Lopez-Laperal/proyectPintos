import maps from '../assets/maps.png'


export function Contacto() {
    return (
        <>
            <section>
                <div className="bg-sky-600 w-auto h-44 flex justify-center items-center text-white font-bold text-4xl lg:h-[500px] lg:text-[100px]">
                    CONTACTOS
                </div>
            </section>

            <section className="w-auto flex justify-center lg:mt-20 lg:mb-20">
                <section className="flex flex-col items-center justify-center w-4/5 text-start lg:flex lg:flex-row lg:w-full  lg:justify-around">

                    <article className="flex flex-col items-center mt-10 text-lg">
                        <p className="border-2 border-sky-600 w-10 h-10"></p>
                        <p className="">Rua Fernando da Silva </p>
                        <p>Nogueira Pinto</p>
                        <p>  187 4585-645 Recarei-Paredes</p>
                    </article>

                    <article className="flex flex-col items-center mt-10 text-lg">
                        <p className="border-2 border-sky-600 w-10 h-10"></p>
                        <p>geral@spintos.pt</p>
                    </article>

                    <article className="flex flex-col items-center mt-10 text-xl">
                        <p className="border-2 border-sky-600 w-10 h-10"></p>
                        <p>+ 351 22 415 7710</p>
                        <p>Chamada para a rede fixa nacional</p>
                    </article>

                </section>

            </section>
            <section className='mb-20'>
                <img src={maps} alt={maps} />
            </section>
        </>
    )
}
