import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { Login } from 'src/client/screens/Login';

import NextError from 'src/pages/_error';

type LoginPageProps = {
    data?: any;
    error?: any;
};

export const getStaticProps: GetStaticProps<LoginPageProps> = async () => {
    return {
        props: {},
    };
};

const LoginPage: NextPage<LoginPageProps> = ({
    data,
    error,
}: LoginPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <Login {...data} />;
};

export default LoginPage;
