import React, { FC } from 'react';
import styles from './FeatureSaveBlock.module.css';
import imageBg from '../../../public/assets/features/bg_save.svg';
import imageBgMobile from '../../../public/assets/features/bg_save_mobile.svg'
import { useScreenDetector } from '../../hooks/useScreenDetector';
import bgStars from '../../../public/assets/features/stars_get_started.svg'

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
                {isMobile ? <img src={imageBgMobile} alt="Send invoices, save the trees" className={styles.image} />
                    : <img src={imageBg} alt="Send invoices, save the trees" className={styles.image} />}
            </div>
        </div>
    );
};
