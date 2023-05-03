import styles from './CatalogCardMenu.module.css';
import { useMenuItems } from './CatalogCardMenu.hooks';
import { FacilityType } from '../../../../../../shared/types/facilities';
import { useVisible } from '../../../../../../shared/hooks/use-visible';
import { ItemModifyModal } from '../../../ItemEditModal/components/ItemModifyModal';
import { ItemModal } from '../../../ItemModal/ItemModal';

type CatalogCardMenuProps = {
    item: FacilityType;
    hidePopup: () => void;
};

export const CatalogCardMenu = ({ item, hidePopup }: CatalogCardMenuProps) => {
    const { isVisible: isEditVisible, open: openEditModal, hide: hideEditModal } = useVisible({ onOpen: hidePopup });
    const { isVisible: isInfoVisible, open: openInfoModal, hide: hideInfoModal } = useVisible({ onOpen: hidePopup });

    const { menuItems } = useMenuItems({ hidePopup, item, openEditModal, openInfoModal });

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
        </>
    );
};
