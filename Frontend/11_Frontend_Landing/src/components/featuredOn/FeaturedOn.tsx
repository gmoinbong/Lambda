import React, { FC } from 'react';
import styles from './FeaturedOn.module.css';
import text from '../../assets/text/text.svg';
import text1 from '../../assets/text/text_1.svg';
import text2 from '../../assets/text/text_2.svg';
import text3 from '../../assets/text/text_3.svg';
import confetti from '../../assets/confetti-group.svg';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Featured On</h2>
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
