import Image from 'next/image';

import { Modal } from 'src/client/shared/components/Modal';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { FacilityType } from 'src/client/shared/types/facilities';
import { useFacility } from 'src/client/shared/utils/api/facilities';
import { PhotoCarousel } from "src/client/shared/components/PhotoCarousel";

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
            width={1110}
            onCancel={hide}
        >
            <div className={styles['ItemModal']}>
                {item && <Accordeon item={item} className={styles['ItemModal-Info']} />}
                <div className={styles['ItemModal-Aside']}>
                    {item?.photo && item?.photo.length > 0 && <section className={styles['ItemModal-Photo']}>
                        <PhotoCarousel photos={item.photo} width={432} height={276}/>
                    </section>}
                    <section className={styles['ItemModal-Map']}></section>
                </div>
            </div>
        </Modal>
    );
};
