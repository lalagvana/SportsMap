import React from 'react';

import { Hint } from 'src/client/shared/components/Hint';

import styles from './ItemField.module.css';

type ItemFieldProps = {
    label: string;
    value: string | number;
    units?: string;
    hint?: string;
    className?: string;
};

export const ItemField = ({ label, value, units, className, hint }: ItemFieldProps) => (
    <dl className={[styles['ItemField'], className].join(' ')}>
        <div className={styles['ItemField-LabelWrapper']}>
            <dt className={styles['ItemField-Label']}>{label}</dt>
            {hint && <Hint text={hint} />}
        </div>

        <dd className={styles['ItemField-Value']}>
            {value} {units}
        </dd>
    </dl>
);
