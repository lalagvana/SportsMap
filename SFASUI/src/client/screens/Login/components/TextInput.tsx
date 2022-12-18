import tw from 'twin.macro';
import { useField } from 'formik';

const BaseInput = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;

type TextInputProps = {
    name: string;
    label?: string;
    type: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
};

export const TextInput = ({
    name,
    label,
    className,
    required = false,
    ...rest
}: TextInputProps) => {
    const [formikField, meta] = useField(name);

    return (
        <BaseInput
            value={formikField.value}
            name={formikField.name}
            onChange={formikField.onChange}
            onBlur={formikField.onBlur}
            {...rest}
        />
    );
};
