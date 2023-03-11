import { SidebarItemSkeleton } from 'src/client/screens/MapObjects/components/SidebarItemSkeleton';

import styles from './SidebarItemsListSkeleton.module.css';

export const SidebarItemsListSkeleton = () => {
    const skeletonArray = Array(4).fill(null);

    return (
        <ul className={styles['SidebarItemsListSkeleton']}>
            {skeletonArray.map((_, index) => (
                <li className={styles['SidebarItemsListSkeleton-Item']} key={index}>
                    <SidebarItemSkeleton />
                </li>
            ))}
        </ul>
    );
};
