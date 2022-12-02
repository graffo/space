import populars from './popular.json'
import styles from './Popular.module.scss'

export default function Popular() {
    return (
        <aside className={styles.populares}>
            <h2>Populalres</h2>
            <ul className={styles.populares__imagens}>
                {populars.map((popular) => {
                    return (
                        <li key={popular.id} >
                            <img src={popular.path} alt={popular.alt}></img>
                        </li>
                    )
                })}

            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}