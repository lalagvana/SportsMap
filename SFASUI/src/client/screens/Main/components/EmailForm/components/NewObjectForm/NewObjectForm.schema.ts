import { useMemo } from 'react';
import { object, string } from 'yup';

export function useSchema() {
    return useMemo(
        () =>
            object({
                address: string().ensure().required('Это обязательное поле'),
                owner: string().ensure().required('Это обязательное поле'),
            }),
        []
    );
}
