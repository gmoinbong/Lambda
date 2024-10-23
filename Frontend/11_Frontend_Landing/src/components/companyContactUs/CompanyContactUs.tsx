import { FC } from 'react';
import styles from './CompanyContactUs.module.css';
import Button from '../Button/Button';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const CompanyContactUs: FC<Props> = () => {
    const { isTablet } = useScreenDetector();

    return (
        <div style={{marginTop: '140px'}}>
            <h1 className={styles.h1}>Contact Us</h1>
            <div className={styles.container}>
                <div className={styles.section} id={styles.support}>
                    <h2>
                        Contact
                        {!isTablet && <br />}
                        Support
                    </h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text="Contact Us" />
                </div>
                <div className={styles.section} id={styles.business}>
                    <h2>
                        Business &
                        {!isTablet && <br />}
                        Partnerships
                    </h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text="Contact Us" />
                </div>
                <div className={styles.section} id={styles.media}>
                    <h2>
                        Media
                        {!isTablet && <br />}
                        Relations
                    </h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text="Contact Us" />
                </div>
            </div>
        </div>
    );
};
