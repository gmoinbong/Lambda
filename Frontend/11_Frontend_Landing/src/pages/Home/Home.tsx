import React, { FC } from 'react'
import styles from "./Home.module.css"
import { Header } from '../../components/Header/Header'
import { HomeContentBlock } from '../../components/homeContentBlock/HomeContentBlock'
import { HomeCheckoutBlock } from '../../components/homeCheckoutBlock/HomeCheckoutBlock'
import { HomeFeatureBlock } from '../../components/homeFeatureBlock.tsx/HomeFeatureBlock'
import { HomeTestimonialBlock } from '../../components/homeTestimonialBlock/HomeTestimonialBlock'
import { FeaturedOn } from '../../components/featuredOn/FeaturedOn'
import { HappyBz } from '../../components/happyBz/HappyBz'
import { ContactForm } from '../../components/contactForm/ContactForm'
import Footer from '../../components/Footer/Footer'

interface Props {
}

export const Home: FC<Props> = ({ }) => {
    return (
        <div className={styles.home}>
            <Header />
            <HomeContentBlock />
            <HomeCheckoutBlock />
            <HomeFeatureBlock />
            <FeaturedOn />
            <HomeTestimonialBlock />
            <HappyBz />
            <ContactForm />
            <Footer />
        </div>
    )
}