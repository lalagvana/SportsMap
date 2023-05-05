import Image from 'next/image';
import React from 'react';
import { Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';

import { Modal } from 'src/client/shared/components/Modal';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { FacilityType } from 'src/client/shared/types/facilities';
import { useFacility } from 'src/client/shared/utils/api/facilities';
import { PhotoCarousel } from 'src/client/shared/components/PhotoCarousel';

import { Accordeon } from 'src/client/screens/Catalog/components/ItemModal/components/Accordeon';

import styles from './ItemModal.module.css';

type ItemModalProps = {
    item: FacilityType;
    hide: () => void;
};

export const ItemModal = ({ item: initialItem, hide }: ItemModalProps) => {
    const { data: item } = useFacility(initialItem.id, {
        fallbackData: initialItem,
        revalidateOnReconnect: false,
        revalidateOnFocus: false,
        revalidateOnMount: true,
    });

    const hasPhoto = item?.photo && item?.photo.length > 0;

    return (
        <Modal
            open
            title={
                <CardHeader
                    className={styles['ItemModal-Name']}
                    name={item?.name as string}
                    type={item?.type as string}
                />
            }
            closeIcon={<Image width={10} height={10} src="/icons/close.svg" layout="fixed" />}
            footer={null}
            width={1015}
            onCancel={hide}
        >
            <div className={styles['ItemModal']}>
                {item && <Accordeon item={item} className={styles['ItemModal-Info']} />}
                <div className={styles['ItemModal-Aside']}>
                    {hasPhoto && (
                        <section className={styles['ItemModal-Photo']}>
                            <PhotoCarousel photos={item.photo} width={432} height={276} />
                        </section>
                    )}
                    <section className={styles['ItemModal-Map']}>
                        <Map
                            width="432px"
                            height={hasPhoto ? '300px' : '100%'}
                            defaultState={{
                                center: [item?.x || 59.9386, item?.y || 30.3141],
                                zoom: 13,
                            }}
                        >
                            <ZoomControl options={{ position: { right: 20, top: 150 } }} />

                            {item && (
                                <Placemark
                                    modules={['geoObject.addon.hint']}
                                    geometry={[item.x, item.y]}
                                    properties={{
                                        hasHint: false,
                                    }}
                                    options={{
                                        iconLayout: 'default#image',
                                        iconImageHref: '/icons/default_point.svg',
                                        iconImageSize: [40, 40],
                                    }}
                                />
                            )}
                        </Map>
                    </section>
                </div>
            </div>
        </Modal>
    );
};
