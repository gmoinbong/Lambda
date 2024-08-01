import React, { FC } from 'react';
import styles from './HappyBz.module.css';
import happyBz from '../../../public/assets/happybz.png';
import happyBzMobile from '../../../public/assets/happy_bz_mobile.svg';
import greyDiamond from '../../../public/assets/background/greyDiamond.png';
import greyBg from '../../../public/assets/background/rectangleGroup.png'
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HappyBz: FC<Props> = () => {
    const { isTablet } = useScreenDetector()

    return (
        <div className={styles.container}>
            {isTablet ? <img src={happyBzMobile} alt="Happy BZ" className={styles.happyBz} /> : <img src={happyBz} alt="Happy BZ" className={styles.happyBz} />}
            <img src={greyDiamond} className={styles.greyDiamond} alt="Grey Diamond" />
            <img src={greyDiamond} className={styles.greyDiamond2} alt="Grey Diamond" />
            <img src={greyBg} className={styles.greyBg} alt="Grey Diamond" />
            <img src={greyBg} className={styles.greyBg1} alt="Grey Diamond" />
            <img src={greyBg} className={styles.greyBg2} alt="Grey Diamond" />
        </div>
    );
};
