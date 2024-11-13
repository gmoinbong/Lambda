import { FC } from 'react';
import styles from './HappyBz.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HappyBz: FC<Props> = () => {
    const { isMobile, isTablet } = useScreenDetector();

    const imageSrc = isMobile
        ? '/assets/happyBzMobile.svg'
        : isTablet
            ? '/assets/happyBzTablet.svg'
            : '/assets/happybz.svg';

    return (
        <div className={styles.container}>
            <h3 className={styles.title}>We’ll put a smile on your supply chain</h3>
            <img src={imageSrc} alt="Happy BZ" className={styles.happyBz} />
            <div className={styles.leftBg}>
                <img src={'/assets/background/rectangleGroup.png'} className={styles.greyDots} alt="Grey Dots" />
                <img src={'/assets/background/greyDiamondbg1.svg'} className={styles.greyBg} alt="Grey Diamond" />
                <img src={'/assets/background/greyDiamondbg1.svg'} className={styles.greyBg1} alt="Grey Diamond" />
            </div>
            <div className={styles.rightBg}>
                <img src={'/assets/background/rectangleGroup.png'} className={styles.greyDots1} alt="Grey Dots" />
                <img src={'/assets/background/greyDiamondbg1.svg'} className={styles.greyBg2} alt="Grey Diamond" />
            </div>
            <img src={'/assets/background/dotsBg.svg'} className={styles.dotsDown} alt="Grey Diamond" />
        </div>
    );
};
