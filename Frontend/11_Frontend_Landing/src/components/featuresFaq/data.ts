export interface FaqItemProps {
    question: string;
    answer: string;
}


export const faqItems: FaqItemProps[] = [
    {
        question: 'How to get started with Tinvio?',
        answer: 'You can create an account on Tinvio (dashboard or mobile app) within a minute to start managing chats, orders, and invoices. For payments, our Customer Success team will reach out for account verification and onboarding. Once verified, you’ll be good to go!'
    },
    {
        question: 'How does Tinvio work?',
        answer: 'This dashboard is an easy all-in-one interface for you to manage chats, orders, invoices, and payments with your merchants. Merchants just need to download the free Tinvio mobile app to exchange messages, place orders, and make payments. It’s zero friction for them!'
    },
    {
        question: 'How to collect payments on Tinvio?',
        answer: 'Once your account is verified, you’ll be able to request and reconcile payments for all your orders and invoices on Tinvio. Your merchants will receive notifications for each payment request in their favorite channels (e.g., Tinvio app, WhatsApp), and they’ll be able to complete payment in a fast and flexible checkout experience. You’ll receive real-time updates and reports for all your payments!'
    },
    {
        question: 'What are the supported payment methods?',
        answer: 'We’re always enabling new payment methods. Our Customer Success teams will advise on the available methods in your market (including transaction fees for that method). In general, we support bank transfers, credit cards, and B2B BNPL options!'
    },
    {
        question: 'I have more product questions! Who do I contact?',
        answer: 'If you’re already signed up, you can live chat with “Team Tinvio” in the dashboard or mobile app. Otherwise, you can contact us at support@tinvio.com for more information!'
    }
];
