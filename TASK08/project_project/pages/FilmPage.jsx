import React from 'react';
import Navbar from '../components/Navbar';
import FilmCard from '../components/FilmCard';
import FilmList from '../components/FilmList';
import styles from './FilmPage.module.css';
const HomePage = () => {
    return (
        <div>
        <Navbar/>;
        <div className={styles.container}>
            <section className={styles.filmListSection}>
                <FilmList />
            </section>
        </div>
        </div>
    );
};
export default HomePage;
