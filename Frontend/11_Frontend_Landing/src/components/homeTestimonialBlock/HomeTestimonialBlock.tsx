import  { FC, useState } from 'react';
import styles from './HomeTestimonialBlock.module.css';
import arrowLeft from '../../../public/assets/arrow-left.svg';
import arrowRight from '../../../public/assets/arrow-right.svg';
import doubleQuotes from '../../../public/assets/double-quotes.svg';
import { useScreenDetector } from '../../hooks/useScreenDetector';
import { testimonials } from './data';

export const HomeTestimonialBlock: FC = () => {
    const { isTablet } = useScreenDetector();
    const [current, setCurrent] = useState(0);

    const handlePrev = () => {
        setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
    };

    const handleNext = () => {
        setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
    };

    return (
        <div style={{ marginLeft: "20px" }}>
            <div className={styles.testimonialBlock}>
                <h2 className={styles.title}>Why choose Tinvio?</h2>
                <div className={styles.testimonialCard}>
                    {isTablet ? <img src={testimonials[current].image} alt="Testimonial" className={styles.testimonialImage} /> : null}
                    <div className={styles.textWrapper}>
                        <p className={styles.text}>
                            {testimonials[current].text}
                            <img src={doubleQuotes} alt="double quotes" className={styles.quotes + " " + styles.quotesAdaptive} />
                        </p>
                    </div>
                    {isTablet ? null : <img src={testimonials[current].image} alt="Testimonial" className={styles.testimonialImage} />}
                    <div className={styles.author}>
                        <div className={styles.authorContainer}>
                            <div className={styles.reviewWrapper}>
                                <img src={testimonials[current].imageReview} alt="Review comment" className={styles.reviewComment} />
                                <div className={styles.authorWrapper}>
                                    <p className={styles.authorName}>{testimonials[current].author}</p>
                                    <p className={styles.authorTitle}>{testimonials[current].title}</p>
                                </div>
                            </div>
                            <div className={styles.arrowContainer}>
                                <img src={arrowLeft} alt="Previous" className={styles.arrow} onClick={handlePrev} />
                                <img src={arrowRight} alt="Next" className={styles.arrow} onClick={handleNext} />
                            </div>
                        </div>
                        {isTablet ? <img src={doubleQuotes} alt="double quotes" className={styles.quotes} /> : null}
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
            </div>
            {/* <img className={styles.greyBg1} src={greyBg} alt="grey bg" /> */}
            {/* <img className={styles.greyBg2} src={greyBg} alt="grey bg" /> */}
            {/* <img className={styles.greyDiamond1} src={greyDiamond} alt="grey diamond" /> */}
            {/* <img className={styles.greyDiamond2} src={greyDiamond} alt="grey diamond" /> */}
        </div>
    );
};
