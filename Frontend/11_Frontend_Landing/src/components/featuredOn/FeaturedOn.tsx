import { FC } from 'react';
import styles from './FeaturedOn.module.css';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Featured On
                <img src={'/assets/background/rectangleGroup.png'} alt="confetti" className={styles.greyBg} />
            </h2>
            <div className={styles.line}></div>
            <div className={styles.grid}>
                <img src={'/assets/text/text.svg'} alt="TechCrunch" className={styles.text} />
                <img src={'/assets/text/text_1.svg'} alt="TechInAsia" className={styles.text} />
                <img src={'/assets/text/text_2.svg'} alt="PYMNTS" className={styles.text} />
                <img src={'/assets/text/text_3.svg'} alt="VentureBeat" className={styles.text} />
            </div>
            <img src={'/assets/confetti-group.svg'} alt="confetti" className={styles.confetti} />
        </div>
    );
};
