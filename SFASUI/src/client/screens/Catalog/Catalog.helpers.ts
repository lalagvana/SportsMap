import { NextRouter } from 'next/router';
import { getCookie } from "cookies-next";

import { getArrayQuery } from 'src/client/shared/utils/query';

import { SEARCH_QUERY, LIMIT } from './Catalog.constants';
import { SIZE_INPUTS_NAME, OTHER_INPUTS_NAME } from './components/Filters';

export const getFiltersQuery = (query: NextRouter['query']) => {
    const queryInput = Object.keys(query).filter((key) => [...SIZE_INPUTS_NAME, ...OTHER_INPUTS_NAME].includes(key));

    if (queryInput.length === 0) {
        return undefined;
    }

    const queryInputNames = queryInput.map((item) => item.split('-')[0]);

    return queryInputNames.map((item) => ({
        field: item,
        lt: Number(query[`${item}-to`]) || undefined,
        gt: Number(query[`${item}-from`]),
    }));
};

export const getSearchQuery = (query: NextRouter['query']) => {
    const { page = 1, q = '', type, age, paying_type, order_by, covering_type, owning_type } = query;

    const filters = getFiltersQuery(query);

    const isLogged = getCookie('sportsmap_is_admin');

    return {
        ...SEARCH_QUERY,
        offset: LIMIT * (Number(page) - 1),
        q: q ? String(q) : undefined,
        type: type ? getArrayQuery(type) : undefined,
        covering_type: covering_type ? getArrayQuery(covering_type) : undefined,
        age: age ? getArrayQuery(age) : undefined,
        order_by: order_by ? String(order_by) : undefined,
        paying_type: paying_type ? getArrayQuery(paying_type) : undefined,
        owning_type: owning_type ? getArrayQuery(owning_type) : undefined,
        filters,
        hidden: isLogged ? undefined : false,
    };
};
