import React, { FC } from 'react';
import styles from './CompanyPowered.module.css';
import img0 from '../../assets/company/img_powered.svg';
import img1 from '../../assets/company/img_powered_1.svg';
import img2 from '../../assets/company/img_powered_2.svg';
import img3 from '../../assets/company/img_powered_3.svg';
import stars from '../../assets/stars-features.svg';
import Button from '../Button/Button';

interface Props {}

export const CompanyPowered: FC<Props> = ({}) => {
    return (
        <div className={styles.container}>
            <div className={styles.titleWrapper}>
                <h1>
                    Teamvio
                    <span> Powered by</span>
                    <img src={stars} alt="stars" className={styles.stars} />
                </h1>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.leftImages}>
                    <img className={styles.leftImage0} src={img0} alt="" />
                    <img className={styles.leftImage1} src={img1} alt="" />
                </div>
                <div className={styles.rightImages}>
                    <img className={styles.rightImage0} src={img2} alt="" />
                    <div className={styles.buttonContainer}>
                        <p>Up for a challenge? We're always looking for the best</p>
                        <Button className={styles.Button} height='56px' width='200px' text='Join Us' />
                    </div>
                    <img className={styles.rightImage1} src={img3} alt="" />
                </div>
            </div>
        </div>
    );
};
