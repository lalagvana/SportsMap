import React from 'react';

import { WorkingHours, WorkingHoursType } from '..';

export default {
    title: 'Shared/WorkingHours',
    component: WorkingHours,
};

type argsType = {
    hours: WorkingHoursType;
};

export const playground = (props: argsType) => <WorkingHours {...props} />;

playground.args = {
    hours: {
        monday: {
            open: false,
        },
        tuesday: {
            open: false,
        },
        wednesday: {
            open: false,
        },
        thursday: {
            open: false,
        },
        friday: {
            open: false,
        },
        saturday: {
            open: false,
        },
        sunday: {
            open: false,
        },
    },
};
