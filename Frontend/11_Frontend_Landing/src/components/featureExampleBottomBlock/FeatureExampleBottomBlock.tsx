import React, { FC } from 'react';
import styles from './FeatureExampleBottomBlock.module.css';
import bg from '../../assets/features/bg_3.svg';
import bg1 from '../../assets/features/bg3.svg';
import bg3 from '../../assets/features/bg5.svg';
import dollarIcon from '../../assets/features/dollar_icon.svg';

interface Props { }

export const FeatureExampleBottomBlock: FC<Props> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.leftimg}>
                <img className={styles.imageManage} src={bg} alt="Manage orders" />
            </div>
            <div className={styles.grid}>
                <div className={`${styles.gridItem} ${styles.upper}`}>
                    <div className={styles.inputContainer}>
                        <button><img src={bg1} alt="Attachment icon" /></button>
                        <input type="text" placeholder="Type something..." />
                        <button><img src={bg1} alt="Send icon" /></button>
                    </div>
                </div>
                <div className={`${styles.gridItem} ${styles.down1}`}>
                    <img src={dollarIcon} alt="Create invoices" />
                </div>
                <div className={`${styles.gridItem} ${styles.down2}`}>
                    <img src={bg3} alt="Share payment links" />
                </div>
            </div>
        </div>
    );
};
