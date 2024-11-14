import styles from './HomeTestimonialBlock.module.css';

interface Testimonial {
    text: string;
    author: string;
    title: string;
    image: string;
    imageReview: string;
    imageClassName: keyof typeof styles;  
    imageReviewClassName: keyof typeof styles; 
    textClassName: keyof typeof styles;
    textWrapperClassName: keyof typeof styles;
}
export const testimonials: Testimonial[] = [
    {
        text: "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
        author: "HAFIDZ & INDAH",
        title: "OWNERS, SEJADAH GROCERY",
        image: '/assets/slider-1.svg',
        imageReview: '/assets/image_review.svg',
        imageClassName: 'testimonialImageStyle1',
        imageReviewClassName: 'reviewImageStyle1', 
        textClassName: 'textStyle1',
        textWrapperClassName: 'textWrapperStyle1'
    },
    {
        text: "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
        author: "PAULINE LIMGENCO",
        title: "DIRECTOR (MOONLEAF)",
        image: './assets/slider-2.svg',
        imageReview: '/assets/image_review_1.svg',
        imageClassName: 'testimonialImageStyle2',
        imageReviewClassName: 'reviewImageStyle2',
        textClassName: 'textStyle2',
        textWrapperClassName: 'textWrapperStyle2'
    },
    {
        text: "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
        author: "PUNNASIRI CHAIPATIKUL",
        title: "BUSINESS DEVELOPMENT MANAGER (PHAITONG STATION)",
        image: '/assets/slider-3.svg',
        imageReview: '/assets/image_review_2.svg',
        imageClassName: 'testimonialImageStyle3',
        imageReviewClassName: 'reviewImageStyle3',  
        textClassName: 'textStyle3',
        textWrapperClassName: 'textWrapperStyle3'
    },
    {
        text: "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
        author: "FATHIRA DIDA",
        title: "OWNER (BAKER OLD)",
        image: '/assets/slider-4.svg',
        imageReview: '/assets/image_review_3.svg',
        imageClassName: 'testimonialImageStyle4',
        imageReviewClassName: 'reviewImageStyle4',  
        textClassName: 'textStyle4',
        textWrapperClassName: 'textWrapperStyle4'
    },
];

