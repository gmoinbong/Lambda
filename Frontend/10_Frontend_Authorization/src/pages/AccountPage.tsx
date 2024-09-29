import { FC, useContext, useEffect } from 'react';
import { Logout } from '../auth/Logout/Logout';
import { AuthContext } from '../auth/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { AuthStatus } from '../auth/authService';
import styles from './AccountPage.module.css';

export const AccountPage: FC = () => {
    const navigate = useNavigate();
    const { authStatus } = useContext(AuthContext);
    const userEmail = localStorage.getItem("userEmail");
    useEffect(() => {
        if (authStatus === AuthStatus.Loading) {
            return;
        }
        if (authStatus !== AuthStatus.SignedIn) {
            navigate('/login');
        }
    }, [authStatus, navigate]);

    useEffect(() => {
        console.log("User email updated:", userEmail);
    }, [userEmail]);

    return (
        <div className={styles.accountPage}>
            <h1>Account Page</h1>
            {userEmail && <p>Email: {userEmail}</p>}
            <Logout />
        </div>
    );
};
