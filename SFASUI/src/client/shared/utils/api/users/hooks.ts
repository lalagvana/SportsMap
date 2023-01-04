import useSWR, { SWRConfiguration } from 'swr';
import { useContext } from 'react';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';
import { fetch } from 'src/client/shared/utils/api/fetch';
import { ClientConfigContext } from 'src/client/shared/contexts/client-config';

import { GetUsers } from '.';

export function useUsers(config?: SWRConfiguration<GetUsers.Response>) {
    const {
        clientConfig: { token },
    } = useContext(ClientConfigContext);

    return useSWR<GetUsers.Response>(
        apiRoutes.admin,
        () => fetch(apiRoutes.admin, {}, token),
        config
    );
}
