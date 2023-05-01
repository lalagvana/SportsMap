import { useCallback } from 'react';
import { mutate } from 'swr';
import { useRouter } from 'next/router';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

export const usePaginationHooks = () => {
    const { push, query } = useRouter();
    const { page = 1 } = query;

    const onPrevClick = useCallback(async () => {
        await push({ query: { ...query, page: Number(page) - 1 } });
        await mutate(apiRoutes.facilitySearch);
    }, [push, page]);

    const onNextClick = useCallback(async () => {
        await push({ query: { ...query, page: Number(page) + 1 } });
        await mutate(apiRoutes.facilitySearch);
    }, [push, page]);

    return { onPrevClick, onNextClick };
};
