import React, { useState } from 'react';
import styles from './FeaturesFaq.module.css';
import { faqItems } from './data';



const FeaturesFaq: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.h2}>FAQ</h2>
            {faqItems.map((item, index) => (
                <div
                    key={index}
                    className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}
                    onClick={() => handleToggle(index)}
                >
                    <h3>
                        {item.question}
                        <span className={styles.toggleIcon}>
                            {activeIndex === index ? '-' : '+'}
                        </span>
                    </h3>
                    <p>{item.answer}</p>
                </div>
            ))}
        </div>
    );
};

export default FeaturesFaq;
