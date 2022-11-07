import React from 'react'
import styles from './Menu.modules.scss'
import home from '../../assets/icones/home-ativo.png'
import curtidas from '../../assets/icones/mais-curtidas-inativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import supreenda from '../../assets/icones/surpreenda-me-inativo.png'

export default function Nav() {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <a href='/'>
                        <img src={home} alt="Ínicio" />
                        Início
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href='/'>
                        <img src={curtidas} alt="Mais curtidas" />
                        Mais curtidas
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href='/'>
                        <img src={vistas} alt="Mais vistas" />
                        Mais vistas
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href='/'>
                        <img src={novas} alt="Mais novas" />
                        Mais novas
                    </a>
                </li>
                <li className={styles.menu__item}>
                    <a href='/'>
                        <img src={supreenda} alt="Surpreenda-me" />
                        Surpreenda-me
                    </a>
                </li>

            </ul>
        </nav>
    )
}