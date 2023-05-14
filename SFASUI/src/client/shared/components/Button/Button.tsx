import { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';

import { ButtonType } from './Button.types';

import LoadingIcon from 'public/icons/loading.svg';

import styles from './Button.module.css';

export type ButtonProps = PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement> & {
        text?: string;
        view?: ButtonType;
        disabled?: boolean;
        className?: string;
        icon?: ReactNode;
        onClick?: () => void;
        isLoading?: boolean;
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
    isLoading = false,
}: ButtonProps) => (
    <button
        type="button"
        onClick={onClick}
        className={[
            styles['Button'],
            styles[`Button_${view}`],
            className,
            disabled ? styles['Button_disabled'] : undefined,
            isLoading ? styles['Button_loading'] : undefined,
        ].join(' ')}
        disabled={disabled}
    >
        {isLoading && <LoadingIcon width={20} height={20} className={styles['Button-LoadingIcon']} />}
        {text && <span className={styles['Button-Text']}>{text}</span>}
        {children}
        {icon}
    </button>
);
