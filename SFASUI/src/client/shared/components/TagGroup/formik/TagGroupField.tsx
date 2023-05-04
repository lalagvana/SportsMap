import React, { useCallback } from 'react';
import { useField, useFormikContext } from 'formik';

import { Field } from 'src/client/shared/components/Field';

import { TagGroup, TagGroupProps } from '../TagGroup';

type TagGroupFieldProps = Omit<TagGroupProps, 'chosenTag' | 'onChange' | 'tagValues'> & {
    fieldName: string;
    className?: string;
    label: string;
    description?: string;
    required?: boolean;
    tagValues: string[];
};

export const TagGroupField = ({
    fieldName,
    className,
    label,
    tagValues,
    description,
    required = false,
    ...restProps
}: TagGroupFieldProps) => {
    const [formikField, meta] = useField<Array<string>>(fieldName);
    const { setFieldValue } = useFormikContext();

    const showError = Boolean(meta.touched) && Boolean(meta.error);

    const handleChange = useCallback(
        (value: string) => {
            if (formikField.value.includes(value)) {
                setFieldValue(
                    fieldName,
                    formikField.value.filter((item) => item !== value)
                );
            } else {
                setFieldValue(fieldName, [...formikField.value, value]);
            }
        },
        [fieldName, setFieldValue, formikField.value]
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
            <TagGroup {...restProps} chosenTag={formikField.value} onChange={handleChange} tagValues={tagValues} />
        </Field>
    );
};
