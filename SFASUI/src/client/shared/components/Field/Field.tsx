import React, { PropsWithChildren } from 'react';

import { Hint } from 'src/client/shared/components/Hint';

import styles from 'src/client/shared/components/Field/Field.module.css';

type FieldProps = PropsWithChildren<{
    /** Дополнительный класс */
    className?: string;

    /** Текст, отображаемый внутри лейбла */
    label: string;

    /** Идентификатор html-элемента, с которым связан лейбл */
    htmlFor?: string;

    /** Текст, отображаемый под инпутом */
    description?: string;

    /** Текст, отображаемый подсказке */
    hint?: string;

    /** Параметр, отвечающий за отображение красной звездочки возле лейбла */
    required?: boolean;

    /** Текст ошибки, который будет отображаться под инпутом вместо hint */
    error?: string;

    /**  HTML-тэг корневого элемента */
    tag?: keyof JSX.IntrinsicElements;

    /** Параметр, отвечающий за отображение лейбла */
    hiddenLabel?: boolean;

    /** Семантичное значение блока, пример использования: https://a11y-style-guide.com/style-guide/section-forms.html#kssref-forms-search */
    role?: string;
}>;

export const Field = ({
    className,
    label,
    htmlFor,
    description,
    required,
    error,
    hint,
    tag: Root = 'label',
    children,
    hiddenLabel = false,
    role,
}: FieldProps) => (
    <Root className={[styles['Field'], className].join(' ')} htmlFor={htmlFor}>
        <div className={hiddenLabel ? 'visually-hidden' : styles['Field-Caption']}>
            {label}

            {required && <span className={styles['Field-Star']}> *</span>}
            {hint && <Hint text={hint} />}
        </div>

        <div role={role} className={styles['Field-InputWrapper']}>
            {children}

            {(error || description) && (
                <div className={[styles['Field-Subtext'], error ? styles['Field-Subtext_error'] : ''].join(' ')}>
                    {error || description}
                </div>
            )}
        </div>
    </Root>
);
