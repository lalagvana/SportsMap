import { useState } from 'react';

import { SidebarItemDetailsType } from 'src/client/screens/MapObjects';
import { SidebarDetails } from '../SidebarDetails';
import { SidebarItemsList } from '../SidebarItemList';
import { SidebarFilters } from '../SidebarFilters';
import { SidebarItemsListSkeleton } from '../SidebarItemsListSkeleton';
import { SidebarMessage } from '../SidebarMessage';

import styles from './Sidebar.module.css';
import { Button } from '../../../../shared/components/Button';

type SidebarProps = {
    items: SidebarItemDetailsType[];
    isLoading?: boolean;
    error?: any;
};

export const Sidebar = ({ items, isLoading = false, error }: SidebarProps) => {
    const [activeItem, setActiveItem] = useState<SidebarItemDetailsType | null>(null);

    const showContent = !error && !isLoading && items && items.length > 0;
    const showNotFound = !error && !isLoading && items && items.length === 0;

    return (
        <aside>
            <SidebarFilters />
            {error && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-ErrorText']}
                    title="Произошла ошибка во время поиска объектов"
                    message="Попробуйте обновить страницу"
                    imageUrl="./images/sidebarError.png"
                />
            )}
            {!error && isLoading && <SidebarItemsListSkeleton />}
            {showNotFound && (
                <SidebarMessage
                    titleClassName={styles['Sidebar-NotFoundText']}
                    title="Мы не нашли подходящих спортивных объектов"
                    message="Но вы можете их предложить"
                    imageUrl="./images/sidebarError.png"
                    button={<Button text="Предложить объект" className={styles['Sidebar-NotFoundButton']} />}
                />
            )}
            {showContent && activeItem && <SidebarDetails item={activeItem} onBackClick={() => setActiveItem(null)} />}
            {showContent && !activeItem && <SidebarItemsList setActiveItem={setActiveItem} items={items} />}
        </aside>
    );
};
