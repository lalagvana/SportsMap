import Image from 'next/image';

import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagTypes } from 'src/client/shared/components/Tag';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TagGroup } from 'src/client/shared/components/TagGroup';

import styles from './SidebarItem.module.css';

type SidebarItemProps = {
    onClick: () => void;
    item: Definitions.FacilityResponse;
};

export const SidebarItem = ({ onClick, item }: SidebarItemProps) => {
    const { name, address, age, type, photo } = item;

    const hasPhoto = photo && photo.length > 0;

    return (
        <article onClick={onClick} className={styles['SidebarItem']}>
            <CardHeader className={styles['SidebarItem-Name']} name={name} type={type} />
            <TagGroup
                className={styles['SidebarItem-AgeTags']}
                tagValues={age}
                tagProps={{ type: TagTypes.Default }}
                maxDisplayed={2}
            />

            <TextWithIcon className={styles['SidebarItem-Address']} iconUrl="/icons/address.svg">
                <span className={styles['SidebarItem-AddressText']} title={address}>
                    {address}
                </span>
            </TextWithIcon>
            <div className={styles['SidebarItem-Photo']}>
                <Image
                    style={{ borderRadius: '10px' }}
                    objectFit="cover"
                    src={hasPhoto ? photo[0].url : '/images/imagePlaceholder.png'}
                    width={140}
                    height={140}
                />
            </div>
        </article>
    );
};
