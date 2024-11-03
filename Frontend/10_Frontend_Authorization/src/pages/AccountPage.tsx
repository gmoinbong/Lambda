import React, { useEffect, useState } from 'react';
import { getAccount, AccountData } from '../auth/AuthService/AuthService';
import styles from './AccountPage.module.css';
import { Logout } from '../auth/Logout/Logout';

const AccountPage: React.FC = () => {
    const [userData, setUserData] = useState<AccountData | null>(null);
    const [email, setEmail] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAccount();
                const storedEmail = localStorage.getItem('userEmail');
                setUserData(data);
                setEmail(storedEmail);
            } catch (error: any) {
                console.error("Get account error:", error);
                setErrorMessage(error.message || "Failed to load account data");
            }
        };
        fetchData();
    }, []);

    if (errorMessage) {
        return <p style={{ color: 'red' }}>{errorMessage}</p>;
    }

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <div className={styles.accountPage}>
            <h1>Account Page</h1>
            <p>Email: {email || userData.email}</p>
            <Logout />
        </div>
    );
};

export default AccountPage;
