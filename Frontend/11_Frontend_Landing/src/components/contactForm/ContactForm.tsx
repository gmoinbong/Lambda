import { FC } from 'react';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';

interface Props { }

export const ContactForm: FC<Props> = () => {
    const { isTablet } = useScreenDetector()

    return (
        <div className={styles.contactFormContainer}>
            <div className={styles.content}>
                <img src={'/assets/background/dotsBg.svg'} className={styles.dotsDown1} alt="Grey Diamond" />
                <div className={styles.contentWrapper}>
                    <div className={styles.left}>
                        {!isTablet ? <h2 className={styles.titleMap}>Fill up the form and we'll get <br /> in touch within a few hours</h2> : null}

                        <img src={'/assets/maps.png'} alt="Map" className={styles.mapImage} />
                    </div>
                    <div className={styles.rightWrapper}>
                        <div className={styles.right}>
                            <h3 className={styles.title}>Hi, we’re <span className={styles.highlight}>Tinvio</span>! And you?</h3>
                            <form className={styles.form}>
                                <div className={styles.inputGroup}>
                                    <p>Name</p>
                                    <input type="text" placeholder="John Appleseed" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <p>Business Name</p>
                                    <input type="text" placeholder="Burgers &Boba (Singapore)" className={styles.input} />
                                </div>
                                <div className={styles.inputGroup}>
                                    <p>Phone</p>
                                    <input type="text" placeholder="65 9123 4567" className={styles.input} />
                                </div>
                                <div className={styles.botContent}>
                                    <Button type="submit" className={styles.submitButton} text='Submit' />
                                    <p className={styles.noSpam}>No spam, promise <span role="img" aria-label="fire">
                                        <img src="/assets/hands.svg" className={styles.hands} alt="" />
                                    </span></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={'/assets/confetti-group2.svg'} className={styles.confetti} alt="confetti" />
                </div>
                {isTablet ? <h2 className={styles.titleMap}>Fill up the form and we'll get <br className={styles.br} /> in touch within a few hours</h2> : null}
            </div>
            <img src={'/assets/background/dotsBg.svg'} className={styles.dotsDown} alt="Grey Diamond" />

            <img src={'/assets/background/dotsBg.svg'} className={styles.dotsUp} alt="Grey Diamond" />
        </div>
    );
};
