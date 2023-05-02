import { useMemo } from 'react';

import {
    useAgesSelectOptions,
    useFacilityTypeSelectOptions,
    usePayingTypeSelectOptions,
} from 'src/client/shared/utils/facilities/hooks';

export const useFilters = () => {
    const facilityTypesOptions = useFacilityTypeSelectOptions();
    const payingTypeOptions = usePayingTypeSelectOptions();
    const agesOptions = useAgesSelectOptions();

    return useMemo(
        () => [
            {
                name: 'type',
                placeholder: 'Тип объекта',
                options: facilityTypesOptions,
            },
            {
                name: 'paying_type',
                placeholder: 'Платные услуги',
                options: payingTypeOptions,
            },
            {
                name: 'age',
                placeholder: 'Аудитория',
                options: agesOptions,
            },
        ],
        [facilityTypesOptions, payingTypeOptions, agesOptions]
    );
};
