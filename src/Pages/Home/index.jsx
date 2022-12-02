import Banner from 'components/Banner';
import Footer from 'components/Footer';
import Gallery from 'components/Gallery';
import Header from 'components/Header'
import Nav from 'components/Nav'
import Popular from 'components/Popular';
import styles from './Home.module.scss'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Nav />
                    <Banner />
                </section>
            </main>
            <div className={styles.galeria}>
                <Gallery/>
                <Popular />
            </div>
            <Footer />

        </>
    );
}