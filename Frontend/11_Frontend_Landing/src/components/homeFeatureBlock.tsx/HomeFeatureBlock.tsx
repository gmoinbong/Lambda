import { FC, useState } from 'react';
import styles from './HomeFeatureBlock.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import { RombFeature } from '../RombFeature/RombFeature';

interface Props { }

export const HomeFeatureBlock: FC<Props> = () => {
    const { isTablet, isDesktop } = useScreenDetector()

    const [selectedTab, setSelectedTab] = useState<string>('Chats');

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className={styles.featureBlock}>
            <div className={styles.textContent}>
                <div className={styles.lineAndText}>
                    <h2>Smarter supply chain transactions.  <span> More buddy</span> <svg style={{ verticalAlign: 'middle', marginRight: '10px' }} width="2" height="40" viewBox="0 0 2 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="2" height="40" fill="#212121" />
                    </svg>
                    </h2>
                </div>
                <div className={styles.buttonGroup}>
                    <button
                        className={`${styles.featureButton} ${selectedTab === 'Chats' ? styles.selected : ''}`}
                        onClick={() => handleTabClick('Chats')}>
                        Chats
                    </button>
                    <button
                        className={`${styles.featureButton} ${selectedTab === 'Orders' ? styles.selected : ''}`}
                        onClick={() => handleTabClick('Orders')}>
                        Orders
                    </button>
                    <button
                        className={`${styles.featureButton} ${selectedTab === 'Payments' ? styles.selected : ''}`}
                        onClick={() => handleTabClick('Payments')}>
                        Payments
                    </button>
                </div>
                <ul className={styles.featureList}>
                    <li>
                        <span className={styles.diamond}></span>
                        Create chats with any business (even if they’re not on Tinvio)
                    </li>
                    <li>
                        <span className={styles.diamond}></span>
                        Fully integrated with your favorite chat apps
                    </li>
                    <li>
                        <span className={styles.diamond}></span>
                        Real-time messages and alerts
                    </li>
                </ul>
                <button className={styles.moreFeaturesButton}>More Features</button>
            </div>
            <div className={styles.imageContainer}>
                {isTablet ? (
                    <RombFeature />
                ) : (
                    <img
                        className={styles.featureImage}
                        src={
                            isDesktop
                                ? '/assets/background/homeFeatureMobile.svg'
                                : '/assets/background/homeFeature.png'
                        }
                        alt="Feature example"
                    />
                )}

            </div>
            <img src={'/assets/background/greyDiamond.png'} className={styles.greyBg} alt="grey diamond" />
        </div>
    );
};
