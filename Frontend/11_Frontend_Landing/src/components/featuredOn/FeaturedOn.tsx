import React, { FC } from 'react';
import styles from './FeaturedOn.module.css';
import text from '../../../public/assets/text/text.svg';
import text1 from '../../../public/assets/text/text_1.svg';
import text2 from '../../../public/assets/text/text_2.svg';
import text3 from '../../../public/assets/text/text_3.svg';
import confetti from '../../../public/assets/confetti-group.svg';
import greyBg from '../../../public/assets/background/rectangleGroup.png';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Featured On
                <img src={greyBg} alt="confetti" className={styles.greyBg} />
            </h2>
            <div className={styles.line}></div>
            <div className={styles.grid}>
                <img src={text} alt="TechCrunch" className={styles.text} />
                <img src={text1} alt="TechInAsia" className={styles.text} />
                <img src={text2} alt="PYMNTS" className={styles.text} />
                <img src={text3} alt="VentureBeat" className={styles.text} />
            </div>
            <img src={confetti} alt="confetti" className={styles.confetti} />
        </div>
    );
};
