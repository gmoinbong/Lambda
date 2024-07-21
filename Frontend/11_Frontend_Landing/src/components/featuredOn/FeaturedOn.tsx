import React, { FC } from 'react';
import styles from './FeaturedOn.module.css';
import featuredOn from '../../assets/background/featuredOn.png';
import confetti from '../../assets/confetti-group.svg';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <img src={featuredOn} alt="feature on" className={styles.image} />
            <img src={confetti} alt="confetti" className={styles.confetti} />
        </div>
    );
};
