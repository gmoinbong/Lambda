import React, { FC } from 'react'
import styles from "./Home.module.css"
import { Header } from '../../components/Header/Header'
import { HomeContentBlock } from '../../components/homeContentBlock/HomeContentBlock'
import { HomeCheckoutBlock } from '../../components/homeCheckoutBlock/HomeCheckoutBlock'

interface Props {
}

export const Home: FC<Props> = ({ }) => {
    return (
        <div className={styles.home}>
            <Header />
            <HomeContentBlock />
            <HomeCheckoutBlock />
        </div>
    )
}