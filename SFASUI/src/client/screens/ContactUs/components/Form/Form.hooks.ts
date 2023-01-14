import { useCallback } from 'react';
import { sendEmail } from 'src/client/shared/utils/api/emails';

import { FormFields, createEmailRequest } from '.';

export const useSendEmailHandler = () => {
    return useCallback(
        async (fields: FormFields) => {
            try {
                await sendEmail(createEmailRequest(fields));
            } catch (error) {
                throw error;
            }
        },
        [createEmailRequest]
    );
};
