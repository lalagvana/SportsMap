import { useField } from 'formik';

import { TextInput } from "../TextInput";

type TextInputProps = {
    name: string;
    label?: string;
    className?: string;
    required?: boolean;
};

export const TextInputField = ({
    name,
    required = false,
    ...rest
}: TextInputProps) => {
    const [field, meta] = useField(name);

    return (
        <TextInput
            id={name}
            onChange={field.onChange}
            onBlur={field.onBlur}
            {...rest}
        />
    );
};
