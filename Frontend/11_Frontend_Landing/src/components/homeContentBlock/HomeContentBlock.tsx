import { FC } from 'react';
import styles from "./HomeContentBlock.module.css";
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const HomeContentBlock: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    const renderDesktopImages = () => <div className={styles.imageContainer}>
        <div className={styles.diamondWrapper}>
            <div className={styles.overlayDiamond}>
                <div className={styles.redDiamond}>
                    <div>
                        <img className={styles.backgroundImageMobile} src={'/assets/background/background-image.svg'} alt="application example" />
                        <img className={styles.backgroundImageDesktop} src={'/assets/background/background-image1.png'} alt="application example" /></div>
                </div>
            </div>
            <img className={styles.rectangle2} src={'/assets/background/rectangleGroup.png'} alt="" />
            <img className={styles.rectangle} src={'/assets/background/rectangleGroup.png'} alt="" />
        </div>
    </div>


    return (
        <div className={styles.content}>
            <div className={styles.textContent}>
                <div className={styles.textTitle}>
                    <h1>
                        <img className={styles.stars} src={'/assets/background/stars.png'} alt='stars' />
                        Collecting payments <br /> <span> is easy</span>, right?
                    </h1>
                </div>
                <p>Manage all your supply chain transactions <br /> in one dashboard. Get paid faster, reconcile quicker, grow bigger.</p>
                <Button height='56px' bgColor='#FF474D' color='#FFFF' text="Get Started Now" className={styles.ctaButton} />
                <img src={'/assets/background/greyDiamond.png'} alt="grey diamond" className={styles.greyDiamondBottom} />
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
