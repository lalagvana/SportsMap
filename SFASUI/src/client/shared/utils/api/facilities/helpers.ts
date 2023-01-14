import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateFacility, DeleteFacility, UpdateFacility } from '.';

export const createFacility = (body: CreateFacility.Body, token: string) => {
    return fetch<CreateFacility.Response>(
        apiRoutes.facility,
        {
            method: 'POST',
            data: body,
        },
        token
    );
};

export const updateFacility = (body: UpdateFacility.Body, token: string) => {
    return fetch<UpdateFacility.Response>(
        apiRoutes.facility,
        {
            method: 'PUT',
            data: body,
        },
        token
    );
};

export const deleteFacility = (id: number, token: string) => {
    return fetch<DeleteFacility.Response>(
        apiRoutes.facilities(id),
        {
            method: 'DELETE',
        },
        token
    );
};
