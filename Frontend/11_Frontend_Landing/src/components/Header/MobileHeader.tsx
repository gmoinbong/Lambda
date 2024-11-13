import { FC, useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import LanguageSelector from './languageSelector/LanguageSelector';
import styles from './MobileHeader.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { Button } from '../Button/Button';
import { NavLink } from 'react-router-dom';

interface Props { }

export const MobileHeader: FC<Props> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return (
        <header className={styles.header}>
            <img src={'/assets/background/greyDiamond.png'} alt="grey diamond" className={styles.greyDiamondTop} />
            <div className={styles.headerTop}>
                <div className={styles.wrapper}>
                    <HeaderLogo />
                    <LanguageSelector />
                </div>
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <img src={isMenuOpen ? '/assets/close.svg' : '/assets/burger.svg'} className={isMenuOpen ? styles.burgerMenuClose : styles.burgerMenuOpen} alt="Menu" />
                </div>
            </div>
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
                <img src={'/assets/header/menuBg.svg'} className={styles.menuBg} alt="Menu" />
                <img src={'/assets/header/menuBg1.svg'} className={styles.menuBg1} alt="Menu" />
                <img src={'/assets/header/menuBgDots.svg'} className={styles.menuBgDots} alt="Menu" />
                <img src={'/assets/header/menuBgDots.svg'} className={styles.menuBgDots1} alt="Menu" />
                <NavigationMenu mobile />
                <div className={styles.socialWrapper}>
                    <div className={styles.socialMedia}>
                        <NavLink to="#"><img src={'/assets/social/linkedin.svg'} alt="LinkedIn" /></NavLink>
                        <NavLink to="#"><img src={'/assets/social/instagram.svg'} alt="Instagram" /></NavLink>
                    </div>
                    <div className={styles.appLinks}>
                        <NavLink to="#"><img src={'/assets/social/google-play.svg'} alt="Google Play" /></NavLink>
                        <NavLink to="#"><img src={'/assets/social/app.store.svg'} alt="App Store" /></NavLink>
                    </div>
                </div>
                <Button className={styles.ctaButton} text='Get Started' color='#FFFF' height='48px' width='188px' />
            </nav>
        </header>
    );
};
