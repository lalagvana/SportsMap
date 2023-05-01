import { useState } from 'react';

import { Button } from 'src/client/shared/components/Button';

import { SidebarDetails } from '../SidebarDetails';
import { SidebarItemsList } from '../SidebarItemList';
import { SidebarFilters } from '../SidebarFilters';
import { SidebarItemsListSkeleton } from '../SidebarItemsListSkeleton';
import { SidebarMessage } from '../SidebarMessage';

import styles from './Sidebar.module.css';

type SidebarProps = {
    items?: Definitions.FacilityResponse[];
    isLoading?: boolean;
    error?: any;
    count?: number;
    className: string;
};

export const Sidebar = ({ items, isLoading = false, error, count, className }: SidebarProps) => {
    const [activeItem, setActiveItem] = useState<Definitions.FacilityResponse | null>(null);

    const showContent = !error && !isLoading && items && items.length > 0;
    const showNotFound = !error && !isLoading && items && items.length === 0;

    return (
        <aside className={className}>
            <SidebarFilters />
            {error && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-ErrorText']}
                    title="Произошла ошибка во время поиска объектов"
                    message="Попробуйте обновить страницу"
                />
            )}
            {!error && isLoading && <SidebarItemsListSkeleton />}
            {showNotFound && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-NotFoundText']}
                    title="Мы не нашли подходящих спортивных объектов"
                    message="Но вы можете их предложить"
                    button={<Button text="Предложить объект" className={styles['Sidebar-NotFoundButton']} />}
                />
            )}
            {showContent && activeItem && <SidebarDetails item={activeItem} onBackClick={() => setActiveItem(null)} />}
            {showContent && !activeItem && (
                <SidebarItemsList
                    setActiveItem={setActiveItem}
                    items={items}
                    count={count || 0}
                />
            )}
        </aside>
    );
};
