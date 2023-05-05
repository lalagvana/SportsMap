import React from 'react';
import { Clusterer, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

import { useFacilitySearch } from 'src/client/shared/utils/api/facilities';

import { Sidebar } from './components/Sidebar';
import { useSearchQuery } from './MapObjects.hooks';

import styles from './MapObject.module.css';

export const MapObjects = () => {
    const searchQuery = useSearchQuery();

    const {
        data: sportObjectsList,
        error,
        isValidating,
    } = useFacilitySearch(searchQuery, {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: true,
    });

    return (
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
                        clusterIconColor: '#59C2E7',
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
                                iconImageHref: '/icons/default_point.svg',
                                iconImageSize: [40, 40],
                                hintCloseTimeout: 0,
                            }}
                        />
                    ))}
                </Clusterer>
            </Map>
        </main>
    );
};
