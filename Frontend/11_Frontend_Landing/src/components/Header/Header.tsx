import React, { FC } from 'react'
import HeaderLogo from './HeaderLogo'
import LanguageSelector from './languageSelector/LanguageSelector'
import styles from './Header.module.css'
import { NavigationMenu } from './NavigationMenu/NavigationMenu'
import { Button } from '../Button/Button'

interface Props {
    buttonBackground?: string;
    color?: string;
}

export const Header: FC<Props> = ({ buttonBackground, color }) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft} >
                <HeaderLogo />
                <LanguageSelector />
            </div>
            <NavigationMenu />
            <Button className={styles.ctaButton} text='Get Started' bgColor={buttonBackground} color={color} height='40px' width='129px' />
        </header>
    )
}