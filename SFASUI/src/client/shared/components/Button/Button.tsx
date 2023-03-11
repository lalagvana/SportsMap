import { ReactNode } from "react";

import { ButtonType } from "./Button.types";

import styles from './Button.module.css';

type ButtonProps = {
    text?: string;
    type?: ButtonType;
    className?: string;
    icon?: ReactNode;
    onClick?: () => void;
};

export const Button = ({ text, type = ButtonType.Default, className, icon, onClick }: ButtonProps) => (
    <button onClick={onClick} className={[styles['Button'], styles[`Button_${type}`], className].join(' ')}>
        {text && <span>{text}</span>}
        {icon}
    </button>
);
