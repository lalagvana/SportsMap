import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { Catalog } from 'src/client/screens/Catalog';

import NextError from 'src/pages/_error';

type SearchPageProps = {
    data?: any;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<SearchPageProps> = async () => {
    return {
        props: {},
    };
};

const SearchPage: NextPage<SearchPageProps> = ({ data, error }: SearchPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <Catalog {...data} />;
};

export default SearchPage;
