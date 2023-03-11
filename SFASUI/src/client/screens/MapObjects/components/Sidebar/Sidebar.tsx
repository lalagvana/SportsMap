import { useState } from 'react';

import { SidebarItemDetails } from 'src/client/screens/MapObjects';
import { SidebarDetails } from 'src/client/screens/MapObjects/components/SidebarDetails';
import { SidebarItemsList } from 'src/client/screens/MapObjects/components/SidebarItemList';
import { SidebarFilters } from "../SidebarFilters";

type SidebarProps = {
    items: SidebarItemDetails[];
    isLoading?: boolean;
    error?: any;
};

export const Sidebar = ({ items, isLoading = false, error }: SidebarProps) => {
    const [activeItem, setActiveItem] = useState<SidebarItemDetails | null>(null);

    if (isLoading) {
        return <span>Загрузка</span>;
    }

    if (error || !items) {
        return <span>Произошла ошибка</span>;
    }

    if (!items.length) {
        return <span>Мы не нашли подходящих спортивных объектов</span>;
    }

    return (
        <aside>
            <SidebarFilters />
            {activeItem ? (
                <SidebarDetails item={activeItem} onBackClick={() => setActiveItem(null)}/>
            ) : (
                <SidebarItemsList setActiveItem={setActiveItem} items={items} />
            )}
        </aside>
    );
};
