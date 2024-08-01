import{ FC } from 'react';
import styles from './FeaturesCollectionBlock.module.css';
import image from '../../../public/assets/features/bg_collections.svg';
import imageMobile from '../../../public/assets/features/bg_collections_mobile.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';

interface Props { }

export const FeaturesCollectionBlock: FC<Props> = ({ }) => {
    const { isMobile } = useScreenDetector()
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                {isMobile ?
                    <img src={imageMobile} alt="app example" className={styles.image} />
                    : <img src={image} alt="app example" className={styles.image} />}
                <div className={styles.textContainer}>
                    <h2>Make collections fast, flexible, fun</h2>
                    <p>
                        Give customers a modern B2B payments experience, with more ways to pay (including credit terms).
                        Zero setup or risk for you. They’ll stay with you longer, purchase more from you, and you’ll get
                        cash in your bank so much faster!
                    </p>
                </div>
            </div>
        </div>
    );
}
