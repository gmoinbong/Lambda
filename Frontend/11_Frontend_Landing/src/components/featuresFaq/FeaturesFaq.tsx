import React, { useState } from 'react';
import styles from './FeaturesFaq.module.css';
import { faqItems } from './data';

const FeaturesFaq: React.FC = () => {
    const [activeIndices, setActiveIndices] = useState<number[]>([]);

    const handleToggle = (index: number) => {
        setActiveIndices(prevIndices =>
            prevIndices.includes(index)
                ? prevIndices.filter(i => i !== index)
                : [...prevIndices, index]
        );
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>FAQ</h2>
            {faqItems.map((item, index) => {
                const isLastItem = index === faqItems.length - 1;

                return (
                    <div
                        key={index}
                        className={`${styles.faqItem} ${activeIndices.includes(index) ? styles.active : ''} ${isLastItem ? styles.lastItem : ''}`}
                        onClick={() => handleToggle(index)}
                    >
                        <h3 className={styles.h3}>
                            {item.question}
                            <span className={styles.toggleIcon}>
                                {activeIndices.includes(index) ? '-' : '+'}
                            </span>
                        </h3>
                        <p className={styles.p}>{item.answer}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default FeaturesFaq;
