import React, { FC } from 'react';
import styles from './ContactForm.module.css';
import mapImage from '../../assets/maps.png'; 

interface Props {}

export const ContactForm: FC<Props> = () => {
    return (
        <div className={styles.contactFormContainer}>
            <div className={styles.svgBackground}>
                <svg width="1866" height="972" viewBox="0 0 1866 972" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-26.4492 0.00146484L1811.42 273.382C1842.78 278.047 1866 304.976 1866 336.685L1866 908C1866 943.346 1837.35 972 1802 972L-26.4492 972L-26.4492 0.00146484Z" fill="#F7F7F7"/>
                </svg>
            </div>
            <div className={styles.content}>
                <div className={styles.left}>
                    <h2 className={styles.title}>Fill up the form and we'll get in touch within a few hours</h2>
                    <img src={mapImage} alt="Map" className={styles.mapImage} />
                </div>
                <div className={styles.right}>
                    <h3>Hi, we’re <span className={styles.highlight}>Tinvio</span>! And you?</h3>
                    <form className={styles.form}>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Name" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Business Name" className={styles.input} />
                        </div>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Phone" className={styles.input} />
                        </div>
                        <button type="submit" className={styles.submitButton}>Submit</button>
                        <p className={styles.noSpam}>No spam, promise <span role="img" aria-label="fire">🔥</span></p>
                    </form>
                </div>
            </div>
        </div>
    );
};
