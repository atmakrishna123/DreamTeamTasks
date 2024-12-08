import React from 'react';
import styles from './Letterboxd.module.css';
const Letterboxdfeatures = () => {
    const features = [
        {
            title: "Keep track of every film you've ever watched (or just start from the day you join)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
            ),
        },
        {
            title: "Show some love for your favorite films, lists and reviews with a 'like'",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M16.5,3C14.76,3,13.09,3.81,12,5.09C10.91,3.81,9.24,3,7.5,3C4.42,3,2,5.42,2,8.5c0,3.78,3.4,6.86,8.55,11.54L12,21.35l1.45-1.32C18.6,15.36,22,12.28,22,8.5C22,5.42,19.58,3,16.5,3z" />
                </svg>
            ),
        },
        {
            title: "Write and share reviews, and follow friends and other members to read theirs",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-5h4v2h-4zm0-6h4v4h-4z" />
                </svg>
            ),
        },
        {
            title: "Rate each film on a five-star scale (with halves) to record and share your reaction",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ),
        },
        {
            title: "Keep a diary of your film watching (and upgrade to Pro for comprehensive stats)",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M19 3h-4c-.55 0-1 .45-1 1v3h-4V4c0-.55-.45-1-1-1H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 13h-2v-2h2v2zm4-6H8V8h8v2z" />
                </svg>
            ),
        },
        {
            title: "Compile and share lists of films on any topic and keep a watchlist of films to see",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24px" height="24px">
                    <path d="M3 6H5V19H3V6M9 6H11V19H9V6M15 6H17V19H15V6M21 6H23V19H21V6Z" />
                </svg>
            ),
        },
    ];
    return (
        <div className={styles.featuresContainer}>
            {features.map((feature, index) => (
                <div className={styles.featureCard} key={index}>
                    <div className={styles.featureIcon}>{feature.icon}</div>
                    <p className={styles.featureTitle}>{feature.title}</p>
                </div>
            ))}
        </div>
    );
};
export default Letterboxdfeatures;
