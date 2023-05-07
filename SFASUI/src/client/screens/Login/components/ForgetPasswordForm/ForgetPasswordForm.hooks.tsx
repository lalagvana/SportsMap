import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { Notification } from 'src/client/shared/components/Notification';

import { ForgetPasswordFields } from "./ForgetPasswordForm.types";

export const useHandleSubmit = () =>
    useCallback((fields: ForgetPasswordFields, formikHelpers: FormikHelpers<ForgetPasswordFields>) => {
        toast(<Notification type="error" imageType="cross" description="Функционал пока не готов" />);
    }, []);
