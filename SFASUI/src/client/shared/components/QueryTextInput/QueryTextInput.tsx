import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { omit } from 'lodash';

import { TextInput, TextInputProps } from 'src/client/shared/components/TextInput';

type QuerySelectProps = Omit<TextInputProps, 'value' | 'onChange'> & {
    excludeParams?: string[];
    onSuccess?: (() => void) | (() => Promise<void>);
    name: string;
};

export const QueryTextInput = ({ name, excludeParams = ['page'], onSuccess, className, ...rest }: QuerySelectProps) => {
    const { query, push } = useRouter();

    const onTextInputChange = useCallback(
        async (event) => {
            const newQuery = omit(query, [name, ...excludeParams]);

            if (!event.target.value) {
                await push({ query: newQuery });
            } else {
                await push({ query: { ...newQuery, [name]: event.target.value } });
            }

            if (onSuccess) {
                await onSuccess();
            }
        },
        [push, query, excludeParams, onSuccess, name]
    );

    return <TextInput className={className} onChange={onTextInputChange} value={String(query[name])} {...rest} />;
};
