import useSWR, { SWRConfiguration } from 'swr';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { fetch } from 'src/client/shared/utils/api/fetch';

import { GetFacility, SearchFacilities } from '.';

export function useFacility(
    id: number,
    config?: SWRConfiguration<GetFacility.Response>
) {
    return useSWR<GetFacility.Response>(
        apiRoutes.facilityInfo(id),
        fetch,
        config
    );
}

export function useFacilitySearch(
    body: SearchFacilities.Body,
    config?: SWRConfiguration<SearchFacilities.Response>
) {
    return useSWR<SearchFacilities.Response>(
        apiRoutes.facilitySearch,
        () => fetch(apiRoutes.facilitySearch, { method: 'POST', data: body }),
        config
    );
}
