import React from 'react';
import { ErrorPage } from '../client/screens/ErrorPage';

const NotFoundPage = () => (
    <ErrorPage
        code={404}
        heading="Извините, мы не нашли такую страницу"
        text="Но мы можем помочь найти спортивный объект!"
        hasCatalogButton
    />
);

export default NotFoundPage;
