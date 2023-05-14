import Image from 'next/image';

import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagTypes } from 'src/client/shared/components/Tag';
import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TagGroup } from 'src/client/shared/components/TagGroup';
import { useTheme } from 'src/client/shared/hooks/use-theme';

import { useDefaultImage } from './SidebarItem.hooks';

import styles from './SidebarItem.module.css';

type SidebarItemProps = {
    onClick: () => void;
    item: Definitions.FacilityResponse;
};

export const SidebarItem = ({ onClick, item }: SidebarItemProps) => {
    const { name, address, age, type, photo } = item;

    const hasPhoto = photo && photo.length > 0;

    const defaultPhoto = useDefaultImage(type, 80, 80);

    const { theme } = useTheme();

    return (
        <article onClick={onClick} className={styles['SidebarItem']}>
            <CardHeader className={styles['SidebarItem-Name']} name={name} type={type} />
            <TagGroup
                className={styles['SidebarItem-AgeTags']}
                tagValues={age}
                tagProps={{ type: TagTypes.Default }}
                maxDisplayed={2}
            />

            <TextWithIcon className={styles['SidebarItem-Address']} iconType="address">
                <span className={styles['SidebarItem-AddressText']} title={address}>
                    {address}
                </span>
            </TextWithIcon>
            <div className={[styles['SidebarItem-Photo'], styles[`SidebarItem-Photo_${theme}`]].join(' ')}>
                {hasPhoto ? (
                    <Image
                        style={{ borderRadius: '10px' }}
                        objectFit="cover"
                        src={photo[0].url}
                        width={135}
                        height={135}
                    />
                ) : (
                    defaultPhoto
                )}
            </div>
        </article>
    );
};
