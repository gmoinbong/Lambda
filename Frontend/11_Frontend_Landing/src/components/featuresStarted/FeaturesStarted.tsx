import React, { FC } from 'react';
import styles from './FeaturesStarted.module.css';
import bg from '../../assets/features/feature_bg.svg';
import bgTablet from '../../assets/features/bg_get_started_tablet.svg'
import Button from '../Button/Button';
import bgStart from '../../assets/features/stars_get_started.svg'
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeaturesGetStarted: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    return (
        <div className={styles.container}>
            {isTablet ? <img className={styles.bg} src={bg} alt="background" /> : <img className={styles.bg} src={bgTablet} alt="background" />}

            <div className={styles.content}>
                <h2>Sounds easy? Supply chain transactions don’t have to be complicated</h2>
                <Button text="Get Started" className={styles.button} />
            </div>
            <img src={bgStart} alt="stars" className={styles.stars} />
        </div>
    );
};
