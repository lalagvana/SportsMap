import { Dispatch, SetStateAction } from 'react';

import { SidebarItemDetailsType } from 'src/client/screens/MapObjects';
import { Pagination } from "src/client/screens/MapObjects/components/Pagination";
import { SidebarItem } from 'src/client/screens/MapObjects/components/SidebarItem';

import styles from './SidebarItemsList.module.css';

type SidebarItemsListProps = {
    items?: SidebarItemDetailsType[];
    count: number;
    setActiveItem: Dispatch<SetStateAction<SidebarItemDetailsType | null>>;
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
          <Pagination onPrevClick={() => {}} onNextClick={() => {}} count={count}/>
      </>
    );
};
