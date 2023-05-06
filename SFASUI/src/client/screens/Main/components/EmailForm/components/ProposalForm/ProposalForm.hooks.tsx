import { useCallback } from 'react';
import { FormikHelpers } from 'formik';
import { toast } from 'react-toastify';

import { Notification } from 'src/client/shared/components/Notification';

import { ProposalFormFields } from './ProposalForm.types';

export const useHandleSubmit = () =>
    useCallback((fields: ProposalFormFields, formikHelpers: FormikHelpers<ProposalFormFields>) => {
        toast(<Notification type="error" imageType="cross" description="Функционал пока не готов" />);
    }, []);
