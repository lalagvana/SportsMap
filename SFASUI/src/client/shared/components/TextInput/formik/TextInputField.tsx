import React from 'react';
import { useField } from 'formik';

import { Field } from 'src/client/shared/components/Field';

import { TextInput, TextInputProps } from '..';

type TextFieldProps = Omit<TextInputProps, 'id' | 'value' | 'name' | 'onChange' | 'onBlur'> & {
    fieldName: string;
    className?: string;
    label: string;
    description?: string;
    required?: boolean;
    hiddenLabel?: boolean;
    inputClassName?: string;
};

export const TextInputField = ({
    fieldName,
    className,
    label,
    inputClassName,
    description,
    hiddenLabel,
    required = false,
    ...restProps
}: TextFieldProps) => {
    const [formikField, meta] = useField(fieldName);

    const showError = Boolean(meta.touched) && Boolean(meta.error);

    return (
        <Field
            hiddenLabel={hiddenLabel}
            className={className}
            label={label}
            description={description}
            required={required}
            error={showError ? meta.error : undefined}
            htmlFor={formikField.name}
        >
            <TextInput
                {...restProps}
                className={inputClassName}
                id={formikField.name}
                value={formikField.value}
                name={formikField.name}
                onChange={formikField.onChange}
                onBlur={formikField.onBlur}
            />
        </Field>
    );
};
