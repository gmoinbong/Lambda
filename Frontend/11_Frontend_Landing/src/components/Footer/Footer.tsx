import React, { FC } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/tinvio-logo.svg';
import linkedin from '../../assets/social/linkedin.svg';
import instagram from '../../assets/social/instagram.svg';
import googlePlay from '../../assets/social/google-play.svg';
import appStore from '../../assets/social/app.store.svg';

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Tinvio Logo" />
                    </div>
                    <nav className={styles.nav}>
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Company</a>
                        <a href="#">Login</a>
                    </nav>
                </div>
                <div>
                    <div className={styles.socialMedia}>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                    <div className={styles.appLinks}>
                        <a href="#"><img src={googlePlay} alt="Google Play" /></a>
                        <a href="#"><img src={appStore} alt="App Store" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Tinvio™ 2020. All Rights Reserved</p>
                <nav className={styles.footerNav}>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
