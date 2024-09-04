import { FC } from 'react';
import styles from './FeatureExampleBottomBlock.module.css';

interface Props { }

export const FeatureExampleBottomBlock: FC<Props> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.leftimg}>
                <img className={styles.imageManage} src={'/assets/features/bg_3.svg'} alt="Manage orders" />
            </div>
            <div className={styles.grid}>
                <div className={styles.upper}>
                    <img className={styles.upperImage} src={'/assets/features/bg3.svg'} alt="Upper background" />
                    <div className={styles.inputContainer}>
                        <img className={styles.icon} src={'/assets/features/pin_file_icon.svg'} alt="File icon" />
                        <img src={ '/assets/features/add_file.svg'} alt="Add file" />
                        <input type="text" placeholder="Type something..." />
                        <button className={styles.sendButton}>
                            <img className={styles.sentIcon} src={'/assets/features/bg3.svg'} alt="Send icon" />
                        </button>
                    </div>

                </div>
                <div>
                    <img className={`${styles.gridItem} ${styles.down1}`} src={'/assets/features/dollar_icon.svg'} alt="Create invoices" />
                </div>
                <div style={{ width: "140%" }}>
                    <img className={`${styles.gridItem} ${styles.down2}`} src={'/assets/features/bg5.svg'} alt="Share payment links" />
                </div>
            </div>
        </div>
    );
};
