import React, { FC } from 'react';
import styles from "./FeaturesBlock.module.css";
import featureImage2 from '../../assets/features/bg1.svg';
import featureImage from '../../assets/features/bg.svg';
import stars from '../../assets/stars-features.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import featureImageMobile from '../../assets/features/feature_img_mobile.svg';
import featureImageMobile2 from '../../assets/features/feature_img_mobile2.svg';
import featureImageMobile3 from '../../assets/features/feature_img_mobile3.svg';
import Button from '../Button/Button';

interface Props { }

export const FeaturesBlock: FC<Props> = ({ }) => {
    const { isMobile } = useScreenDetector();

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
                    <Button className={styles.ctaButton} text='Try it for Free' />
                </div>
                <div className={styles.imageContainer}>
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
            {isMobile && <div style={{height:100}}> <img src={featureImageMobile2} alt="feature" className={styles.featureImageMobile} /> </div>}
        </>
    );
};
