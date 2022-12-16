export type FormProps = {
    subheading?: string;
    heading?: JSX.Element | string;
    description?: string;
    submitButtonText?: string;
    formAction?: string;
    formMethod?: 'get' | 'post';
    textOnLeft?: boolean;
};
