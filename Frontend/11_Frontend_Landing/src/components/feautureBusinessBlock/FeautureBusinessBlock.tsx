import { FC } from 'react';
import styles from './FeautureBusinessBlock.module.css';

interface Props { }

export const FeautureBusinessBlock: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <img src={'/assets/features/img_business.svg'} alt="business example" className={styles.image} />
            <div className={styles.textContainer}>
                <img src={'/assets/features/stars_up.svg'} alt="stars" className={styles.starsUp} />
                <h2>It's your business. Run it like a rockstar</h2>
                <img src={'/assets/features/stars_down.svg'} alt="stars" className={styles.starsDown} />
            </div>
        </div>
    );
}
