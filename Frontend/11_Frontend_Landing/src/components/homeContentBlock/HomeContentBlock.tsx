import React, { FC } from 'react';
import styles from "./HomeContentBlock.module.css";
import Button from '../Button/Button';
import rectangleGroup from '../../../public/assets/background/rectangleGroup.png';
import backgroundImage from '../../../public/assets/background/background-image.png';
import backgroundImage1 from '../../../public/assets/background/background-image1.png';
import stars from '../../../public/assets/background/stars.png'
import greyDiamond from '../../../public/assets/background/greyDiamond.png'
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HomeContentBlock: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    const renderDesktopImages = () => <div className={styles.imageContainer}>
        <div className={styles.overlayDiamond}>
            <div className={styles.redDiamond}>
                <div>
                    <img className={styles.backgroundImageMobile} src={backgroundImage} alt="application example" />
                    <img className={styles.backgroundImageDesktop} src={backgroundImage1} alt="application example" /></div>
            </div>
            <img className={styles.rectangle2} src={rectangleGroup} alt="" />
            <img className={styles.rectangle} src={rectangleGroup} alt="" />
        </div>
    </div>


    return (
        <div className={styles.content}>
            <div className={styles.textContent}>
                <div className={styles.textTitle}>
                    <img className={styles.stars} src={stars} alt='stars' />
                    <h1>
                        Collecting payments <br /> <span> is easy</span>, right?
                    </h1>
                </div>
                <p>Manage all your supply chain transactions <br /> in one dashboard. Get paid faster, reconcile quicker, grow bigger.</p>
                <Button height='56px' color='#FFFF' text="Get Started Now" className={styles.ctaButton} />
                <img src={greyDiamond} alt="grey diamond" className={styles.greyDiamondBottom} />
                <p className={styles.freeText}>It's free to try! <span role="img" aria-label="smile">😊</span></p>
            </div>
            {isTablet ? renderDesktopImages()
                :
                renderDesktopImages()
            }
            {/* <img src={greyDiamond} alt="grey diamond" className={styles.greyDiamondTop} /> */}
        </div>
    );
};
