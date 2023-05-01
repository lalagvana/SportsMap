import useSWR, { SWRConfiguration } from 'swr';
import useSWRImmutable from 'swr/immutable';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { fetch } from 'src/client/shared/utils/api/fetch';

import {
    SearchFacilities,
    GetFacility,
    GetFacilityType,
    GetFacilityOwningType,
    GetFacilityCoveringType,
    GetFacilityAge,
    GetFacilityPayingType,
} from '.';
import {
    DEFAULT_AGES,
    DEFAULT_COVERING_TYPES,
    DEFAULT_OWNING_TYPES,
    DEFAULT_PAYING_TYPES,
    DEFAULT_TYPES,
} from './constants';

export function useFacility(id?: number, config?: SWRConfiguration<GetFacility.Response>) {
    return useSWR<GetFacility.Response>(id ? apiRoutes.facilities(id) : null, fetch, config);
}

export function useFacilitySearch(body: SearchFacilities.Body, config?: SWRConfiguration<SearchFacilities.Response>) {
    return useSWR<SearchFacilities.Response>(
        apiRoutes.facilitySearch,
        () => fetch(apiRoutes.facilitySearch, { method: 'POST', data: body }),
        config
    );
}

export function useFacilityTypes(config?: SWRConfiguration<GetFacilityType.Response>) {
    return useSWRImmutable<GetFacilityType.Response>(apiRoutes.facilityType, fetch, {
        fallbackData: { data: DEFAULT_TYPES },
        ...config,
    });
}

export function useFacilityOwningTypes(config?: SWRConfiguration<GetFacilityOwningType.Response>) {
    return useSWRImmutable<GetFacilityOwningType.Response>(apiRoutes.facilityOwningType, fetch, {
        fallbackData: { data: DEFAULT_OWNING_TYPES },
        ...config,
    });
}

export function useFacilityCoveringTypes(config?: SWRConfiguration<GetFacilityCoveringType.Response>) {
    return useSWRImmutable<GetFacilityCoveringType.Response>(apiRoutes.facilityCoveringType, fetch, {
        fallbackData: { data: DEFAULT_COVERING_TYPES },
        ...config,
    });
}

export function useFacilityAges(config?: SWRConfiguration<GetFacilityAge.Response>) {
    return useSWRImmutable<GetFacilityAge.Response>(apiRoutes.facilityAge, fetch, {
        fallbackData: { data: DEFAULT_AGES },
        ...config,
    });
}

export function useFacilityPayingTypes(config?: SWRConfiguration<GetFacilityPayingType.Response>) {
    return useSWRImmutable<GetFacilityPayingType.Response>(apiRoutes.facilityPayingType, fetch, {
        fallbackData: { data: DEFAULT_PAYING_TYPES },
        ...config,
    });
}
