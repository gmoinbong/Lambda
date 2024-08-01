import React, { FC } from 'react';
import styles from './FeautureBusinessBlock.module.css';
import image from '../../../public/assets/features/img_business.svg';
import starsUp from '../../../public/assets/features/stars_up.svg';
import starsDown from '../../../public/assets/features/stars_down.svg';

interface Props { }

export const FeautureBusinessBlock: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <img src={image} alt="business example" className={styles.image} />
            <div className={styles.textContainer}>
                <img src={starsUp} alt="stars" className={styles.starsUp} />
                <h2>It's your business. Run it like a rockstar</h2>
                <img src={starsDown} alt="stars" className={styles.starsDown} />
            </div>
        </div>
    );
}
