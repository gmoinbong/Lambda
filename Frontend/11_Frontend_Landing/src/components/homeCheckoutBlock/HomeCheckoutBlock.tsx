import React, { FC } from 'react';
import styles from './HomeCheckoutBlock.module.css';
import homeContentImage from '../../assets/background/homeContent.png';
import Button from '../Button/Button';
import play from '../../assets/button-play.svg';
import bgDetail from '../../assets/background/rectangleGroup.png'
interface Props { }

export const HomeCheckoutBlock: FC<Props> = () => {
    return (
        <div className={styles.checkoutBlock}>
            <div className={styles.svgContainer}>
                <svg width="2066" height="900" viewBox="0 0 1866 978" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.15716e-05 385.414C-0.000159442 353.595 23.3751 326.608 54.8684 322.069L2285.55 0.500985L2285.55 669.5L72.8091 976.886C34.3312 982.231 0.00310503 952.343 0.00289266 913.495L1.15716e-05 385.414Z" fill="#F7F7F7" />
                </svg>
            </div>
            <div className={styles.content}>
                <img className={styles.contentImage} src={homeContentImage} alt="home content" />
                <div className={styles.textBlock}>
                    <h2>Check out how it works</h2>
                    <p>It’s easy! Exchange messages, create or confirm orders, send invoices, and collect payments across your supply chain — all within one dashboard.</p>
                    <Button color="#FFFFFF" className={styles.playButton}>
                        <img src={play} alt="play button" className={styles.playIcon} />
                        Play Video
                    </Button>
                </div>
            </div>
            <img src={bgDetail} className={styles.bgDetail} alt="" />
            <img src={bgDetail} className={styles.bgDetail2} alt="" />
        </div>
    );
};
