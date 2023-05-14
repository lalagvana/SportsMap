import { useCallback } from 'react';
import { toast } from 'react-toastify';
import { FormikHelpers } from 'formik';

import { Notification } from 'src/client/shared/components/Notification';
import { emailProposal } from 'src/client/shared/utils/api/emails';
import { prepareMessage } from 'src/client/shared/utils/notifications';

import { ProposalFormFields } from './ProposalForm.types';
import { createProposal } from './ProposalForm.helpers';

export const useHandleSubmit = () =>
    useCallback(async (fields: ProposalFormFields, formikHelpers: FormikHelpers<ProposalFormFields>) => {
        try {
            formikHelpers.setSubmitting(true);

            await emailProposal(createProposal(fields));

            formikHelpers.setSubmitting(false);

            toast(<Notification type="success" description="Мы обязательно учтем ваши пожелания" />);
        } catch (e) {
            formikHelpers.setSubmitting(false);
            toast(<Notification type="error" imageType="cross" description={prepareMessage(e)} />);
        }
    }, []);
