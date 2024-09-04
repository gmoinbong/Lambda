import  { FC } from 'react';
import styles from './HomeCheckoutBlock.module.css';
import Button from '../Button/Button';

interface Props { }

export const HomeCheckoutBlock: FC<Props> = () => {
    return (
        <div className={styles.checkoutBlock}>
            <div className={styles.content}>
                <img className={styles.contentImage} src={'/assets/background/homeContent.png'} alt="home content" />
                <div className={styles.textBlock}>
                    <h2>Check out how it works</h2>
                    <p>It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.</p>
                    <Button bgColor='ffff' className={styles.playButton}>
                        <img src={'/assets/button-play.svg'} alt="play button" className={styles.playIcon} />
                        Play Video
                    </Button>
                </div>
                <img src={'/assets/background/rectangleGroup.png'} className={styles.bgDetail} alt="" />
                <img src={'/assets/background/rectangleGroup.png'} className={styles.bgDetail2} alt="" />
            </div>
        </div>
    );
};
