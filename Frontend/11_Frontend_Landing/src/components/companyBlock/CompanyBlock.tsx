import { FC } from 'react';
import styles from "./CompanyBlock.module.css";
import featureImage from '../../../public/assets/company/img_mobile.svg';
import stars from '../../../public/assets/company/stars.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import chatIcon from '../../../public/assets/company/chat_icon.svg'
import Button from '../Button/Button';

interface Props { }

export const CompanyBlock: FC<Props> = ({ }) => {
    const { isMobile } = useScreenDetector();

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.titleWrapper}>
                        <h1> Tinvio!
                            <span>
                                Hi, we’re
                            </span>
                            <img src={stars} alt="stars" className={styles.stars} />
                        </h1>
                    </div>
                    <p>
                        We’re reimagining how merchants and suppliers transact.
                    </p>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.additionalContent}>
                        <p>
                            Tinvio is built for B2B transactions. It’s an app, it’s a dashboard, it’s a checkout link, it’s a digital wallet, it’s a credit line, it’s money in (and out of) your bank, and so much more. Tradition meets modern in a delightful chat-led user experience. The best part? We make it fast, flexible, and fun.
                        </p>
                        <p>
                            Why do we do it? It’s painfully frustrating for businesses to transact. Our generation are minting NFTs on blockchains everyday and about to colonize Mars, but in our supply chains, businesses are still exchanging cold hard cash, writing checks, and keying manual bank transfers. We’re going to reimagine the status quo, we’re going to digitize the zillions of these offline receivables and payables. One transaction at a time.
                        </p>
                        <Button icon={chatIcon} className={styles.ctaButton}>Contact Us</Button>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={featureImage} alt="company" className={isMobile ? styles.companyImageMobile : styles.companyImage} />
                    </div>
                </div>
            </div>
        </>
    );
};
