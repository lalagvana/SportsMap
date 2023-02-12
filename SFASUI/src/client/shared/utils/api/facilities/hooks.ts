import useSWR, { SWRConfiguration } from 'swr';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { fetch } from 'src/client/shared/utils/api/fetch';

import { GetFacilities, SearchFacilities } from '.';

export function useFacilities(config?: SWRConfiguration<GetFacilities.Response>) {
    return useSWR<GetFacilities.Response>(apiRoutes.facility, fetch, config);
}

export function useFacilitySearch(body: SearchFacilities.Body, config?: SWRConfiguration<SearchFacilities.Response>) {
    return useSWR<SearchFacilities.Response>(
        apiRoutes.facilitySearch,
        () => fetch(apiRoutes.facilitySearch, { method: 'POST', data: body }),
        config
    );
}
