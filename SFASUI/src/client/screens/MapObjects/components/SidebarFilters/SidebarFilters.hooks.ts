import { useCallback, useMemo } from 'react';
import { useRouter } from 'next/router';
import { omit } from 'lodash';
import { mutate } from 'swr';

import {
    useAgesSelectOptions,
    useFacilityTypeSelectOptions,
    usePayingTypeSelectOptions,
} from 'src/client/shared/utils/facilities/hooks';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

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

export const useOnChangeHandlers = () => {
    const { push, query } = useRouter();
    const queryWithoutPage = omit(query, 'page');

    const onSearchChange = useCallback(
        async (value) => {
            const newQuery = omit(queryWithoutPage, 'q');

            if (!value) {
                await push({ query: newQuery });
            } else {
                await push({ query: { ...newQuery, q: value } });
            }

            await mutate(apiRoutes.facilitySearch);
        },
        [push, queryWithoutPage]
    );

    const onSelectChange = useCallback(
        async (value, parameterName) => {
            const newQuery = omit(queryWithoutPage, parameterName);

            if (!value) {
                await push({ query: newQuery });
            } else {
                await push({ query: { ...newQuery, [parameterName]: value } });
            }

            await mutate(apiRoutes.facilitySearch);
        },
        [push, queryWithoutPage]
    );

    return { onSearchChange, onSelectChange };
};
