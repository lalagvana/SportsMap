import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { NewObjectFormFields } from "./NewObjectForm.types";

export const useHandleSubmit = () =>
    useCallback((fields: NewObjectFormFields, formikHelpers: FormikHelpers<NewObjectFormFields>) => {
        toast.error('Функционал пока не готов');
    }, []);
