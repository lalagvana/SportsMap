import { fetch } from '../fetch';
import { apiRoutes } from '../apiRoutes';

import { AddPhoto } from './types';

export const addPhoto = (id: string, body: AddPhoto.Body) => {
    return fetch<AddPhoto.Response>(apiRoutes.facilityPhoto(id), {
        method: 'POST',
        data: body,
        headers: {
            'Content-Type': 'multipart/form-data;',
        },
    });
};

export const deletePhoto = (facilityId: string, photoId: string) => {
    return fetch(apiRoutes.facilityPhotoDelete(facilityId, photoId), {
        method: 'DELETE',
    });
};
