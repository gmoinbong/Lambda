import { FC, useContext, useEffect } from 'react';
import { Logout } from '../auth/Logout/Logout';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { AuthStatus } from '../auth/authService';
import styles from './AccountPage.module.css';

interface AccountPageProps {}

export const AccountPage: FC<AccountPageProps> = ({ }) => {
    const { authStatus } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (authStatus !== AuthStatus.SignedIn) {
            navigate('/login');
        }
    }, [authStatus, navigate]);

    return (
        <div className={styles.accountPage}>
            <h1>Account Page</h1>
            <Logout />
        </div>
    );
};
