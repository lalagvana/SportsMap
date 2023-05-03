import React from 'react';
import { GetServerSideProps } from 'next';

import { ExtendedNextPage } from 'src/client/shared/types/next';

import { Catalog, catalogLayoutRenderer } from 'src/client/screens/Catalog';

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

const SearchPage: ExtendedNextPage<SearchPageProps> = ({ data, error }: SearchPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <Catalog {...data} />;
};

SearchPage.layoutRenderer = catalogLayoutRenderer;

export default SearchPage;
