interface Testimonial {
    text: string;
    author: string;
    title: string;
    image: string;
    imageReview: string
}
export const testimonials: Testimonial[] = [
    {
        text: "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
        author: "Hafidz & Indah",
        title: "Owners, Sejadah Grocery",
        image: '/assets/slider-1.svg',
        imageReview: '/assets/image_review.svg'
    },
    {
        text: "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
        author: "Pauline Limgenco",
        title: "Director (Moonleaf) ",
        image: './assets/slider-2.svg',
        imageReview: '/assets/image_review_1.svg'
    },
    {
        text: "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
        author: "Punnasiri Chaipatikul",
        title: "Business Development Manager (Phaitong Station)",
        image: '/assets/slider-3.svg',
        imageReview: '/assets/image_review_2.svg'

    },
    {
        text: "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
        author: "Fathira Dida",
        title: "Owner (Baker Old)",
        image: '/assets/slider-4.svg',
        imageReview: '/assets/image_review_3.svg'
    },
];
