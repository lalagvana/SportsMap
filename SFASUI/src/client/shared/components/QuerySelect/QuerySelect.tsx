import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { omit } from 'lodash';

import { Select, SelectProps } from 'src/client/shared/components/Select';

type QuerySelectProps = Omit<SelectProps, 'value' | 'onChange'> & {
    excludeParams?: string[];
    onSuccess?: (() => void) | (() => Promise<void>);
    name: string;
};

export const QuerySelect = ({ name, excludeParams = ['page'], onSuccess, ...rest }: QuerySelectProps) => {
    const { query, push } = useRouter();

    const onSelectChange = useCallback(
        async (value, parameterName) => {
            const newQuery = omit(query, [parameterName, ...excludeParams]);

            if (!value) {
                await push({ query: newQuery });
            } else {
                await push({ query: { ...newQuery, [parameterName]: value } });
            }

            if (onSuccess) {
                await onSuccess();
            }
        },
        [push, query, excludeParams, onSuccess]
    );

    return <Select value={query[name]} onChange={(value) => onSelectChange(value, name)} {...rest} />;
};
