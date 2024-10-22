import { FC } from 'react';
import styles from './FeaturesSmarterBlock.module.css';
import image from '/assets/features/img_smarter.svg';

interface Props { }

export const FeaturesSmarterBlock: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.textContainer}>
                    <h2>Get smarter about all the little details </h2>
                    <p>
                        Monitor your transactions activity on one dashboard. Generate customized order, inventory, and payments reports.
                        Prevent fraud, improve operations, manage working capital, and grow grow grow!
                    </p>
                </div>
                <img src={image} alt="smarter example" className={styles.image} />
            </div>
        </div>
    );
}
