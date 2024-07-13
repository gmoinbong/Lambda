import { FC, useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import styles from './Logout.module.css';

interface LogoutProps { }

export const Logout: FC<LogoutProps> = ({ }) => {
    const { signOut } = useContext(AuthContext);

    const handleLogout = () => {
        signOut && signOut();
    };

    return (
        <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    );
};
