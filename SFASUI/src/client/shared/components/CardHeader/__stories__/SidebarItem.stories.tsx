import React from 'react';

import { CardHeader } from '../CardHeader';

export default {
    title: 'Shared/CardHeader',
    component: CardHeader,
};

type argsType = {
    name: string;
    type: string;
};

export const playground = (props: argsType) => (
    <CardHeader {...props} />
);

playground.args = {
    name: 'спорт',
    type: 'Спорт-объект',
};
