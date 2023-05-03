import Image from 'next/image';

import { CardHeader } from 'src/client/shared/components/CardHeader';
import { Button } from 'src/client/shared/components/Button';
import { ItemInfo } from 'src/client/shared/components/ItemInfo';
import { PhotoCarousel } from 'src/client/shared/components/PhotoCarousel';

import styles from './SidebarDetails.module.css';

type SidebarDetailsProps = {
    item: Definitions.FacilityResponse;
    onBackClick: () => void;
};

export const SidebarDetails = ({ item, onBackClick }: SidebarDetailsProps) => {
    const { name, type, photo } = item;

    const hasPhoto = photo && photo.length > 0;

    return (
        <article className={styles['SidebarDetails']}>
            <div className={styles['SidebarDetails-Back']} onClick={onBackClick}>
                <Image width={20} height={20} src="/icons/back.svg" layout="fixed" />
            </div>
            {hasPhoto && (
                <PhotoCarousel className={styles['SidebarDetails-Photo']} photos={photo} width={500} height={321} />
            )}
            <CardHeader
                className={[styles['SidebarDetails-Name'], hasPhoto ? undefined : styles['SidebarDetails-Name_top']].join(' ')}
                name={name}
                type={type}
            />

            <ItemInfo {...item} />
            <Button text="Открыть в каталоге" className={styles['SidebarDetails-CatalogButton']} />
        </article>
    );
};
