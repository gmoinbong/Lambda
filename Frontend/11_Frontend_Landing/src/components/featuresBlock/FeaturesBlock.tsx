import React, { FC, useState, Suspense } from 'react';
import styles from "./FeaturesBlock.module.css";
import stars from '/assets/stars-features.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import Button from '../Button/Button';
const Modal = React.lazy(() => import('./modal/Modal'));

interface Props { }

export const FeaturesBlock: FC<Props> = ({ }) => {
    const { isMobile } = useScreenDetector();
    const [isModalVisible, setModalVisible] = useState(false);

    const handleModalOpen = () => {
        setModalVisible(true);
    };

    const handleModalClose = () => {
        setModalVisible(false);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleWrapper}>
                        <h1>One dashboard, all your supply chain transactions
                            <img src={stars} alt="stars" className={styles.stars} />
                        </h1>
                    </div>
                    <p>From orders to real-time cash in your bank.
                        <br />
                        Run your business like a rockstar.</p>
                    <Button className={styles.ctaButton} text='Try it for Free' onClick={handleModalOpen} />
                </div>
                <div className={styles.imageContainer}>
                    <img src={'/assets/background/greyDiamond.png'} alt="grey diamond" className={styles.greyDiamond} />
                    <img className={styles.rectangle} src={'/assets/background/rectangleGroup.png'} alt="rectangle" />
                    {isMobile ? (
                        <>
                            <img src={'/assets/features/feature_img_mobile.svg'} alt="feature" className={styles.featureImage} />
                            <img src={'/assets/features/feature_img_mobile3.svg'} alt="feature" className={styles.featureImageMobile2} />
                        </>
                    ) : (
                        <>
                            <img src={'/assets/features/bg.svg'} alt="feature" className={styles.featureImage} />
                            <img src={'/assets/features/bg1.svg'} alt="background" className={styles.featureImage2} />
                        </>
                    )}
                </div>
            </div>
            {isMobile && <div style={{ height: 100 }}> <img src={'/assets/features/feature_img_mobile2.svg'} alt="feature" className={styles.featureImageMobile} /> </div>}
            <Suspense fallback={<div>Loading...</div>}>
                <Modal isVisible={isModalVisible} onClose={handleModalClose} />
            </Suspense>
        </>
    );
};
