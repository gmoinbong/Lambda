import React, { FC, useState, useEffect } from 'react';
import HeaderLogo from './HeaderLogo';
import LanguageSelector from './languageSelector/LanguageSelector';
import styles from './MobileHeader.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { Button } from '../Button/Button';
import burger from '../../../public/assets/burger.svg';
import closeIcon from '../../../public/assets/close.svg';

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
            <div className={styles.headerTop}>
                <div className={styles.wrapper}>
                    <HeaderLogo />
                    <LanguageSelector />
                </div>
                <div className={styles.burgerMenu} onClick={toggleMenu}>
                    <img src={isMenuOpen ? closeIcon : burger} alt="Menu" />
                </div>
            </div>
            <nav className={`${styles.navMenu} ${isMenuOpen ? styles.navMenuOpen : ''}`}>
                <NavigationMenu mobile />
                <Button className={styles.ctaButton} text='Get Started' color='#FFFF' height='40px' width='129px' />
            </nav>
        </header>
    );
};
