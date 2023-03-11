import { Skeleton } from "src/client/shared/components/Skeleton/Skeleton";

import styles from './SidebarItemSkeleton.module.css';

export const SidebarItemSkeleton = () => (
    <div className={styles['SidebarItemSkeleton']}>
        <Skeleton className={styles['SidebarItemSkeleton-Name']} />
        <Skeleton className={styles['SidebarItemSkeleton-Address']} />
        <Skeleton className={styles['SidebarItemSkeleton-AgeTags']} />
        <Skeleton className={styles['SidebarItemSkeleton-Photo']} />
    </div>
);
