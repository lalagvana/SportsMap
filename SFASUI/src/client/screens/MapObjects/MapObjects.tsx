import React, { useCallback, useRef, useState } from 'react';
import { Clusterer, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

import { SearchFacilities, useFacilitySearch, useFacilitySearchAll } from 'src/client/shared/utils/api/facilities';
import { useTheme } from 'src/client/shared/hooks/use-theme';
import { appLayoutRenderer } from 'src/client/shared/layouts/AppLayout';
import { Button, ButtonType } from 'src/client/shared/components/Button';

import { Sidebar } from './components/Sidebar';
import { getPlacemarkIcon, getSearchQuery } from './MapObjects.helpers';

import styles from './MapObject.module.css';

export type MapObjectsPageProps = {
    facilityObjects?: SearchFacilities.Response;
    facilityObjectsQuery?: SearchFacilities.Response;
};

export const MapObjects = ({
    facilityObjects: initialFacilityObjects,
    facilityObjectsQuery: initialFacilityObjectsQuery,
}: MapObjectsPageProps) => {
    const { query } = useRouter();
    const searchQuery = getSearchQuery(query);

    const {
        data: sportObjectsList,
        error,
        isValidating,
    } = useFacilitySearch(
        searchQuery,
        {
            fallbackData: initialFacilityObjectsQuery,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateOnMount: true,
        },
        'map'
    );

    const isLogged = getCookie('sportsmap_is_admin');

    const { data: sportObjectsListAll } = useFacilitySearchAll(
        { ...searchQuery, hidden: isLogged ? undefined : false, limit: undefined, offset: undefined },
        {
            fallbackData: initialFacilityObjects,
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateOnMount: false,
        }
    );

    const { isLight } = useTheme();

    const mapRef = useRef(null);

    const [activeItem, setActiveItem] = useState<Definitions.FacilityResponse | null>(null);

    const onOpenItem = useCallback((item: Definitions.FacilityResponse | null) => {
        if (item && mapRef.current) {
            mapRef.current.options.set('maxAnimationZoomDifference', Infinity);
            mapRef.current.panTo([item.x, item.y]).then(() => mapRef.current.setZoom(18, { duration: 500 }));
        }
        setActiveItem(item);
        setIsDrawerOpen(true);
    }, []);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
                    activeItem={activeItem}
                    setActiveItem={onOpenItem}
                    isDrawerOpen={isDrawerOpen}
                    setIsDrawerOpen={setIsDrawerOpen}
                />
                <div className={styles['MapObjects-ShowButton']}>
                    <Button view={ButtonType.Clear} text="Показать объекты" onClick={() => setIsDrawerOpen(true)} />
                </div>
                <Map
                    width="100%"
                    height="100%"
                    instanceRef={mapRef}
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
                        {sportObjectsListAll?.facilities?.map((item) => (
                            <Placemark
                                onClick={() => onOpenItem(item)}
                                key={item.id}
                                modules={['geoObject.addon.hint']}
                                geometry={[item.x, item.y]}
                                properties={{
                                    hintContent: `<span className="map-hint">${item.name}</span>`,
                                }}
                                options={{
                                    iconLayout: 'default#image',
                                    iconImageHref: getPlacemarkIcon(isLight, item.id === activeItem?.id),
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
