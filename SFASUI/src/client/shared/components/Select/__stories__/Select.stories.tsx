import React from 'react';

import { Tag, TagTypes } from '..';

export default {
    title: 'Shared/Tag',
    component: Tag,
    argTypes: {
        type: {
            options: TagTypes,
            control: { type: 'select' },
        },
    },
};

type argsType = {
    value: string;
    type: TagTypes;
};

export const playground = ({ value, type }: argsType) => <Tag value={value} type={type} />;

playground.args = {
    value: 'спорт',
    type: TagTypes.Default,
};
