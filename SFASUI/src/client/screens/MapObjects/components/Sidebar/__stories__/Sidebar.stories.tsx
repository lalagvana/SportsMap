import React from 'react';

import { SidebarItemDetailsType } from 'src/client/screens/MapObjects/';

import { Sidebar } from '../Sidebar';

export default {
    title: 'Map/Sidebar',
    component: Sidebar,
    argTypes: {
        error: {
            control: {
                type: 'boolean'
            }
        }
    }
};

type argsType = {
    items: SidebarItemDetailsType[];
    isLoading?: boolean;
    error?: boolean;
    isNotFound?: boolean;
};

export const playground = ({items, isNotFound, ...rest}: argsType) => {

    return <Sidebar items={isNotFound ? [] : items}{...rest} />;
};

playground.args = {
    isLoading: false,
    error: false,
    isNotFound: false,
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
            },
            name: 'Спортивный зал1',
            payingType: ['Бесплатные'],
            type: 'Зал гимнастики',
            owner: 'Спбгу',
        },
        {
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
            age: ['Молодежь', 'Дети', 'Пенсионеры', 'Взрослые'],
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
