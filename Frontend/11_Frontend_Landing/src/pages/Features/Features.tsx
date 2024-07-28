import React, { FC } from 'react';
import styles from './Features.module.css';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import { Header } from '../../components/Header/Header';
import { MobileHeader } from '../../components/Header/MobileHeader';
import Footer from '../../components/Footer/Footer';
import { FeaturesBlock } from '../../components/featuresBlock/FeaturesBlock';
import { FeaturesExampleBlock } from '../../components/featuresExampleBlock/FeaturesExampleBlock';
import { FeatureExampleBottomBlock } from '../../components/featureExampleBottomBlock/FeatureExampleBottomBlock';
import { FeatureOrderBlock } from '../../components/featureOrderBlock/FeatureOrderBlock';
import { FeaturesGetStarted } from '../../components/featuresStarted/FeaturesStarted';
import { FeatureSaveBlock } from '../../components/featureSaveBlock/FeatureSaveBlock';
import { FeaturesCollectionBlock } from '../../components/featuresCollectionBlock/FeaturesCollectionBlock';
import { FeaturesSmarterBlock } from '../../components/featuresSmarterBlock/FeaturesSmarterBlock';
import { FeautureBusinessBlock } from '../../components/feautureBusinessBlock/FeautureBusinessBlock';
import FeaturesSupercharge from '../../components/featuresSupercharge/FeaturesSupercharge';
import FeaturesFaq from '../../components/featuresFaq/FeaturesFaq';

interface Props { }

export const Features: FC<Props> = ({ }) => {
    const { isTablet } = useScreenDetector();

    return (
        <div className={styles.features}>
            {isTablet ? <MobileHeader /> : <Header color='#FFFFf' buttonBackground='#FF474D' />}
            <FeaturesBlock />
            <FeaturesExampleBlock />
            <FeatureExampleBottomBlock />
            <FeatureOrderBlock />
            <FeaturesGetStarted />
            <FeatureSaveBlock />
            <FeaturesCollectionBlock />
            <FeaturesSmarterBlock />
            <FeautureBusinessBlock />
            <FeaturesSupercharge />
            <FeaturesFaq />
            <Footer />
        </div>
    );
};
