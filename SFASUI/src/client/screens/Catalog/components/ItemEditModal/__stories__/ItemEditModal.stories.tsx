import React from 'react';

import { ItemEditModal, INITIAL_VALUES } from '..';

export default {
    title: 'Catalog/ItemEditModal',
    component: ItemEditModal,
};

export const playground = ({ isNew }: { isNew: boolean }) => (
    <ItemEditModal
        className="light_theme"
        initialValues={INITIAL_VALUES}
        handleSubmit={() => Promise.resolve()}
        hide={() => {}}
        isNew={isNew}
    />
);

playground.args = {
    isNew: true,
};
