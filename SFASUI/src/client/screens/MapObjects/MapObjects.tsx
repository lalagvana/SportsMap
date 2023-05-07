import React from 'react';
import { Clusterer, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { SearchFacilities, useFacilitySearch } from 'src/client/shared/utils/api/facilities';
import { useTheme } from 'src/client/shared/hooks/use-theme';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout';

import { Sidebar } from './components/Sidebar';
import { getSearchQuery } from './MapObjects.helpers';

import styles from './MapObject.module.css';

export type MapObjectsPageProps = {
    facilityObjects?: SearchFacilities.Response;
};

export const MapObjects = ({ facilityObjects: initialFacilityObjects }: MapObjectsPageProps) => {
    const { query } = useRouter();
    const searchQuery = getSearchQuery(query);

    const {
        data: sportObjectsList,
        error,
        isValidating,
    } = useFacilitySearch(searchQuery, {
        fallbackData: initialFacilityObjects,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    const { isLight } = useTheme();

    return (
        <>
            <Head>
                <title>Карта</title>
                <meta name="title" content="Карта" />
            </Head>
            <main className={styles['MapObjects']}>
                <Sidebar
                    count={sportObjectsList?.count}
                    className={styles['Sidebar']}
                    error={error}
                    items={sportObjectsList?.facilities}
                    isLoading={isValidating}
                />
                <Map
                    width="100%"
                    height="100vh"
                    defaultState={{
                        center: [59.9386, 30.3141],
                        zoom: 13,
                    }}
                >
                    <ZoomControl options={{ position: { right: 20, top: '30vh' } }} />
                    <Clusterer
                        options={{
                            clusterIconColor: isLight ? '#59C2E7' : '#5F85DB',
                            groupByCoordinates: false,
                        }}
                    >
                        {sportObjectsList?.facilities?.map(({ x, y, name, id }) => (
                            <Placemark
                                key={id}
                                modules={['geoObject.addon.hint']}
                                geometry={[x, y]}
                                properties={{
                                    hintContent: `<span className="map-hint">${name}</span>`,
                                }}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: isLight
                                        ? '/icons/default_point.svg'
                                        : '/icons/default_point_black.svg',
                                    iconImageSize: [40, 40],
                                    hintCloseTimeout: 0,
                                }}
                            />
                        ))}
                    </Clusterer>
                </Map>
            </main>
        </>
    );
};

export const mapLayoutRenderer = appLayoutRenderer('', false);
