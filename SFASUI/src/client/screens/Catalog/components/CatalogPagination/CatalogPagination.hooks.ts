import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { mutate } from 'swr';
import { omit } from 'lodash';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

export const useOnPageChange = () => {
    const { push, query } = useRouter();

    return useCallback(
        async (page: number) => {
            if (page === 1) {
                await push({ query: omit(query, 'page') });
            } else {
                await push({ query: { ...query, page } });
            }
            await mutate(apiRoutes.facilitySearch);
        },
        [query, push]
    );
};
