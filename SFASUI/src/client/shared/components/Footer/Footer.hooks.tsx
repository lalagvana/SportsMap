import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

import { emailSubscribe } from 'src/client/shared/utils/api/emails';
import { Notification } from 'src/client/shared/components/Notification';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { FooterFields } from '.';

export const useSubscribeHandler = () => {
    return useCallback(async (fields: FooterFields, formikHelpers: FormikHelpers<FooterFields>) => {
        try {
            formikHelpers.setSubmitting(true);

            await emailSubscribe({ email: fields.email });

            formikHelpers.setSubmitting(false);

            toast(<Notification type="success" description="Вы подписались на обновления" />);

            formikHelpers.resetForm();
        } catch (e) {
            formikHelpers.setSubmitting(false);
            toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
        }
    }, []);
};
