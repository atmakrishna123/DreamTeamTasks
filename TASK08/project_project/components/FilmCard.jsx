import React from 'react';
import styles from './FilmCard.module.css';
const FilmCard = ({ image, title, views, likes, hearts }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.image} />
            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <div className={styles.stats}>
                    <span className={styles.views}>📗 {views}</span>
                    <span className={styles.likes}>💜 {likes}</span>
                    <span className={styles.hearts}>💛 {hearts}</span>
                </div>
            </div>
        </div>
    );
};
export default FilmCard;
