import { FC } from 'react';
import styles from './FeatureSaveBlock.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeatureSaveBlock: FC<Props> = () => {
    const { isMobile } = useScreenDetector();

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Send invoices, save the trees</h1>
                <p>
                    Send invoices digitally, and track them all the way until they're paid. It's easier to reconcile and more organized than printouts. If they're overdue, automatically send a friendly reminder or two!
                </p>
            </div>
            <div className={styles.imageWrapper}>
                {isMobile ? <img src={'/assets/features/bg_save_mobile.svg'} alt="Send invoices, save the trees" className={styles.image} />
                    : <img src={'/assets/features/bg_save.svg'} alt="Send invoices, save the trees" className={styles.image} />}
            </div>
        </div>
    );
};
