import React from 'react';
import { GetStaticProps, NextPage } from 'next';

import { NewPassword } from "src/client/screens/NewPassword";

import NextError from 'src/pages/_error';

type NewPasswordPageProps = {
    data?: any;
    error?: any;
};

export const getStaticProps: GetStaticProps<NewPasswordPageProps> = async () => {
    return {
        props: {},
    };
};

const NewPasswordPage: NextPage<NewPasswordPageProps> = ({ data, error }: NewPasswordPageProps) => {
    if (error) {
        return <NextError code={500} />;
    }

    return <NewPassword {...data} />;
};

export default NewPasswordPage;
