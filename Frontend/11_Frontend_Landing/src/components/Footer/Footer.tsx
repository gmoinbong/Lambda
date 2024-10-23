import { FC } from 'react';
import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

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
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/features">Features</NavLink>
                        <NavLink to="/company">Company</NavLink>
                        <NavLink to="/#">Login</NavLink>
                    </nav>
                </div>
                <div className={styles.socialWrapper}>
                    <div className={styles.socialMedia}>
                        <NavLink to="#"><img src={'/assets/social/linkedin.svg'} alt="LinkedIn" /></NavLink>
                        <NavLink to="#"><img src={'/assets/social/instagram.svg'} alt="Instagram" /></NavLink>
                    </div>
                    <img className={styles.barrier} src={'/assets/barrier.svg'} alt="" />
                    <div className={styles.appLinks}>
                        <NavLink to="#"><img src={'/assets/social/google-play.svg'} alt="Google Play" /></NavLink>
                        <NavLink to="#"><img src={'/assets/social/app.store.svg'} alt="App Store" /></NavLink>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>© Tinvio™ 2020. All Rights Reserved</p>
                <img className={styles.barrierBot} src={'/assets/barrier.svg'} alt="" />
                <nav className={styles.footerNav}>
                    <NavLink to="/privacy">Privacy Policy</NavLink>
                    <img className={styles.barrierBot} src={'/assets/barrier.svg'} alt="" />
                    <NavLink to="/terms">Terms of Service</NavLink>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
