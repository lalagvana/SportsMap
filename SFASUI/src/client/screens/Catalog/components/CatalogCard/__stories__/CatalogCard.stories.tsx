import React from 'react';

import { CatalogCard } from '../CatalogCard';

export default {
    title: 'Catalog/CatalogCard',
    component: CatalogCard,
};

type argsType = {
    address: string;
    age: string[];
    name: string;
    type: string;
    owner: string;
    disabled?: boolean;
};

export const playground = ({ disabled, ...props }: argsType) => <CatalogCard item={props} disabled={disabled} />;

playground.args = {
    address: 'Выборгская набережная, д. 1, корпус 1000-7',
    age: ['Дети', 'Молодежь', 'Взрослые', 'Пенсионеры'],
    name: 'Спортивный зал',
    type: 'Зал гимнастики',
    owner: 'Спбгу',
    disabled: false,
};
