import testimonialImage1 from '../../assets/slider-1.svg';
import testimonialImage2 from '../../assets/slider-2.svg';
import testimonialImage3 from '../../assets/slider-3.svg';
import testimonialImage4 from '../../assets/slider-4.svg';

interface Testimonial {
    text: string;
    author: string;
    title: string;
    image: string;
}
export const testimonials: Testimonial[] = [
    {
        text: "Tinvio has been a foundational partner and solution. We now have faster and more efficient communication with our clients, which makes order processing and deliveries smoother than ever before.",
        author: "Hafidz & Indah",
        title: "Owners, Sejadah Grocery",
        image: testimonialImage1,
    },
    {
        text: "With Tinvio, it's easier for my customers to make payments across various methods. Every payment is also collected in one business account where funds can be withdrawn instantly at any time.",
        author: "John Doe",
        title: "Owner, ABC Business",
        image: testimonialImage2,
    },
    {
        text: "Tinvio helps our business run smoother. We can manage our customer's orders, receivables, and most importantly, trace and reconcile their payments without checking banking apps or statements.",
        author: "Jane Smith",
        title: "Manager, XYZ Services",
        image: testimonialImage3,
    },
    {
        text: "Tinvio definitely helps to reduce the time and errors in order management between customers and suppliers. It’s super easy to use and available on mobile and web, and the team are friendly and always helpful.",
        author: "Emily Brown",
        title: "Director, 123 Supplies",
        image: testimonialImage4,
    },
];
