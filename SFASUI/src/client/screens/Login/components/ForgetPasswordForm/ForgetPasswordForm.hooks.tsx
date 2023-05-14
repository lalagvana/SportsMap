import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { Notification } from 'src/client/shared/components/Notification';
import { prepareMessage } from 'src/client/shared/utils/notifications';
import { emailNewPassword } from 'src/client/shared/utils/api/emails';

import { ForgetPasswordFields } from './ForgetPasswordForm.types';

export const useHandleSubmit = () =>
    useCallback(async (fields: ForgetPasswordFields, formikHelpers: FormikHelpers<ForgetPasswordFields>) => {
        try {
            formikHelpers.setSubmitting(true);

            await emailNewPassword({ email: fields.email });

            toast(
                <Notification type="success" description="На вашу почту отправлено письмо с дальнейшими инструкциями" />
            );
            formikHelpers.setSubmitting(false);
        } catch (e) {
            formikHelpers.setSubmitting(false);

            toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
        }
    }, []);
