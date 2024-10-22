import { FC } from 'react';
import styles from './FeatureExampleBottomBlock.module.css';

interface Props { }

export const FeatureExampleBottomBlock: FC<Props> = () => {
    return (
        <div className={styles.block}>
            <div className={styles.leftimg}>
                <img src={'/assets/features/bg_3.svg'} alt="Manage orders background" className={styles.imageManage} />
            </div>
            <div className={styles.grid}>
                <div className={styles.upper}>
                    <div className={styles.inputContainer}>
                        <img src={'/assets/features/pin_file_icon.svg'} alt="Pin icon" className={styles.icon} />
                        <img src={'/assets/features/add_file_icon.svg'} alt="Add icon" className={styles.icon} />
                        <div className={styles.inputWrapper}>
                            <input type="text" placeholder="Type something..." className={styles.input} />
                            <button className={styles.sendButton}>
                                <img src={'/assets/features/arrow_right.svg'} alt="Send icon" className={styles.sentIcon} />
                            </button>
                        </div>
                        <p className={`${styles.caption} ${styles.captionMessages}`}>Send messages</p>
                        <img src={'/assets/features/bg_example.svg'} alt="bg detail" className={styles.bgDetail} />
                        <img src={'/assets/features/bg_dots.svg'} alt="bg detail" className={styles.bgDotsDetail} />
                    </div>
                    <img src={'/assets/features/bg_detail1.svg'} alt="bg detail" className={styles.bg1Detail} />

                </div>
                <div className={styles.down1}>
                    <img src={'/assets/features/dollar_icon.svg'} alt="Create invoices" className={styles.gridItem} />
                    <p className={`${styles.caption} ${styles.captionInvoices}`}>Create invoices</p>
                    <img src={'/assets/features/bg_dots1.svg'} alt="bg detail" className={styles.bgDots1Detail} />
                    <img src={'/assets/features/bg_detail2.svg'} alt="bg detail" className={styles.bg2Detail} />
                    <img src={'/assets/features/bg_detail3.svg'} alt="bg detail" className={styles.bg3Detail} />
                </div>
                <div className={styles.down2}>
                    <div className={styles.shareLinkContainer}>
                        <img src={'/assets/features/bg_detail4.svg'} alt="bg detail" className={styles.bg4Detail} />
                        <img src={'/assets/features/share-link_icon.svg'} alt="Share payment links" className={`${styles.gridItem} ${styles.shareLink}`} />
                        <img src={'/assets/features/bg_dots2.svg'} alt="bg detail" className={styles.bgDots2Detail} />
                        <p className={`${styles.caption} ${styles.captionPayment}`}>Share payment links
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
