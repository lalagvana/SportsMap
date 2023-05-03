import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import { ButtonType } from './Button.types';

import styles from './Button.module.css';

type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        text?: string;
        view?: ButtonType;
        disabled?: boolean;
        className?: string;
        icon?: ReactNode;
        onClick?: () => void;
    }
>;

export const Button = ({
    text,
    view = ButtonType.Default,
    className,
    icon,
    onClick,
    disabled = false,
    children,
}: ButtonProps) => (
    <button
        onClick={onClick}
        className={[
            styles['Button'],
            styles[`Button_${view}`],
            disabled ? styles['Button_disabled'] : undefined,
            className,
        ].join(' ')}
        disabled={disabled}
    >
        {text && <span className={styles['Button-Text']}>{text}</span>}
        {children}
        {icon}
    </button>
);
