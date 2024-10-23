import styles from './ImagesContainer.module.css';

export const ImagesContainer = () => {
    return (
        <div className={styles.imageContainer}>
            <div className={styles.overlayDiamond}>
                <div className={styles.redDiamond}>
                    <div>
                        <img className={styles.backgroundImageMobile} src={'/assets/background/background-image.png'} alt="application example" />
                        <img className={styles.backgroundImageDesktop} src={'/assets/background/background-image1.png'} alt="application example" />
                    </div>
                </div>
                <img className={styles.rectangle2} src={'/assets/background/rectangleGroup.png'} alt="" />
                <img className={styles.rectangle} src={'/assets/background/rectangleGroup.png'} alt="" />
            </div>
        </div>
    );
};
