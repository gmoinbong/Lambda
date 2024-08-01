import  { FC, useState } from 'react';
import styles from "./FeaturesBlock.module.css";
import featureImage2 from '../../../public/assets/features/bg1.svg';
import featureImage from '../../../public/assets/features/bg.svg';
import stars from '../../../public/assets/stars-features.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import featureImageMobile from '../../../public/assets/features/feature_img_mobile.svg';
import featureImageMobile2 from '../../../public/assets/features/feature_img_mobile2.svg';
import featureImageMobile3 from '../../../public/assets/features/feature_img_mobile3.svg';
import greyDiamond from '../../../public/assets/background/greyDiamond.png'
import rectangleGroup from '../../../public/assets/background/rectangleGroup.png';
import Button from '../Button/Button';
import Modal from './modal/Modal';

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
                    <img src={greyDiamond} alt="grey diamond" className={styles.greyDiamond} />
                    <img className={styles.rectangle} src={rectangleGroup} alt="rectangle" />
                    {isMobile ? (
                        <>
                            <img src={featureImageMobile} alt="feature" className={styles.featureImage} />
                            <img src={featureImageMobile3} alt="feature" className={styles.featureImageMobile2} />
                        </>
                    ) : (
                        <>
                            <img src={featureImage} alt="feature" className={styles.featureImage} />
                            <img src={featureImage2} alt="background" className={styles.featureImage2} />
                        </>
                    )}
                </div>
            </div>
            {isMobile && <div style={{ height: 100 }}> <img src={featureImageMobile2} alt="feature" className={styles.featureImageMobile} /> </div>}
            <Modal isVisible={isModalVisible} onClose={handleModalClose} />
        </>
    );
};
