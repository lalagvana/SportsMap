import React from 'react';

import { SidebarItem } from '../SidebarItem';
import { WorkingHoursType } from "../../../../../shared/components/WorkingHours";

export default {
    title: 'Map/SidebarItem',
    component: SidebarItem,
};

type argsType = {
    address: string;
    age: string[];
    availability?: boolean;
    workingHours: WorkingHoursType;
    name: string;
    payingType: string[];
    type: string;
    owner: string;
};

export const playground = (props: argsType) => <SidebarItem item={{ id: 1, ...props }} onClick={() => {}} />;

playground.args = {
    address: 'Выборгская набережная, д. 1, корпус 1000-7',
    age: ['Молодежь'],
    availability: true,
    name: 'Спортивный зал',
    payingType: ['Бесплатные'],
    type: 'Зал гимнастики',
    owner: 'Спбгу',
};
