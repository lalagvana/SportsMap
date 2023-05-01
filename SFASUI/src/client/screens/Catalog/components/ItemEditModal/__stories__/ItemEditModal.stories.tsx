import React from 'react';

import { ItemEditModal, INITIAL_VALUES } from '..';

export default {
    title: 'Catalog/ItemEditModal',
    component: ItemEditModal,
};

export const playground = () => <ItemEditModal initialValues={INITIAL_VALUES} handleSubmit={() => Promise.resolve()} />;
