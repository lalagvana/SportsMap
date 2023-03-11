import React from 'react';

import { SidebarItemDetails } from 'src/client/screens/MapObjects';

import { SidebarItemsList } from '../SidebarItemsList';

export default {
    title: 'Map/SidebarItemsList',
    component: SidebarItemsList,
};

type argsType = {
    items: SidebarItemDetails[];
};

export const playground = ({ items }: argsType) => <SidebarItemsList items={items} setActiveItem={() => {}} />;

playground.args = {
    items: [
        {
            name: 'Спортивный зал',
            type: 'Зал гимнастики',
            age: ['молодежь'],
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
        },
        {
            name: 'Спортивный зал',
            type: 'Зал гимнастики',
            age: ['молодежь'],
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
        },
    ],
};
