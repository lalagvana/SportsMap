import React from 'react';
import { GetServerSideProps } from 'next';

import { ExtendedNextPage } from "src/client/shared/types/next";

import { mapLayoutRenderer, MapObjects } from "src/client/screens/MapObjects";

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

const MapPage: ExtendedNextPage<MapPageProps> = ({ data, error }: MapPageProps) => {
    if (error) {
        return <NextError statusCode={500} />;
    }

    return <MapObjects {...data} />;
};

MapPage.layoutRenderer = mapLayoutRenderer;

export default MapPage;
