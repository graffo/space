import { MdSearch } from "react-icons/md";
import logo from './logo.png'
import styles from './Header.module.scss'


export default function Header(){
    return (
        <header className={styles.header} >
            <h1>
                <img src={logo} alt="Spaces Logo" />
            </h1>
            
            <div className={styles.header__container}>
                <input className={styles.header__input} type="text" placeholder="O que você procura"/>
                <MdSearch className={styles.header__btn} size={20} alt="Buscar"/>
                
            </div>

        </header>
    )
}