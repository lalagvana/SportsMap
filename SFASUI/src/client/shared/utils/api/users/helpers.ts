import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateUser, UpdateUser, DeleteYourself } from '.';

export const createUser = (body: CreateUser.Body, token: string) => {
    return fetch<CreateUser.Response>(
        apiRoutes.user,
        {
            method: 'POST',
            data: body,
        },
        token
    );
};

export const updateUser = (
    id: number,
    body: UpdateUser.Body,
    token: string
) => {
    return fetch<UpdateUser.Response>(
        apiRoutes.users(id),
        {
            method: 'PUT',
            data: body,
        },
        token
    );
};

export const deleteYourself = (token: string) => {
    return fetch<DeleteYourself.Response>(
        apiRoutes.user,
        {
            method: 'DELETE',
        },
        token
    );
};
