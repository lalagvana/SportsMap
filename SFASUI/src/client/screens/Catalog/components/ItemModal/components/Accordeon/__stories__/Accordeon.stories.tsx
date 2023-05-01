import React from 'react';

import { createFacilityObject } from "src/client/factories";

import { Accordeon } from '../Accordeon';

export default {
    title: 'Catalog/Accordeon',
    component: Accordeon,
};

export const playground = () => (
    <Accordeon
        item={createFacilityObject()}
    />
);
