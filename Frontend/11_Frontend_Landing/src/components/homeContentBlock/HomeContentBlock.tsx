import { FC } from 'react';
import styles from "./HomeContentBlock.module.css";
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HomeContentBlock: FC<Props> = () => {

    const { isTablet, isMobile } = useScreenDetector();

    const renderDesktopImages = () => (
        <div className={styles.imageContainer}>
            <div className={styles.diamondWrapper}>
                <div className={styles.overlayDiamond}>
                    <div className={styles.redDiamond}>
                        <div>
                            <img className={styles.backgroundImageMobile} src={'/assets/background/background-image.svg'} alt="application example" />
                            <img className={styles.backgroundImageDesktop} src={'/assets/background/background-image1.png'} alt="application example" />
                        </div>
                    </div>
                </div>
                <img className={styles.rectangle} src={'/assets/background/rectangleGroup.png'} alt="" />
                <img className={styles.rectangle2} src={'/assets/background/rectangleGroup.png'} alt="" />
            </div>
        </div>
    );

    return (
        <div className={styles.container}>
            <div className={styles.textContent}>
                <div className={styles.textTitle}>
                    <img className={styles.stars} src={'/assets/background/stars.png'} alt='stars' />
                    <h1>
                        Collecting payments {isTablet ? <br /> : null} <span className={styles.highlight}> is easy</span>, right?
                    </h1>
                </div>
                {isTablet ? <p className={styles.textDescription}>Manage all your supply chain transactions in one dashboard.{!isMobile ? <br /> : null}  Get paid faster, reconcile quicker, grow bigger.</p>
                    :
                    <p className={styles.textDescription}>Manage all your supply chain transactions   in one dashboard. {isMobile ? null : null} Get paid faster, reconcile quicker, grow bigger.</p>}
                <Button height='56px' bgColor='#FF474D' color='#FFFF' text="Get Started Now" className={styles.ctaButton} />
                <p className={styles.freeText}>It's free to try! <span className={styles.smile} role="img" aria-label="smile">
                    <img src={'/assets/smile.svg'} alt="" />
                </span>
                </p>
                <img src={'/assets/background/greyDiamond.png'} alt="grey diamond" className={styles.greyDiamondBottom} />
                <img src={'/assets/background/greyDiamond.png'} alt="grey diamond" className={styles.greyDiamondTop} />
                <img src={'/assets/background/dots.svg'} alt="grey dots" className={styles.dotsBg} />
            </div>
            {renderDesktopImages()}
        </div >
    );
};
