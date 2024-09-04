import { FC } from 'react';
import styles from './CompanyDoneBlock.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const CompanyDoneBlock: FC<Props> = () => {
    const { isTablet, isMobile } = useScreenDetector();

    const renderImages = () => {
        if (isMobile) {
            return (
                <>
                    <img src={'/assets/company/img_up_mobile.svg'} alt="image" className={styles.upperImage} />
                    <img src={'/assets/company/img_done_2.svg'} alt="image" className={`${styles.downImage} ${styles.downImage2}`} />
                    <img src={'/assets/company/img_done_1.svg'} alt="image" className={styles.downImage} />
                    <img src={'/assets/company/img_done_3.svg'} alt="image" className={`${styles.downImage} ${styles.downImage3}`} />
                </>
            );
        }
        return (
            <div className={styles.imageMobileGroup}>
                <div className={styles.upperImageGroup}>
                    <img src={'/assets/company/img_up_mobile.svg'} alt="image" className={styles.upperImage} />
                    <img src={'/assets/company/img_done_1.svg'} alt="image" className={`${styles.downImage} ${styles.downImage1}`} />
                </div>
                <div className={styles.downImageGroup}>
                    <img src={'/assets/company/img_done_2.svg'} alt="image" className={`${styles.downImage} ${styles.downImage2}`} />
                    <img src={'/assets/company/img_done_3.svg'} alt="image" className={`${styles.downImage} ${styles.downImage3}`} />
                </div>
            </div>
        );
    };

    const renderContent = () => (
        <div style={{ width: "100%" }}>
            <h2 className={styles.title}>What we’ve done</h2>
            <div className={styles.upperBlockWrapper}>
                <div className={styles.upperBlockContent}>
                    <div className={styles.textBlock}>
                        <h2>2021</h2>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.dot} />
                                Launch Tinvio Checkout ™ for on-platform payments, supplier web dashboard, and more
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.dot} />
                                Series A funding to launch embedded finance capabilities for our supply chains
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.dot} />
                                Expand into new verticals and markets. Close the year with 150 team members and 4000+ active businesses across the region
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ImageWrapper}>
                    {isTablet ? renderImages() : <img src={'/assets/company/img_done_block.svg'} alt="image" className={styles.upperImage} />}
                </div>
            </div>
            {!isTablet && (
                <div className={styles.downBlockWrapper}>
                    <img src={'/assets/company/img_done_1.svg'} alt="image" className={styles.downImage} />
                    <img src={'/assets/company/img_done_2.svg'} alt="image" className={`${styles.downImage} ${styles.downImage2}`} />
                    <img src={'/assets/company/img_done_3.svg'} alt="image" className={`${styles.downImage} ${styles.downImage3}`} />
                </div>
            )}
        </div>
    );

    return (
        <>
            {renderContent()}
        </>
    );
};
