import React, { FC, useState } from 'react';
import styles from './HomeTestimonialBlock.module.css';
import reviewComment from '../../assets/review-comment.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import doubleQuotes from '../../assets/double-quotes.svg';
import { testimonials } from './data';
import greyDiamond from '../../assets/background/greyDiamond.png'
import greyBg from '../../assets/background/rectangleGroup.png'

export const HomeTestimonialBlock: FC = () => {
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <div className={styles.testimonialBlock}>
            <div className={styles.svgBackground}>
                <svg width="1866" height="957" viewBox="0 0 1866 957" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.164305 325.893C0.164132 294.016 23.6221 266.999 55.1833 262.526L1901.66 0.823797L1901.66 708.324L72.7565 956.015C34.3478 961.217 0.167542 931.354 0.167336 892.594L0.164305 325.893Z" fill="#363636" />
                </svg>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.title}>Why choose Tinvio?</h2>
                <div className={styles.testimonialCard}>
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            {testimonials[current].text}
                        </p>
                    </div>
                    <img src={testimonials[current].image} alt="Testimonial" className={styles.testimonialImage} />
                    <div className={styles.author}>
                        <img src={reviewComment} alt="Review comment" className={styles.reviewComment} />
                        <div className={styles.authorContainer}>
                            <p className={styles.authorName}>{testimonials[current].author}</p>
                            <p className={styles.authorTitle}>{testimonials[current].title}</p>
                            <div className={styles.arrowContainer}>
                                <img src={arrowLeft} alt="Previous" className={`${styles.arrow} ${styles.left}`} onClick={handlePrev} />
                                <img src={arrowRight} alt="Next" className={`${styles.arrow} ${styles.right}`} onClick={handleNext} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={styles.dot}
                            style={{ backgroundColor: current === index ? '#ccc' : 'white' }}
                            onClick={() => setCurrent(index)}
                        ></span>
                    ))}
                </div>
                <img src={doubleQuotes} alt="double quotes" className={styles.quotes} />
            </div>
            <img src={greyDiamond} className={styles.greyDiamond1} alt="grey Diamond" />
            <img src={greyDiamond} className={styles.greyDiamond2} alt="grey Diamond" />
            <img src={greyBg} className={styles.greyBg1} alt="grey details" />
            <img src={greyBg} className={styles.greyBg3} alt="grey details" />
        </div >
    );
};
