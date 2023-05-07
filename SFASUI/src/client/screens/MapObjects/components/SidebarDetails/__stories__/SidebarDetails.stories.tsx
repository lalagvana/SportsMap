import React from 'react';

import { createFacilityObject } from 'src/client/factories';
import { WorkingHoursType } from 'src/client/shared/types/facilities';

import { SidebarDetails } from '../SidebarDetails';

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
    <SidebarDetails item={createFacilityObject({ ...props })} onBackClick={() => {}} />
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
