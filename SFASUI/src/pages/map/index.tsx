import React from 'react';
import { GetServerSideProps, NextPage } from 'next';

import { MapObjects } from 'src/client/screens/MapObjects';

import NextError from 'src/pages/_error';

type MapPageProps = {
    data?: any;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<MapPageProps> = async () => {
    return {
        props: {},
    };
};

const MapPage: NextPage<MapPageProps> = ({ data, error }: MapPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <MapObjects {...data} />;
};

export default MapPage;
