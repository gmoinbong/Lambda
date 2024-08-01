import  { FC } from 'react';
import styles from './Footer.module.css';
import logo from '../../../public/assets/tinvio-logo.svg';
import linkedin from '../../../public/assets/social/linkedin.svg';
import instagram from '../../../public/assets/social/instagram.svg';
import googlePlay from '../../../public/assets/social/google-play.svg';
import appStore from '../../../public/assets/social/app.store.svg';
import barrier from '../../../public/assets/barrier.svg'

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
                        <a href="/">Home</a>
                        <a href="/features">Features</a>
                        <a href="/company">Company</a>
                        <a href="/login">Login</a>
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
                    <a href="/privacy">Privacy Policy</a>
                    <img className={styles.barrierBot} src={barrier} alt="" />
                    <a href="/terms">Terms of Service</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
