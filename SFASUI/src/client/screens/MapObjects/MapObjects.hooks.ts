import { useRouter } from 'next/router';

import { LIMIT, SEARCH_QUERY } from './MapObjects.constants';

export const useSearchQuery = () => {
    const {
        query: { page = 1, q = '', type, age, paying_type },
    } = useRouter();

    return {
        ...SEARCH_QUERY,
        offset: LIMIT * (Number(page) - 1),
        q: q ? String(q) : undefined,
        type: type ? [String(type)] : undefined,
        age: age ? [String(age)] : undefined,
        paying_type: paying_type ? [String(paying_type)] : undefined,
    };
};
