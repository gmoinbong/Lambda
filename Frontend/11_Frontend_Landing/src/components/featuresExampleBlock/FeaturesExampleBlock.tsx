import React, { FC } from 'react';
import styles from './FeaturesExampleBlock.module.css';
import bg from '../../assets/features/bg2.svg';
import bgTablet from '../../assets/features/bg_tablet.svg';
import bgMobile from '../../assets/features/bg_mobile.svg';
import bgStars from '../../assets/features/bg_stars.svg';
import bgStarsTablet from '../../assets/features/bg_stars_tablet.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeaturesExampleBlock: FC<Props> = () => {
    const { isMobile, isTablet, isDesktop } = useScreenDetector();

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Supercharge your business with Tinvio</h2>
            <div className={styles.features}>
                {isMobile ? (
                    <img src={bgMobile} alt="bg" className={styles.bgImage} />
                ) : isTablet ? (
                    <img src={bgTablet} alt="bg" className={styles.bgImage} />
                ) : (
                    <img src={bg} alt="bg" className={styles.bgImage} />
                )}
                <div className={styles.textOverlay}>
                    <ul className={styles.featuresList}>
                        <li className={`${styles.featureItem} ${styles.li1}`}>
                            <h3>Chats</h3>
                            <p>Send messages, invoices, and payment links directly to customers (even if they’re not on Tinvio)</p>
                        </li>
                        <li className={`${styles.featureItem} ${styles.li2}`}>
                            <h3>Orders</h3>
                            <p>Receive, manage, and track all your orders in a format designed to prevent mistakes</p>
                        </li>
                        <li className={`${styles.featureItem} ${styles.li3}`}>
                            <h3>Payments</h3>
                            <p>Collect payments and reconcile them against invoices, without checking bank statements</p>
                        </li>
                        {isMobile ? (
                            <li className={`${styles.featureItem} ${styles.li4}`}>
                                <h3>And more in one <br /> dashboard...</h3>
                            </li>
                        ) : (
                            <li className={`${styles.featureItem} ${styles.li4}`}>
                                <h3>And more in one dashboard...</h3>
                            </li>
                        )}
                    </ul>
                </div>
                {isMobile ? null : isDesktop ? (
                    <img src={bgStarsTablet} alt="stars background" className={styles.bgStarsTablet} />
                ) : (
                    <img src={bgStars} alt="stars background" className={styles.bgStars} />
                )}
            </div>
        </div>
    );
};