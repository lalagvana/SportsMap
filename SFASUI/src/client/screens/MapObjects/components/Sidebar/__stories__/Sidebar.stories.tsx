import React from 'react';

import { createFacilityObject } from 'src/client/factories';
import { FacilityType } from 'src/client/shared/types/facilities';

import { Sidebar } from '../Sidebar';

export default {
    title: 'Map/Sidebar',
    component: Sidebar,
    argTypes: {
        error: {
            control: {
                type: 'boolean',
            },
        },
    },
};

type argsType = {
    items: FacilityType[];
    isLoading?: boolean;
    error?: boolean;
    isNotFound?: boolean;
    count: number;
};

export const playground = ({ items, isNotFound, ...rest }: argsType) => {
    return <Sidebar items={isNotFound ? [] : items} {...rest} />;
};

playground.args = {
    isLoading: false,
    error: false,
    count: 10,
    isNotFound: false,
    items: [createFacilityObject({ id: '1' }), createFacilityObject({ id: '2' })],
};
