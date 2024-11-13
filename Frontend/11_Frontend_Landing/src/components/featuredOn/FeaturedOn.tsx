import { FC } from 'react';
import styles from './FeaturedOn.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    const { isMobile } = useScreenDetector()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Featured On
                <img src={'/assets/background/rectangleGroup.png'} alt="dots" className={styles.greyBg} />
            </h2>
            <div className={styles.line}></div>
            <div className={styles.grid}>
                <img src={'/assets/text/text.svg'} alt="TechCrunch" className={styles.text + " " + styles.text1} />
                <img src={'/assets/text/text_1.svg'} alt="TechInAsia" className={styles.text + " " + styles.text2} />
                <img src={'/assets/text/text_2.svg'} alt="PYMNTS" className={styles.text + " " + styles.text3} />
                <img src={'/assets/text/text_3.svg'} alt="VentureBeat" className={styles.text + " " + styles.text4} />
            </div>
            {isMobile && <img src={'/assets/confetti-group_mobile.svg'} alt="confetti" className={styles.confettiMobile} />}
            <img src={'/assets/confetti-group.svg'} alt="confetti" className={styles.confetti} />
            <img className={styles.greyDots} src={'./assets/background/dotsBg.svg'} alt="grey dots" />

        </div>
    );
};
