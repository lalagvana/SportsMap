import { GetServerSideProps, NextPage } from 'next';
import React from 'react';

import { Main } from 'src/client/screens/Main';

import NextError from 'src/pages/_error';

type MainPageProps = {
    data?: any;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<
    MainPageProps
> = async () => {
    return {
        props: {},
    };
};

const MainPage: NextPage<MainPageProps> = ({ data, error }: MainPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <Main {...data} />;
};

export default MainPage;
