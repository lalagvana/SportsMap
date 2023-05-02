import { Dispatch, SetStateAction } from 'react';

import { Pagination } from 'src/client/screens/MapObjects/components/Pagination';
import { SidebarItem } from 'src/client/screens/MapObjects/components/SidebarItem';

import styles from './SidebarItemsList.module.css';

type SidebarItemsListProps = {
    items?: Definitions.FacilityResponse[];
    count: number;
    setActiveItem: Dispatch<SetStateAction<Definitions.FacilityResponse | null>>;
};

export const SidebarItemsList = ({ items = [], setActiveItem, count }: SidebarItemsListProps) => {
    return (
        <>
            <ul className={styles['SidebarItemsList']}>
                {items.map((item) => (
                    <li className={styles['SidebarItemsList-Item']} key={item.id}>
                        <SidebarItem onClick={() => setActiveItem(item)} item={item} />
                    </li>
                ))}
            </ul>
            <Pagination count={count} />
        </>
    );
};
