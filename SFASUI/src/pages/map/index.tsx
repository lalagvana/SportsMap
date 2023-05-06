import React from 'react';
import { GetServerSideProps } from 'next';

import { ExtendedNextPage } from 'src/client/shared/types/next';

import { getSearchQuery, mapLayoutRenderer, MapObjects, MapObjectsPageProps } from 'src/client/screens/MapObjects';

import NextError from 'src/pages/_error';
import { searchFacility } from '../../client/shared/utils/api/facilities';

type MapPageProps = {
    data?: MapObjectsPageProps;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<MapPageProps> = async ({ query }) => {
    const searchQuery = getSearchQuery(query);

    const facilityObjects = await searchFacility(searchQuery, 'https://sportsmap.spb.ru/');

    return {
        props: { data: { facilityObjects } },
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
