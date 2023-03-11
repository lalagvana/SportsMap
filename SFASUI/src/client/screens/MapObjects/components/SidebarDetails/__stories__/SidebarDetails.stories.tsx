import React from 'react';

import { SidebarDetails } from '../SidebarDetails';
import { WorkingHoursType } from "../../../../../shared/components/WorkingHours";

export default {
    title: 'Map/SidebarDetails',
    component: SidebarDetails,
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

export const playground = (props: argsType) => (
    <SidebarDetails item={{ id: 1, link: 'https://fitness-house.ru', ...props }} onBackClick={() => {}} />
);

playground.args = {
    address: 'Выборгская набережная, д. 1, корпус 1000-7',
    age: ['Дети', 'Молодежь', 'Взрослые', 'Пенсионеры'],
    availability: true,
    name: 'Спортивный зал',
    payingType: ['Бесплатные'],
    type: 'Зал гимнастики',
    owner: 'Спбгу',
    workingHours: {
        monday: {
            open: false,
        },
        tuesday: {
            open: false,
        },
        wednesday: {
            open: false,
        },
        thursday: {
            open: false,
        },
        friday: {
            open: false,
        },
        saturday: {
            open: false,
        },
        sunday: {
            open: false,
        },
    },
};
