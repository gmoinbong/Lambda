import { FC, useState } from 'react';
import styles from './HomeFeatureBlock.module.css';
import featureImage from '../../../public/assets/background/homeFeature.png';
import greyBg from '../../../public/assets/background/greyDiamond.png';

interface Props { }

export const HomeFeatureBlock: FC<Props> = () => {
    const [selectedTab, setSelectedTab] = useState<string>('Chats');

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <div className={styles.featureBlock}>
            <div className={styles.textContent}>
                <h2>Smarter supply chain <br /> transactions. <span>More buddy!</span></h2>
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
                <img className={styles.featureImage} src={featureImage} alt="Feature example" />
            </div>
            <img src={greyBg} className={styles.greyBg} alt="grey diamond" />
        </div>
    );
};
