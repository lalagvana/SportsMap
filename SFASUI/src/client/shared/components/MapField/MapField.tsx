import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React, { useCallback } from 'react';
import { useField, useFormikContext } from 'formik';

import styles from './MapField.module.css';

export const MapField = () => {
    const { setFieldValue } = useFormikContext();
    const [xField] = useField('x');
    const [yField] = useField('y');

    const onClick = useCallback(
        (e) => {
            const coords = e.get('coords');
            setFieldValue('x', coords[0]);
            setFieldValue('y', coords[1]);
        },
        [setFieldValue]
    );

    return (
        <div className={styles['MapField']}>
            <p className={styles['MapField-Hint']}>Отметьте местоположение спортивного объекта</p>
            <Map
                width="100%"
                height="100%"
                defaultState={{
                    center: [xField.value || 59.9386, yField.value || 30.3141],
                    zoom: 13,
                }}
                _events={{ click: onClick }}
            >
                <ZoomControl options={{ position: { right: 20, top: 150 } }} />

                {xField.value && yField.value && (
                    <Placemark
                        modules={['geoObject.addon.hint']}
                        geometry={[xField.value, yField.value]}
                        options={{
                          hasHint: false,
                          iconLayout: 'default#image',
                          iconImageHref: '/icons/default_point.svg',
                          iconImageSize: [40, 40],
                        }}
                    />
                )}
            </Map>
        </div>
    );
};
