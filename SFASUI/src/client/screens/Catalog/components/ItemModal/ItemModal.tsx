import Image from 'next/image';

import { Modal } from 'src/client/shared/components/Modal';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { FacilityType } from "src/client/shared/types/facilities";

import { Accordeon } from 'src/client/screens/Catalog/components/ItemModal/components/Accordeon';

import styles from './ItemModal.module.css';

type ItemModalProps = {
    item: FacilityType;
};

export const ItemModal = ({ item }: ItemModalProps) => {
    const { name, type, photo } = item;

    return (
        <Modal
            open
            title={<CardHeader className={styles['ItemModal-Name']} name={name} type={type} />}
            closeIcon={<Image width={10} height={10} src="/icons/close.svg" layout="fixed" />}
            footer={null}
            width={1015}
        >
            <div className={styles['ItemModal']}>
                <Accordeon item={item} className={styles['ItemModal-Info']} />
                <div className={styles['ItemModal-Aside']}>
                    {photo && photo.length > 0 && <section className={styles['ItemModal-Photo']}></section>}
                    <section className={styles['ItemModal-Map']}></section>
                </div>
            </div>
        </Modal>
    );
};
