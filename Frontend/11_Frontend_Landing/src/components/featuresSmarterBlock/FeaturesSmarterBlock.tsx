import React, { FC } from 'react';
import styles from './FeaturesSmarterBlock.module.css';
import image from '../../assets/features/img_smarter.svg';

interface Props { }

export const FeaturesSmarterBlock: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <div className={styles.textContainer}>
                    <h2>Make your workflow smarter</h2>
                    <p>
                        Streamline your processes with intelligent automation. Reduce manual tasks,
                        improve efficiency, and focus on what really matters. Our solution adapts to your needs,
                        ensuring a smarter workflow that boosts productivity.
                    </p>
                </div>
                <img src={image} alt="smarter example" className={styles.image} />
            </div>
        </div>
    );
}
