import { Link } from "react-router-dom"
import logo from '../assets/logo.png'

export function NavDesktop() {



    const links = [
        { to: '/', text: 'GRUPO PINTOS' },
        { to: '/', text: 'ÁREAS DE NEGOCIO' },
        { to: '/', text: 'PORTFÓLIO' },
        { to: '/', text: 'NOTÍCIAS' },
        { to: '/', text: 'CONTACTO' }

    ];


    console.log(links)


    return (
        <>
            <section className='flex bg-transparent w-full text-black h-20'>
                <img className='w-96' src={logo} alt={logo} />
                <ul className='flex h-full w-full'>

                    {links.map((link, index) => (
                        <Link
                            key={index}
                            className='flex justify-center items-center w-full hover:bg-corporateColorHover transition duration-300  cursor-pointer'
                            to={link.to} style={{ textDecoration: 'none' }}>
                            <li>
                                <p className='font-medium' style={{ backgroundColor: 'none' }}>{link.text}</p>
                            </li>
                        </Link>
                    ))}

                </ul>
            </section>
        </>
    )
}
