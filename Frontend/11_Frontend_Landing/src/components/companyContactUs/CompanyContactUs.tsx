import { FC } from 'react';
import styles from './CompanyContactUs.module.css';
import Button from '../Button/Button';

interface Props { }

export const CompanyContactUs: FC<Props> = ({ }) => {
    return (
        <>
            <h1 className={styles.h1}>Contact Us</h1>
            <div className={styles.container}>
                <div className={styles.section} id={styles.support}>
                    <h2>Contact Support</h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text='Contact Us' />
                </div>
                <div className={styles.section} id={styles.business}>
                    <h2>Business & Partnerships</h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text='Contact Us' />
                </div>
                <div className={styles.section} id={styles.media}>
                    <h2>Media Relations</h2>
                    <p>Porta pellentesque leo arcu in massa. Praesent mattis faucibus placerat.</p>
                    <Button className={styles.Button} text='Contact Us' />
                </div>
            </div>
        </>
    );
};
