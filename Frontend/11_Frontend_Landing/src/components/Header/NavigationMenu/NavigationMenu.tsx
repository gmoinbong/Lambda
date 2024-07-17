import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Header.module.css'
interface Props {

}

export const NavigationMenu: FC<Props> = ({ }) => {
    return (
        <nav className={styles.navMenu}>
            <NavLink to="/" className={({ isActive }) => isActive ? styles.navItem + " " + styles.active : styles.navItem}>
                Home
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => isActive ? styles.navItem + " " + styles.active : styles.navItem}>
                Features
            </NavLink>
            <NavLink to="/company" className={({ isActive }) => isActive ? styles.navItem + " " + styles.active : styles.navItem}>
                Сompany
            </NavLink>
        </nav>
    )
}