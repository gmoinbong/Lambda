import  { FC } from 'react';
import styles from './CompanyRole.module.css';
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const CompanyRole: FC<Props> = ({ }) => {
    const { isDesktop } = useScreenDetector();
    const renderContent = () => <div className={styles.titleWrapper}>
        <h1>
            Global, local, remote.
            Find the perfect role
            <img src={ '/assets/stars-features.svg'} alt="stars" className={styles.stars} />
        </h1>
        <Button className={styles.Button} text='Explore Roles' />
    </div>

    return (
        <div className={styles.container}>
            {isDesktop ? renderContent() : null}
            <div className={styles.imageContainer}>
                <div className={styles.leftImages}>
                    <img className={styles.leftImage0} src={'/assets/company/img_role.svg'} alt="" />
                    <img className={styles.leftImage1} src={ '/assets/company/img_role_1.svg'} alt="" />
                </div>
                <div className={styles.rightImages}>
                    <img className={styles.rightImage0} src={'/assets/company/img_role_2.svg'} alt="" />
                    <img className={styles.rightImage1} src={'/assets/company/img_role_3.svg'} alt="" />
                </div>
                {!isDesktop ? renderContent() : null}

            </div>
        </div>
    );
};
