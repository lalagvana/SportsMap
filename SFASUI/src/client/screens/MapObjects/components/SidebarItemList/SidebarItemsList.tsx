import { Dispatch, SetStateAction } from 'react';

import { SidebarItem } from 'src/client/screens/MapObjects/components/SidebarItem';
import { SidebarItemDetailsType } from 'src/client/screens/MapObjects';

import styles from './SidebarItemsList.module.css';

type SidebarItemsListProps = {
    items?: SidebarItemDetailsType[];
    setActiveItem: Dispatch<SetStateAction<SidebarItemDetailsType | null>>;
};

export const SidebarItemsList = ({ items = [], setActiveItem }: SidebarItemsListProps) => {
    return (
        <ul className={styles['SidebarItemsList']}>
            {items.map((item) => (
                <li className={styles['SidebarItemsList-Item']} key={item.id}>
                    <SidebarItem onClick={() => setActiveItem(item)} item={item} />
                </li>
            ))}
        </ul>
    );
};
