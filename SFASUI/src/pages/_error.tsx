import React from 'react';
import { ErrorPage, ErrorPageProps } from '../client/screens/ErrorPage';

const Error = ({ code, heading, text }: Partial<ErrorPageProps>) => (
    <ErrorPage
        code={code || 500}
        heading={heading || 'Произошла ошибка'}
        text={text || 'Мы уже работаем над проблемой, попробуйте обновить страницу'}
    />
);

export default Error;
