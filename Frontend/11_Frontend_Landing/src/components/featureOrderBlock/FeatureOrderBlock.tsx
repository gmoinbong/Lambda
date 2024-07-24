import React, { FC } from 'react'
import styles from './FeatureOrderBlock.module.css'
import orderRomb from '../../assets/features/orderRomb.svg'

interface Props {

}

export const FeatureOrderBlock: FC<Props> = ({ }) => {
    return (
        <div>
123
            <img src={orderRomb} alt="order example" />
        </div>
    )
}