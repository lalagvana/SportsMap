import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateUser, UpdateYourself, DeleteYourself } from '.';

export const createUser = (body: CreateUser.Body) => {
    return fetch<CreateUser.Response>(apiRoutes.user, {
        method: 'POST',
        data: body,
    });
};

export const updateUser = (body: UpdateYourself.Body) => {
    return fetch<UpdateYourself.Response>(apiRoutes.user, {
        method: 'PUT',
        data: body,
    });
};

export const deleteYourself = () => {
    return fetch<DeleteYourself.Response>(apiRoutes.user, {
        method: 'DELETE',
    });
};
