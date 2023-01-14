import useSWR, { SWRConfiguration } from 'swr';
import { useContext } from 'react';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { fetch } from 'src/client/shared/utils/api/fetch';
import { ClientConfigContext } from 'src/client/shared/contexts/client-config';

import { GetFacility, SearchFacilities } from '.';

export function useFacility(
    id: number,
    config?: SWRConfiguration<GetFacility.Response>
) {
    const {
        clientConfig: { token },
    } = useContext(ClientConfigContext);

    return useSWR<GetFacility.Response>(
        apiRoutes.facilityInfo(id),
        () => fetch(apiRoutes.facilityInfo(id), {}, token),
        config
    );
}

export function useFacilitySearch(
    body: SearchFacilities.Body,
    config?: SWRConfiguration<SearchFacilities.Response>
) {
    const {
        clientConfig: { token },
    } = useContext(ClientConfigContext);

    return useSWR<SearchFacilities.Response>(
        apiRoutes.facilitySearch,
        () =>
            fetch(
                apiRoutes.facilitySearch,
                { method: 'POST', data: body },
                token
            ),
        config
    );
}
