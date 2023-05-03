import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { ProposalFormFields } from './ProposalForm.types';

export const useHandleSubmit = () =>
    useCallback((fields: ProposalFormFields, formikHelpers: FormikHelpers<ProposalFormFields>) => {
        toast.error('Функционал пока не готов');
    }, []);
