import { FC } from 'react';
import styles from './Logout.module.css';
import { useNavigate } from 'react-router-dom';
import { logout } from '../AuthService/AuthService';

interface LogoutProps { }

export const Logout: FC<LogoutProps> = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); 
        navigate('/login'); 
    };

    return (
        <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
    );
};
