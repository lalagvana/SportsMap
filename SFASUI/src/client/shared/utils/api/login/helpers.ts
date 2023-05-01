import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { Login, RefreshToken, Register } from ".";

export const login = (body: Login.Body) => {
    return fetch<Login.Response>(apiRoutes.login, {
        method: 'POST',
        data: body,
    });
};

export const register = (body: Register.Body) => {
    return fetch<Register.Response>(apiRoutes.user, {
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
