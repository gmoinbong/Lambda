import { FC, useEffect, useState } from 'react';
import HeaderLogo from './HeaderLogo';
import LanguageSelector from './languageSelector/LanguageSelector';
import styles from './Header.module.css';
import { NavigationMenu } from './NavigationMenu/NavigationMenu';
import { Button } from '../Button/Button';

interface Props {
    buttonBackground?: string;
    color?: string;
}

export const Header: FC<Props> = ({ buttonBackground, color }) => {
    const [isBlured, setIsBlured] = useState(false);

    const handleScroll = () => {
        const scrollThreshold = 5;
        if (window.scrollY > scrollThreshold) {
            setIsBlured(true);
        } else {
            setIsBlured(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`${styles.header} ${isBlured ? styles.headerBlured : ''}`}>
            <div className={styles.headerLeft}>
                <HeaderLogo />
                <LanguageSelector />
            </div>
            <NavigationMenu />
            <Button
                className={styles.ctaButton}
                text="Get Started"
                bgColor={isBlured ? "#FF474D" : buttonBackground}
                color={color}

            />
        </header>
    );
};
