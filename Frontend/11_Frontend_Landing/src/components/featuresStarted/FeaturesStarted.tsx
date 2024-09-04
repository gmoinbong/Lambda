import { FC } from 'react';
import styles from './FeaturesStarted.module.css';
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeaturesGetStarted: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    return (<>
        <div className={styles.container}>
            {isTablet ? <img className={styles.bg} src={'/assets/features/feature_bg.svg'} alt="background" /> : <img className={styles.bg} src={'/assets/features/bg_get_started_tablet.svg'} alt="background" />}

            <div className={styles.content}>
                <h2>Sounds easy? Supply chain transactions don’t have to be complicated</h2>
                <Button text="Get Started" className={styles.button} />
            </div>
        </div>
    </>
    );
};
