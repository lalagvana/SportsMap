import React from 'react';

import { SidebarItemDetails } from 'src/client/screens/MapObjects/';

import { Sidebar } from '../Sidebar';

export default {
    title: 'Map/Sidebar',
    component: Sidebar,
};

type argsType = {
    items: SidebarItemDetails[];
    isLoading?: boolean;
    error?: boolean;
};

export const playground = (props: argsType) => <Sidebar {...props} />;

playground.args = {
    isLoading: false,
    error: false,
    items: [
        {
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
            age: ['Молодежь'],
            availability: true,
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
            },            name: 'Спортивный зал1',
            payingType: ['Бесплатные'],
            type: 'Зал гимнастики',
            owner: 'Спбгу',
        },
        {
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
            age: ['Молодежь'],
            availability: true,
            name: 'Спортивный зал2',
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
        },
    ],
};
