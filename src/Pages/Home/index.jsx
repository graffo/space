import Header from '../../components/Header'
import Nav from '../../components/Nav'
import styles from './Home.modules.scss'
import bannerImg from '../../assets/banner.png'

export default function Home(){
    return(
        <>
        <Header />
        <main>
            <section className={styles.principal}>
                <Nav />
                <div>
                    <h2>A galeria mais alta do espaço</h2>
                    <img src={bannerImg} alt="A imagem da terra vista do espaço" />
                </div>
            </section>
        </main>
        
        </>
    )
}