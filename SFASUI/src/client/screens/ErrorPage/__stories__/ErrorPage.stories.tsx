import React from 'react';

import { ErrorPage, ErrorPageProps } from '../ErrorPage';

export default {
    title: 'Error/Error',
    component: ErrorPage,
};

export const playground = (props: ErrorPageProps) => {
    return <ErrorPage {...props} />;
};

playground.args = {
    code: 500,
    heading: 'Произошла ошибка',
    text: 'Мы уже работаем над проблемой, попробуйте обновить страницу',
    hasCatalogButton: true,
};
