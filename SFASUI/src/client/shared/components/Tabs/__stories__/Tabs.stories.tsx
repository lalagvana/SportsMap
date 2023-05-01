import React from 'react';

import { Tabs } from '..';

export default {
    title: 'Shared/Select',
    component: Tabs,
};

export const playground = () => (
    <Tabs
        placeholder="Тип покрытия"
        options={[
            { value: 'grass', label: 'Трава' },
            { value: 'concrete', label: 'Бетон' },
            { value: 'artificial grass', label: 'Искусственная трава' },
            { value: 'disabled', label: 'Недоступный тип покрытия', disabled: true },
        ]}
    />
);
