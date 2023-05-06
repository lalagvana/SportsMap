import { NextRouter } from 'next/router';

import { LIMIT, SEARCH_QUERY } from './MapObjects.constants';

export const getSearchQuery = (query: NextRouter['query']) => {
    const { page = 1, q = '', type, age, paying_type } = query;

    return {
        ...SEARCH_QUERY,
        offset: LIMIT * (Number(page) - 1),
        q: q ? String(q) : undefined,
        type: type ? [String(type)] : undefined,
        age: age ? [String(age)] : undefined,
        paying_type: paying_type ? [String(paying_type)] : undefined,
    };
};
