import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateUser, UpdateUser, DeleteYourself } from '.';

export const createUser = (body: CreateUser.Body) => {
    return fetch<CreateUser.Response>(
        apiRoutes.user,
        {
            method: 'POST',
            data: body,
        },
    );
};

export const updateUser = (
    id: number,
    body: UpdateUser.Body,
) => {
    return fetch<UpdateUser.Response>(
        apiRoutes.users(id),
        {
            method: 'PUT',
            data: body,
        },
    );
};

export const deleteYourself = () => {
    return fetch<DeleteYourself.Response>(
        apiRoutes.user,
        {
            method: 'DELETE',
        },
    );
};
