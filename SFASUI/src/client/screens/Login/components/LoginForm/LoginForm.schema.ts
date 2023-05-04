import { useMemo } from 'react';
import { object, string } from 'yup';

export function useSchema() {
    return useMemo(
        () =>
            object({
                email: string().ensure().email('Введите валидную электронную почту').required('Это обязательное поле'),
                password: string().ensure().required('Это обязательное поле'),
            }),
        []
    );
}
