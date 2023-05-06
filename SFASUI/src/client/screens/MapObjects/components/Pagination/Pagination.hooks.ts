import { useCallback } from 'react';
import { mutate } from 'swr';
import { useRouter } from 'next/router';
import { omit } from 'lodash';

import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

export const usePaginationHooks = () => {
    const { push, query } = useRouter();
    const { page = 1 } = query;

    const onPrevClick = useCallback(async () => {
        if (Number.isNaN(Number(page))) {
            return;
        }

        if (Number(page) === 2) {
            const newQuery = omit(query, 'page');
            await push({ query: newQuery }, { query: newQuery }, { shallow: true });
        } else {
            const newQuery = { ...query, page: Number(page) - 1 };
            await push({ query: newQuery }, { query: newQuery }, { shallow: true });
        }

        await mutate(apiRoutes.facilitySearch);
    }, [push, page]);

    const onNextClick = useCallback(async () => {
        if (Number.isNaN(Number(page))) {
            return;
        }

        const newQuery = { ...query, page: Number(page) + 1 };
        await push({ query: newQuery }, { query: newQuery }, { shallow: true });

        await mutate(apiRoutes.facilitySearch);
    }, [push, page]);

    return { onPrevClick, onNextClick };
};
