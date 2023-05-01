import Image from 'next/image';
import { useState } from 'react';

import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagGroup } from 'src/client/shared/components/TagGroup';
import { TagTypes } from 'src/client/shared/components/Tag';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { Popover } from 'src/client/shared/components/Popover';

import { CatalogCardMenu } from './components/CatalogCardMenu';

import styles from './CatalogCard.module.css';

type CatalogCardItem = {
    address: string;
    age: string[];
    name: string;
    type: string;
    owner: string;
};

type CatalogCardProps = {
    item: CatalogCardItem;
    disabled?: boolean;
};

export const CatalogCard = ({ item, disabled }: CatalogCardProps) => {
    const { name, type, address, age, owner } = item;

    const [open, setOpen] = useState(false);

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <article className={[styles['CatalogCard'], disabled ? styles['CatalogCard_disabled'] : undefined].join(' ')}>
            <div className={styles['CatalogCard-Header']}>
                <CardHeader className={styles['CatalogCard-Name']} name={name} type={type} disabled={disabled} />
                <Popover
                    overlayClassName={styles['CatalogCard-PopoverOverlay']}
                    open={open}
                    onOpenChange={handleOpenChange}
                    trigger="click"
                    content={<CatalogCardMenu />}
                    placement="bottomLeft"
                >
                    <Button
                        className={styles['CatalogCard-Button']}
                        icon={<Image width={34} height={34} src="/icons/dots.png" layout="fixed" />}
                        view={ButtonType.Clear}
                        disabled={disabled}
                    />
                </Popover>
            </div>
            <TagGroup
                className={styles['CatalogCard-AgeTags']}
                tagValues={age}
                tagProps={{ type: TagTypes.Default, disabled }}
                maxDisplayed={2}
            />
            <TextWithIcon
                className={styles['CatalogCard-Address']}
                iconUrl={disabled ? '/icons/disabled_address.svg' : '/icons/address.svg'}
            >
                <span className={styles['CatalogCard-Text']} title={address}>
                    {address}
                </span>
            </TextWithIcon>
            <TextWithIcon
                className={styles['CatalogCard-Owner']}
                iconUrl={disabled ? '/icons/disabled_address.svg' : '/icons/address.svg'}
            >
                <span className={styles['CatalogCard-Text']} title={owner}>
                    {owner}
                </span>
            </TextWithIcon>
        </article>
    );
};
