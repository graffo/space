import React from 'react';
import styles from './Gallery.module.scss'
import Tags from "../Tags";
import photos from './gallery.json'
import Cards from './Cards';
import { useState } from 'react';

export default function Gallery() {
    const [items, setItems] = useState(photos);
    const tags = [...new Set(photos.map((valor) => valor.tag))]
    const filterPhotos = (tag) => {
        const newPhotos = photos.filter((photo) =>{
            return photo.tag === tag;
        })

        setItems(newPhotos);
    }
    return (
        <section className={styles.galeria}>
            <h2>Navegue pela galeria</h2>
            <Tags tags={tags} filterPhotos={filterPhotos} setItems={setItems}/>
            <Cards items={items} styles={styles} />
        </section>
    )
}