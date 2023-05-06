import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { omit } from 'lodash';

import { Search, SearchProps } from 'src/client/shared/components/Search';

type QuerySelectProps = Omit<SearchProps, 'value' | 'initialValue' | 'onSearch'> & {
    excludeParams?: string[];
    onSuccess?: (() => void) | (() => Promise<void>);
    name?: string;
};

export const QuerySearch = ({
    name = 'q',
    excludeParams = ['page'],
    onSuccess,
    className,
    ...rest
}: QuerySelectProps) => {
    const { query, push } = useRouter();

    const onSearchChange = useCallback(
        async (value) => {
            const newQuery = omit(query, [name, ...excludeParams]);

            if (!value) {
                await push({ query: newQuery }, { query: newQuery }, { shallow: true });
            } else {
                const query = { ...newQuery, [name]: value };
                await push({ query }, { query }, { shallow: true });
            }

            if (onSuccess) {
                await onSuccess();
            }
        },
        [push, query, excludeParams, onSuccess, name]
    );

    return (
        <Search className={className} initialValue={String(query[name] || '')} onSearch={onSearchChange} {...rest} />
    );
};
