import React from 'react';
import { GetServerSideProps } from 'next';

import { ExtendedNextPage } from 'src/client/shared/types/next';
import { searchFacility } from 'src/client/shared/utils/api/facilities';

import { getSearchQuery, mapLayoutRenderer, MapObjects, MapObjectsPageProps } from 'src/client/screens/MapObjects';

import NextError from 'src/pages/_error';
import { hasCookie } from 'cookies-next';

type MapPageProps = {
    data?: MapObjectsPageProps;
    error?: any;
};

export const getServerSideProps: GetServerSideProps<MapPageProps> = async ({ query }) => {
    const isLogged = hasCookie('sportsmap_token');

    const facilityObjects = await searchFacility({ hidden: isLogged ? undefined : false }, 'https://sportsmap.spb.ru/');

    const searchQuery = getSearchQuery(query);

    const facilityObjectsQuery = await searchFacility(searchQuery, 'https://sportsmap.spb.ru/');

    return {
        props: { data: { facilityObjects, facilityObjectsQuery } },
    };
};

const MapPage: ExtendedNextPage<MapPageProps> = ({ data, error }: MapPageProps) => {
    if (error) {
        return <NextError code={500} />;
    }

    return <MapObjects {...data} />;
};

MapPage.layoutRenderer = mapLayoutRenderer;

export default MapPage;
