import  { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './Tabs.module.css';

interface Props { }

export const Tabs: FC<Props> = ({ }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleTabClick = (path: string) => {
        navigate(path);
    };

    return (
        <div className={styles.tabContainer}>
            <div
                className={`${styles.tab} ${location.pathname === '/privacy' ? styles.active : ''}`}
                onClick={() => handleTabClick('/privacy')}
            >
                Privacy Policy
            </div>
            <div
                className={`${styles.tab} ${location.pathname === '/terms' ? styles.active : ''}`}
                onClick={() => handleTabClick('/terms')}
            >
                Terms of Service
            </div>
        </div>
    );
};
