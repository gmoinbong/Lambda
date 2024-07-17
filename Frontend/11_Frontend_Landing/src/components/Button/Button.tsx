import React, { FC } from 'react';
import styles from './Button.module.css';

interface Props {
    text?: string;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
}

export const Button: FC<Props> = ({ text, color, width, height, className }) => {
    const buttonStyle = {
        backgroundColor: color,
        width: width,
        height: height,
    };

    return (
        <button className={styles.button + " " + className} style={buttonStyle} >
            {text}
        </button >
    );
};

export default Button;
