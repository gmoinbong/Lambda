import { FC } from 'react';
import styles from './FeatureExampleBottomBlock.module.css';
import bg from '../../../public/assets/features/bg_3.svg';
import bg1 from '../../../public/assets/features/bg3.svg';
import bg3 from '../../../public/assets/features/bg5.svg';
import dollarIcon from '../../../public/assets/features/dollar_icon.svg';
import addFile from '../../../public/assets/features/add_file.svg';
import fileIcon from '../../../public/assets/features/pin_file_icon.svg';

interface Props { }

export const FeatureExampleBottomBlock: FC<Props> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.leftimg}>
                <img className={styles.imageManage} src={bg} alt="Manage orders" />
            </div>
            <div className={styles.grid}>
                <div className={styles.upper}>
                    <img className={styles.upperImage} src={bg1} alt="Upper background" />
                    <div className={styles.inputContainer}>
                        <img className={styles.icon} src={fileIcon} alt="File icon" />
                        <img src={addFile} alt="Add file" />
                        <input type="text" placeholder="Type something..." />
                        <button className={styles.sendButton}>
                            <img className={styles.sentIcon} src={bg1} alt="Send icon" />
                        </button>
                    </div>

                </div>
                <div>
                    <img className={`${styles.gridItem} ${styles.down1}`} src={dollarIcon} alt="Create invoices" />
                </div>
                <div style={{ width: "140%" }}>
                    <img className={`${styles.gridItem} ${styles.down2}`} src={bg3} alt="Share payment links" />
                </div>
            </div>
        </div>
    );
};
