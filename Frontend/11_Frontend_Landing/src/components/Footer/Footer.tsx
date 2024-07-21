import React, { FC } from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/tinvio-logo.svg';
import linkedin from '../../assets/social/linkedin.svg';
import instagram from '../../assets/social/instagram.svg';
import googlePlay from '../../assets/social/google-play.svg';
import appStore from '../../assets/social/app.store.svg';
import barrier from '../../assets/barrier.svg'

const Footer: FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <img className={styles.logoImg} src={logo} alt="Tinvio Logo" />
                        <img className={styles.barrier} src={barrier} alt="" />
                    </div>
                    <nav className={styles.nav}>
                        <a href="#">Home</a>
                        <a href="#">Features</a>
                        <a href="#">Company</a>
                        <a href="#">Login</a>
                    </nav>
                </div>
                <div className={styles.socialWrapper}>
                    <div className={styles.socialMedia}>
                        <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
                        <a href="#"><img src={instagram} alt="Instagram" /></a>
                    </div>
                    <img className={styles.barrier} src={barrier} alt="" />
                    <div className={styles.appLinks}>
                        <a href="#"><img src={googlePlay} alt="Google Play" /></a>
                        <a href="#"><img src={appStore} alt="App Store" /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Tinvio™ 2020. All Rights Reserved</p>
                <img className={styles.barrierBot} src={barrier} alt="" />
                <nav className={styles.footerNav}>
                    <a href="#">Privacy Policy</a>
                    <img className={styles.barrierBot} src={barrier} alt="" />
                    <a href="#">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
