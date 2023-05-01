import React from 'react';

import { ItemModal } from '../ItemModal';

export default {
    title: 'Catalog/ItemModal',
    component: ItemModal,
};

export const playground = () => (
    <ItemModal
        item={{
            address: 'Выборгская набережная, д. 1, корпус 1000-7',
            age: ['Дети', 'Молодежь', 'Взрослые', 'Пенсионеры'],
            availability: true,
            name: 'Спортивный зал',
            paying_type: ['Бесплатные'],
            type: 'Зал гимнастики',
            owner: 'Спбгу',
            area: 100,
            width: 100,
            length: 100,
            height: 100,
            depth: 100,
            coveringType: 'трава',
            annual_capacity: 10,
            actual_workload: 10,
            owningType: 'РФ',
            eps: 1,
            notes: 'hi',
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
        }}
    />
);
