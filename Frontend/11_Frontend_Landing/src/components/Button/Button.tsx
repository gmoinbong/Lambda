import React, { FC, ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
    text?: string;
    color?: string;
    bgColor?: string;
    width?: string;
    height?: string;
    className?: string;
    type?: "button" | "submit" | "reset";
    children?: ReactNode;
    icon?: string;
}

export const Button: FC<Props> = ({ text, color, bgColor, width, height, className, type = "button", children, icon }) => {
    const buttonStyle = {
        backgroundColor: bgColor,
        width: width,
        height: height,
        color: color
    };

    return (
        <button type={type} className={styles.button + " " + className} style={buttonStyle}>
            {icon && <img src={icon} alt="icon" className={styles.icon} />}
            {children}
            {text}
        </button>
    );
};

export default Button;
