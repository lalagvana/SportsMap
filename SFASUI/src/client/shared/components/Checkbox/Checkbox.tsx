import { InputHTMLAttributes, useCallback, useEffect, useState } from "react";

import styles from './Checkbox.module.css';

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> & {
    className?: string;
    label: string;
    onChange?: (checked: boolean) => void;
};

export const Checkbox = ({ className, onChange, checked, label, ...rest }: CheckboxProps) => {
    const [isChecked, setIsChecked] = useState(checked);
    const onChangeHandler = useCallback(() => {
        if (onChange) {
            onChange(!isChecked);
        }
        setIsChecked(!isChecked);
    }, [onChange, isChecked, setIsChecked]);

    useEffect(() => setIsChecked(checked), [checked])

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
        </label>
    );
};
