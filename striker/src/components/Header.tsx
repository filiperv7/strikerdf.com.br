import {
  faFacebook,
  faInstagram,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export function Header() {
  return (
    <header
      className={`fixed top-0 flex items-center justify-between max-w-3/4 w-[98%]
        max-w-5xl items-center justify-between py-3 px-6 mt-10 mx-4 z-50
        border-[1.5px] border-gray-500 border-opacity-30 rounded-3xl backdrop-blur-[2px] max-[668px]:hidden
        `}
    >
      <nav className="flex-1 px-2">
        <ul
          className={`flex items-center justify-between max-w-[60%] gap-4 font-semibold`}
        >
          <li>
            <Link href={''}>Início</Link>
          </li>
          <li>
            <Link href={''}>Restaurante</Link>
          </li>
          <li>
            <Link href={''}>HappyHour</Link>
          </li>
          <li>
            <Link href={''}>Eventos</Link>
          </li>
          <li>
            <Link href={''}>Contatos</Link>
          </li>
        </ul>
      </nav>

      <section className="px-2 max-w-[20%] flex gap-4 items-center justify-end">
        <Link
          href={
            'https://api.whatsapp.com/send?phone=+55061992003588&text=Ol%C3%A1,venho%20do%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20boliche.'
          }
        >
          <FontAwesomeIcon icon={faWhatsapp} className="w-6" />
        </Link>
        <Link href={'https://www.instagram.com/strikerbsb/'}>
          <FontAwesomeIcon icon={faInstagram} className="w-6" />
        </Link>
        <Link href={'https://www.facebook.com/StrikerDF/?locale=pt_BR'}>
          <FontAwesomeIcon icon={faFacebook} className="w-6" />
        </Link>
      </section>
    </header>
  )
}
