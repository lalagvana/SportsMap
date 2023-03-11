import React from 'react';

import { Select } from '..';

export default {
    title: 'Shared/Select',
    component: Select,
};

export const playground = () => (
    <Select
        placeholder="Тип покрытия"
        options={[
            { value: 'grass', label: 'Трава' },
            { value: 'concrete', label: 'Бетон' },
            { value: 'artificial grass', label: 'Искусственная трава' },
            { value: 'disabled', label: 'Недоступный тип покрытия', disabled: true },
        ]}
    />
);
