import { FocusEventHandler, useCallback } from 'react';

import styles from './TextInput.module.css';

type TextInputProps = {
    id: string;
    className?: string;
    placeholder?: string;
    value?: string;
    onChange: (value: string) => void;
    onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const TextInput = ({ className, onChange, ...rest }: TextInputProps) => {
    const onChangeHandler = useCallback((event) => onChange(event.target.value), [onChange]);

    return <input className={[styles['TextInput'], className].join(' ')} onChange={onChangeHandler} {...rest} />;
};
