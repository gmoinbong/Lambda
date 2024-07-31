import React, { FC } from 'react';
import styles from './HomeCheckoutBlock.module.css';
import homeContentImage from '../../assets/background/homeContent.png';
import Button from '../Button/Button';
import play from '../../assets/button-play.svg';
import bgDetail from '../../assets/background/rectangleGroup.png';

interface Props { }

export const HomeCheckoutBlock: FC<Props> = () => {
    return (
        <div className={styles.checkoutBlock}>
            <div className={styles.content}>
                <img className={styles.contentImage} src={homeContentImage} alt="home content" />
                <div className={styles.textBlock}>
                    <h2>Check out how it works</h2>
                    <p>It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.</p>
                    <Button bgColor='ffff'  className={styles.playButton}>
                        <img src={play} alt="play button" className={styles.playIcon} />
                        Play Video
                    </Button>
                </div>
            </div>
            {/* <img src={bgDetail} className={styles.bgDetail} alt="" /> */}
            {/* <img src={bgDetail} className={styles.bgDetail2} alt="" /> */}
        </div>
    );
};
