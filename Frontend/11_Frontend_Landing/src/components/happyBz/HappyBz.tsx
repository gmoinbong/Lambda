import { FC } from 'react';
import styles from './HappyBz.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HappyBz: FC<Props> = () => {
    const { isTablet } = useScreenDetector()

    return (
        <div className={styles.container}>
            {isTablet ? <img src={'/assets/happy_bz_mobile.svg'} alt="Happy BZ" className={styles.happyBz} /> : <img src={'/assets/happybz.png'} alt="Happy BZ" className={styles.happyBz} />}
            <img src={'/assets/background/greyDiamond.png'} className={styles.greyDiamond} alt="Grey Diamond" />
            <img src={'/assets/background/greyDiamond.png'} className={styles.greyDiamond2} alt="Grey Diamond" />
            <img src={'/assets/background/rectangleGroup.png'} className={styles.greyBg} alt="Grey Diamond" />
            <img src={'/assets/background/rectangleGroup.png'} className={styles.greyBg1} alt="Grey Diamond" />
            <img src={'/assets/background/rectangleGroup.png'} className={styles.greyBg2} alt="Grey Diamond" />
        </div>
    );
};
