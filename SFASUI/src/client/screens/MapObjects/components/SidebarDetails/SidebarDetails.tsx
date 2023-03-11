import Image from 'next/image';

import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagTypes } from 'src/client/shared/components/Tag';
import { Button } from 'src/client/shared/components/Button';
import { WorkingHours } from 'src/client/shared/components/WorkingHours';
import { TagGroup } from 'src/client/shared/components/TagGroup';

import { SidebarItemDetailsType } from 'src/client/screens/MapObjects';

import styles from './SidebarDetails.module.css';

type SidebarDetailsProps = {
    item: SidebarItemDetailsType;
    onBackClick: () => void;
};

export const SidebarDetails = ({ item, onBackClick }: SidebarDetailsProps) => {
    const { link, address, age, availability, workingHours, name, payingType, type, id, phone, photos, owner } = item;

    return (
        <article className={styles['SidebarDetails']}>
            <div className={styles['SidebarDetails-Back']} onClick={onBackClick}>
                <Image width={20} height={20} src="/icons/back.svg" layout="fixed" />
            </div>
            <section className={styles['SidebarDetails-Info']}>
                <CardHeader className={styles['SidebarDetails-Name']} name={name} type={type} />
                <TextWithIcon className={styles['SidebarDetails-Address']} iconUrl="/icons/address.svg">
                    <span className={styles['SidebarItem-AddressText']} title={address}>
                        {address}
                    </span>
                </TextWithIcon>
                {phone && (
                    <TextWithIcon className={styles['SidebarDetails-Phone']} iconUrl="/icons/address.svg">
                        <span title={phone}>{phone}</span>
                    </TextWithIcon>
                )}
                {link && (
                    <TextWithIcon className={styles['SidebarDetails-Link']} iconUrl="/icons/address.svg">
                        <a
                            className={styles['SidebarDetails-LinkText']}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={link}
                        >
                            {link}
                        </a>
                    </TextWithIcon>
                )}
                {workingHours && <WorkingHours hours={workingHours} />}
                <TextWithIcon className={styles['SidebarDetails-AgeTags']} iconUrl="/icons/address.svg">
                    <TagGroup tagValues={age} tagProps={{ type: TagTypes.Default }} />
                </TextWithIcon>
                <TextWithIcon className={styles['SidebarDetails-Owner']} iconUrl="/icons/address.svg">
                    <span title={owner}>{owner}</span>
                </TextWithIcon>
                <TextWithIcon className={styles['SidebarDetails-PayingTypeTags']} iconUrl="/icons/address.svg">
                    <TagGroup tagValues={payingType} tagProps={{ type: TagTypes.Default }} />
                </TextWithIcon>
                {availability && (
                    <div className={styles['SidebarDetails-Availability']}>
                        <span>Доступная среда:</span>
                        <Image width={20} height={20} src="/icons/address.svg" layout="fixed" />
                    </div>
                )}
            </section>
            <Button text="Открыть в каталоге" className={styles['SidebarDetails-CatalogButton']} />
        </article>
    );
};
