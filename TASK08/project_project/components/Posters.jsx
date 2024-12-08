import React from 'react';
import styles from './Posters.module.css';
const Posters = () => {
    const posters = [
        { src: '/images/HarryPotterAndOrderOfPhoenix.jpg', alt: 'Harry Potter Poster' },
        { src: '/images/Inception.jpg', alt: 'Inception Poster' },
        { src: '/images/TheMatrix.jpg', alt: 'Matrix Poster' },
        { src: '/images/GoneGirl.jpg', alt: 'Gone Girl Poster' },
        { src: '/images/TheShawshankRedemption.jpg', alt: 'Shawshank Redemption Poster' },
        { src: '/images/TheConjuring2.jpg', alt: 'The Conjuring Poster' },
    ];
    return (
        <div className={styles.postersSection}>
            <h1 className={styles.postertitle}>
                The social network for film lovers. Also available on
            </h1>
            <div className={styles.posterContainer}>
                {posters.map((poster, index) => (
                    <div key={index} className={styles.posterMovie}>
                        <img
                            src={poster.src}
                            alt={poster.alt}
                            className={styles.posterImage}
                        />
                        <p className={styles.posterMovieTitle}>{poster.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Posters;
