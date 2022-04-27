/**Componente: Barra de Navegacion */
/* Se importa el elemento de Imagen y el de Links para realizar
rutas sencillas de manera SPA (Single Page Aplication) */
import Image from 'next/image';
import Link from 'next/link';

//Se importa el modulo css de la Navbar
import styles from '../styles/Navbar.module.css'

//Se importa el logo
import Logo from '../public/AstroLogo.svg';

export default function Navbar(){
    return (
        <nav id="navbar" className={styles.Navbar}> 

            {/** Imagen Principal */}
            <div className={styles.imgContainer}>
                <Image className={styles.logo} src={Logo} width="300" height="300"/>
            </div>

            {/** Menu */}
            <div className={styles.containerLinks}>

                {/** Api */}
                <Link id="link-container" className={styles.linkBox} href="/api">
                    <div id='link-container-child' className={styles.links}>Consumo de API</div>
                </Link>

                {/** Generador de carta */}
                <Link id="link-container" className={styles.linkBox} href="/chart">
                    <div id='link-container-child' className={styles.links}>Generador de Carta</div>
                </Link>
                
            </div>

        </nav>
    )
}

