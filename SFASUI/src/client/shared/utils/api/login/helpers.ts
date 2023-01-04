import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import {
    Confirm,
    Login,
    PasswordReset,
    PasswordResetLink,
    RefreshToken,
} from '.';

export const login = (body: Login.Body) => {
    return fetch<Login.Response>(apiRoutes.login, {
        method: 'POST',
        data: body,
    });
};

export const refreshToken = (body: RefreshToken.Body) => {
    return fetch<RefreshToken.Response>(apiRoutes.resfreshToken, {
        method: 'POST',
        data: body,
    });
};

export const resetPassword = (body: PasswordReset.Body) => {
    return fetch<PasswordReset.Response>(apiRoutes.passwordReset, {
        method: 'POST',
        data: body,
    });
};

export const sendPasswordResetLink = (body: PasswordResetLink.Body) => {
    return fetch<PasswordResetLink.Response>(apiRoutes.passwordResetLink, {
        method: 'POST',
        data: body,
    });
};

export const confirm = (body: Confirm.Body) => {
    return fetch<Confirm.Response>(apiRoutes.passwordResetLink, {
        method: 'POST',
        data: body,
    });
};
