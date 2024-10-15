import { FC } from 'react';
import styles from './CompanyCore.module.css';

interface Props { }

export const CompanyCore: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <h1>
                Our Core Commitments
            </h1>
            <div className={styles.content}>
                <div className={styles.item}>
                    <img src={'/assets/company/icon_pen.svg'} alt="Every pixel matters" className={styles.icon} />
                    <h3>Every pixel matters</h3>
                    <p>Biased towards perfection</p>
                </div>
                <div className={styles.item}>
                    <img src={'/assets/company/icon_chat.svg'} alt="Shut the fluff" className={styles.icon} />
                    <h3>Shut the fluff</h3>
                    <p>Clear and direct communication</p>
                </div>
                <div className={styles.item}>
                    <img src={'/assets/company/icon_rocket.svg'} alt="Break things fast" className={styles.icon} />
                    <h3>Break things fast</h3>
                    <p>Ownership with ruthless agility</p>
                </div>
            </div>
        </div>
    );
};
