const BACKEND_URL = 'api';

export const apiRoutes = {
    login: `${BACKEND_URL}/user/login`,
    resfreshToken: `${BACKEND_URL}/user/token/refresh`,
    user: `${BACKEND_URL}/user`,
    users(id: number) {
        return `${BACKEND_URL}/user/${id}`;
    },

    facility: `${BACKEND_URL}/facility`,
    facilitySearch: `${BACKEND_URL}/facility/search`,
    facilities(id: string) {
        return `${BACKEND_URL}/facility/${id}`;
    },

    facilityType: `${BACKEND_URL}/facility-type`,
    facilityCoveringType: `${BACKEND_URL}/facility-covering-type`,
    facilityPayingType: `${BACKEND_URL}/facility-paying-type`,
    facilityOwningType: `${BACKEND_URL}/facility-owning-type`,
    facilityAge: `${BACKEND_URL}/facility-age`,

    excelImport: `${BACKEND_URL}/excel/import`,
    excelValidate: `${BACKEND_URL}/excel/validate`,

    facilityPhoto(id: number) {
        return `${BACKEND_URL}/facility/${id}/photo`;
    },
    facilityPhotoDelete(id: number, photoId: number) {
        return `${BACKEND_URL}/facility/${id}/photo/${photoId}`;
    },
};
