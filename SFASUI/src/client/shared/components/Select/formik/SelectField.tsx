import React, { ChangeEvent, useCallback } from 'react';
import { useField, useFormikContext } from 'formik';

import { Field } from 'src/client/shared/components/Field';
import { Select, SelectProps } from 'src/client/shared/components/Select';

type SelectFieldProps = Omit<SelectProps, 'id' | 'value' | 'name' | 'onChange' | 'onBlur'> & {
    fieldName: string;
    className?: string;
    label: string;
    description?: string;
    required?: boolean;
};

export const SelectField = ({
    fieldName,
    className,
    label,
    description,
    required = false,
    ...restProps
}: SelectFieldProps) => {
    const [formikField, meta] = useField(fieldName);
    const { setFieldValue } = useFormikContext();

    const showError = Boolean(meta.touched) && Boolean(meta.error);

    const handleChange = useCallback(
        (event: ChangeEvent<HTMLSelectElement>) => {
            setFieldValue(fieldName, event);
        },
        [fieldName, setFieldValue],
    );

    return (
        <Field
            className={className}
            label={label}
            description={description}
            required={required}
            error={showError ? meta.error : undefined}
            htmlFor={formikField.name}
        >
            <Select
                {...restProps}
                id={formikField.name}
                value={formikField.value}
                onChange={handleChange}
                onBlur={formikField.onBlur}
            />
        </Field>
    );
};
