import { FC, useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { testimonials } from './data';
import styles from './HomeTestimonialBlock.module.css';

export const HomeTestimonialBlock: FC = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
    }, [current]);

    const handleImageLoad = () => {
        setIsLoaded(true);
    };

    const handlePrev = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
            setIsAnimating(false);
        }, 600);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
            setIsAnimating(false);
        }, 600);
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: handleNext,
        onSwipedRight: handlePrev,
        trackMouse: true,

    });

    return (
        <div className={styles.testimonialBlock}   {...swipeHandlers}>
            <div className={styles.cardWrapper}>
                <h2 className={styles.title}>Why choose Tinvio?</h2>
                <div className={styles.testimonialCard}>
                    <img
                        src={testimonials[current].image}
                        alt="Testimonial"
                        className={`${styles.testimonialImage} ${styles[testimonials[current].imageClassName]} ${isLoaded ? styles.fade : ''}`}
                        onLoad={handleImageLoad} />
                    <div className={`${styles.textWrapper} ${styles[testimonials[current].textWrapperClassName]} ${isLoaded ? styles.fade : ''}`}>
                        <p className={`${styles.text} ${styles[testimonials[current].textClassName]} ${isLoaded ? styles.fade : ''}`}>
                            {testimonials[current].text}
                            <br />
                            <img src={'/assets/double-quotes.svg'} alt="double quotes" className={`${styles.quotes} ${styles.quotesAdaptive} ${isLoaded ? styles.fade : ''}`} onLoad={handleImageLoad} />
                        </p>
                    </div>
                    <div className={styles.author}>
                        <div className={styles.authorContainer}>
                            <div className={styles.reviewWrapper}>
                                <img src={testimonials[current].imageReview} alt="Review comment" className={`${styles.reviewComment}  ${isLoaded ? styles.fade : ''}`} onLoad={handleImageLoad} />
                                <div className={styles.authorWrapper}>
                                    <p className={`${styles.authorName}  ${isLoaded ? styles.fade : ''}`}>{testimonials[current].author}</p>
                                    <p className={`${styles.authorTitle}  ${isLoaded ? styles.fade : ''}`}>{testimonials[current].title}</p>
                                </div>
                            </div>
                            <div className={styles.arrowContainer}>
                                <img src={'/assets/arrow-left.svg'} alt="Previous" className={styles.arrow} onClick={handlePrev} />
                                <img src={'/assets/arrow-right.svg'} alt="Next" className={styles.arrow} onClick={handleNext} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.dots}>
                    {testimonials.map((_, index) => (
                        <span
                            key={index}
                            className={styles.dot}
                            style={{ backgroundColor: current === index ? 'rgba(255, 255, 255, 0.9)' : 'rgba(255, 255, 255, 0.3)' }}
                            onClick={() => setCurrent(index)}>
                        </span>
                    ))}
                </div>
            </div>
            <img className={styles.greyBg1} src={'./assets/background/rectangleGroup.png'} alt="grey bg" />
            <img className={styles.greyBg2} src={'./assets/background/rectangleGroup.png'} alt="grey bg" />
            <img className={styles.greyDiamond1} src='/assets/background/greyDiamondCut.png' alt="grey diamond" />
            <img className={styles.greyDiamond2} src={'./assets/background/greyDiamond.svg'} alt="grey diamond" />
        </div >
    );
};
