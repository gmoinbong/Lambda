import { FC } from 'react';
import styles from './Footer.module.css';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={'/assets/tinvio-logo.svg'} alt="Tinvio Logo" />
                        <img className={styles.barrier} src={'/assets/barrier.svg'} alt="" />
                    </div>
                    <nav className={styles.nav}>
                        <a href="/">Home</a>
                        <a href="/features">Features</a>
                        <a href="/company">Company</a>
                        <a href="/login">Login</a>
                    </nav>
                </div>
                <div className={styles.socialWrapper}>
                    <div className={styles.socialMedia}>
                        <a href="#"><img src={'/assets/social/linkedin.svg'} alt="LinkedIn" /></a>
                        <a href="#"><img src={'/assets/social/instagram.svg'} alt="Instagram" /></a>
                    </div>
                    <img className={styles.barrier} src={'/assets/barrier.svg'} alt="" />
                    <div className={styles.appLinks}>
                        <a href="#"><img src={'/assets/social/google-play.svg'} alt="Google Play" /></a>
                        <a href="#"><img src={'/assets/social/app.store.svg'} alt="App Store" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Tinvio™ 2020. All Rights Reserved</p>
                <img className={styles.barrierBot} src={'/assets/barrier.svg'} alt="" />
                <nav className={styles.footerNav}>
                    <a href="/privacy">Privacy Policy</a>
                    <img className={styles.barrierBot} src={'/assets/barrier.svg'} alt="" />
                    <a href="/terms">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
