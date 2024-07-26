import React, { FC } from 'react';
import styles from './FeatureOrderBlock.module.css';
import rectangleGroup from '../../assets/features/rectangle_group.svg';

interface Props { }

export const FeatureOrderBlock: FC<Props> = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Breeze through orders without the stress</h1>
                <p>
                    Your customers will love that they can browse item catalogs and check availability before placing orders.
                    You'll receive orders in beautifully formatted lists. Confirm or amend them in a few taps, even when on-the-go!
                </p>
            </div>
            <div className={styles.diamondContainer}>
                <div className={styles.backgroundDiamond}></div>
                <div className={styles.diamond}>
                    <img className={styles.rectangleGroup} src={rectangleGroup} alt="Rectangle Group" />
                </div>
            </div>
        </div>
    );
};
