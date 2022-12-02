import React from "react";
import open from "../open.png";
import like from "../favorito.png";

export default function Cards({ items, styles }) {
    return (
        <ul className={styles.galeria__cards}>
            {items.map((photo) => {
                return (
                    <li key={photo.id} className={styles.galeria__card}>

                        <img className={styles.galeria__imagem}
                            src={photo.imagem}
                            alt={photo.titulo}
                        />
                        <p className={styles.galeria__descricao}>{photo.titulo}</p>
                        <div>
                            <p>{photo.creditos}</p>
                            <span>
                                <img src={open} alt='ícone de coração para curtir' />
                                <img src={like} alt='ícone de coração para curtir' />
                            </span>
                        </div>
                    </li>
                )
            })}
        </ul>
    );
}