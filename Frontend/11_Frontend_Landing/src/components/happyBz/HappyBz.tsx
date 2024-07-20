import React, { FC } from 'react'
import happyBz from '../../assets/happybz.png'
interface Props {

}

export const HappyBz: FC<Props> = ({ }) => {
    return (
        <div style={{ display:"flex", justifyContent: "center", paddingTop:"10px"}}>
            <img src={happyBz} alt="" width={1200} height={700} />
        </div>
    )
}