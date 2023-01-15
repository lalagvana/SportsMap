import { useCallback } from 'react';
import { subscribeEmail } from 'src/client/shared/utils/api/emails';

import { FooterFields } from '.';

export const useSubscribeHandler = () => {
    return useCallback(
        async (fields: FooterFields) => {
            try {
                await subscribeEmail(fields.email);
            } catch (error) {
                throw error;
            }
        },
        [subscribeEmail]
    );
};
