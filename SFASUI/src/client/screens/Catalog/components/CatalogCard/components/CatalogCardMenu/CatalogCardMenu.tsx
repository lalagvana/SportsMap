import { FacilityType } from 'src/client/shared/types/facilities';
import { useVisible } from 'src/client/shared/hooks/use-visible';
import { ConfirmationModal } from 'src/client/shared/components/ConfirmationModal';

import { useMenuItems } from './CatalogCardMenu.hooks';
import { ItemModifyModal } from '../../../ItemEditModal/components/ItemModifyModal';
import { ItemModal } from '../../../ItemModal';

import styles from './CatalogCardMenu.module.css';

type CatalogCardMenuProps = {
    item: FacilityType;
    hidePopup: () => void;
};

export const CatalogCardMenu = ({ item, hidePopup }: CatalogCardMenuProps) => {
    const { isVisible: isEditVisible, open: openEditModal, hide: hideEditModal } = useVisible({ onOpen: hidePopup });
    const { isVisible: isInfoVisible, open: openInfoModal, hide: hideInfoModal } = useVisible({ onOpen: hidePopup });
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
            <ul className={styles['CatalogCardMenu']}>
                {menuItems.map(({ text, onClick }) => (
                    <li className={styles['CatalogCardMenu-Item']} key={text} onClick={onClick}>
                        {text}
                    </li>
                ))}
            </ul>
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
