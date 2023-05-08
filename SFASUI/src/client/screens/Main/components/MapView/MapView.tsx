import { Clusterer, Map, Placemark, useYMaps, ZoomControl } from '@pbe/react-yandex-maps';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { SearchFacilities, useFacilitySearch } from 'src/client/shared/utils/api/facilities';
import { useTheme } from 'src/client/shared/hooks/use-theme';
import { pageRoutes } from "src/client/shared/routes";

import { SEARCH_QUERY } from '../../Main.constants';

import styles from './MapView.module.css';

export type MapViewProps = {
    initialFacilityObjects?: SearchFacilities.Response;
};

export const MapView = ({ initialFacilityObjects }: MapViewProps) => {
    const { data: sportObjectsListAll } = useFacilitySearch(SEARCH_QUERY, {
        fallbackData: initialFacilityObjects,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        revalidateOnMount: false,
    });

    const { isLight } = useTheme();

    const mapRef = useRef(null);
    const ymaps = useYMaps(['Map']);

    useEffect(() => {
        if (!ymaps || !mapRef.current) {
            return;
        }

        const map = new ymaps.Map(mapRef.current, {
            center: [59.9386, 30.3141],
            zoom: 13,
        });

        map.behaviors.disable('scrollZoom');
    }, [ymaps]);

    return (
        <section className={styles['MapView']}>
            <Map
                width="100%"
                height="849px"
                defaultState={{
                    center: [59.9386, 30.3141],
                    zoom: 13,
                    behaviors: ['drag', 'dblClickZoom', 'multiTouch'],
                }}
            >
                <ZoomControl options={{ position: { right: 20, top: '30vh' } }} />

                <Clusterer
                    options={{
                        clusterIconColor: isLight ? '#59C2E7' : '#5F85DB',
                        groupByCoordinates: false,
                    }}
                >
                    {sportObjectsListAll?.facilities?.map(({ x, y, name, id }) => (
                        <Placemark
                            key={id}
                            modules={['geoObject.addon.hint']}
                            geometry={[x, y]}
                            properties={{
                                hintContent: `<span className="map-hint">${name}</span>`,
                            }}
                            options={{
                                iconLayout: 'default#image',
                                iconImageHref: isLight ? '/icons/default_point.svg' : '/icons/default_point_black.svg',
                                iconImageSize: [40, 40],
                                hintCloseTimeout: 0,
                            }}
                        />
                    ))}
                </Clusterer>
            </Map>

            <div className={styles['MapView-Content']}>
                <div className={styles['MapView-Details']}>
                    <p className={styles['MapView-DetailsText']}>Подробнее узнать об объекте Вы можете на карте</p>
                    <Button className={styles['MapView-DetailsButton']}>
                        <Link passHref href={pageRoutes.map}>
                            <a>
                                <span className={styles['MapView-DetailsLinkText']}>Перейти на карту</span>
                            </a>
                        </Link>
                    </Button>
                </div>

                <TextWithIcon className={styles['MapView-Hint']} iconType="exclamation">
                    <p className={styles['MapView-HintText']}>
                        на данный момент доступно только для Красногвардейского района
                    </p>
                </TextWithIcon>
            </div>
        </section>
    );
};
