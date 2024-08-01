import  { FC, ReactNode } from 'react';
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
    onClick?: () => void;

}

export const Button: FC<Props> = ({ text, color, bgColor, width, height, className, type = "button", children, icon, onClick }) => {
    const buttonStyle = {
        color: color,
        backgroundColor: bgColor,
        width: width,
        height: height,
    };

    return (
        <button type={type} className={styles.button + " " + className} style={buttonStyle} onClick={onClick}>
            {icon && <img src={icon} alt="icon" className={styles.icon} />}
            {children}
            {text}
        </button>
    );
};

export default Button;
