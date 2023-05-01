import React, { useCallback } from 'react';
import { useField, useFormikContext } from 'formik';

import { Field } from 'src/client/shared/components/Field';
import { Checkbox, CheckboxProps } from 'src/client/shared/components/Checkbox';

type CheckboxFieldProps = Omit<CheckboxProps, 'id' | 'value' | 'name' | 'onChange' | 'onBlur'> & {
    fieldName: string;
    className?: string;
    label: string;
    description?: string;
    required?: boolean;
};

export const CheckboxField = ({
    fieldName,
    className,
    label,
    description,
    required = false,
    ...restProps
}: CheckboxFieldProps) => {
    const [formikField, meta] = useField(fieldName);
    const { setFieldValue } = useFormikContext();

    const showError = Boolean(meta.touched) && Boolean(meta.error);

    const handleChange = useCallback((value: boolean) => setFieldValue(fieldName, value), [fieldName, setFieldValue]);

    return (
        <Field
            className={className}
            description={description}
            required={required}
            error={showError ? meta.error : undefined}
            htmlFor={formikField.name}
            label={label}
            hiddenLabel
        >
            <Checkbox
                {...restProps}
                label={label}
                id={formikField.name}
                value={formikField.value}
                onChange={handleChange}
                onBlur={formikField.onBlur}
            />
        </Field>
    );
};
