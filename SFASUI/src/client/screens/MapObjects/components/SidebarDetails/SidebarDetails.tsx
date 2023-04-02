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
    const { link, address, age, availability, workingHours, name, payingType, type, phone, photos, owner } = item;

    return (
        <article className={styles['SidebarDetails']}>
            <div className={styles['SidebarDetails-Back']} onClick={onBackClick}>
                <Image width={20} height={20} src="/icons/back.svg" layout="fixed" />
            </div>
            <section className={styles['SidebarDetails-Info']}>
                <CardHeader className={styles['SidebarDetails-Name']} name={name} type={type} />
                <TagGroup
                    className={styles['SidebarDetails-PayingTypeTags']}
                    tagValues={payingType}
                    tagProps={{ type: TagTypes.Outline }}
                />
                <TagGroup
                    className={styles['SidebarDetails-AgeTags']}
                    tagValues={age}
                    tagProps={{ type: TagTypes.Default }}
                />
                <TextWithIcon className={styles['SidebarDetails-Address']} iconUrl="/icons/address.svg">
                    <span className={styles['SidebarItem-AddressText']} title={address}>
                        {address}
                    </span>
                </TextWithIcon>
                {availability && (
                    <TextWithIcon className={styles['SidebarDetails-Availability']} iconUrl="/icons/address.svg">
                        <span>Доступная среда:</span>
                        <Image width={20} height={20} src="/icons/check.png" layout="fixed" />
                    </TextWithIcon>
                )}
                {workingHours && <WorkingHours hours={workingHours} />}

                {phone && (
                    <TextWithIcon className={styles['SidebarDetails-Phone']}  iconUrl="/icons/address.svg">
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

                <TextWithIcon className={styles['SidebarDetails-Owner']} iconUrl="/icons/address.svg">
                    <span title={owner}>{owner}</span>
                </TextWithIcon>
            </section>
            <Button text="Открыть в каталоге" className={styles['SidebarDetails-CatalogButton']} />
        </article>
    );
};
