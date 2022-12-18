import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { Login } from '.';

export const login = (body: Login.Body) => {
    return fetch<Login.Response>(apiRoutes.login, {
        method: 'POST',
        data: body,
    });
};
