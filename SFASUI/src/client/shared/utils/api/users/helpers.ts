import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateUser, UpdateUser, DeleteUser } from '.';

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

export const deleteUser = (id: number, token: string) => {
    return fetch<DeleteUser.Response>(
        apiRoutes.users(id),
        {
            method: 'DELETE',
        },
        token
    );
};
