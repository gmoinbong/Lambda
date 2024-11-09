import { FC } from 'react';
import styles from './RombFeature.module.css';

interface Props { }

export const RombFeature: FC<Props> = () => {
    return (
        <div className={styles.RombFeature}>
            <img src={'/assets/features/bgRomb.svg'} className={styles.bgRomb} alt="Background Romb" />
            <img src={'/assets/features/bgRomb1.svg'} className={styles.bgRomb1} alt="Inner Romb" />
            <img src={'/assets/features/bgPhone.svg'} className={styles.bgPhone} alt="Inner phone" />
            <img src={'/assets/features/bgPhone2.svg'} className={styles.bgPhone1} alt="Inner phone" />
            <img src={'/assets/features/bgRombStars.svg'} className={styles.bgRombStars} alt="stars" />
            <img src={'/assets/features/bgDots.svg'} className={styles.bgDots} alt="dots" />
        </div>
    );
};
