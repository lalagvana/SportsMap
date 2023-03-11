import { Dispatch, SetStateAction } from 'react';

import { SidebarItem } from 'src/client/screens/MapObjects/components/SidebarItem';
import { SidebarItemDetails } from "src/client/screens/MapObjects";

import styles from './SidebarItemsList.module.css'

type SidebarItemsListProps = {
    items?: SidebarItemDetails[];
    setActiveItem: Dispatch<SetStateAction<SidebarItemDetails | null>>;
};

export const SidebarItemsList = ({ items = [], setActiveItem }: SidebarItemsListProps) => {
    return (
        <ul className={styles['SidebarItemsList']}>
            {items.map((item) => (
                <li className={styles['SidebarItemsList-Item']}>
                    <SidebarItem onClick={() => setActiveItem(item)} item={item} />
                </li>
            ))}
        </ul>
    );
};
