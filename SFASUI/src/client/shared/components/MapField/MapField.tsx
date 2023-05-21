import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import React, { useCallback } from 'react';
import { useField, useFormikContext } from 'formik';

import { useTheme } from "src/client/shared/hooks/use-theme";

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

  const { isLight } = useTheme();


  return (
        <div className={styles['MapField']}>
            <p className={styles['MapField-Hint']}>Отметьте местоположение спортивного объекта</p>
            <Map
                defaultState={{
                    center: [xField.value || 59.9386, yField.value || 30.3141],
                    zoom: 13,
                }}
                _events={{ click: onClick }}
                className={styles['MapField-Map']}
            >
                <ZoomControl options={{ position: { right: 20, top: 150 } }} />

                {xField.value && yField.value && (
                    <Placemark
                        modules={['geoObject.addon.hint']}
                        geometry={[xField.value, yField.value]}
                        options={{
                          hasHint: false,
                          iconLayout: 'default#image',
                          iconImageHref: isLight ? '/icons/default_point.svg' : '/icons/default_point_black.svg',
                          iconImageSize: [40, 40],
                        }}
                    />
                )}
            </Map>
        </div>
    );
};
