import React, { InputHTMLAttributes, useCallback, useEffect, useState } from 'react';

import { Hint } from 'src/client/shared/components/Hint';

import styles from './Checkbox.module.css';

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    className?: string;
    label: string;
    onChange?: (checked: boolean) => void;
    hint?: string;
};

export const Checkbox = ({ className, onChange, checked, label, hint, ...rest }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    const onChangeHandler = useCallback(() => {
        if (onChange) {
            onChange(!isChecked);
        }
        setIsChecked(!isChecked);
    }, [onChange, isChecked, setIsChecked]);

    useEffect(() => setIsChecked(checked), [checked]);

    return (
        <label className={styles['Checkbox-Label']}>
            <input
                className={[styles['Checkbox'], className].join(' ')}
                {...rest}
                onChange={onChangeHandler}
                checked={isChecked}
                type="checkbox"
            />
            {label && <span>{label}</span>}
            {hint && <Hint text={hint} />}
        </label>
    );
};
