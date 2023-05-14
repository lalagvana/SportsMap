import { useMemo } from 'react';
import { object, ref, string } from 'yup';

export function useSchema() {
    return useMemo(
        () =>
            object({
                password: string().ensure().required('Это обязательное поле'),
                confirmPassword: string()
                    .ensure()
                    .oneOf([ref('password')], 'Пароли не совпадают')
                    .required('Это обязательное поле'),
            }),
        []
    );
}
