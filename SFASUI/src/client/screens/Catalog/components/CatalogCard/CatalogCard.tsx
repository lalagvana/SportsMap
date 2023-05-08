import { useCallback, useState } from 'react';

import { CardHeader } from 'src/client/shared/components/CardHeader';
import { TextWithIcon } from 'src/client/shared/components/TextWithIcon';
import { TagGroup } from 'src/client/shared/components/TagGroup';
import { TagTypes } from 'src/client/shared/components/Tag';
import { Button, ButtonType } from 'src/client/shared/components/Button';
import { Popover } from 'src/client/shared/components/Popover';
import { FacilityType } from 'src/client/shared/types/facilities';
import { ConfirmationModal } from 'src/client/shared/components/ConfirmationModal';
import { useVisible } from 'src/client/shared/hooks/use-visible';

import { CatalogCardMenu } from './components/CatalogCardMenu';
import { useMenuItems } from './CatalogCard.hooks';
import { ItemModifyModal } from '../ItemEditModal/components/ItemModifyModal';
import { ItemModal } from '../ItemModal';

import Dots from 'public/icons/dots.svg';

import styles from './CatalogCard.module.css';

type CatalogCardProps = {
    item: FacilityType;
    disabled?: boolean;
};

export const CatalogCard = ({ item, disabled }: CatalogCardProps) => {
    const { name, type, address, age, owner } = item;

    const [open, setOpen] = useState(false);
    const handleOpenChange = useCallback(
        (newOpen: boolean) => {
            setOpen(newOpen);
        },
        [setOpen]
    );

    const hidePopup = useCallback(() => setOpen(false), [setOpen]);

    const { isVisible: isEditVisible, open: openEditModal, hide: hideEditModal } = useVisible({ onOpen: hidePopup });

    const {
        isVisible: isInfoVisible,
        open: openInfoModal,
        hide: hideInfoModal,
    } = useVisible({
        onOpen: () => hidePopup(),
    });

    const {
        isVisible: isDeleteVisible,
        open: openDeleteModal,
        hide: hideDeleteModal,
    } = useVisible({ onOpen: hidePopup });

    const { menuItems, deleteHandler } = useMenuItems({
        hidePopup,
        item,
        openEditModal,
        openInfoModal,
        openDeleteModal,
        hideDeleteModal,
    });

    return (
        <>
            <article
                className={[styles['CatalogCard'], disabled ? styles['CatalogCard_disabled'] : undefined].join(' ')}
            >
                <div className={styles['CatalogCard-Header']}>
                    <CardHeader
                        className={styles['CatalogCard-Name']}
                        name={name}
                        type={type}
                        disabled={disabled}
                        onClick={openInfoModal}
                    />
                    <Popover
                        overlayClassName={styles['CatalogCard-PopoverOverlay']}
                        open={open}
                        onOpenChange={handleOpenChange}
                        trigger="click"
                        content={<CatalogCardMenu menuItems={menuItems} />}
                        placement="bottomLeft"
                    >
                        <Button
                            className={styles['CatalogCard-Button']}
                            icon={<Dots width={34} height={34} />}
                            view={ButtonType.Clear}
                        />
                    </Popover>
                </div>
                <TagGroup
                    className={styles['CatalogCard-AgeTags']}
                    tagValues={age}
                    tagProps={{ type: TagTypes.Default, disabled }}
                    maxDisplayed={2}
                />
                <TextWithIcon className={styles['CatalogCard-Address']} iconType="address">
                    <span className={styles['CatalogCard-Text']} title={address}>
                        {address}
                    </span>
                </TextWithIcon>
                <TextWithIcon className={styles['CatalogCard-Owner']} iconType="owner">
                    <span className={styles['CatalogCard-Text']} title={owner}>
                        {owner}
                    </span>
                </TextWithIcon>
            </article>

            {isEditVisible && <ItemModifyModal initialValues={item} hide={hideEditModal} />}
            {isInfoVisible && <ItemModal item={item} hide={hideInfoModal} />}
            {isDeleteVisible && (
                <ConfirmationModal
                    width={450}
                    description="Объект будет удален безвозвратно"
                    title="Удалить объект?"
                    onCancel={hideDeleteModal}
                    onOk={deleteHandler}
                />
            )}
        </>
    );
};
