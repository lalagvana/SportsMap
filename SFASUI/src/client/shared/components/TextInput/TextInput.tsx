import { InputHTMLAttributes, useCallback } from 'react';

import styles from './TextInput.module.css';

type TextInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    className?: string;
    onChange: (value: string) => void;
};

export const TextInput = ({ className, onChange, ...rest }: TextInputProps) => {
    const onChangeHandler = useCallback((event) => onChange(event.target.value), [onChange]);

    return <input className={[styles['TextInput'], className].join(' ')} onChange={onChangeHandler} {...rest} />;
};
