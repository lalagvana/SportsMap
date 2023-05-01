import { InputHTMLAttributes } from 'react';

import styles from './TextInput.module.css';

export type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
    className?: string;
};

export const TextInput = ({ className, ...rest }: TextInputProps) => {
    return <input className={[styles['TextInput'], className].join(' ')} {...rest} />;
};
