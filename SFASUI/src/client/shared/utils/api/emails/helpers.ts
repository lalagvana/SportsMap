import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { EmailSubscribe, EmailSend } from '.';

export const subscribeEmail = (email: string) => {
    return fetch<EmailSubscribe.Response>(apiRoutes.emailSubscribe(email), {
        method: 'POST',
    });
};

export const sendEmail = (body: EmailSend.Body) => {
    return fetch<EmailSend.Response>(apiRoutes.emailSend, {
        method: 'POST',
        data: body,
    });
};
