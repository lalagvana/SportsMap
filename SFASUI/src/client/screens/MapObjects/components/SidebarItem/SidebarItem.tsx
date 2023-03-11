import Image from 'next/image';

import { SidebarItemDetails } from 'src/client/screens/MapObjects';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagTypes } from 'src/client/shared/components/Tag';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TagGroup } from 'src/client/shared/components/TagGroup';

import styles from './SidebarItem.module.css';

type SidebarItemProps = {
    onClick: () => void;
    item: SidebarItemDetails;
};

export const SidebarItem = ({ onClick, item }: SidebarItemProps) => {
    const { name, address, age, type } = item;

    return (
        <article onClick={onClick} className={styles['SidebarItem']}>
            <CardHeader className={styles['SidebarItem-Name']} name={name} type={type} />
            <TextWithIcon className={styles['SidebarItem-Address']} iconUrl="/icons/address.svg">
                <span className={styles['SidebarItem-AddressText']} title={address}>
                    {address}
                </span>
            </TextWithIcon>
            <TextWithIcon className={styles['SidebarItem-AgeTags']} iconUrl="/icons/address.svg">
                <TagGroup tagValues={age} tagProps={{ type: TagTypes.Default }} />
            </TextWithIcon>
            <div className={styles['SidebarItem-Photo']}>
                <Image src="/images/imagePlaceholder.png" width={128} height={128} />
            </div>
        </article>
    );
};
