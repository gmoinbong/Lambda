import  { FC } from 'react';
import styles from './CompanyInfo.module.css';

interface Props { }

export const CompanyInfo: FC<Props> = ({ }) => {
    return (
        <div className={styles.block}>
            <div className={styles.infoItem + ' ' + styles.infoItem1}>
                <div className={styles.infoText}>
                    <p className={styles.value}>250<span>+</span></p>
                    <p className={styles.valueInfo}>Team Members</p>
                </div>
            </div>
            <div className={styles.infoItem + ' ' + styles.infoItem2}>
                <div className={styles.infoText}>
                    <p className={styles.value}>10<span>+</span></p>
                    <p className={styles.valueInfo}>Nationalities</p>
                </div>
            </div>
            <div className={styles.infoItem + ' ' + styles.infoItem3}>
                <div className={styles.infoText}>
                    <p className={styles.value}>5000<span>+</span></p>
                    <p className={styles.valueInfo}>Businesses</p>
                </div>
            </div>
            <div className={styles.infoItem + ' ' + styles.infoItem4}>
                <div className={styles.infoText}>
                    <p className={styles.value}>$500<span>M</span></p>
                    <p className={styles.valueInfo}>Transactions</p>
                </div>
            </div>
        </div>
    );
};
