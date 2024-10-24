import { FC } from 'react';
import styles from './FeaturesSupercharge.module.css';
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

const FeaturesSupercharge: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    return (
        <div className={styles.container}>
            {isTablet ? <img className={styles.bg} src={'/assets/features/supercharge_bg_tablet.svg'} alt="background" /> : <img className={styles.bg} src={'/assets/features/supercharge_bg.svg'} alt="background" />}
            <div className={styles.content}>
                <h3>ARE YOU READY?</h3>
                <h2>Supercharge your business, <br /> the Tinvio way</h2>
                <Button text="Get Started" className={styles.button} />
            </div>
        </div>
    );
};

export default FeaturesSupercharge;
