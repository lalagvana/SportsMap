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
            await push({ query: omit(query, 'page') }, undefined, { shallow: true });
        } else {
            await push({ query: { ...query, page: Number(page) - 1 } }, undefined, { shallow: true });
        }

        await mutate(`map${apiRoutes.facilitySearch}`);
    }, [push, page]);

    const onNextClick = useCallback(async () => {
        if (Number.isNaN(Number(page))) {
            return;
        }

        await push({ query: { ...query, page: Number(page) + 1 } }, undefined, { shallow: true });

        await mutate(`map${apiRoutes.facilitySearch}`);
    }, [push, page]);

    return { onPrevClick, onNextClick };
};
