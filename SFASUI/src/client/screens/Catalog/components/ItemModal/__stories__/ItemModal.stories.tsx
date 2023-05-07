import React from 'react';

import { createFacilityObject } from 'src/client/factories';

import { ItemModal } from '../ItemModal';

export default {
    title: 'Catalog/ItemModal',
    component: ItemModal,
};

export const playground = () => <ItemModal className="light_theme" item={createFacilityObject()} hide={() => {}} />;
