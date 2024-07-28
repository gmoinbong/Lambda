import React, { FC } from 'react';
import styles from './CompanyInfo.module.css';
import info from '../../assets/company/info.svg';
import info1 from '../../assets/company/info_1.svg';
import info2 from '../../assets/company/info_2.svg';
import info3 from '../../assets/company/info_3.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props {}

export const CompanyInfo: FC<Props> = ({}) => {
    const { isTablet, isMobile } = useScreenDetector();

    const renderImages0 = () => (
        <>
            <div className={styles.infoItem}>
                <img className={styles.leftiImg0} src={info} alt="Team Members Icon" />
                <div className={styles.infoText}>
                    <p className={styles.value}>250<span>+</span></p>
                    <p className={styles.valueInfo}>Team Members</p>
                </div>
            </div>
            <div className={styles.infoItem}>
                <img className={styles.leftiImg1} src={info1} alt="Nationalities Icon" />
                <div className={styles.infoText}>
                    <p className={styles.value}>10<span>+</span></p>
                    <p className={styles.valueInfo}>Nationalities</p>
                </div>
            </div>
        </>
    );

    const renderImage1 = () => (
        <>
            <div className={styles.infoItem}>
                <img className={styles.rightImg0} src={info2} alt="Businesses Icon" />
                <div className={styles.infoText}>
                    <p className={styles.value}>5000<span>+</span></p>
                    <p className={styles.valueInfo}>Businesses</p>
                </div>
            </div>
            <div className={styles.infoItem}>
                <img className={styles.rightImg1} src={info3} alt="Transactions Icon" />
                <div className={styles.infoText}>
                    <p className={styles.value}>$500<span>M</span></p>
                    <p className={styles.valueInfo}>Transactions</p>
                </div>
            </div>
        </>
    );

    return (
        <div className={styles.block}>
            {isTablet ? (
                <div className={styles.renderWrapper}>
                    {renderImages0()}
                </div>
            ) : (
                renderImages0()
            )}
            {isTablet ? (
                <div className={styles.renderWrapper1}>
                    {renderImage1()}
                </div>
            ) : (
                renderImage1()
            )}
        </div>
    );
};
