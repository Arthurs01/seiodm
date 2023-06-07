import Link from 'next/link'
import styles from './navigation.module.css'
import Image from 'next/image'
import logo from '../public/logo/logo.png'

export default function Navigation() {
    return (
        <div className={styles.navigation}>
           
           
           
            <div className={styles.logo}>
                <a href='/'>
            <Image src={logo} width={200} height={200}priority='true' alt='Logo empresa' />
            </a>
            </div>


            

            <nav className={styles.nav}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="#nosotros">Nosotros</a></li>
                   
             
                    <li><a href="#servicios">Servicios</a></li>
                    <li><a href="#contacto">Contácto</a></li>
                </ul>
            </nav>
        </div>

    )
}