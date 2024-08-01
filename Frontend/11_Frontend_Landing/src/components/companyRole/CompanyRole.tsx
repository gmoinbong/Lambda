import React, { FC } from 'react';
import styles from './CompanyRole.module.css';
import img0 from '../../../public//assets/company/img_role.svg';
import img1 from '../../../public/assets/company/img_role_1.svg';
import img2 from '../../../public/assets/company/img_role_2.svg';
import img3 from '../../../public/assets/company/img_role_3.svg';
import stars from '../../../public/assets/stars-features.svg';
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const CompanyRole: FC<Props> = ({ }) => {
    const { isDesktop } = useScreenDetector();
    const renderContent = () => <div className={styles.titleWrapper}>
        <h1>
            Global, local, remote.
            Find the perfect role
            <img src={stars} alt="stars" className={styles.stars} />
        </h1>
        <Button className={styles.Button} text='Explore Roles' />
    </div>

    return (
        <div className={styles.container}>
            {isDesktop ? renderContent() : null}
            <div className={styles.imageContainer}>
                <div className={styles.leftImages}>
                    <img className={styles.leftImage0} src={img0} alt="" />
                    <img className={styles.leftImage1} src={img1} alt="" />
                </div>
                <div className={styles.rightImages}>
                    <img className={styles.rightImage0} src={img2} alt="" />
                    <img className={styles.rightImage1} src={img3} alt="" />
                </div>
                {!isDesktop ? renderContent() : null}

            </div>
        </div>
    );
};
