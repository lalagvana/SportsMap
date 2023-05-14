import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

import { Notification } from 'src/client/shared/components/Notification';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { refreshPassword } from 'src/client/shared/utils/api/users';
import { pageRoutes } from 'src/client/shared/routes';

import { NewPasswordFields } from './NewPasswordForm.types';

export const useHandleSubmit = () => {
    const { query, push } = useRouter();

    return useCallback(
        async (fields: NewPasswordFields, formikHelpers: FormikHelpers<NewPasswordFields>) => {
            try {
                if (!query['secret']) {
                    toast(
                        <Notification
                            type="error"
                            imageType="cross"
                            description="Некорректная ссылка для обновления пароля"
                        />
                    );
                    return;
                }

                formikHelpers.setSubmitting(true);

                await refreshPassword(String(query['secret']), { new_password: fields.password });

                toast(<Notification type="success" description="Пароль успешно обновлен" />);
                formikHelpers.setSubmitting(false);

                await push(pageRoutes.login);
            } catch (e) {
                formikHelpers.setSubmitting(false);

                toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
            }
        },
        [query, push]
    );
};
