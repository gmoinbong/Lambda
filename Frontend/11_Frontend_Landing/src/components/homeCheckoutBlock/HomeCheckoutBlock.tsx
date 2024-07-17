import React, { FC } from 'react'
import styles from './HomeCheckoutBlock.module.css'
import greyBackground from '../../assets/background/greyBackground.png'



interface Props {

}

export const HomeCheckoutBlock: FC<Props> = ({ }) => {
    return (
        <div className={styles.container}>
            <img className={styles.greyBg} src={greyBackground} alt="grey background" />
        </div>
    )
}