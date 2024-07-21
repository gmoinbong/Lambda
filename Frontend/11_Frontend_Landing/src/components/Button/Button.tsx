import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
    text?: string;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    children?: ReactNode; 
}

export const Button: FC<Props> = ({ text, color, width, height, className, type = "button", children }) => {
    const buttonStyle = {
        backgroundColor: color,
        width: width,
        height: height,
    };

    return (
        <button type={type} className={styles.button + " " + className} style={buttonStyle} >
            {children}
            {text}
        </button >
    );
};

export default Button;
