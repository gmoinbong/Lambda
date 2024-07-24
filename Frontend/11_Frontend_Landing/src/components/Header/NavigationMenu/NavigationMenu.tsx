import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header.module.css';

interface Props {
    mobile?: boolean;
}

export const NavigationMenu: FC<Props> = ({ mobile = false }) => {
    return (
        <nav className={mobile ? styles.navMenuMobile : styles.navMenu}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                Home
            </NavLink>
            <NavLink to="/features" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                Features
            </NavLink>
            <NavLink to="/company" className={({ isActive }) => isActive ? `${styles.navItem} ${styles.active}` : styles.navItem}>
                Company
            </NavLink>
        </nav>
    );
};
