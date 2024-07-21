import React, { FC } from 'react';
import styles from './HappyBz.module.css';
import happyBz from '../../assets/happybz.png';
import greyDiamond from '../../assets/background/greyDiamond.png';
import greyBg from '../../assets/background/rectangleGroup.png'

interface Props { }

export const HappyBz: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <img src={happyBz} alt="Happy BZ" className={styles.happyBz} />
            <img src={greyDiamond} className={styles.greyDiamond} alt="Grey Diamond" />
            <img src={greyDiamond} className={styles.greyDiamond2} alt="Grey Diamond" />
            <img src={greyBg} className={styles.greyBg} alt="Grey Diamond" />
            <img src={greyBg} className={styles.greyBg1} alt="Grey Diamond" />
        </div>
    );
};
