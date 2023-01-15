import { fetch } from 'src/client/shared/utils/api/fetch';
import { apiRoutes } from 'src/client/shared/utils/api/apiRoutes';

import { CreateFacility, DeleteFacility, UpdateFacility } from '.';

export const createFacility = (body: CreateFacility.Body) => {
    return fetch<CreateFacility.Response>(
        apiRoutes.facility,
        {
            method: 'POST',
            data: body,
        },
    );
};

export const updateFacility = (body: UpdateFacility.Body) => {
    return fetch<UpdateFacility.Response>(
        apiRoutes.facility,
        {
            method: 'PUT',
            data: body,
        },
    );
};

export const deleteFacility = (id: number) => {
    return fetch<DeleteFacility.Response>(
        apiRoutes.facilities(id),
        {
            method: 'DELETE',
        },
    );
};
