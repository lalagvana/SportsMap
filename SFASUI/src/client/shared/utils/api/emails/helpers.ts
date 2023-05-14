import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { EmailSubscribe, EmailSuggestions, EmailOfferObject, EmailNewPassword } from '.';

export const emailNewObject = (body: EmailOfferObject.Body) => {
    return fetch(apiRoutes.emailNewObject, {
        method: 'POST',
        data: body,
    });
};

export const emailProposal = (body: EmailSuggestions.Body) => {
    return fetch(apiRoutes.emailProposal, {
        method: 'POST',
        data: body,
    });
};

export const emailSubscribe = (body: EmailSubscribe.Body) => {
    return fetch(apiRoutes.emailSubscribe, {
        method: 'POST',
        data: body,
    });
};

export const emailNewPassword = (body: EmailNewPassword.Body) => {
    return fetch(apiRoutes.newPassword, {
        method: 'POST',
        data: body,
    });
};
