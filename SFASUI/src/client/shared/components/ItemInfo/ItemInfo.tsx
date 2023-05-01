import Image from 'next/image';

import { TagGroup } from 'src/client/shared/components/TagGroup';
import { TagTypes } from 'src/client/shared/components/Tag';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { WorkingHours } from 'src/client/shared/components/WorkingHours';

import styles from './ItemInfo.module.css';

export const ItemInfo = ({
    address,
    site,
    age,
    accessibility,
    working_hours,
    paying_type,
    phone_number,
    owner,
}: Definitions.FacilityResponse) => (
    <section className={styles['ItemInfo']}>
        <TagGroup
            className={styles['ItemInfo-PayingTypeTags']}
            tagValues={paying_type}
            tagProps={{ type: TagTypes.Outline }}
        />
        <TagGroup className={styles['ItemInfo-AgeTags']} tagValues={age} tagProps={{ type: TagTypes.Default }} />
        <TextWithIcon className={styles['ItemInfo-Address']} iconUrl="/icons/address.svg">
            <span className={styles['ItemInfo-AddressText']} title={address}>
                {address}
            </span>
        </TextWithIcon>
        {accessibility && (
            <TextWithIcon className={styles['ItemInfo-Availability']} iconUrl="/icons/address.svg">
                <span>Доступная среда:</span>
                <Image width={20} height={20} src="/icons/check.png" layout="fixed" />
            </TextWithIcon>
        )}
        {working_hours && <WorkingHours hours={working_hours} />}

        {phone_number && (
            <TextWithIcon className={styles['ItemInfo-Phone']} iconUrl="/icons/address.svg">
                <span title={phone_number}>{phone_number}</span>
            </TextWithIcon>
        )}
        {site && (
            <TextWithIcon className={styles['ItemInfo-Link']} iconUrl="/icons/address.svg">
                <a
                    className={styles['ItemInfo-LinkText']}
                    href={site}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={site}
                >
                    {site}
                </a>
            </TextWithIcon>
        )}

        <TextWithIcon className={styles['ItemInfo-Owner']} iconUrl="/icons/address.svg">
            <span title={owner}>{owner}</span>
        </TextWithIcon>
    </section>
);
