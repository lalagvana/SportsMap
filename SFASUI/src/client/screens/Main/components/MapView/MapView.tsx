import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React from 'react';
import Link from 'next/link';

import { Button } from 'src/client/shared/components/Button';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { useFacilitySearch } from 'src/client/shared/utils/api/facilities';

import styles from './MapView.module.css';

export const MapView = () => {
    const { data: sportObjectsListAll } = useFacilitySearch(
        {
            limit: undefined,
            offset: undefined,
        },
        {
            revalidateOnFocus: false,
            revalidateOnReconnect: false,
            revalidateOnMount: true,
        }
    );
    return (
        <section className={styles['MapView']}>
            <Map
                width="100%"
                height="849px"
                defaultState={{
                    center: [59.9386, 30.3141],
                    zoom: 13,
                }}
            >
                <ZoomControl options={{ position: { right: 20, top: '30vh' } }} />
                {sportObjectsListAll?.facilities?.map(({ x, y, name, id }) => (
                    <Placemark
                        key={id}
                        modules={['geoObject.addon.hint']}
                        geometry={[x, y]}
                        properties={{
                            hintContent: name,
                        }}
                        options={{ iconColor: '#aeca3b' }}
                    />
                ))}
            </Map>

            <div className={styles['MapView-Content']}>
                <div className={styles['MapView-Details']}>
                    <p className={styles['MapView-DetailsText']}>Подробнее узнать об объекте Вы можете на карте</p>
                    <Button className={styles['MapView-DetailsButton']}>
                        <Link passHref href="/map">
                            <a>
                                <span className={styles['MapView-DetailsLinkText']}>Перейти на карту</span>
                            </a>
                        </Link>
                    </Button>
                </div>

                <TextWithIcon className={styles['MapView-Hint']} iconUrl="/icons/exclamation.png">
                    <p className={styles['MapView-HintText']}>Подробнее узнать об объекте Вы можете на карте</p>
                </TextWithIcon>
            </div>
        </section>
    );
};
