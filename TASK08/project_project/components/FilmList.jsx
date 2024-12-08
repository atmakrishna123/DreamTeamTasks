import React from 'react';
import FilmCard from './FilmCard';
import styles from './FilmList.module.css';
const FilmList = () => {
    const films = [
        {
            image: '/images/cosmopolis.jpg',
            views: '620K',
            likes: '98K',
            hearts: '271K',
        },
        {
            image: '/images/titanic.jpg',
            views: '540K',
            likes: '93K',
            hearts: '141K',
        },
        {
            image: '/images/Sherlock.jpg',
            views: '614K',
            likes: '1M',
            hearts: '990K',
        },
        {
            image: '/images/HP.jpg',
            views: '600K',
            likes: '990K',
            hearts: '900K',
        },
    ];
    return (
        <div className={styles.list}>
            {films.map((film, index) => (
                <FilmCard
                    key={index}
                    image={film.image}
                    views={film.views}
                    likes={film.likes}
                    hearts={film.hearts}
                />
            ))}
        </div>
    );
};
export default FilmList;
