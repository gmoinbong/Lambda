import React, { FC } from 'react';
import featuredOn from '../../assets/background/featuredOn.png';

interface Props { }

export const FeaturedOn: FC<Props> = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', margin: '20px 0' }}>
            <img src={featuredOn} alt="feature on" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
    );
};
