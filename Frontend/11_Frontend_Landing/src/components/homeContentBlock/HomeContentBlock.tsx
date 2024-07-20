import React, { FC } from 'react';
import styles from "./HomeContentBlock.module.css";
import Button from '../Button/Button';
import rectangleGroup from '../../assets/background/rectangleGroup.png';
import backgroundImage from '../../assets/background/background-image.png';
import backgroundImage1 from '../../assets/background/background-image1.png';
import stars from '../../assets/background/stars.png'
import greyDiamond from '../../assets/background/greyDiamond.png'

interface Props { }

export const HomeContentBlock: FC<Props> = () => {
    return (
        <div className={styles.content}>
            <div className={styles.textContent}>
                <h1>Collecting payments <br /> <span> is easy</span>, right?</h1>
                <p>Manage all your supply chain transactions <br /> in one dashboard. Get paid faster, reconcile quicker, grow bigger.</p>
                <Button height='56px' color='#FF474D' text="Get Started Now" className={styles.ctaButton} />
                <p className={styles.freeText}>It's free to try! <span role="img" aria-label="smile">😊</span></p>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.backgroundImageMobile} src={backgroundImage} alt="application example" />
                <img className={styles.backgroundImageDesktop} src={backgroundImage1} alt="application example" />
            </div>
            <div className={styles.redDiamond}></div>
            <div className={styles.overlayDiamond}></div>
            <div className={styles.grayDiamonds}></div>
            <img className={styles.grayDiamond} src={greyDiamond} alt='grey diamond background' />
            <img className={styles.stars} src={stars} alt='stars' />
            <img className={styles.rectangleGroup} src={rectangleGroup} alt="rectangle group" />
            <div className={styles.rectangleGroupTop}>
                <img className={styles.rectangleGroupImgTop} src={rectangleGroup} alt="rectangle group" />
            </div>
            <div className={styles.rectangleGroupBottom}>
                <img className={styles.rectangleGroupImgBot} src={rectangleGroup} alt="rectangle group" />
            </div>
        </div>
    );
};
