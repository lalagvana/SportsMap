import React from 'react';

import { Filters } from '../Filters';

export default {
    title: 'Catalog/Filters',
    component: Filters,
};


export const playground = () => (
    <Filters
        ageTypes={['молодежь', 'дети']}
        owningTypes={['государство', 'область', 'очень длинный чекбокс', 'очень длинный чекбокс 1', 'очень длинный чекбокс 2']}
        coverageTypes={['трава', 'бетон']}
        facilityTypes={['бассеин', 'корт']}
        payingTypes={['платно', 'бесплатно']}
    />
);

