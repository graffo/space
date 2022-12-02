import banner from '../../assets/banner.png'
import styles from '../../pages/Home/Home.module.scss'
export default function Banner() {
    return (
        <div className={styles.principal__imagem} >
            <h2>A galeria mais completa do espaço</h2>
            <img src={banner} alt="A imagem da terra vista do espaço" />
        </div>
    )
}