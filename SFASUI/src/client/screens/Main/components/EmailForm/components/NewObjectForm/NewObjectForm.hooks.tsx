import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { Notification } from "src/client/shared/components/Notification";

import { NewObjectFormFields } from "./NewObjectForm.types";

export const useHandleSubmit = () =>
    useCallback((fields: NewObjectFormFields, formikHelpers: FormikHelpers<NewObjectFormFields>) => {
      toast(<Notification type="error" imageType='cross' description='Функционал пока не готов' />);
    }, []);
