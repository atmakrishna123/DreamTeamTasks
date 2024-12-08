import React from 'react';
import styles from './about.module.css';
const About = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.linksContainer}>
                <a href="/about" className={styles.link}>About</a>
                <a href="/pro" className={styles.link}>Pro</a>
                <a href="/news" className={styles.link}>News</a>
                <a href="/apps" className={styles.link}>Apps</a>
                <a href="/podcast" className={styles.link}>Podcast</a>
                <a href="/year-in-review" className={styles.link}>Year in Review</a>
                <a href="/help" className={styles.link}>Help</a>
                <a href="/terms" className={styles.link}>Terms</a>
                <a href="/api" className={styles.link}>API</a>
                <a href="/contact" className={styles.link}>Contact</a>
            </div>
            <div className={styles.socialContainer}>
                <p className={styles.para}>© Letterboxd Inspired Website</p>
                <div className={styles.socialIcons}>
                    <a href="https://www.instagram.com/accounts/login/" className={styles.icon}>
                        <img src="/images/Insta.jpg" alt="Instagram" className={styles.iconImage} width={200} height={200}/>
                    </a>
                    <a href="https://www.threads.net/" className={styles.icon}>
                        <img src="/images/threads.jpg" alt="Threads" className={styles.iconImage} width={200} height={200}/>
                    </a>
                    <a href="https://web.whatsapp.com/" className={styles.icon}>
                        <img src="/images/Whatsapp.jpg" alt="WhatsApp" className={styles.iconImage} width={300} height={200}/>
                    </a>
                    <a href="https://www.facebook.com/login/" className={styles.icon}>
                        <img src="/images/Facebook.jpg" alt="Facebook" className={styles.iconImage} width={200} height={200}/>
                    </a>
                    <a href="https://www.tiktok.com/login" className={styles.icon}>
                        <img src="/images/Tiktok.jpg" alt="TikTok" className={styles.iconImage} width={200} height={200}/>
                    </a>
                    <a href="https://www.youtube.com/login" className={styles.icon}>
                        <img src="/images/Youtube.jpg" alt="YouTube" className={styles.iconImage} width={200} height={200}/>
                    </a>
                </div>
            </div>
        </footer>
    );
};
export default About;
