import tw from 'twin.macro';
import { useField } from 'formik';
import styled from 'styled-components';

const Input = tw.input`mt-6 first:mt-0 border-b-2 py-3 focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;
const BaseTextarea = styled(Input).attrs({ as: 'textarea' })`
    ${tw`h-24`}
`;
type TextInputProps = {
    name: string;
    label?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    textareaComponent?: any;
};

export const TextArea = ({
    name,
    required = false,
    textareaComponent: Root = BaseTextarea,
    ...rest
}: TextInputProps) => {
    const [formikField] = useField(name);

    return (
        <Root
            value={formikField.value}
            name={formikField.name}
            onChange={formikField.onChange}
            onBlur={formikField.onBlur}
            required={required}
            {...rest}
        />
    );
};
